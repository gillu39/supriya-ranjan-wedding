"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarPlus,
  Download,
  ExternalLink,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";
import {
  WEDDING_CONFIG,
  WEDDING_EVENTS,
  type Language,
  type WeddingEventData,
} from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { buildGoogleCalendarUrl, downloadIcsFile } from "@/lib/calendar";
import { EventCard } from "./EventCard";
import { LotusDivider } from "./Illustrations";

interface EventsSectionProps {
  t: TranslationSchema["events"];
  lang: Language;
}

export function EventsSection({ t, lang }: EventsSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState<WeddingEventData | null>(
    null
  );

  useEffect(() => {
    if (!selectedEvent) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedEvent]);

  const selectedCopy = selectedEvent ? t.cards[selectedEvent.id] : null;
  const resolvedHaldiVenue =
    selectedEvent?.id === "haldi-mehndi" &&
    WEDDING_CONFIG.placeholders.haldiAddress
      ? `${selectedCopy?.fullVenue} (${WEDDING_CONFIG.placeholders.haldiAddress})`
      : selectedCopy?.fullVenue ?? "";

  return (
    <section
      id="celebrations"
      className={`scroll-mt-16 paper-texture py-20 sm:py-24 px-4 sm:px-6 ${
        lang === "hi" ? "lang-hi" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl">
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
          <LotusDivider className="mt-5" />
          <p className="mt-3 text-xs text-[#701E32]/85">{t.tapHint}</p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {WEDDING_EVENTS.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              copy={t.cards[event.id]}
              viewLabel={t.viewDetails}
              index={index}
              onSelect={setSelectedEvent}
            />
          ))}
        </div>
      </div>

      {/* Expanded Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && selectedCopy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1D40]/75 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="event-detail-modal"
              className="gold-border-frame paper-texture relative w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                aria-label={t.closeModal}
                data-testid="event-modal-close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A15B]/50 text-[#102F65] transition hover:bg-[#701E32] hover:text-[#FFF8E8] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="inline-block rounded-full bg-[#701E32] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FFF8E8]">
                {selectedCopy.day}
              </span>
              <h3
                id="event-modal-title"
                className="font-serif-display mt-3 text-3xl font-bold text-[#102F65]"
              >
                {selectedCopy.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#102F65]/85">
                {selectedCopy.description}
              </p>

              <div className="mt-5 space-y-3 rounded-xl border border-[#C6A15B]/40 bg-[#F7EFDF] p-4 text-sm">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#701E32]">
                    {t.dateTimeLabel}
                  </p>
                  <p className="font-medium text-[#102F65]">
                    {selectedCopy.date} ({selectedCopy.day}) • {selectedCopy.time}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#701E32]">
                    {t.venueLabel}
                  </p>
                  <p className="font-medium text-[#102F65] flex items-start gap-1.5">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#C6A15B]" />
                    <span>{resolvedHaldiVenue}</span>
                  </p>
                  {selectedEvent.id === "haldi-mehndi" &&
                    !WEDDING_CONFIG.placeholders.haldiAddress && (
                      <p className="mt-1 text-xs italic text-[#701E32]/80">
                        {selectedCopy.addressPlaceholder}
                      </p>
                    )}
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#701E32]">
                    {t.attireLabel}
                  </p>
                  <p className="font-medium text-[#102F65] flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 shrink-0 text-[#C6A15B]" />
                    <span>{selectedCopy.attire}</span>
                  </p>
                </div>
              </div>

              {/* Add to Calendar Actions */}
              <div className="mt-6">
                <p className="mb-2.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#102F65]">
                  <CalendarPlus className="h-4 w-4 text-[#C6A15B]" />
                  {t.addToCalendar}
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={buildGoogleCalendarUrl(
                      selectedEvent,
                      selectedCopy.title,
                      selectedCopy.description,
                      resolvedHaldiVenue
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#102F65] px-4 py-2.5 text-xs font-semibold text-[#FFF8E8] transition hover:bg-[#19438E]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t.googleCalendar}
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      downloadIcsFile(
                        selectedEvent,
                        selectedCopy.title,
                        selectedCopy.description,
                        resolvedHaldiVenue
                      )
                    }
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#C6A15B] bg-[#FFF8E8] px-4 py-2.5 text-xs font-semibold text-[#102F65] transition hover:bg-[#F7EFDF] cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {t.downloadIcs}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
