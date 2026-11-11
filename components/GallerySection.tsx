"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_ITEMS, type Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { LotusDivider } from "./Illustrations";

interface GallerySectionProps {
  t: TranslationSchema["gallery"];
  lang: Language;
}

export function GallerySection({ t, lang }: GallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % GALLERY_ITEMS.length
        );
      if (e.key === "ArrowLeft")
        setActiveIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const activeItem =
    activeIndex !== null ? GALLERY_ITEMS[activeIndex] : null;
  const activeCopy = activeItem ? t.items[activeItem.id] : null;

  return (
    <section
      id="gallery"
      className={`scroll-mt-16 paper-texture py-20 sm:py-24 px-4 sm:px-6 ${
        lang === "hi" ? "lang-hi" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#701E32] font-semibold">
            {t.label}
          </p>
          <h2 className="font-serif-display mt-2 text-3xl sm:text-5xl font-bold text-[#102F65]">
            {t.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-[#102F65]/75">
            {t.subtitle}
          </p>
          <LotusDivider className="mt-4" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, idx) => {
            const copy = t.items[item.id] ?? {
              title: item.id,
              caption: "",
              tag: item.category,
            };
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`${t.openLightbox}: ${copy.title}`}
                  data-testid={`gallery-item-${item.id}`}
                  className="gold-border-frame group flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#FFF8E8] p-3.5 text-left transition hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#C6A15B]/40 bg-[#F7EFDF]">
                    <Image
                      src={item.imageSrc}
                      alt={copy.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover ${
                        item.objectPosition ?? "object-top"
                      } transition-transform duration-500 group-hover:scale-105`}
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-[#102F65]/88 px-3 py-0.5 text-[11px] font-semibold text-[#FFF8E8] backdrop-blur-sm">
                      {copy.tag}
                    </span>
                  </div>

                  <div className="px-1.5 pt-3.5 pb-1">
                    <h3 className="font-serif-display text-xl font-bold text-[#102F65]">
                      {copy.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#102F65]/75">
                      {copy.caption}
                    </p>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && activeItem && activeCopy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#091A3A]/92 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={activeCopy.title}
            data-testid="gallery-lightbox"
          >
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="gold-border-frame paper-texture relative w-full max-w-2xl rounded-3xl p-5 sm:p-8 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label={t.closeLightbox}
                data-testid="lightbox-close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A15B]/60 bg-[#FFF8E8] text-[#102F65] hover:bg-[#701E32] hover:text-[#FFF8E8] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="inline-block rounded-full border border-[#C6A15B]/60 bg-[#F7EFDF] px-3 py-1 text-xs font-semibold text-[#701E32]">
                {activeCopy.tag}
              </span>

              <div className="my-5 flex max-h-[60vh] items-center justify-center overflow-hidden rounded-2xl border border-[#C6A15B]/45 bg-[#102F65]/5">
                <Image
                  src={activeItem.imageSrc}
                  alt={activeCopy.title}
                  width={1200}
                  height={900}
                  className="max-h-[58vh] w-auto rounded-xl object-contain"
                />
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#102F65]">
                {activeCopy.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#102F65]/80">
                {activeCopy.caption}
              </p>

              {/* Next / Previous Navigation */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex - 1 + GALLERY_ITEMS.length) %
                        GALLERY_ITEMS.length
                    )
                  }
                  aria-label={t.previous}
                  data-testid="lightbox-prev"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B] bg-[#FFF8E8] px-4 py-2 text-xs font-semibold text-[#102F65] hover:bg-[#102F65] hover:text-[#FFF8E8] cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {t.previous}
                </button>

                <span className="text-xs font-medium text-[#102F65]/70">
                  {activeIndex + 1} / {GALLERY_ITEMS.length}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % GALLERY_ITEMS.length)
                  }
                  aria-label={t.next}
                  data-testid="lightbox-next"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B] bg-[#FFF8E8] px-4 py-2 text-xs font-semibold text-[#102F65] hover:bg-[#102F65] hover:text-[#FFF8E8] cursor-pointer"
                >
                  {t.next}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
