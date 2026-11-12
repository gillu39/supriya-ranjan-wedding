import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  Caveat,
  Noto_Serif_Devanagari,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-handwritten",
  display: "swap",
});

const devanagariSerif = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari-serif",
  display: "swap",
});

const devanagariSans = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://weddinginvitation-nu-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Supriya & Dr. Ranjan — Wedding Invitation | 24 November 2026",
  description:
    "With the blessings of our elders, you are cordially invited to celebrate the wedding of Supriya Singh & Dr. Ranjan Bhaiji Patariya on Tuesday, 24 November 2026 at New Saubhagya Lawn, Lucknow.",
  keywords: [
    "Supriya Singh",
    "Dr. Ranjan Bhaiji Patariya",
    "Indian Wedding Invitation",
    "Lucknow Wedding",
    "New Saubhagya Lawn",
    "24 November 2026",
  ],
  openGraph: {
    title: "Supriya & Ranjan — Wedding Invitation",
    description:
      "Two souls, one beautiful journey. Celebrate with us on 24 November 2026 at Saubhagya Lawn, Lucknow.",
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    siteName: "Supriya & Ranjan Wedding",
    images: [
      {
        url: `${siteUrl}/og-card.jpg`,
        secureUrl: `${siteUrl}/og-card.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Supriya & Ranjan — Wedding Invitation | 24 November 2026, Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supriya & Ranjan — Wedding Invitation",
    description:
      "Celebrate the wedding of Supriya Singh & Dr. Ranjan Bhaiji Patariya on 24 November 2026 in Lucknow.",
    images: [`${siteUrl}/og-card.jpg`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102F65",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${caveat.variable} ${devanagariSerif.variable} ${devanagariSans.variable}`}
    >
      <body className="min-h-screen bg-[#FFF8E8] text-[#102F65] antialiased selection:bg-[#C6A15B]/30 selection:text-[#102F65]">
        {children}
      </body>
    </html>
  );
}
