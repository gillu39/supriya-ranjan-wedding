"use client";

import React from "react";

export function CornerFiligree({
  className = "",
  flipX = false,
  flipY = false,
}: {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
}) {
  const scaleX = flipX ? -1 : 1;
  const scaleY = flipY ? -1 : 1;
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: `scale(${scaleX}, ${scaleY})` }}
    >
      <path
        d="M8 112V36C8 20.5 20.5 8 36 8H112"
        stroke="#C6A15B"
        strokeWidth="1.5"
        strokeOpacity="0.85"
      />
      <path
        d="M16 96V38C16 25.8 25.8 16 38 16H96"
        stroke="#C6A15B"
        strokeWidth="0.9"
        strokeOpacity="0.55"
      />
      <path
        d="M22 46C22 28 32 20 48 22C36 27 30 34 26 48C23.5 48 22 47 22 46Z"
        fill="#C6A15B"
        fillOpacity="0.32"
        stroke="#C6A15B"
        strokeWidth="1"
      />
      <circle cx="20" cy="20" r="4" fill="#701E32" stroke="#C6A15B" strokeWidth="1" />
      <circle cx="56" cy="12" r="2" fill="#C6A15B" />
      <circle cx="12" cy="56" r="2" fill="#C6A15B" />
    </svg>
  );
}

