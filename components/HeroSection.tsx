"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { MandapHeroScene, LotusDivider } from "./Illustrations";
import { FloatingPetals } from "./FloatingPetals";

interface HeroSectionProps {
  t: TranslationSchema["hero"];
  lang: Language;
}

export function HeroSection({ t, lang }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[#0E2654] text-[#FFF8E8] py-14 px-4"
    >
      {/* Parallax Illustrated Mandap Background */}
      <motion.div
        style={prefersReduced ? undefined : { y: bgY }}
        className="absolute inset-0 z-0"
      >
        <MandapHeroScene className="h-full w-full" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#08193A]/35 via-[#102F65]/25 to-[#08193A]/75"
          aria-hidden="true"
        />
      </motion.div>

      <FloatingPetals className="absolute inset-0 z-10 opacity-75" />

      {/* Crisp Arched Wedding Crest Plaque */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={prefersReduced ? undefined : { y: textY }}
        className={`relative z-20 mx-auto w-full max-w-2xl rounded-t-[140px] rounded-b-3xl border border-[#C6A15B]/70 bg-[#0D234D]/82 px-6 py-12 sm:px-14 sm:py-16 text-center shadow-2xl ${
          lang === "hi" ? "lang-hi" : ""
        }`}
      >
        <div
          className="pointer-events-none absolute inset-3 rounded-t-[130px] rounded-b-2xl border border-[#C6A15B]/30"
          aria-hidden="true"
        />

        <p className="text-xs sm:text-sm uppercase tracking-[0.26em] text-[#E9C9C2]">
          {t.together}
        </p>

        <div className="mt-5">
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold tracking-wider text-[#FFF8E8]">
            {t.brideFirst}
          </h1>
          <div className="my-1.5 font-serif-display text-2xl sm:text-3xl italic text-[#C6A15B]">
            {t.ampersand}
          </div>
          <h2 className="font-serif-display text-4xl sm:text-6xl font-bold tracking-wider text-[#FFF8E8]">
            {t.groomTitleName}
          </h2>
        </div>

        <LotusDivider className="my-5" />

        <p className="font-serif-display text-lg sm:text-2xl italic text-[#F7EFDF]">
          {t.tagline}
        </p>

        <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 rounded-full border border-[#C6A15B]/75 bg-[#701E32] px-6 py-2.5 text-xs sm:text-sm font-medium text-[#FFF8E8] shadow-md">
          <span>{t.date}</span>
          <span className="hidden sm:inline text-[#C6A15B]">•</span>
          <span className="text-[#E9C9C2]">{t.city}</span>
        </div>

        <div className="mt-7">
          <a
            href="#our-story"
            className="inline-flex flex-col items-center gap-1 text-xs tracking-widest text-[#E9C9C2]/90 transition hover:text-[#FFF8E8]"
          >
            <span>{t.scrollPrompt}</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-[#C6A15B]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
