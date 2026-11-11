"use client";

import React, { useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Music2 } from "lucide-react";
import type { TranslationSchema } from "@/lib/translations";
import { WEDDING_CONFIG } from "@/lib/wedding-data";

interface MusicPlayerProps {
  t: TranslationSchema["music"];
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onVolumeChange: (val: number) => void;
}

export function MusicPlayer({
  t,
  isPlaying,
  isMuted,
  volume,
  onTogglePlay,
  onToggleMute,
  onVolumeChange,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
    audio.muted = isMuted;
  }, [isMuted, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser blocked autoplay before user interaction — safely ignored
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-[#C6A15B]/70 bg-[#102F65]/95 px-3 py-2 text-[#FFF8E8] shadow-xl backdrop-blur-md"
      role="region"
      aria-label={t.trackTitle}
    >
      <audio
        ref={audioRef}
        src={WEDDING_CONFIG.audioPath}
        loop
        preload="none"
      />

      <button
        type="button"
        onClick={onTogglePlay}
        aria-label={isPlaying ? t.pause : t.play}
        title={isPlaying ? t.pause : t.play}
        data-testid="music-play-toggle"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C6A15B] text-[#102F65] transition hover:bg-[#E0BC75] cursor-pointer"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
      </button>

      <div className="hidden sm:flex flex-col pr-1 max-w-[165px]">
        <span className="truncate text-xs font-semibold text-[#FFF8E8] flex items-center gap-1">
          <Music2 className={`h-3 w-3 text-[#C6A15B] ${isPlaying && !isMuted ? "animate-pulse" : ""}`} />
          {t.trackTitle}
        </span>
        <span className="truncate text-[10px] text-[#E9C9C2]">
          {t.trackSubtitle}
        </span>
      </div>

      <button
        type="button"
        onClick={onToggleMute}
        aria-label={isMuted ? t.unmute : t.mute}
        title={isMuted ? t.unmute : t.mute}
        data-testid="music-mute-toggle"
        className="flex h-8 w-8 items-center justify-center rounded-full text-[#FFF8E8]/90 transition hover:bg-white/10 cursor-pointer"
      >
        {isMuted || volume === 0 ? (
          <VolumeX className="h-4 w-4 text-[#E9C9C2]" />
        ) : (
          <Volume2 className="h-4 w-4 text-[#C6A15B]" />
        )}
      </button>

      <label className="hidden md:flex items-center">
        <span className="sr-only">{t.volume}</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={isMuted ? 0 : volume}
          onChange={(e) => onVolumeChange(Number(e.target.value))}
          aria-label={t.volume}
          data-testid="music-volume-slider"
          className="h-1.5 w-16 accent-[#C6A15B] cursor-pointer"
        />
      </label>
    </div>
  );
}