export function LotusDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 select-none ${className}`}
      aria-hidden="true"
    >
      <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-[#C6A15B] to-[#C6A15B]" />
      <svg viewBox="0 0 80 34" className="w-16 h-7 shrink-0" fill="none">
        <path
          d="M40 4C44 12 45 19 40 26C35 19 36 12 40 4Z"
          fill="#701E32"
          stroke="#C6A15B"
          strokeWidth="1"
        />
        <path
          d="M40 26C31 23 26 16 28 9C34 12 37 18 40 26Z"
          fill="#E9C9C2"
          stroke="#C6A15B"
          strokeWidth="0.9"
        />
        <path
          d="M40 26C49 23 54 16 52 9C46 12 43 18 40 26Z"
          fill="#E9C9C2"
          stroke="#C6A15B"
          strokeWidth="0.9"
        />
        <path
          d="M40 27C28 27 21 23 19 17C26 18 32 21 40 27Z"
          fill="#C6A15B"
          fillOpacity="0.55"
        />
        <path
          d="M40 27C52 27 59 23 61 17C54 18 48 21 40 27Z"
          fill="#C6A15B"
          fillOpacity="0.55"
        />
        <circle cx="11" cy="22" r="2" fill="#C6A15B" />
        <circle cx="69" cy="22" r="2" fill="#C6A15B" />
        <path d="M26 29H54" stroke="#C6A15B" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <div className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent via-[#C6A15B] to-[#C6A15B]" />
    </div>
  );
}

export function WaxSealCrest({
  size = 84,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="waxGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#9B2C45" />
          <stop offset="55%" stopColor="#701E32" />
          <stop offset="100%" stopColor="#4A111F" />
        </radialGradient>
        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6C98A" />
          <stop offset="50%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#9A7638" />
        </linearGradient>
      </defs>
      <path
        d="M50 5C57 5 62 9 68 10C75 11 81 15 84 21C88 27 93 33 93 41C94 49 95 55 92 63C89 70 86 78 80 83C74 88 67 93 59 94C51 95 44 95 36 92C28 89 21 85 16 79C11 72 6 65 6 56C6 48 6 41 9 33C12 26 16 18 23 14C30 10 35 6 43 5.5C45.5 5.2 47.8 5 50 5Z"
        fill="url(#waxGrad)"
        stroke="url(#goldRim)"
        strokeWidth="2"
      />
      <circle
        cx="50"
        cy="50"
        r="34"
        stroke="url(#goldRim)"
        strokeWidth="1.2"
        strokeDasharray="3 2"
      />
      <circle cx="50" cy="50" r="29" stroke="#FFF8E8" strokeOpacity="0.25" strokeWidth="0.8" />
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fill="#FFF8E8"
        fontSize="21"
        fontWeight="600"
        fontFamily="Georgia, serif"
        letterSpacing="1.5"
      >
        S &amp; R
      </text>
    </svg>
  );
}

export function PeacockFeatherMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 140" fill="none" className={className} aria-hidden="true">
      <path
        d="M40 135C38 100 39 65 42 35"
        stroke="#C6A15B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <React.Fragment key={i}>
          <path
            d={`M40 ${110 - i * 13}C26 ${102 - i * 13} 18 ${92 - i * 13} 15 ${82 - i * 13}`}
            stroke="#C6A15B"
            strokeOpacity="0.55"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
          <path
            d={`M40 ${110 - i * 13}C54 ${102 - i * 13} 62 ${92 - i * 13} 65 ${82 - i * 13}`}
            stroke="#C6A15B"
            strokeOpacity="0.55"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </React.Fragment>
      ))}
      <ellipse cx="40" cy="34" rx="18" ry="25" fill="#102F65" fillOpacity="0.18" stroke="#C6A15B" strokeWidth="1" />
      <ellipse cx="40" cy="32" rx="12" ry="17" fill="#1E6B6B" fillOpacity="0.45" />
      <ellipse cx="40" cy="30" rx="7" ry="10" fill="#102F65" />
      <circle cx="40" cy="29" r="3" fill="#C6A15B" />
    </svg>
  );
}

export function MandapHeroScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 720"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#091C3E" />
          <stop offset="55%" stopColor="#102F65" />
          <stop offset="100%" stopColor="#261736" />
        </linearGradient>
        <radialGradient id="mandapGlow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#FFD88A" stopOpacity="0.4" />
          <stop offset="55%" stopColor="#C6A15B" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#102F65" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9A7638" />
          <stop offset="50%" stopColor="#E9CC8B" />
          <stop offset="100%" stopColor="#C6A15B" />
        </linearGradient>
      </defs>

      <rect width="1200" height="720" fill="url(#heroSky)" />
      <rect width="1200" height="720" fill="url(#mandapGlow)" />

      {/* Stars */}
      {[
        [110, 90], [220, 140], [340, 70], [490, 110], [720, 85],
        [860, 125], [990, 75], [1090, 150], [160, 240], [1040, 250],
        [80, 380], [1120, 360],
      ].map(([cx, cy], idx) => (
        <circle
          key={idx}
          cx={cx}
          cy={cy}
          r={idx % 2 === 0 ? 2 : 1.3}
          fill="#FFF8E8"
          fillOpacity="0.65"
        />
      ))}

      {/* Outer Palace Jharokha Arch */}
      <path
        d="M140 720V295C140 198 220 125 335 110C420 96 510 52 600 26C690 52 780 96 865 110C980 125 1060 198 1060 295V720"
        stroke="url(#goldStroke)"
        strokeWidth="2.2"
        strokeOpacity="0.65"
        fill="#102F65"
        fillOpacity="0.28"
      />

      {/* Side Hanging Lanterns / Diyas outside center card */}
      {[195, 255, 945, 1005].map((x, idx) => (
        <g key={x}>
          <line x1={x} y1="155" x2={x} y2={idx % 2 === 0 ? "250" : "295"} stroke="#C6A15B" strokeWidth="1.2" strokeOpacity="0.75" />
          <ellipse cx={x} cy={idx % 2 === 0 ? "258" : "303"} rx="9" ry="5" fill="#C6A15B" />
          <path
            d={`M${x} ${idx % 2 === 0 ? 240 : 285} C${x + 5} ${idx % 2 === 0 ? 248 : 293} ${x + 4} ${idx % 2 === 0 ? 255 : 300} ${x} ${idx % 2 === 0 ? 256 : 301} C${x - 4} ${idx % 2 === 0 ? 255 : 300} ${x - 5} ${idx % 2 === 0 ? 248 : 293} ${x} ${idx % 2 === 0 ? 240 : 285}Z`}
            fill="#FFE08A"
          />
        </g>
      ))}

      {/* Mandap Canopy & Pillars */}
      <path
        d="M285 270C375 188 485 150 600 150C715 150 825 188 915 270H285Z"
        fill="#701E32"
        fillOpacity="0.72"
        stroke="#C6A15B"
        strokeWidth="2"
      />
      <rect x="305" y="270" width="22" height="410" fill="#1A3A70" stroke="#C6A15B" strokeWidth="1.4" />
      <rect x="873" y="270" width="22" height="410" fill="#1A3A70" stroke="#C6A15B" strokeWidth="1.4" />

      {/* Marigold Torans */}
      {[0, 1, 2, 3].map((seg) => {
        const x1 = 327 + seg * 136;
        const x2 = x1 + 136;
        const mx = (x1 + x2) / 2;
        return (
          <path
            key={seg}
            d={`M${x1} 270 Q${mx} 325 ${x2} 270`}
            stroke="#E89E3C"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray="2 10"
            fill="none"
          />
        );
      })}

      <rect x="265" y="678" width="670" height="42" fill="#081734" fillOpacity="0.9" />
    </svg>
  );
}

/**
 * Refined Bridal Crest & Floral Archway Emblem (avoids flat cartoon circles)
 */
export function BrideIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="brideGlow" cx="50%" cy="48%" r="48%">
          <stop offset="0%" stopColor="#E9C9C2" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFF8E8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="110" r="96" fill="url(#brideGlow)" />
      {/* Scalloped Mughal Arch */}
      <path
        d="M36 198V108C36 62 70 28 110 22C150 28 184 62 184 108V198H36Z"
        fill="#FFF8E8"
        stroke="#C6A15B"
        strokeWidth="1.8"
      />
      <path
        d="M46 190V110C46 70 74 40 110 34C146 40 174 70 174 110V190H46Z"
        stroke="#C6A15B"
        strokeOpacity="0.45"
        strokeDasharray="4 3"
      />
      {/* Bridal Lotus & Kalire Crest */}
      <path d="M110 56C118 76 119 94 110 110C101 94 102 76 110 56Z" fill="#701E32" stroke="#C6A15B" strokeWidth="1.1" />
      <path d="M110 110C92 104 82 88 86 72C98 78 105 92 110 110Z" fill="#B23A54" stroke="#C6A15B" strokeWidth="1" />
      <path d="M110 110C128 104 138 88 134 72C122 78 115 92 110 110Z" fill="#B23A54" stroke="#C6A15B" strokeWidth="1" />
      <path d="M110 112C84 114 70 104 68 90C82 92 96 100 110 112Z" fill="#E9C9C2" stroke="#C6A15B" strokeWidth="0.9" />
      <path d="M110 112C136 114 150 104 152 90C138 92 124 100 110 112Z" fill="#E9C9C2" stroke="#C6A15B" strokeWidth="0.9" />
      {/* Hanging Bridal Kalire / Chandelier Pearls */}
      <line x1="82" y1="126" x2="82" y2="152" stroke="#C6A15B" strokeWidth="1.2" />
      <path d="M74 152H90L82 164L74 152Z" fill="#C6A15B" fillOpacity="0.65" stroke="#C6A15B" />
      <line x1="138" y1="126" x2="138" y2="152" stroke="#C6A15B" strokeWidth="1.2" />
      <path d="M130 152H146L138 164L130 152Z" fill="#C6A15B" fillOpacity="0.65" stroke="#C6A15B" />
      {/* Bridal Monogram Medallion */}
      <circle cx="110" cy="144" r="20" fill="#701E32" stroke="#C6A15B" strokeWidth="1.6" />
      <text x="110" y="151" textAnchor="middle" fill="#FFF8E8" fontSize="20" fontFamily="Georgia, serif" fontWeight="600">
        S
      </text>
      {/* Garland base */}
      <path d="M62 178Q110 194 158 178" stroke="#C6A15B" strokeWidth="2" strokeDasharray="3 4" fill="none" />
    </svg>
  );
}

/**
 * Refined Groom Royal Crest & Kalgi Archway Emblem
 */
export function GroomIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="groomGlow" cx="50%" cy="48%" r="48%">
          <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#FFF8E8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="110" r="96" fill="url(#groomGlow)" />
      <path
        d="M36 198V108C36 62 70 28 110 22C150 28 184 62 184 108V198H36Z"
        fill="#FFF8E8"
        stroke="#C6A15B"
        strokeWidth="1.8"
      />
      <path
        d="M46 190V110C46 70 74 40 110 34C146 40 174 70 174 110V190H46Z"
        stroke="#C6A15B"
        strokeOpacity="0.45"
        strokeDasharray="4 3"
      />
      {/* Royal Safa / Turban & Kalgi Emblem */}
      <path
        d="M72 98C70 74 88 58 110 58C132 58 150 74 148 98C130 89 90 89 72 98Z"
        fill="#701E32"
        stroke="#C6A15B"
        strokeWidth="1.5"
      />
      <path d="M76 86Q110 72 145 88" stroke="#E8C77B" strokeWidth="2.2" fill="none" />
      <path d="M126 64C135 45 147 40 152 44C144 53 136 61 129 69Z" fill="#E8C77B" stroke="#C6A15B" strokeWidth="1" />
      <circle cx="122" cy="70" r="4" fill="#FFF8E8" stroke="#C6A15B" strokeWidth="1.2" />
      {/* Groom Royal Navy Monogram Medallion */}
      <circle cx="110" cy="140" r="22" fill="#102F65" stroke="#C6A15B" strokeWidth="1.8" />
      <text x="110" y="148" textAnchor="middle" fill="#FFF8E8" fontSize="21" fontFamily="Georgia, serif" fontWeight="600">
        R
      </text>
      {/* Jaimala / Garland Swag */}
      <path d="M68 112Q110 132 152 112" stroke="#C6A15B" strokeWidth="3.2" strokeDasharray="2 5" strokeLinecap="round" fill="none" />
      <path d="M62 178Q110 194 158 178" stroke="#102F65" strokeOpacity="0.35" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function HaldiIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="haldiBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF0C2" />
          <stop offset="100%" stopColor="#FCE19A" />
        </linearGradient>
      </defs>
      <rect width="360" height="200" fill="url(#haldiBg)" />
      {/* Subtle Mandala Sunburst behind Urli */}
      <circle cx="180" cy="118" r="68" stroke="#E59824" strokeOpacity="0.28" strokeDasharray="5 5" strokeWidth="1.5" />
      <circle cx="180" cy="118" r="48" fill="#FFF8E8" fillOpacity="0.45" />
      {/* Marigold Toran Garlands */}
      <path d="M-10 16Q85 70 180 18Q275 70 370 16" stroke="#E08B1A" strokeWidth="10" strokeDasharray="2 10" strokeLinecap="round" />
      {[36, 85, 134, 226, 275, 324].map((x, idx) => (
        <circle key={idx} cx={x} cy={idx % 2 === 0 ? 36 : 44} r="8" fill="#F2AA24" stroke="#B55D0E" strokeWidth="1" />
      ))}
      {/* Brass Urli / Haldi Bowl */}
      <ellipse cx="180" cy="164" rx="68" ry="12" fill="#9A7638" fillOpacity="0.22" />
      <path d="M116 126H244C236 158 212 168 180 168C148 168 124 158 116 126Z" fill="#C6A15B" stroke="#7E5E24" strokeWidth="1.6" />
      <ellipse cx="180" cy="126" rx="64" ry="13" fill="#F6B81A" stroke="#C6A15B" strokeWidth="1.6" />
      {/* Mango Leaves */}
      <path d="M98 134C74 120 72 98 92 92C102 108 104 122 98 134Z" fill="#3A7544" />
      <path d="M262 134C286 120 288 98 268 92C258 108 256 122 262 134Z" fill="#3A7544" />
      {/* Henna Paisley Accents */}
      <path d="M46 158C34 142 50 122 64 134C70 146 58 160 46 158Z" stroke="#701E32" strokeWidth="1.3" fill="#701E32" fillOpacity="0.16" />
      <path d="M314 158C326 142 310 122 296 134C290 146 302 160 314 158Z" stroke="#701E32" strokeWidth="1.3" fill="#701E32" fillOpacity="0.16" />
    </svg>
  );
}

export function MandapCardIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mandapBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D2552" />
          <stop offset="100%" stopColor="#1B3C78" />
        </linearGradient>
      </defs>
      <rect width="360" height="200" fill="url(#mandapBg)" />
      <circle cx="180" cy="112" r="82" fill="#C6A15B" fillOpacity="0.16" />
      <path d="M70 72C110 28 250 28 290 72H70Z" fill="#701E32" stroke="#C6A15B" strokeWidth="1.8" />
      <circle cx="180" cy="30" r="6" fill="#C6A15B" />
      <rect x="78" y="72" width="14" height="106" fill="#1C458A" stroke="#C6A15B" strokeWidth="1.2" />
      <rect x="268" y="72" width="14" height="106" fill="#1C458A" stroke="#C6A15B" strokeWidth="1.2" />
      <path d="M92 72Q136 98 180 72Q224 98 268 72" stroke="#E9C9C2" strokeWidth="5" strokeDasharray="3 6" fill="none" />
      {/* Sacred Fire */}
      <rect x="150" y="158" width="60" height="16" rx="2" fill="#8C6B2D" stroke="#C6A15B" />
      <path d="M180 116C193 132 193 150 180 158C167 150 167 132 180 116Z" fill="#F29F3D" />
      <path d="M180 128C187 138 187 148 180 154C173 148 173 138 180 128Z" fill="#FFE08A" />
      {/* Bells */}
      <line x1="136" y1="84" x2="136" y2="108" stroke="#C6A15B" />
      <circle cx="136" cy="111" r="4.5" fill="#C6A15B" />
      <line x1="224" y1="84" x2="224" y2="108" stroke="#C6A15B" />
      <circle cx="224" cy="111" r="4.5" fill="#C6A15B" />
    </svg>
  );
}

export function VidaiIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="vidaiBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCE7E2" />
          <stop offset="100%" stopColor="#F5D7CE" />
        </linearGradient>
      </defs>
      <rect width="360" height="200" fill="url(#vidaiBg)" />
      <circle cx="180" cy="86" r="56" fill="#F6D59B" fillOpacity="0.6" />
      <line x1="56" y1="134" x2="304" y2="134" stroke="#8C6B2D" strokeWidth="4" strokeLinecap="round" />
      <path d="M116 134V90C116 68 145 54 180 54C215 54 244 68 244 90V134H116Z" fill="#701E32" stroke="#C6A15B" strokeWidth="1.8" />
      <path d="M128 90Q146 112 130 134" stroke="#E9C9C2" strokeWidth="2.8" fill="none" />
      <path d="M232 90Q214 112 230 134" stroke="#E9C9C2" strokeWidth="2.8" fill="none" />
      <path d="M180 38V54" stroke="#C6A15B" strokeWidth="2" />
      <circle cx="180" cy="36" r="5" fill="#C6A15B" />
      {[
        [72, 162], [116, 172], [164, 166], [212, 174], [258, 164], [290, 172],
      ].map(([cx, cy], idx) => (
        <ellipse
          key={idx}
          cx={cx}
          cy={cy}
          rx="6"
          ry="3"
          transform={`rotate(${idx * 24} ${cx} ${cy})`}
          fill="#B23A54"
          fillOpacity="0.6"
        />
      ))}
    </svg>
  );
}

/**
 * Six distinct bespoke artworks for Gallery keepsake frames (no repetition)
 */
export function GalleryArtwork({ id }: { id: string }) {
  switch (id) {
    case "couple-portrait":
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-48 w-full rounded-xl" aria-hidden="true">
          <rect width="320" height="200" fill="#102F65" />
          <path d="M40 200V72C40 40 94 22 160 18C226 22 280 40 280 72V200" fill="#173D7E" stroke="#C6A15B" strokeWidth="1.6" />
          {/* Intertwined Jaimala Garlands */}
          <circle cx="132" cy="105" r="44" stroke="#E9C9C2" strokeWidth="5" strokeDasharray="4 6" fill="none" />
          <circle cx="188" cy="105" r="44" stroke="#C6A15B" strokeWidth="5" strokeDasharray="4 6" fill="none" />
          <text x="160" y="112" textAnchor="middle" fill="#FFF8E8" fontSize="22" fontFamily="Georgia, serif" fontWeight="600">
            S &amp; R
          </text>
        </svg>
      );
    case "bride-portrait":
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-48 w-full rounded-xl" aria-hidden="true">
          <rect width="320" height="200" fill="#FBECE7" />
          <circle cx="160" cy="100" r="64" stroke="#C6A15B" strokeDasharray="3 4" fill="#FFF8E8" />
          {/* Lotus Bloom */}
          <path d="M160 52C169 72 170 94 160 112C150 94 151 72 160 52Z" fill="#701E32" stroke="#C6A15B" />
          <path d="M160 112C140 104 128 88 134 70C147 78 154 94 160 112Z" fill="#B23A54" stroke="#C6A15B" />
          <path d="M160 112C180 104 192 88 186 70C173 78 166 94 160 112Z" fill="#B23A54" stroke="#C6A15B" />
          <path d="M160 114C130 116 114 104 112 88C128 92 144 100 160 114Z" fill="#E9C9C2" stroke="#C6A15B" />
          <path d="M160 114C190 116 206 104 208 88C192 92 176 100 160 114Z" fill="#E9C9C2" stroke="#C6A15B" />
          <text x="160" y="146" textAnchor="middle" fill="#701E32" fontSize="14" fontFamily="Georgia, serif" letterSpacing="2">
            SUPRIYA
          </text>
        </svg>
      );
    case "groom-portrait":
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-48 w-full rounded-xl" aria-hidden="true">
          <rect width="320" height="200" fill="#F7EFDF" />
          <circle cx="160" cy="100" r="68" stroke="#102F65" strokeOpacity="0.3" strokeDasharray="3 4" fill="#FFF8E8" />
          <path d="M160 128C158 102 159 78 161 54" stroke="#C6A15B" strokeWidth="1.4" strokeLinecap="round" />
          <ellipse cx="160" cy="54" rx="16" ry="22" fill="#102F65" fillOpacity="0.18" stroke="#C6A15B" strokeWidth="1" />
          <ellipse cx="160" cy="52" rx="11" ry="15" fill="#1E6B6B" fillOpacity="0.48" />
          <ellipse cx="160" cy="50" rx="6.5" ry="9" fill="#102F65" />
          <circle cx="160" cy="49" r="2.8" fill="#C6A15B" />
          <text x="160" y="150" textAnchor="middle" fill="#102F65" fontSize="14" fontFamily="Georgia, serif" letterSpacing="2">
            DR. RANJAN
          </text>
        </svg>
      );
    case "family-bride":
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-48 w-full rounded-xl" aria-hidden="true">
          <rect width="320" height="200" fill="#FFF3DA" />
          {/* Ceremonial Mangal Kalash */}
          <path d="M132 108C120 128 128 158 160 158C192 158 200 128 188 108H132Z" fill="#C6A15B" stroke="#701E32" strokeWidth="1.5" />
          <circle cx="160" cy="96" r="16" fill="#8C5328" />
          <path d="M134 94C118 82 114 68 128 62C140 72 142 84 134 94Z" fill="#3A7544" />
          <path d="M186 94C202 82 206 68 192 62C180 72 178 84 186 94Z" fill="#3A7544" />
          <path d="M160 76V52" stroke="#701E32" strokeWidth="1.5" />
          <circle cx="160" cy="48" r="5" fill="#701E32" />
        </svg>
      );
    case "family-groom":
      return (
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-48 w-full rounded-xl" aria-hidden="true">
          <rect width="320" height="200" fill="#EEF2FA" />
          {/* Glowing Brass Aarti Diya */}
          <ellipse cx="160" cy="148" rx="64" ry="12" fill="#C6A15B" fillOpacity="0.35" stroke="#C6A15B" />
          <path d="M126 122H194L184 144H136L126 122Z" fill="#C6A15B" stroke="#8C6B2D" />
          <path d="M160 72C174 92 174 112 160 122C146 112 146 92 160 72Z" fill="#E8932C" />
          <path d="M160 88C167 100 167 112 160 118C153 112 153 100 160 88Z" fill="#FFE48F" />
        </svg>
      );
    default:
      return <MandapCardIllustration className="h-48 w-full rounded-xl" />;
  }
}
