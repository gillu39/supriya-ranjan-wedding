import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  containsSpam,
  getDemoStore,
  getServerSupabase,
  isSupabaseConfigured,
  sanitizeText,
} from "@/lib/supabase";
import type { BlessingEntry } from "@/lib/wedding-data";

export async function GET() {
  const supabase = getServerSupabase();
  if (supabase) {
    const { data, error } = await supabase
      .from("blessings")
      .select("id, guest_name, message, created_at, approved")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(50);

    if (!error && data) {
      const blessings: BlessingEntry[] = data.map((row) => ({
        id: String(row.id),
        guestName: String(row.guest_name),
        message: String(row.message),
        createdAt: String(row.created_at),
        approved: Boolean(row.approved),
      }));

      return NextResponse.json({
        mode: "supabase",
        blessings,
      });
    }
  }

  const store = getDemoStore();
  return NextResponse.json({
    mode: isSupabaseConfigured() ? "supabase" : "demo",
    blessings: store.blessings.filter((b) => b.approved),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, unknown>;

    // Honeypot anti-spam field
    if (typeof body.website === "string" && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true, mode: "demo", moderated: true });
    }

    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    if (!checkRateLimit(`blessing:${clientIp}`, 12000)) {
      return NextResponse.json(
        { error: "RATE_LIMIT" },
        { status: 429 }
      );
    }

    const guestName = sanitizeText(body.guestName, 80);
    const message = sanitizeText(body.message, 400);

    if (guestName.length < 2) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (message.length < 6) {
      return NextResponse.json(
        { error: "Blessing message must be at least 6 characters." },
        { status: 400 }
      );
    }

    if (containsSpam(guestName) || containsSpam(message)) {
      return NextResponse.json(
        { error: "External links or spam keywords are not allowed." },
        { status: 400 }
      );
    }

    // Moderate automatically unless flagged for manual review
    const approved = true;

    const entry: BlessingEntry = {
      id: `wish-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      guestName,
      message,
      createdAt: new Date().toISOString(),
      approved,
    };

    const supabase = getServerSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from("blessings")
        .insert({
          guest_name: entry.guestName,
          message: entry.message,
          approved,
        })
        .select("id, guest_name, message, created_at, approved")
        .single();

      if (error) {
        console.error("Supabase blessings insert failed:", error.message);
        return NextResponse.json(
          { error: "Could not save blessing to database." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        ok: true,
        mode: "supabase",
        blessing: {
          id: String(data.id),
          guestName: String(data.guest_name),
          message: String(data.message),
          createdAt: String(data.created_at),
          approved: Boolean(data.approved),
        },
      });
    }

    const store = getDemoStore();
    store.blessings.unshift(entry);

    return NextResponse.json({
      ok: true,
      mode: "demo",
      blessing: entry,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
