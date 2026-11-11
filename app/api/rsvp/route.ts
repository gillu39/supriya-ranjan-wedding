import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  containsSpam,
  getDemoStore,
  getServerSupabase,
  isSupabaseConfigured,
  sanitizeText,
  type RsvpSubmission,
} from "@/lib/supabase";

const ALLOWED_EVENTS = new Set(["haldi-mehndi", "wedding", "vidai"]);

export async function GET() {
  return NextResponse.json({
    mode: isSupabaseConfigured() ? "supabase" : "demo",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, unknown>;

    // Honeypot anti-bot field
    if (typeof body.website === "string" && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true, mode: "demo" });
    }

    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    if (!checkRateLimit(`rsvp:${clientIp}`, 5000)) {
      return NextResponse.json(
        { error: "Please wait a few seconds before submitting again." },
        { status: 429 }
      );
    }

    const guestName = sanitizeText(body.guestName, 100);
    const mobileRaw = sanitizeText(body.mobile, 24);
    const mobileDigits = mobileRaw.replace(/[^\d+]/g, "");
    const guestsCount = Number(body.guestsCount);
    const attending = body.attending === "decline" ? "decline" : body.attending === "accept" ? "accept" : null;
    const message = sanitizeText(body.message, 500);

    const rawEvents = Array.isArray(body.events) ? body.events : [];
    const events = rawEvents
      .map((e) => (typeof e === "string" ? e : ""))
      .filter((e) => ALLOWED_EVENTS.has(e));

    if (guestName.length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid guest name." },
        { status: 400 }
      );
    }

    const digitsOnly = mobileDigits.replace(/\D/g, "");
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      return NextResponse.json(
        { error: "Please enter a valid 10-15 digit mobile number." },
        { status: 400 }
      );
    }

    if (!Number.isInteger(guestsCount) || guestsCount < 1 || guestsCount > 15) {
      return NextResponse.json(
        { error: "Guest count must be between 1 and 15." },
        { status: 400 }
      );
    }

    if (!attending) {
      return NextResponse.json(
        { error: "Please select Joyfully Accept or Regretfully Decline." },
        { status: 400 }
      );
    }

    if (attending === "accept" && events.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one ceremony to attend." },
        { status: 400 }
      );
    }

    if (containsSpam(guestName) || containsSpam(message)) {
      return NextResponse.json(
        { error: "Links or promotional text are not permitted." },
        { status: 400 }
      );
    }

    const submission: RsvpSubmission = {
      id: `rsvp-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      guestName,
      mobile: mobileRaw,
      guestsCount,
      events,
      attending,
      message,
      createdAt: new Date().toISOString(),
    };

    const supabase = getServerSupabase();
    if (supabase) {
      const { error } = await supabase.from("rsvps").insert({
        guest_name: submission.guestName,
        mobile: submission.mobile,
        guests_count: submission.guestsCount,
        events: submission.events,
        attending: submission.attending,
        message: submission.message,
      });

      if (error) {
        console.error("Supabase RSVP insert failed:", error.message);
        return NextResponse.json(
          { error: "Database error while saving RSVP. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        ok: true,
        mode: "supabase",
        submission,
      });
    }

    // Demo fallback mode when Supabase is not configured
    const store = getDemoStore();
    store.rsvps.unshift(submission);
    return NextResponse.json({
      ok: true,
      mode: "demo",
      submission,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
