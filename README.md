# Supriya & Dr. Ranjan — Interactive Indian Wedding Invitation

A production-quality, mobile-first, bilingual (**English & Hindi**) Indian wedding invitation built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and optional **Supabase** persistence.

## Wedding Details Configured

- **Bride:** Supriya Singh (Granddaughter of Late Jagrani & Late Bandha Lal • Daughter of Mr. Ram Kumar & Mrs. Bishakha)
- **Groom:** Dr. Ranjan Bhaiji Patariya (Grandson of Late Jamuntra Devi & Late Ram Sevak Ram • Son of Mrs. Indrawati Prasad & Mr. Ram Kumar Prasad)
- **Haldi & Mehndi:** Monday, 23 November 2026 • 4:00 PM onwards • Bride's residence, Lucknow (configurable placeholder)
- **Wedding Ceremony:** Tuesday, 24 November 2026 • 7:00 PM onwards • New Saubhagya Lawn, Lucknow
- **Vidai:** Wednesday, 25 November 2026 • 10:00 AM onwards

---

## Features Implemented

1. **Interactive 3D Envelope Opening:** Textured ivory & royal navy envelope with antique gold borders, embossed `S & R` wax seal, floating petals, smooth 3D flap opening, skip animation button, and music trigger upon interaction.
2. **Hero Section with Mandap Illustration:** Custom-illustrated illuminated mandap with gentle parallax & GSAP entrance animation.
3. **Our Story & Families:** Illustrated bride & groom profile cards plus separate family lineage cards.
4. **Timezone-Accurate Wedding Countdown:** Live countdown targeting `24 November 2026, 7:00 PM IST (Asia/Kolkata)`, stopping cleanly at zero with a wedding-day celebration message.
5. **Canvas Scratch-to-Reveal Card:** True HTML5 `<canvas>` scratch interaction supporting mouse, touch, and mobile finger gestures, plus an accessible fallback button.
6. **Wedding Celebrations & Calendar Save:** Three illustrated ceremony cards opening a detailed modal with `.ICS` download and Google Calendar links.
7. **Wedding Venue & Maps Integration:** Embedded Google Maps preview for New Saubhagya Lawn, Get Directions, Open in Google Maps, and Copy Location Link.
8. **Luxury Portrait & Decor Gallery:** Responsive placeholder gallery grid with full-screen lightbox, keyboard (`Esc`, `←`, `→`) and button navigation.
9. **RSVP System (`/api/rsvp`):** Full validation, bilingual error/confirmation messages, honeypot anti-spam, Supabase persistence, and transparent Demo Fallback Mode.
10. **Blessings & Wishes Wall (`/api/blessings`):** Handwritten-style keepsake cards with validation, HTML sanitization, rate-limiting, and moderation support.
11. **Traditional Indian Instrumental Player:** Includes an original synthesized royalty-free Raag Bhupali Bansuri/Santoor instrumental (`public/audio/shehnai-bansuri-wedding.wav`) with play/pause, mute/unmute, and volume slider.
12. **Complete Bilingual Support (`EN | हिन्दी`):** Instant client-side switching with `Noto Serif Devanagari` & `Noto Sans Devanagari` typography.

---

## Local Installation & Running

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Configurable Placeholders & Custom Assets

Update `.env.local` (or Vercel Environment Variables):

- `NEXT_PUBLIC_HALDI_ADDRESS`: Add the exact residence street address for Haldi & Mehndi when ready.
- `NEXT_PUBLIC_RSVP_PHONE`: Add Mr. Ram Kumar's phone number when ready.
- `NEXT_PUBLIC_SITE_URL`: Set to your live Vercel URL (e.g., `https://supriya-ranjan-wedding.vercel.app`) for WhatsApp Open Graph metadata.

### Replacing Background Music
The project ships with an original royalty-free instrumental at `public/audio/shehnai-bansuri-wedding.wav`.
To use a licensed shehnai/bansuri/santoor track:
1. Place your `.mp3` or `.wav` file inside `public/audio/` (e.g., `public/audio/wedding-shehnai.mp3`).
2. Update `WEDDING_CONFIG.audioPath` in `lib/wedding-data.ts`.

### Replacing Gallery Placeholders with Real Photos
Replace the placeholder cards in `components/GallerySection.tsx` with `<img loading="lazy" src="/images/..." />` pointing to your photos inside `public/images/`.

---

## Supabase Backend Setup (Optional — Demo Fallback Works Out of the Box)

Without Supabase credentials, `/api/rsvp` and `/api/blessings` automatically run in **Demo Storage Mode** (clearly indicated in the UI).

To enable permanent Supabase database storage:
1. Create a free project at [supabase.com](https://supabase.com).
2. Run this SQL in the Supabase SQL Editor:

```sql
create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  mobile text not null,
  guests_count integer not null default 1,
  events text[] not null default '{}',
  attending text not null check (attending in ('accept', 'decline')),
  message text default '',
  created_at timestamptz not null default now()
);

create table if not exists blessings (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  message text not null,
  approved boolean not null default true,
  created_at timestamptz not null default now()
);
```

3. Set these **server-only** environment variables (do NOT prefix with `NEXT_PUBLIC_`):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

---

## Deploying to Vercel (Free Hobby Tier)

1. Create a free repository on [github.com/new](https://github.com/new) and push this codebase:
   ```bash
   git init
   git add .
   git commit -m "Initial Supriya & Dr. Ranjan wedding invitation"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Sign in to [vercel.com](https://vercel.com) with GitHub and click **Add New Project**.
3. Import your repository, add any optional environment variables (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_HALDI_ADDRESS`, `NEXT_PUBLIC_RSVP_PHONE`), and click **Deploy**.
4. Share your live `https://<project>.vercel.app` link on WhatsApp!
