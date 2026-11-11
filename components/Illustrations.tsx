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
      {/* Paisley & lotus bud corner */}
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
      <path
        d="M64 12C70 12 74 16 74 20C70 20 66 17 64 12Z"
        fill="#C6A15B"
        fillOpacity="0.6"
      />
      <path
        d="M12 64C12 70 16 74 20 74C20 70 17 66 12 64Z"
        fill="#C6A15B"
        fillOpacity="0.6"
      />
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
        {/* Central Lotus */}
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
      {/* Organic wax seal silhouette */}
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
      {/* Plume fronds */}
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
          <stop offset="0%" stopColor="#0B224B" />
          <stop offset="55%" stopColor="#102F65" />
          <stop offset="100%" stopColor="#261A3C" />
        </linearGradient>
        <radialGradient id="mandapGlow" cx="50%" cy="55%" r="48%">
          <stop offset="0%" stopColor="#FFD88A" stopOpacity="0.34" />
          <stop offset="50%" stopColor="#C6A15B" stopOpacity="0.12" />
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

      {/* Subtle stars */}
      {[
        [130, 90], [240, 140], [360, 70], [490, 110], [720, 85],
        [860, 125], [990, 75], [1090, 150], [160, 240], [1040, 250],
      ].map(([cx, cy], idx) => (
        <circle
          key={idx}
          cx={cx}
          cy={cy}
          r={idx % 2 === 0 ? 1.8 : 1.2}
          fill="#FFF8E8"
          fillOpacity="0.55"
        />
      ))}

      {/* Grand Mughal Jharokha Arch Backdrop */}
      <path
        d="M170 720V310C170 215 245 145 350 130C425 118 515 70 600 44C685 70 775 118 850 130C955 145 1030 215 1030 310V720"
        stroke="url(#goldStroke)"
        strokeWidth="2"
        strokeOpacity="0.55"
        fill="#102F65"
        fillOpacity="0.35"
      />
      <path
        d="M210 720V322C210 238 275 178 368 164C438 154 522 110 600 84C678 110 762 154 832 164C925 178 990 238 990 322V720"
        stroke="#C6A15B"
        strokeWidth="1"
        strokeOpacity="0.35"
        strokeDasharray="6 6"
      />

      {/* Mandap Dome & Canopy */}
      <path
        d="M310 285C390 210 490 175 600 175C710 175 810 210 890 285H310Z"
        fill="#701E32"
        fillOpacity="0.65"
        stroke="#C6A15B"
        strokeWidth="1.8"
      />
      {/* Mandap Kalash finial */}
      <path d="M600 138V175" stroke="#C6A15B" strokeWidth="2.5" />
      <circle cx="600" cy="153" r="8" fill="#C6A15B" />
      <circle cx="600" cy="140" r="4" fill="#FFF8E8" />

      {/* Left & Right Carved Mandap Pillars */}
      <rect x="330" y="285" width="22" height="385" fill="#1A3A70" stroke="#C6A15B" strokeWidth="1.2" />
      <rect x="848" y="285" width="22" height="385" fill="#1A3A70" stroke="#C6A15B" strokeWidth="1.2" />
      <rect x="318" y="655" width="46" height="22" rx="3" fill="#C6A15B" fillOpacity="0.7" />
      <rect x="836" y="655" width="46" height="22" rx="3" fill="#C6A15B" fillOpacity="0.7" />

      {/* Marigold Toran Garlands draped along canopy */}
      {[0, 1, 2, 3].map((seg) => {
        const x1 = 352 + seg * 124;
        const x2 = x1 + 124;
        const mx = (x1 + x2) / 2;
        return (
          <g key={seg}>
            <path
              d={`M${x1} 285 Q${mx} 340 ${x2} 285`}
              stroke="#E89E3C"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="2 9"
              fill="none"
            />
            {/* Hanging Brass Diya */}
            <line x1={mx} y1="312" x2={mx} y2="352" stroke="#C6A15B" strokeWidth="1" />
            <ellipse cx={mx} cy="356" rx="7" ry="4" fill="#C6A15B" />
            <path d={`M${mx} 342 C${mx + 4} 348 ${mx + 3} 353 ${mx} 354 C${mx - 3} 353 ${mx - 4} 348 ${mx} 342Z`} fill="#FFD97D" />
          </g>
        );
      })}

      {/* Sacred Kalash & Floor Diya Glow at Base */}
      <ellipse cx="600" cy="672" rx="220" ry="18" fill="#C6A15B" fillOpacity="0.14" />
      <rect x="290" y="675" width="620" height="45" fill="#0B1E42" fillOpacity="0.85" />
    </svg>
  );
}

