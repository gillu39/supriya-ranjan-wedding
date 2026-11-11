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
    lat: 26.8920583,
    lng: 80.9345259,
    mapsUrl:
      "https://www.google.com/maps/place/Saubhagya+Lawn/@26.8920583,80.9345259,17.44z/",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=26.8920583,80.9345259",
    embedUrl:
      "https://maps.google.com/maps?q=26.8920583,80.9345259&z=17&output=embed",
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
  category: "bride" | "groom" | "couple" | "family" | "decor";
  aspect: "portrait" | "landscape" | "square";
  motif: "lotus" | "peacock" | "mandap" | "family" | "marigold";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "couple-portrait", category: "couple", aspect: "portrait", motif: "mandap" },
  { id: "bride-portrait", category: "bride", aspect: "portrait", motif: "lotus" },
  { id: "groom-portrait", category: "groom", aspect: "portrait", motif: "peacock" },
  { id: "family-bride", category: "family", aspect: "landscape", motif: "family" },
  { id: "family-groom", category: "family", aspect: "landscape", motif: "family" },
  { id: "decor-mandap", category: "decor", aspect: "square", motif: "marigold" },
];

export interface BlessingEntry {
  id: string;
  guestName: string;
  message: string;
  createdAt: string;
  approved: boolean;
  isSeed?: boolean;
}
