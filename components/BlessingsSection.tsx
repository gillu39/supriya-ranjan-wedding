"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Feather, Heart, Send } from "lucide-react";
import type { BlessingEntry, Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { LotusDivider } from "./Illustrations";

interface BlessingsSectionProps {
  t: TranslationSchema["blessings"];
  lang: Language;
}

export function BlessingsSection({ t, lang }: BlessingsSectionProps) {
  const [blessings, setBlessings] = useState<BlessingEntry[]>([]);
  const [mode, setMode] = useState<"demo" | "supabase">("demo");
  const [guestName, setGuestName] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/blessings")
      .then((res) => res.json())
      .then((data) => {
        if (data?.mode === "supabase") setMode("supabase");
        if (Array.isArray(data?.blessings)) {
          setBlessings(data.blessings);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setStatusMsg(null);

    const nameTrimmed = guestName.trim();
    const msgTrimmed = message.trim();

    if (nameTrimmed.length < 2) {
      setErrorMsg(t.errors.nameRequired);
      return;
    }
    if (!msgTrimmed) {
      setErrorMsg(t.errors.messageRequired);
      return;
    }
    if (msgTrimmed.length < 6) {
      setErrorMsg(t.errors.messageTooShort);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/blessings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName: nameTrimmed,
          message: msgTrimmed,
          website: honeypot,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data?.error === "RATE_LIMIT") {
          setErrorMsg(t.errors.rateLimit);
        } else {
          setErrorMsg(data?.error || t.errors.generic);
        }
        return;
      }

      if (data?.blessing) {
        setBlessings((prev) => [data.blessing, ...prev]);
        setStatusMsg(t.successMessage);
      } else {
        setStatusMsg(t.pendingModeration);
      }
      setGuestName("");
      setMessage("");
    } catch {
      setErrorMsg(t.errors.generic);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="blessings"
      className={`scroll-mt-16 bg-[#F7EFDF] py-20 sm:py-24 px-4 sm:px-6 ${
        lang === "hi" ? "lang-hi" : ""
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#701E32] font-semibold">
            {t.label}
          </p>
          <h2 className="font-serif-display mt-2 text-3xl sm:text-5xl font-bold text-[#102F65]">
            {t.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-[#102F65]/75">
            {t.subtitle}
          </p>
          <LotusDivider className="mt-4" />
          <span className="mt-3 inline-block rounded-full border border-[#C6A15B]/50 bg-[#FFF8E8] px-3 py-1 text-[11px] font-medium text-[#701E32]">
            {mode === "supabase" ? t.modeLive : t.modeDemo}
          </span>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Handwritten Note Composer */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="gold-border-frame paper-texture rounded-3xl p-6 sm:p-8 lg:col-span-2 h-fit"
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2 text-[#701E32]">
              <Feather className="h-4 w-4 text-[#C6A15B]" />
              <span className="font-serif-display text-xl font-bold">
                {t.title}
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="blessing-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#701E32]"
                >
                  {t.nameLabel} *
                </label>
                <input
                  id="blessing-name"
                  type="text"
                  maxLength={80}
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  data-testid="blessing-name-input"
                  className="mt-1.5 w-full rounded-xl border border-[#C6A15B]/60 bg-white/80 px-4 py-2.5 text-sm text-[#102F65] placeholder:text-[#102F65]/40 focus:border-[#701E32] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="blessing-msg"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#701E32]"
                >
                  {t.messageLabel} *
                </label>
                <textarea
                  id="blessing-msg"
                  rows={4}
                  maxLength={400}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  data-testid="blessing-msg-input"
                  className="mt-1.5 w-full rounded-xl border border-[#C6A15B]/60 bg-white/80 px-4 py-2.5 text-sm text-[#102F65] placeholder:text-[#102F65]/40 focus:border-[#701E32] focus:outline-none"
                />
              </div>

              {errorMsg && (
                <p
                  role="alert"
                  data-testid="blessing-error"
                  className="rounded-xl border border-[#701E32]/40 bg-[#701E32]/10 px-3 py-2 text-xs text-[#701E32]"
                >
                  {errorMsg}
                </p>
              )}

              {statusMsg && (
                <p
                  role="status"
                  data-testid="blessing-success"
                  className="rounded-xl border border-emerald-700/30 bg-emerald-50 px-3 py-2 text-xs text-emerald-900"
                >
                  {statusMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                data-testid="blessing-submit-btn"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#102F65] px-5 py-3 text-xs sm:text-sm font-semibold text-[#FFF8E8] transition hover:bg-[#701E32] disabled:opacity-60 cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
                {submitting ? t.submitting : t.submitButton}
              </button>
            </div>
          </form>

          {/* Handwritten Keepsake Cards Wall */}
          <div className="space-y-4 lg:col-span-3" data-testid="blessings-wall">
            {blessings.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#C6A15B]/60 bg-[#FFF8E8] p-8 text-center text-sm text-[#102F65]/70">
                {t.emptyState}
              </div>
            ) : (
              blessings.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
                  className="relative rounded-2xl border border-[#C6A15B]/50 bg-[#FFF8E8] p-6 shadow-sm"
                >
                  <Heart
                    className="absolute right-5 top-5 h-4 w-4 text-[#E9C9C2] fill-[#E9C9C2]"
                    aria-hidden="true"
                  />
                  <p className="font-handwritten text-2xl sm:text-[26px] leading-snug text-[#102F65]">
                    &ldquo;{item.message}&rdquo;
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#C6A15B]/25 pt-3">
                    <span className="text-xs font-semibold text-[#701E32]">
                      — {item.guestName}
                    </span>
                    <span className="rounded-full bg-[#F7EFDF] px-2.5 py-0.5 text-[10px] font-medium text-[#102F65]/70">
                      {t.approvedBadge}
                    </span>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
