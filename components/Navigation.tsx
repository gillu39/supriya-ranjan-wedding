"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavigationProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationSchema["nav"];
}

export function Navigation({ lang, onLanguageChange, t }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = [
    { href: "#our-story", label: t.story },
    { href: "#countdown", label: t.countdown },
    { href: "#scratch-surprise", label: t.surprise },
    { href: "#celebrations", label: t.events },
    { href: "#venue", label: t.venue },
    { href: "#gallery", label: t.gallery },
    { href: "#rsvp", label: t.rsvp },
    { href: "#blessings", label: t.blessings },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-[#C6A15B]/35 bg-[#FFF8E8]/90 backdrop-blur-md">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-[#102F65] focus:px-3 focus:py-2 focus:text-xs focus:text-[#FFF8E8]"
      >
        {t.skipToContent}
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-[#102F65] group"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C6A15B] bg-[#701E32] font-serif-display text-xs font-bold tracking-wider text-[#FFF8E8]">
            S&amp;R
          </span>
          <span className="font-serif-display text-base sm:text-lg font-semibold tracking-wide text-[#102F65]">
            {lang === "hi" ? "सुप्रिया एवं रंजन" : "Supriya & Dr. Ranjan"}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-wide text-[#102F65]/85 transition-colors hover:text-[#701E32]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher lang={lang} onChange={onLanguageChange} />

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A15B]/50 text-[#102F65] lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-[#C6A15B]/30 bg-[#FFF8E8] px-4 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="grid grid-cols-2 gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#102F65] hover:bg-[#F7EFDF]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
