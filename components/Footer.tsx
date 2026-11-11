"use client";

import React from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import type { Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { FloatingPetals } from "./FloatingPetals";
import { LotusDivider, WaxSealCrest } from "./Illustrations";

interface FooterProps {
  t: TranslationSchema["thankYou"];
  lang: Language;
  onReplay: () => void;
}

export function Footer({ t, lang, onReplay }: FooterProps) {
  return (
    <footer
      className={`navy-silk relative overflow-hidden py-24 px-4 sm:px-6 text-center text-[#FFF8E8] ${
        lang === "hi" ? "lang-hi" : ""
      }`}
    >
      <FloatingPetals className="absolute inset-0 opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-2xl"
      >
        <div className="flex justify-center">
          <WaxSealCrest size={78} />
        </div>

        <h2 className="font-serif-display mt-6 text-3xl sm:text-5xl font-bold text-[#FFF8E8]">
          {t.line1}
        </h2>

        <LotusDivider className="my-6" />

        <p className="text-sm sm:text-base italic text-[#E9C9C2]">{t.line2}</p>
        <p className="font-serif-display mt-1 text-2xl sm:text-3xl font-semibold text-[#C6A15B]">
          {t.couple}
        </p>

        <p className="mt-4 text-sm text-[#F7EFDF]/90">{t.line3}</p>

        <div className="mt-8">
          <button
            type="button"
            onClick={onReplay}
            data-testid="replay-invitation-btn"
            className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B] bg-[#701E32] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#FFF8E8] shadow-xl transition hover:bg-[#8E2640] cursor-pointer"
          >
            <RotateCcw className="h-4 w-4 text-[#C6A15B]" />
            {t.replay}
          </button>
        </div>

        <p className="mt-12 text-[11px] tracking-[0.2em] text-[#E9C9C2]/70 uppercase">
          {t.copyright}
        </p>
      </motion.div>
    </footer>
  );
}
