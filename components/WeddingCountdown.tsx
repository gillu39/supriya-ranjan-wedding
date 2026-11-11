"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { getCountdownValues, type CountdownValues } from "@/lib/countdown";
import { WEDDING_CONFIG, type Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";

interface WeddingCountdownProps {
  t: TranslationSchema["countdown"];
  lang: Language;
}

export function WeddingCountdown({ t, lang }: WeddingCountdownProps) {
  const [countdown, setCountdown] = useState<CountdownValues>(() =>
    getCountdownValues(WEDDING_CONFIG.targetDateISO)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const next = getCountdownValues(WEDDING_CONFIG.targetDateISO);
      setCountdown(next);
      return next.isComplete;
    };

    if (update()) return;

    const timer = window.setInterval(() => {
      const done = update();
      if (done) {
        window.clearInterval(timer);
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const blocks = [
    { label: t.days, value: mounted ? countdown.days : 0, testId: "cd-days" },
    { label: t.hours, value: mounted ? countdown.hours : 0, testId: "cd-hours" },
    {
      label: t.minutes,
      value: mounted ? countdown.minutes : 0,
      testId: "cd-minutes",
    },
    {
      label: t.seconds,
      value: mounted ? countdown.seconds : 0,
      testId: "cd-seconds",
    },
  ];

  return (
    <section
      id="countdown"
      className={`scroll-mt-16 navy-silk relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 text-[#FFF8E8] ${
        lang === "hi" ? "lang-hi" : ""
      }`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#C6A15B] font-semibold">
            {t.label}
          </p>
          <h2 className="font-serif-display mt-2 text-3xl sm:text-5xl font-bold">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#E9C9C2]">
            {t.subtitle}
          </p>
        </motion.div>

        {mounted && countdown.isComplete ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 rounded-3xl border border-[#C6A15B] bg-[#701E32]/85 px-6 py-10 shadow-2xl"
          >
            <Sparkles className="mx-auto h-8 w-8 text-[#C6A15B]" />
            <h3 className="font-serif-display mt-3 text-2xl sm:text-4xl font-bold text-[#FFF8E8]">
              {t.celebrationTitle}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-[#F7EFDF]">
              {t.celebrationMessage}
            </p>
          </motion.div>
        ) : (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {blocks.map((item, index) => (
              <motion.div
                key={item.testId}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex flex-col items-center justify-center rounded-t-[40px] rounded-b-2xl border border-[#C6A15B]/60 bg-[#FFF8E8]/8 px-4 py-6 sm:py-8 backdrop-blur-sm shadow-lg"
              >
                <span
                  data-testid={item.testId}
                  className="font-serif-display text-4xl sm:text-5xl font-bold tabular-nums text-[#FFF8E8]"
                >
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="mt-2 text-xs uppercase tracking-[0.2em] text-[#C6A15B]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <p className="mt-7 text-xs tracking-wider text-[#E9C9C2]/80">
          {t.timezoneNote}
        </p>
      </div>
    </section>
  );
}
