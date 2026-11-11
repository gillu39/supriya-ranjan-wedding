export type Language = "en" | "hi";

export interface WeddingEventData {
  id: "haldi-mehndi" | "wedding" | "vidai";
  dateISO: string;
  startHour24: number;
  startMinute: number;
  durationHours: number;
  venueUrl?: string;
  illustrationKey: "haldi" | "mandap" | "vidai";
}

export const WEDDING_CONFIG = {
  targetDateISO: "2026-11-24T19:00:00+05:30",
  timezone: "Asia/Kolkata",
  audioPath: "/audio/shehnai-bansuri-wedding.wav",
  venue: {
    name: "New Saubhagya Lawn",
    city: "Lucknow, Uttar Pradesh, India",
    lat: 26.8939236,
    lng: 80.9354617,
    mapsUrl: "https://maps.google.com/?q=26.8939236,80.9354617",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=26.8939236,80.9354617",
    embedUrl:
      "https://maps.google.com/maps?q=26.8939236,80.9354617&z=17&output=embed",
  },
  placeholders: {
    haldiAddress:
      process.env.NEXT_PUBLIC_HALDI_ADDRESS?.trim() || null,
    rsvpPhone:
      process.env.NEXT_PUBLIC_RSVP_PHONE?.trim() || null,
  },
} as const;

export const WEDDING_EVENTS: WeddingEventData[] = [
  {
    id: "haldi-mehndi",
    dateISO: "2026-11-23",
    startHour24: 16,
    startMinute: 0,
    durationHours: 4,
    illustrationKey: "haldi",
  },
  {
    id: "wedding",
    dateISO: "2026-11-24",
    startHour24: 19,
    startMinute: 0,
    durationHours: 5,
    venueUrl: WEDDING_CONFIG.venue.mapsUrl,
    illustrationKey: "mandap",
  },
  {
    id: "vidai",
    dateISO: "2026-11-25",
    startHour24: 10,
    startMinute: 0,
    durationHours: 2,
    illustrationKey: "vidai",
  },
];

export interface GalleryItem {
  id: string;
  category: "bride" | "groom" | "couple" | "family";
  imageSrc: string;
  objectPosition?: string;
}

export const COUPLE_PORTRAITS = {
  bride: "/images/bride-ceremony.jpg",
  groom: "/images/groom-sherwani.jpg",
  couple: "/images/couple-celebration.jpg",
} as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "couple-portrait",
    category: "couple",
    imageSrc: "/images/couple-celebration.jpg",
    objectPosition: "object-[50%_5%]",
  },
  {
    id: "bride-ceremony",
    category: "bride",
    imageSrc: "/images/bride-ceremony.jpg",
    objectPosition: "object-[38%_45%]",
  },
  {
    id: "groom-sherwani",
    category: "groom",
    imageSrc: "/images/groom-sherwani.jpg",
    objectPosition: "object-top",
  },
  {
    id: "family-blessings",
    category: "family",
    imageSrc: "/images/bride-family-blessings.jpg",
    objectPosition: "object-[30%_25%]",
  },
  {
    id: "bride-portrait",
    category: "bride",
    imageSrc: "/images/bride-solo.jpg",
    objectPosition: "object-[50%_28%]",
  },
  {
    id: "groom-portrait",
    category: "groom",
    imageSrc: "/images/groom-solo.jpg",
    objectPosition: "object-center",
  },
];

export interface BlessingEntry {
  id: string;
  guestName: string;
  message: string;
  createdAt: string;
  approved: boolean;
  isSeed?: boolean;
}
