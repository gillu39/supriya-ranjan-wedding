"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera, X } from "lucide-react";
import { GALLERY_ITEMS, type GalleryItem, type Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import {
  BrideIllustration,
  GroomIllustration,
  LotusDivider,
  MandapCardIllustration,
  PeacockFeatherMotif,
} from "./Illustrations";

interface GallerySectionProps {
  t: TranslationSchema["gallery"];
  lang: Language;
}

function FrameArtwork({ item }: { item: GalleryItem }) {
  if (item.category === "bride") {
    return <BrideIllustration className="h-48 w-auto mx-auto" />;
  }
  if (item.category === "groom") {
    return <GroomIllustration className="h-48 w-auto mx-auto" />;
  }
  if (item.category === "decor") {
    return <MandapCardIllustration className="h-40 w-full rounded-xl" />;
  }
  if (item.category === "couple") {
    return (
      <div className="flex items-center justify-center gap-2">
        <BrideIllustration className="h-40 w-auto" />
        <GroomIllustration className="h-40 w-auto" />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <PeacockFeatherMotif className="h-28 w-16" />
      <LotusDivider className="mt-2" />
    </div>
  );
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
          <p className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/50 bg-[#F7EFDF] px-4 py-1.5 text-xs text-[#701E32]">
            <Camera className="h-3.5 w-3.5 text-[#C6A15B]" />
            {t.placeholderNotice}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, idx) => {
            const copy = t.items[item.id];
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
                  className="gold-border-frame group flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#FFF8E8] p-5 text-left transition hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#102F65] px-3 py-0.5 text-[11px] font-semibold text-[#FFF8E8]">
                      {copy.tag}
                    </span>
                    <span className="rounded-full border border-[#C6A15B]/60 bg-[#F7EFDF] px-2.5 py-0.5 text-[10px] font-medium text-[#701E32]">
                      {t.placeholderBadge}
                    </span>
                  </div>

                  <div className="my-4 flex min-h-[190px] items-center justify-center rounded-xl border border-dashed border-[#C6A15B]/55 bg-[#F7EFDF]/60 p-4 transition group-hover:bg-[#F7EFDF]">
                    <FrameArtwork item={item} />
                  </div>

                  <div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#091A3A]/90 p-4 backdrop-blur-md"
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
              className="gold-border-frame paper-texture relative w-full max-w-2xl rounded-3xl p-6 sm:p-10 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label={t.closeLightbox}
                data-testid="lightbox-close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A15B]/60 bg-[#FFF8E8] text-[#102F65] hover:bg-[#701E32] hover:text-[#FFF8E8] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="inline-block rounded-full border border-[#C6A15B]/60 bg-[#F7EFDF] px-3 py-1 text-xs font-semibold text-[#701E32]">
                {activeCopy.tag} • {t.placeholderBadge}
              </span>

              <div className="my-6 flex min-h-[240px] items-center justify-center rounded-2xl border border-[#C6A15B]/45 bg-[#F7EFDF] p-6">
                <FrameArtwork item={activeItem} />
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#102F65]">
                {activeCopy.title}
              </h3>
              <p className="mt-2 text-sm text-[#102F65]/80">{activeCopy.caption}</p>

              {/* Next / Previous Navigation */}
              <div className="mt-7 flex items-center justify-between gap-4">
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
