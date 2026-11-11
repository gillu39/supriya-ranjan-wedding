"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { CornerFiligree, LotusDivider, WaxSealCrest } from "./Illustrations";
import { FloatingPetals } from "./FloatingPetals";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface EnvelopeOpeningProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationSchema["envelope"];
  onOpened: (enableMusic: boolean) => void;
}

export function EnvelopeOpening({
  lang,
  onLanguageChange,
  t,
  onOpened,
}: EnvelopeOpeningProps) {
  const [stage, setStage] = useState<"closed" | "opening" | "sliding">("closed");
  const prefersReduced = useReducedMotion();

  const handleOpen = () => {
    if (stage !== "closed") return;
    if (prefersReduced) {
      onOpened(true);
      return;
    }
    setStage("opening");
    window.setTimeout(() => setStage("sliding"), 650);
    window.setTimeout(() => onOpened(true), 1550);
  };

  const handleSkip = () => {
    onOpened(false);
  };

  const isOpening = stage === "opening" || stage === "sliding";
  const isSliding = stage === "sliding";

  return (
    <section
      aria-label="Wedding Invitation Envelope"
      className="paper-texture relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-16"
    >
      <FloatingPetals className="absolute inset-0 z-0" />

      {/* Top Bar: Language Toggle & Skip Animation */}
      <div className="fixed top-4 left-4 right-4 z-30 mx-auto flex max-w-5xl items-center justify-between">
        <LanguageSwitcher lang={lang} onChange={onLanguageChange} />
        <button
          type="button"
          onClick={handleSkip}
          data-testid="skip-envelope"
          className="rounded-full border border-[#C6A15B]/60 bg-[#FFF8E8]/90 px-4 py-1.5 text-xs font-medium text-[#102F65] shadow-sm backdrop-blur transition hover:border-[#701E32] hover:text-[#701E32] cursor-pointer"
        >
          {t.skip}
        </button>
      </div>

      {/* Interactive Envelope Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{
          opacity: isSliding ? 0 : 1,
          scale: isSliding ? 1.03 : 1,
        }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        className="relative z-10 flex w-full max-w-lg flex-col items-center"
      >
        <div className="perspective-1200 relative w-full max-w-[440px]">
          {/* Invitation Card peeking cleanly above the envelope pocket */}
          <motion.div
            initial={false}
            animate={{
              y: isSliding ? -110 : isOpening ? -28 : 0,
            }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="gold-border-frame paper-texture relative z-10 mx-auto w-[90%] rounded-t-2xl rounded-b-lg px-6 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 text-center"
          >
            <CornerFiligree className="pointer-events-none absolute top-2 left-2 h-11 w-11" />
            <CornerFiligree flipX className="pointer-events-none absolute top-2 right-2 h-11 w-11" />

            <p className="text-xs sm:text-sm italic text-[#701E32]">
              {t.line1}
            </p>
            <p className="mt-2.5 whitespace-pre-line text-xs sm:text-sm leading-relaxed text-[#102F65]/85">
              {t.line2}
            </p>
            <LotusDivider className="my-3.5" />
            <p className="whitespace-pre-line text-xs sm:text-sm text-[#102F65]/85">
              {t.line3}
            </p>
            <h1 className="font-serif-display mt-3 text-2xl sm:text-3xl font-bold tracking-wider text-[#102F65]">
              {t.couple}
            </h1>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#9A7638]">
              {t.line4}
            </p>
          </motion.div>

          {/* Royal Navy Envelope Lower Pocket & Flap Overlay */}
          <div className="relative z-20 -mt-12 sm:-mt-14 overflow-visible">
            <div className="navy-silk relative mx-auto h-40 sm:h-44 w-full rounded-b-2xl border border-[#C6A15B]/85 shadow-2xl overflow-hidden">
              <svg
                viewBox="0 0 440 180"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M0 0L220 106L440 0"
                  stroke="#C6A15B"
                  strokeOpacity="0.65"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M0 180L165 80M440 180L275 80"
                  stroke="#C6A15B"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                  fill="none"
                />
                <rect
                  x="10"
                  y="10"
                  width="420"
                  height="160"
                  rx="10"
                  stroke="#C6A15B"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              {/* 3D Animated Top Flap */}
              <motion.div
                initial={false}
                animate={{
                  rotateX: isOpening ? -165 : 0,
                  zIndex: isOpening ? 5 : 30,
                }}
                transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "top center" }}
                className="preserve-3d absolute top-0 left-0 right-0 h-26"
              >
                <svg
                  viewBox="0 0 440 112"
                  preserveAspectRatio="none"
                  className="backface-hidden h-full w-full drop-shadow-md"
                  aria-hidden="true"
                >
                  <path
                    d="M2 0H438L220 106L2 0Z"
                    fill="#143A7B"
                    stroke="#C6A15B"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M24 6H416L220 94L24 6Z"
                    stroke="#C6A15B"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </motion.div>

              {/* Interactive Wax Seal S & R */}
              <motion.button
                type="button"
                onClick={handleOpen}
                aria-label={t.button}
                animate={{
                  opacity: isOpening ? 0 : 1,
                  scale: isOpening ? 0.75 : 1,
                }}
                transition={{ duration: 0.45 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                className="absolute left-1/2 top-[48%] z-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
              >
                <WaxSealCrest size={82} className="drop-shadow-xl" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Open Invitation CTA */}
        <div className="mt-7 flex flex-col items-center gap-2.5 text-center">
          <button
            type="button"
            onClick={handleOpen}
            disabled={isOpening}
            data-testid="open-invitation-btn"
            className="rounded-full border border-[#C6A15B] bg-[#701E32] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFF8E8] shadow-lg transition hover:bg-[#8A263F] hover:shadow-xl active:scale-[0.98] disabled:opacity-60 cursor-pointer"
          >
            {t.button}
          </button>
          <p className="text-xs text-[#102F65]/70">{t.sealHint}</p>
        </div>
      </motion.div>
    </section>
  );
}
