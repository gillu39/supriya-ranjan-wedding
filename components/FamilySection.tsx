"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import type { TranslationSchema } from "@/lib/translations";

export function FamilySection({ t }: { t: TranslationSchema["couple"] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {/* Bride's Family */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="rounded-2xl border border-[#C6A15B]/45 bg-[#F7EFDF] p-6 sm:p-8 shadow-sm"
      >
        <div className="flex items-center gap-2.5 text-[#701E32]">
          <HeartHandshake className="h-5 w-5 text-[#C6A15B]" />
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
            {t.brideFamilyHeading}
          </h3>
        </div>
        <div className="mt-4 space-y-3 text-sm sm:text-base text-[#102F65]">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#701E32]/80 font-semibold">
              {t.grandparentsLabelBride}
            </p>
            <p className="mt-0.5 font-medium">{t.grandparentsBride}</p>
          </div>
          <div className="h-[1px] bg-[#C6A15B]/30" />
          <div>
            <p className="text-xs uppercase tracking-wider text-[#701E32]/80 font-semibold">
              {t.parentsLabelBride}
            </p>
            <p className="mt-0.5 font-medium">{t.parentsBride}</p>
          </div>
        </div>
      </motion.div>

      {/* Groom's Family */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="rounded-2xl border border-[#C6A15B]/45 bg-[#F7EFDF] p-6 sm:p-8 shadow-sm"
      >
        <div className="flex items-center gap-2.5 text-[#102F65]">
          <HeartHandshake className="h-5 w-5 text-[#C6A15B]" />
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
            {t.groomFamilyHeading}
          </h3>
        </div>
        <div className="mt-4 space-y-3 text-sm sm:text-base text-[#102F65]">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#701E32]/80 font-semibold">
              {t.grandparentsLabelGroom}
            </p>
            <p className="mt-0.5 font-medium">{t.grandparentsGroom}</p>
          </div>
          <div className="h-[1px] bg-[#C6A15B]/30" />
          <div>
            <p className="text-xs uppercase tracking-wider text-[#701E32]/80 font-semibold">
              {t.parentsLabelGroom}
            </p>
            <p className="mt-0.5 font-medium">{t.parentsGroom}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
