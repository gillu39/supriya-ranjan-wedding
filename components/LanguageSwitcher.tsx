"use client";

import React from "react";
import type { Language } from "@/lib/wedding-data";

interface LanguageSwitcherProps {
  lang: Language;
  onChange: (lang: Language) => void;
  variant?: "dark" | "light";
}

export function LanguageSwitcher({
  lang,
  onChange,
  variant = "light",
}: LanguageSwitcherProps) {
  const containerClass =
    variant === "dark"
      ? "bg-[#102F65]/85 border-[#C6A15B]/60 text-[#FFF8E8]"
      : "bg-[#FFF8E8]/95 border-[#C6A15B]/65 text-[#102F65]";

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={`inline-flex items-center rounded-full border p-0.5 shadow-sm backdrop-blur-md ${containerClass}`}
    >
      <button
        type="button"
        onClick={() => onChange("en")}
        aria-pressed={lang === "en"}
        data-testid="lang-en"
        className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
          lang === "en"
            ? "bg-[#701E32] text-[#FFF8E8]"
            : "hover:text-[#C6A15B]"
        }`}
      >
        EN
      </button>
      <span className="px-0.5 text-[10px] opacity-40" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => onChange("hi")}
        aria-pressed={lang === "hi"}
        data-testid="lang-hi"
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
          lang === "hi"
            ? "bg-[#701E32] text-[#FFF8E8]"
            : "hover:text-[#C6A15B]"
        }`}
      >
        हिन्दी
      </button>
    </div>
  );
}
