interface LogoProps {
  height?: number;
  className?: string;
}

/**
 * Khemka Papers logo — geometric pinwheel mark (inspired by Khanna Paper style)
 * 4 parallelogram blades in brand colors arranged in a pinwheel
 * Stacked wordmark: KHEMKA (bold dark) / PAPERS (light, wide-tracked)
 */
export default function Logo({ height = 44, className = "" }: LogoProps) {
  const aspectRatio = 160 / 125;
  const w = Math.round(height * aspectRatio);

  return (
    <svg
      width={w}
      height={height}
      viewBox="30 0 160 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Khemka Papers"
    >
      {/*
        Pinwheel mark — 4 parallelogram blades, each spanning 30° of arc
        at inner radius 8 and outer radius 30, centered at (90, 38)
        Blade angles: NE(300–330°), SE(30–60°), SW(120–150°), NW(210–240°)
      */}

      {/* NE blade — dark charcoal, like the bold K in the KP identity */}
      <polygon
        points="94,31 97,34 114,24 104,14"
        fill="#1A1208"
      />

      {/* SE blade — copper/rust, like the P in the KP identity */}
      <polygon
        points="97,42 94,45 104,62 114,52"
        fill="#B5622A"
      />

      {/* SW blade — medium warm brown */}
      <polygon
        points="86,45 83,42 66,52 76,62"
        fill="#6B5744"
      />

      {/* NW blade — light copper */}
      <polygon
        points="83,34 86,31 76,14 66,24"
        fill="#D4845A"
      />

      {/* KHEMKA — bold, serif, dark charcoal */}
      <text
        x="90"
        y="86"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="21"
        fill="#1A1208"
        letterSpacing="1.5"
      >
        KHEMKA
      </text>

      {/* PAPERS — lighter, sans-serif, wide tracking */}
      <text
        x="90"
        y="106"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="500"
        fontSize="11"
        fill="#6B5744"
        letterSpacing="5"
      >
        PAPERS
      </text>
    </svg>
  );
}