export function BrideIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 240" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="brideAura" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#E9C9C2" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFF8E8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="115" r="95" fill="url(#brideAura)" />
      {/* Scalloped Arch behind portrait */}
      <path
        d="M35 225V115C35 66 68 30 110 24C152 30 185 66 185 115V225"
        stroke="#C6A15B"
        strokeWidth="1.6"
        fill="#FFF8E8"
        fillOpacity="0.6"
      />
      {/* Bridal veil / dupatta drape */}
      <path
        d="M110 56C82 56 64 82 56 125L45 215H175L164 125C156 82 138 56 110 56Z"
        fill="#701E32"
        fillOpacity="0.92"
        stroke="#C6A15B"
        strokeWidth="1.5"
      />
      {/* Bridal silhouette */}
      <circle cx="110" cy="92" r="20" fill="#F5D7C6" stroke="#C6A15B" strokeWidth="1" />
      {/* Hair bun & floral gajra */}
      <path d="M90 88C90 71 130 71 130 88C122 80 98 80 90 88Z" fill="#1C1926" />
      <circle cx="110" cy="70" r="6" fill="#FFF8E8" stroke="#C6A15B" strokeWidth="1" />
      {/* Maang tikka */}
      <line x1="110" y1="73" x2="110" y2="83" stroke="#C6A15B" strokeWidth="1.4" />
      <circle cx="110" cy="84" r="2.6" fill="#C6A15B" />
      {/* Bridal Lehenga */}
      <path
        d="M84 134C88 122 132 122 136 134L156 215H64L84 134Z"
        fill="#8E233C"
        stroke="#C6A15B"
        strokeWidth="1.4"
      />
      {/* Gold Necklace & Embroidery */}
      <path d="M94 122Q110 136 126 122" stroke="#E8C77B" strokeWidth="2.4" fill="none" />
      <path d="M74 195H146" stroke="#C6A15B" strokeWidth="2" strokeDasharray="4 3" />
      {/* Lotus accent at base */}
      <path d="M110 198C115 206 115 214 110 220C105 214 105 206 110 198Z" fill="#E9C9C2" stroke="#C6A15B" strokeWidth="0.9" />
    </svg>
  );
}

export function GroomIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 240" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="groomAura" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#FFF8E8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="115" r="95" fill="url(#groomAura)" />
      {/* Arch */}
      <path
        d="M35 225V115C35 66 68 30 110 24C152 30 185 66 185 115V225"
        stroke="#C6A15B"
        strokeWidth="1.6"
        fill="#FFF8E8"
        fillOpacity="0.6"
      />
      {/* Face */}
      <circle cx="110" cy="94" r="19" fill="#F2D0BE" stroke="#C6A15B" strokeWidth="1" />
      {/* Royal Turban / Safa */}
      <path
        d="M84 88C82 67 96 54 112 54C128 54 139 67 136 88C124 81 96 81 84 88Z"
        fill="#701E32"
        stroke="#C6A15B"
        strokeWidth="1.3"
      />
      <path d="M88 78Q110 68 134 80" stroke="#C6A15B" strokeWidth="2" fill="none" />
      {/* Kalgi feather */}
      <path d="M123 61C130 46 140 42 144 45C138 52 131 58 125 65Z" fill="#E8C77B" stroke="#C6A15B" strokeWidth="0.9" />
      {/* Royal Navy & Ivory Sherwani */}
      <path
        d="M78 132C82 118 138 118 142 132L156 215H64L78 132Z"
        fill="#102F65"
        stroke="#C6A15B"
        strokeWidth="1.5"
      />
      {/* Stole / Dupatta */}
      <path d="M90 122L82 215H96L102 124Z" fill="#701E32" stroke="#C6A15B" strokeWidth="0.9" />
      {/* Jaimala / Garland */}
      <path
        d="M92 124Q110 158 128 124"
        stroke="#FFF8E8"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeDasharray="2 5"
        fill="none"
      />
      {/* Sherwani buttons */}
      {[140, 154, 168, 182].map((y) => (
        <circle key={y} cx="110" cy={y} r="2.2" fill="#C6A15B" />
      ))}
    </svg>
  );
}

