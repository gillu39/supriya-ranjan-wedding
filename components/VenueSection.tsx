"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ExternalLink, MapPin, Navigation } from "lucide-react";
import { WEDDING_CONFIG, type Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { LotusDivider } from "./Illustrations";

interface VenueSectionProps {
  t: TranslationSchema["venue"];
  lang: Language;
}

export function VenueSection({ t, lang }: VenueSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(WEDDING_CONFIG.venue.mapsUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      // Fallback copy method
      const input = document.createElement("input");
      input.value = WEDDING_CONFIG.venue.mapsUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <section
      id="venue"
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
          <LotusDivider className="mt-4" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="gold-border-frame mt-10 overflow-hidden rounded-3xl bg-[#FFF8E8] grid lg:grid-cols-5"
        >
          {/* Details Column */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-2">
            <div>
              <span className="inline-block rounded-full bg-[#701E32]/10 px-3 py-1 text-xs font-semibold text-[#701E32]">
                {t.ceremonyTag}
              </span>

              <h3 className="font-serif-display mt-4 text-3xl font-bold text-[#102F65]">
                {t.name}
              </h3>

              <p className="mt-2 flex items-center gap-2 text-sm sm:text-base text-[#102F65]/80">
                <MapPin className="h-4 w-4 shrink-0 text-[#C6A15B]" />
                <span>{t.address}</span>
              </p>

              {/* Haldi & Mehndi respectful address note */}
              <div className="mt-6 rounded-xl border border-[#C6A15B]/45 bg-[#F7EFDF] p-4 text-xs leading-relaxed text-[#102F65]/85">
                <p className="font-semibold text-[#701E32]">{t.haldiNoteTitle}</p>
                <p className="mt-1">
                  {WEDDING_CONFIG.placeholders.haldiAddress
                    ? `${t.haldiNoteConfigured} ${WEDDING_CONFIG.placeholders.haldiAddress}`
                    : t.haldiNoteBody}
                </p>
              </div>
            </div>

            {/* Map Action Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={WEDDING_CONFIG.venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#701E32] px-5 py-3 text-xs sm:text-sm font-semibold text-[#FFF8E8] shadow-md transition hover:bg-[#8B2740]"
              >
                <Navigation className="h-4 w-4" />
                {t.getDirections}
              </a>

              <a
                href={WEDDING_CONFIG.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#102F65] px-5 py-3 text-xs sm:text-sm font-semibold text-[#FFF8E8] transition hover:bg-[#19438E]"
              >
                <ExternalLink className="h-4 w-4" />
                {t.openInMaps}
              </a>

              <button
                type="button"
                onClick={handleCopy}
                data-testid="copy-venue-link"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C6A15B] bg-[#FFF8E8] px-5 py-3 text-xs sm:text-sm font-semibold text-[#102F65] transition hover:bg-[#F7EFDF] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-700" />
                    {t.copiedLink}
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[#C6A15B]" />
                    {t.copyLink}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Embedded Google Map Preview */}
          <div className="relative min-h-[320px] lg:min-h-[440px] lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#C6A15B]/40 bg-[#E8DFCC]">
            <iframe
              title={t.mapTitle}
              src={WEDDING_CONFIG.venue.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full min-h-[320px] border-0"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
