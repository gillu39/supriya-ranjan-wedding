import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { BlessingEntry } from "./wedding-data";

export interface RsvpSubmission {
  id: string;
  guestName: string;
  mobile: string;
  guestsCount: number;
  events: string[];
  attending: "accept" | "decline";
  message: string;
  createdAt: string;
}

/**
 * Server-only Supabase client.
 * Never imports or exposes SUPABASE_SERVICE_ROLE_KEY in client components.
 */
export function getServerSupabase(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.SUPABASE_URL?.trim() &&
      process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  );
}

// Development fallback stores persisted across hot-reloads in Node process
interface DemoStore {
  rsvps: RsvpSubmission[];
  blessings: BlessingEntry[];
  lastSubmitByKey: Map<string, number>;
}

const globalForDemo = globalThis as unknown as { __weddingDemoStore?: DemoStore };

const INITIAL_BLESSINGS: BlessingEntry[] = [
  {
    id: "seed-1",
    guestName: "Mr. Ram Kumar & Mrs. Bishakha",
    message:
      "May your bond always shine with kindness, respect, and the warmth of both families' blessings.",
    createdAt: "2026-11-10T10:00:00+05:30",
    approved: true,
    isSeed: true,
  },
  {
    id: "seed-2",
    guestName: "Mrs. Indrawati Prasad & Mr. Ram Kumar Prasad",
    message:
      "Wishing Supriya and Dr. Ranjan a lifetime filled with harmony, joy, and cherished memories together.",
    createdAt: "2026-11-11T14:30:00+05:30",
    approved: true,
    isSeed: true,
  },
];

export function getDemoStore(): DemoStore {
  if (!globalForDemo.__weddingDemoStore) {
    globalForDemo.__weddingDemoStore = {
      rsvps: [],
      blessings: [...INITIAL_BLESSINGS],
      lastSubmitByKey: new Map(),
    };
  }
  return globalForDemo.__weddingDemoStore;
}

const SPAM_PATTERNS = [
  /https?:\/\//i,
  /www\./i,
  /<\s*script/i,
  /buy now|crypto|casino|viagra|loan offer/i,
];

export function sanitizeText(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLen);
}

export function containsSpam(text: string): boolean {
  return SPAM_PATTERNS.some((pattern) => pattern.test(text));
}

export function checkRateLimit(key: string, cooldownMs = 15000): boolean {
  const store = getDemoStore();
  const now = Date.now();
  const prev = store.lastSubmitByKey.get(key) ?? 0;
  if (now - prev < cooldownMs) {
    return false;
  }
  store.lastSubmitByKey.set(key, now);
  return true;
}