export function HaldiIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 170" fill="none" className={className} aria-hidden="true">
      <rect width="280" height="170" rx="14" fill="#FFF4D6" />
      {/* Marigold Garland Top */}
      <path d="M12 20Q75 56 140 22Q205 56 268 20" stroke="#E59824" strokeWidth="8" strokeDasharray="3 8" strokeLinecap="round" />
      {[36, 75, 114, 166, 205, 244].map((x, idx) => (
        <circle key={idx} cx={x} cy={idx % 2 === 0 ? 34 : 40} r="7" fill="#F2AA24" stroke="#C86D14" strokeWidth="1" />
      ))}
      {/* Brass Urli / Haldi Bowl */}
      <ellipse cx="140" cy="134" rx="58" ry="12" fill="#C6A15B" fillOpacity="0.25" />
      <path d="M88 106H192C186 132 166 140 140 140C114 140 94 132 88 106Z" fill="#C6A15B" stroke="#8C6B2D" strokeWidth="1.5" />
      <ellipse cx="140" cy="106" rx="52" ry="11" fill="#F4B41A" stroke="#C6A15B" strokeWidth="1.5" />
      {/* Mango leaves */}
      <path d="M72 112C54 102 52 84 68 78C76 92 78 102 72 112Z" fill="#3D7A47" />
      <path d="M208 112C226 102 228 84 212 78C204 92 202 102 208 112Z" fill="#3D7A47" />
      {/* Mehndi Paisley Motifs */}
      <path d="M40 132C32 120 44 106 54 114C58 122 50 134 40 132Z" stroke="#701E32" strokeWidth="1.2" fill="#701E32" fillOpacity="0.16" />
      <path d="M240 132C248 120 236 106 226 114C222 122 230 134 240 132Z" stroke="#701E32" strokeWidth="1.2" fill="#701E32" fillOpacity="0.16" />
    </svg>
  );
}

export function MandapCardIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 170" fill="none" className={className} aria-hidden="true">
      <rect width="280" height="170" rx="14" fill="#102F65" />
      <circle cx="140" cy="95" r="70" fill="#C6A15B" fillOpacity="0.15" />
      {/* Mandap Dome */}
      <path d="M58 64C88 30 192 30 222 64H58Z" fill="#701E32" stroke="#C6A15B" strokeWidth="1.5" />
      <circle cx="140" cy="30" r="5" fill="#C6A15B" />
      {/* Pillars */}
      <rect x="64" y="64" width="12" height="86" fill="#1C458A" stroke="#C6A15B" strokeWidth="1" />
      <rect x="204" y="64" width="12" height="86" fill="#1C458A" stroke="#C6A15B" strokeWidth="1" />
      {/* Floral Toran */}
      <path d="M76 64Q108 86 140 64Q172 86 204 64" stroke="#E9C9C2" strokeWidth="4" strokeDasharray="3 5" fill="none" />
      {/* Sacred Havan Fire */}
      <rect x="116" y="132" width="48" height="14" rx="2" fill="#8C6B2D" stroke="#C6A15B" />
      <path d="M140 100C150 112 150 126 140 132C130 126 130 112 140 100Z" fill="#F29F3D" />
      <path d="M140 109C145 117 145 126 140 130C135 126 135 117 140 109Z" fill="#FFE08A" />
      {/* Hanging bells */}
      <line x1="108" y1="74" x2="108" y2="92" stroke="#C6A15B" />
      <circle cx="108" cy="94" r="4" fill="#C6A15B" />
      <line x1="172" y1="74" x2="172" y2="92" stroke="#C6A15B" />
      <circle cx="172" cy="94" r="4" fill="#C6A15B" />
    </svg>
  );
}

export function VidaiIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 170" fill="none" className={className} aria-hidden="true">
      <rect width="280" height="170" rx="14" fill="#FBECE7" />
      {/* Soft Morning Sun */}
      <circle cx="140" cy="74" r="44" fill="#F6D59B" fillOpacity="0.55" />
      {/* Ornate Doli / Palanquin */}
      <line x1="40" y1="114" x2="240" y2="114" stroke="#8C6B2D" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M88 114V78C88 60 112 48 140 48C168 48 192 60 192 78V114H88Z" fill="#701E32" stroke="#C6A15B" strokeWidth="1.6" />
      {/* Curtains */}
      <path d="M98 78Q114 96 100 114" stroke="#E9C9C2" strokeWidth="2.5" fill="none" />
      <path d="M182 78Q166 96 180 114" stroke="#E9C9C2" strokeWidth="2.5" fill="none" />
      <path d="M140 36V48" stroke="#C6A15B" strokeWidth="2" />
      <circle cx="140" cy="34" r="4" fill="#C6A15B" />
      {/* Scattered Rose Petals */}
      {[
        [56, 138], [88, 146], [126, 142], [164, 148], [204, 139], [224, 145],
      ].map(([cx, cy], idx) => (
        <ellipse
          key={idx}
          cx={cx}
          cy={cy}
          rx="5"
          ry="2.5"
          transform={`rotate(${idx * 25} ${cx} ${cy})`}
          fill="#B23A54"
          fillOpacity="0.6"
        />
      ))}
    </svg>
  );
}
