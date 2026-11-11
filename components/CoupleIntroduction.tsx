"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import {
  BrideIllustration,
  GroomIllustration,
  CornerFiligree,
  LotusDivider,
} from "./Illustrations";
import { FamilySection } from "./FamilySection";

interface CoupleIntroductionProps {
  t: TranslationSchema["couple"];
  lang: Language;
}

export function CoupleIntroduction({ t, lang }: CoupleIntroductionProps) {
  return (
    <section
      id="our-story"
      className={`scroll-mt-16 paper-texture relative py-20 sm:py-24 px-4 sm:px-6 ${
        lang === "hi" ? "lang-hi" : ""
      }`}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#701E32] font-semibold">
            {t.sectionLabel}
          </p>
          <h2 className="font-serif-display mt-2 text-3xl sm:text-5xl font-bold text-[#102F65]">
            {t.sectionTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-[#102F65]/75">
            {t.sectionSubtitle}
          </p>
          <LotusDivider className="mt-5" />
        </motion.div>

        {/* Bride & Groom Illustrated Profile Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Bride Card */}
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="gold-border-frame relative rounded-2xl bg-[#FFF8E8] p-7 sm:p-9 text-center"
          >
            <CornerFiligree className="pointer-events-none absolute top-2 left-2 h-10 w-10" />
            <CornerFiligree flipX className="pointer-events-none absolute top-2 right-2 h-10 w-10" />

            <span className="inline-block rounded-full bg-[#E9C9C2]/55 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#701E32]">
              {t.brideRole}
            </span>

            <div className="mx-auto my-5 w-44 sm:w-48">
              <BrideIllustration className="h-auto w-full" />
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#102F65]">
              {t.brideName}
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#102F65]/80 italic">
              &ldquo;{t.brideQuote}&rdquo;
            </p>
          </motion.article>

          {/* Groom Card */}
          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="gold-border-frame relative rounded-2xl bg-[#FFF8E8] p-7 sm:p-9 text-center"
          >
            <CornerFiligree className="pointer-events-none absolute top-2 left-2 h-10 w-10" />
            <CornerFiligree flipX className="pointer-events-none absolute top-2 right-2 h-10 w-10" />

            <span className="inline-block rounded-full bg-[#102F65]/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#102F65]">
              {t.groomRole}
            </span>

            <div className="mx-auto my-5 w-44 sm:w-48">
              <GroomIllustration className="h-auto w-full" />
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#102F65]">
              {t.groomName}
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#102F65]/80 italic">
              &ldquo;{t.groomQuote}&rdquo;
            </p>
          </motion.article>
        </div>

        {/* Separate Family Information */}
        <FamilySection t={t} />
      </div>
    </section>
  );
}
