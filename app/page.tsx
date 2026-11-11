"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Language } from "@/lib/wedding-data";
import { TRANSLATIONS } from "@/lib/translations";
import { EnvelopeOpening } from "@/components/EnvelopeOpening";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CoupleIntroduction } from "@/components/CoupleIntroduction";
import { WeddingCountdown } from "@/components/WeddingCountdown";
import { ScratchCard } from "@/components/ScratchCard";
import { EventsSection } from "@/components/EventsSection";
import { VenueSection } from "@/components/VenueSection";
import { GallerySection } from "@/components/GallerySection";
import { BlessingsSection } from "@/components/BlessingsSection";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function WeddingInvitationPage() {
  const [lang, setLang] = useState<Language>("en");
  const [isOpened, setIsOpened] = useState(false);

  // Music player state preserved across sections & interactions
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.55);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
  }, [lang, t.meta.title]);

  const handleEnvelopeOpened = () => {
    setIsOpened(true);
    // Music starts paused until guest taps Play or a custom MP3 song is added
    setIsPlaying(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  const handleReplay = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVolumeChange = (val: number) => {
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E8] text-[#102F65]">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <EnvelopeOpening
              lang={lang}
              onLanguageChange={setLang}
              t={t.envelope}
              onOpened={handleEnvelopeOpened}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main-invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Navigation
              lang={lang}
              onLanguageChange={setLang}
              t={t.nav}
            />

            <main>
              {/* Screen 2: Welcome / Hero */}
              <HeroSection t={t.hero} lang={lang} />

              {/* Screen 3: Our Story & Families */}
              <CoupleIntroduction t={t.couple} lang={lang} />

              {/* Screen 4: Wedding Countdown */}
              <WeddingCountdown t={t.countdown} lang={lang} />

              {/* Screen 5: Scratch-to-Reveal Surprise */}
              <ScratchCard t={t.scratch} lang={lang} />

              {/* Screen 6: Wedding Celebrations */}
              <EventsSection t={t.events} lang={lang} />

              {/* Screen 7: Wedding Venue */}
              <VenueSection t={t.venue} lang={lang} />

              {/* Screen 8: Photo Gallery */}
              <GallerySection t={t.gallery} lang={lang} />

              {/* Screen 9: Blessings and Wishes */}
              <BlessingsSection t={t.blessings} lang={lang} />
            </main>

            {/* Screen 11: Final Thank-You */}
            <Footer
              t={t.thankYou}
              lang={lang}
              onReplay={handleReplay}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Traditional Indian Wedding Music Controls */}
      {isOpened && (
        <MusicPlayer
          t={t.music}
          isPlaying={isPlaying}
          isMuted={isMuted}
          volume={volume}
          onTogglePlay={() => setIsPlaying((prev) => !prev)}
          onToggleMute={() => setIsMuted((prev) => !prev)}
          onVolumeChange={handleVolumeChange}
        />
      )}
    </div>
  );
}
