"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Sparkles } from "lucide-react";
import type { Language } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import { LotusDivider, PeacockFeatherMotif } from "./Illustrations";

interface ScratchCardProps {
  t: TranslationSchema["scratch"];
  lang: Language;
}

export function ScratchCard({ t, lang }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const paintFoil = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.globalCompositeOperation = "source-over";

    // Brushed antique-gold foil surface
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#B88E44");
    grad.addColorStop(0.35, "#E1C17A");
    grad.addColorStop(0.65, "#C6A15B");
    grad.addColorStop(1, "#9E7835");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle mandala rings engraved on foil
    ctx.strokeStyle = "rgba(16, 47, 101, 0.2)";
    ctx.lineWidth = 1.5;
    for (let r = 36; r <= 130; r += 24) {
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Fine foil grain dots
    ctx.fillStyle = "rgba(255, 248, 232, 0.2)";
    for (let x = 14; x < w; x += 22) {
      for (let y = 14; y < h; y += 22) {
        ctx.beginPath();
        ctx.arc(x, y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Center prompt label
    ctx.fillStyle = "#102F65";
    ctx.font = "600 22px Georgia, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(t.hint, w / 2, h / 2);
  }, [t.hint]);

  useEffect(() => {
    if (!isRevealed) {
      paintFoil();
    }
  }, [isRevealed, paintFoil]);

  const computeClearedRatio = () => {
    const canvas = canvasRef.current;
    if (!canvas) return 0;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return 0;

    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    const stride = 16; // sample every 4th pixel for 60fps performance
    let totalSampled = 0;
    for (let i = 3; i < data.length; i += stride) {
      totalSampled++;
      if (data[i] < 40) transparent++;
    }
    return totalSampled > 0 ? transparent / totalSampled : 0;
  };

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    ctx.globalCompositeOperation = "destination-out";
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 56;

    ctx.beginPath();
    if (lastPointRef.current) {
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    } else {
      ctx.moveTo(x - 0.5, y - 0.5);
    }
    ctx.lineTo(x, y);
    ctx.stroke();

    lastPointRef.current = { x, y };

    if (computeClearedRatio() >= 0.36) {
      setIsRevealed(true);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed) return;
    isDrawingRef.current = true;
    lastPointRef.current = null;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Synthetic pointer events may not have an active pointerId
    }
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || isRevealed) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
    lastPointRef.current = null;
  };

  const handleReset = () => {
    setIsRevealed(false);
    lastPointRef.current = null;
  };

  return (
    <section
      id="scratch-surprise"
      className={`scroll-mt-16 bg-[#F7EFDF] py-20 sm:py-24 px-4 sm:px-6 ${
        lang === "hi" ? "lang-hi" : ""
      }`}
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-[#701E32] font-semibold">
          {t.label}
        </p>
        <h2 className="font-serif-display mt-2 text-3xl sm:text-4xl font-bold text-[#102F65]">
          {t.title}
        </h2>
        <p className="mt-2 text-sm text-[#102F65]/75">{t.instruction}</p>

        {/* Scratchable Card */}
        <div className="gold-border-frame relative mx-auto mt-8 aspect-[16/10] w-full max-w-lg overflow-hidden rounded-2xl bg-[#FFF8E8] shadow-xl">
          {/* Revealed Illustration + Surprise Message */}
          <div className="relative flex h-full w-full flex-col items-center justify-center px-6 py-6 text-center">
            <PeacockFeatherMotif className="pointer-events-none absolute -left-2 bottom-0 h-28 w-16 opacity-35" />
            <PeacockFeatherMotif className="pointer-events-none absolute -right-2 bottom-0 h-28 w-16 scale-x-[-1] opacity-35" />

            <motion.div
              initial={false}
              animate={isRevealed ? { scale: [0.92, 1.02, 1], opacity: 1 } : { opacity: 0.92 }}
              transition={{ duration: 0.55 }}
              className="relative z-10 max-w-md"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#701E32] px-3 py-1 text-[11px] font-semibold tracking-wider text-[#FFF8E8]">
                <Sparkles className="h-3 w-3 text-[#C6A15B]" />
                {t.revealedBadge}
              </span>

              <h3 className="font-serif-display mt-3 text-xl sm:text-2xl font-bold text-[#102F65]">
                {t.messageLine1}
              </h3>
              <LotusDivider className="my-2.5" />
              <p className="text-sm sm:text-base text-[#701E32] font-medium leading-relaxed">
                {t.messageLine2}
              </p>
            </motion.div>
          </div>

          {/* Interactive Scratch Canvas Overlay */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              width={640}
              height={400}
              data-testid="scratch-canvas"
              aria-label={t.instruction}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="absolute inset-0 z-20 h-full w-full touch-none cursor-grab active:cursor-grabbing"
            />
          )}
        </div>

        {/* Accessible Controls */}
        <div className="mt-5 flex items-center justify-center gap-3">
          {!isRevealed ? (
            <button
              type="button"
              onClick={() => setIsRevealed(true)}
              data-testid="scratch-reveal-btn"
              className="rounded-full border border-[#C6A15B] bg-[#FFF8E8] px-5 py-2 text-xs font-semibold text-[#102F65] transition hover:bg-[#102F65] hover:text-[#FFF8E8] cursor-pointer"
            >
              {t.revealButton}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              data-testid="scratch-reset-btn"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A15B] bg-[#FFF8E8] px-5 py-2 text-xs font-semibold text-[#102F65] transition hover:bg-[#701E32] hover:text-[#FFF8E8] cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {t.reset}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
