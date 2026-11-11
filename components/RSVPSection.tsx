"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Database, Phone, Send, UserCheck } from "lucide-react";
import { WEDDING_CONFIG, type Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { LotusDivider } from "./Illustrations";

interface RSVPSectionProps {
  t: TranslationSchema["rsvp"];
  lang: Language;
}

const EVENT_IDS = ["haldi-mehndi", "wedding", "vidai"] as const;

export function RSVPSection({ t, lang }: RSVPSectionProps) {
  const [guestName, setGuestName] = useState("");
  const [mobile, setMobile] = useState("");
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedEvents, setSelectedEvents] = useState<string[]>(["wedding"]);
  const [attending, setAttending] = useState<"accept" | "decline" | null>(null);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [storageMode, setStorageMode] = useState<"demo" | "supabase">("demo");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedState, setSubmittedState] = useState<"accept" | "decline" | null>(
    null
  );

  useEffect(() => {
    fetch("/api/rsvp")
      .then((res) => res.json())
      .then((data) => {
        if (data?.mode === "supabase") setStorageMode("supabase");
      })
      .catch(() => {});
  }, []);

  const toggleEvent = (id: string) => {
    setSelectedEvents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = guestName.trim();
    const digitsOnly = mobile.replace(/\D/g, "");

    if (trimmedName.length < 2) {
      setErrorMsg(t.errors.nameRequired);
      return;
    }
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      setErrorMsg(t.errors.mobileInvalid);
      return;
    }
    if (!Number.isInteger(guestsCount) || guestsCount < 1 || guestsCount > 15) {
      setErrorMsg(t.errors.guestsInvalid);
      return;
    }
    if (!attending) {
      setErrorMsg(t.errors.attendanceRequired);
      return;
    }
    if (attending === "accept" && selectedEvents.length === 0) {
      setErrorMsg(t.errors.eventsRequired);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName: trimmedName,
          mobile: mobile.trim(),
          guestsCount,
          events: attending === "accept" ? selectedEvents : [],
          attending,
          message: message.trim(),
          website: honeypot,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data?.error || t.errors.generic);
        return;
      }

      if (data?.mode === "supabase") {
        setStorageMode("supabase");
      } else {
        // Persist locally in browser for demo-mode transparency across reloads
        try {
          const existing = JSON.parse(
            window.localStorage.getItem("sr_wedding_rsvps") || "[]"
          );
          existing.unshift(data.submission);
          window.localStorage.setItem(
            "sr_wedding_rsvps",
            JSON.stringify(existing.slice(0, 20))
          );
        } catch {
          // Ignore storage quota errors
        }
      }

      setSubmittedState(attending);
    } catch {
      setErrorMsg(t.errors.generic);
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmittedState(null);
    setGuestName("");
    setMobile("");
    setGuestsCount(2);
    setSelectedEvents(["wedding"]);
    setAttending(null);
    setMessage("");
    setErrorMsg(null);
  };

  return (
    <section
      id="rsvp"
      className={`scroll-mt-16 navy-silk py-20 sm:py-24 px-4 sm:px-6 text-[#FFF8E8] ${
        lang === "hi" ? "lang-hi" : ""
      }`}
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C6A15B] font-semibold">
            {t.label}
          </p>
          <h2 className="font-serif-display mt-2 text-3xl sm:text-5xl font-bold">
            {t.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-[#E9C9C2]">
            {t.subtitle}
          </p>
          <LotusDivider className="mt-5" />
        </div>

        {/* Contact Info & Storage Mode Indicator */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-[#C6A15B]/45 bg-[#FFF8E8]/8 px-5 py-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
            <span className="font-semibold text-[#C6A15B]">{t.contactPerson}</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="inline-flex items-center justify-center gap-1.5 text-[#FFF8E8]/90">
              <Phone className="h-3.5 w-3.5 text-[#C6A15B]" />
              {t.phoneLabel}{" "}
              {WEDDING_CONFIG.placeholders.rsvpPhone || t.phonePlaceholder}
            </span>
          </div>

          <span
            data-testid="rsvp-storage-mode"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B]/50 bg-[#102F65] px-3 py-1 text-[11px] font-medium text-[#E9C9C2]"
          >
            <Database className="h-3 w-3 text-[#C6A15B]" />
            {storageMode === "supabase" ? t.modeLive : t.modeDemo}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="gold-border-frame paper-texture mt-6 rounded-3xl p-6 sm:p-10 text-[#102F65]"
        >
          {submittedState ? (
            <div data-testid="rsvp-confirmation" className="py-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#701E32]" />
              <h3 className="font-serif-display mt-4 text-2xl sm:text-3xl font-bold text-[#102F65]">
                {submittedState === "accept" ? t.acceptButton : t.declineButton}
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm sm:text-base text-[#102F65]/80">
                {submittedState === "accept"
                  ? t.successAccept
                  : t.successDecline}
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="mt-6 rounded-full border border-[#C6A15B] bg-[#FFF8E8] px-6 py-2.5 text-xs font-semibold text-[#102F65] hover:bg-[#102F65] hover:text-[#FFF8E8] cursor-pointer"
              >
                {t.editAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Honeypot field hidden from users */}
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="rsvp-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#701E32]"
                  >
                    {t.nameLabel} *
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    data-testid="rsvp-name-input"
                    className="mt-1.5 w-full rounded-xl border border-[#C6A15B]/60 bg-white/80 px-4 py-3 text-sm text-[#102F65] placeholder:text-[#102F65]/40 focus:border-[#701E32] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rsvp-mobile"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#701E32]"
                  >
                    {t.mobileLabel} *
                  </label>
                  <input
                    id="rsvp-mobile"
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder={t.mobilePlaceholder}
                    data-testid="rsvp-mobile-input"
                    className="mt-1.5 w-full rounded-xl border border-[#C6A15B]/60 bg-white/80 px-4 py-3 text-sm text-[#102F65] placeholder:text-[#102F65]/40 focus:border-[#701E32] focus:outline-none"
                  />
                </div>
              </div>

              {/* Attendance Buttons */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#701E32]">
                  {t.attendanceLabel} *
                </p>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending("accept")}
                    aria-pressed={attending === "accept"}
                    data-testid="rsvp-accept-btn"
                    className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition cursor-pointer ${
                      attending === "accept"
                        ? "border-[#701E32] bg-[#701E32] text-[#FFF8E8] shadow-md"
                        : "border-[#C6A15B]/60 bg-white/70 text-[#102F65] hover:bg-[#F7EFDF]"
                    }`}
                  >
                    <UserCheck className="h-4 w-4" />
                    {t.acceptButton}
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttending("decline")}
                    aria-pressed={attending === "decline"}
                    data-testid="rsvp-decline-btn"
                    className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition cursor-pointer ${
                      attending === "decline"
                        ? "border-[#102F65] bg-[#102F65] text-[#FFF8E8] shadow-md"
                        : "border-[#C6A15B]/60 bg-white/70 text-[#102F65] hover:bg-[#F7EFDF]"
                    }`}
                  >
                    {t.declineButton}
                  </button>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="rsvp-guests"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#701E32]"
                  >
                    {t.guestsLabel}
                  </label>
                  <select
                    id="rsvp-guests"
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    data-testid="rsvp-guests-select"
                    className="mt-1.5 w-full rounded-xl border border-[#C6A15B]/60 bg-white/80 px-4 py-3 text-sm text-[#102F65] focus:border-[#701E32] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#701E32]">
                    {t.eventsLabel}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {EVENT_IDS.map((id) => {
                      const active = selectedEvents.includes(id);
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggleEvent(id)}
                          aria-pressed={active}
                          data-testid={`rsvp-event-${id}`}
                          className={`rounded-full border px-3.5 py-2 text-xs font-medium transition cursor-pointer ${
                            active
                              ? "border-[#701E32] bg-[#701E32]/12 text-[#701E32]"
                              : "border-[#C6A15B]/55 bg-white/65 text-[#102F65]/80"
                          }`}
                        >
                          {t.eventOptions[id]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="rsvp-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#701E32]"
                >
                  {t.messageLabel}
                </label>
                <textarea
                  id="rsvp-message"
                  rows={3}
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-[#C6A15B]/60 bg-white/80 px-4 py-3 text-sm text-[#102F65] placeholder:text-[#102F65]/40 focus:border-[#701E32] focus:outline-none"
                />
              </div>

              {errorMsg && (
                <p
                  role="alert"
                  data-testid="rsvp-error"
                  className="rounded-xl border border-[#701E32]/40 bg-[#701E32]/10 px-4 py-2.5 text-xs font-medium text-[#701E32]"
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                data-testid="rsvp-submit-btn"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#701E32] px-6 py-3.5 text-sm font-semibold tracking-wider text-[#FFF8E8] shadow-lg transition hover:bg-[#8B2740] disabled:opacity-60 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                {submitting ? t.submitting : t.submitButton}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
