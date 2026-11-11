"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import gsap from "gsap";
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
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  useEffect(() => {
    if (prefersReduced || !contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-stagger",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
    }, contentRef);
    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-[#102F65] text-[#FFF8E8]"
    >
      {/* Parallax Illustrated Mandap Background */}
      <motion.div
        style={prefersReduced ? undefined : { y: bgY }}
        className="absolute inset-0 z-0"
      >
        <MandapHeroScene className="h-full w-full opacity-95" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0A1D40]/45 via-[#102F65]/30 to-[#0B1E42]/80"
          aria-hidden="true"
        />
      </motion.div>

      <FloatingPetals className="absolute inset-0 z-10 opacity-75" />

      {/* Center Ornamental Frame */}
      <motion.div
        ref={contentRef}
        style={prefersReduced ? undefined : { y: textY }}
        className={`relative z-20 mx-4 my-12 max-w-3xl rounded-3xl border border-[#C6A15B]/55 bg-[#102F65]/60 px-6 py-12 sm:px-14 sm:py-16 text-center backdrop-blur-sm shadow-2xl ${
          lang === "hi" ? "lang-hi" : ""
        }`}
      >
        <p className="hero-stagger text-xs sm:text-sm uppercase tracking-[0.26em] text-[#E9C9C2]">
          {t.together}
        </p>

        <div className="hero-stagger mt-5">
          <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider text-[#FFF8E8]">
            {t.brideFirst}
          </h1>
          <div className="my-2 font-serif-display text-2xl sm:text-3xl italic text-[#C6A15B]">
            {t.ampersand}
          </div>
          <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider text-[#FFF8E8]">
            {t.groomTitleName}
          </h2>
        </div>

        <LotusDivider className="hero-stagger my-6" />

        <p className="hero-stagger font-serif-display text-lg sm:text-2xl italic text-[#F7EFDF]">
          {t.tagline}
        </p>

        <div className="hero-stagger mt-6 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 rounded-full border border-[#C6A15B]/65 bg-[#701E32]/85 px-6 py-2.5 text-sm font-medium text-[#FFF8E8] shadow-md">
          <span>{t.date}</span>
          <span className="hidden sm:inline text-[#C6A15B]">•</span>
          <span className="text-[#E9C9C2]">{t.city}</span>
        </div>

        <a
          href="#our-story"
          className="hero-stagger mt-8 inline-flex flex-col items-center gap-1 text-xs tracking-widest text-[#E9C9C2]/85 transition hover:text-[#FFF8E8]"
        >
          <span>{t.scrollPrompt}</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-[#C6A15B]" />
        </a>
      </motion.div>
    </section>
  );
}
