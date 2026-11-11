"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";
import type { WeddingEventData } from "@/lib/wedding-data";
import type { TranslationSchema } from "@/lib/translations";
import {
  HaldiIllustration,
  MandapCardIllustration,
  VidaiIllustration,
} from "./Illustrations";

interface EventCardProps {
  event: WeddingEventData;
  copy: TranslationSchema["events"]["cards"][WeddingEventData["id"]];
  viewLabel: string;
  index: number;
  onSelect: (event: WeddingEventData) => void;
}

export function EventCard({
  event,
  copy,
  viewLabel,
  index,
  onSelect,
}: EventCardProps) {
  const renderIllustration = () => {
    switch (event.illustrationKey) {
      case "haldi":
        return <HaldiIllustration className="h-44 w-full object-cover" />;
      case "mandap":
        return <MandapCardIllustration className="h-44 w-full object-cover" />;
      case "vidai":
        return <VidaiIllustration className="h-44 w-full object-cover" />;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      className="gold-border-frame group flex flex-col overflow-hidden rounded-2xl bg-[#FFF8E8] transition-shadow hover:shadow-2xl"
    >
      <button
        type="button"
        onClick={() => onSelect(event)}
        data-testid={`event-card-${event.id}`}
        className="flex h-full flex-col text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#701E32]"
      >
        <div className="overflow-hidden border-b border-[#C6A15B]/35">
          <div className="transition-transform duration-500 group-hover:scale-105">
            {renderIllustration()}
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <span className="inline-block rounded-full bg-[#701E32]/10 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#701E32]">
              {copy.day}
            </span>
            <h3 className="font-serif-display mt-2.5 text-2xl font-bold text-[#102F65] group-hover:text-[#701E32] transition-colors">
              {copy.title}
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-[#102F65]/85">
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0 text-[#C6A15B]" />
                <span>{copy.date}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-[#C6A15B]" />
                <span>{copy.time}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#C6A15B]" />
                <span>{copy.shortVenue}</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#C6A15B]/30 pt-4 text-xs font-semibold uppercase tracking-wider text-[#701E32]">
            <span>{viewLabel}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </button>
    </motion.article>
  );
}
