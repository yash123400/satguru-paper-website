interface LogoProps {
  height?: number;
  className?: string;
}

/**
 * KP monogram logo — matches the brand identity:
 * dark-charcoal K + copper P with "KHEMKA PAPERS" wordmark
 */
export default function Logo({ height = 40, className = "" }: LogoProps) {
  const w = height * 1.42;
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 142 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Khemka Papers"
    >
      {/* K — dark charcoal */}
      <text
        x="4"
        y="72"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="78"
        fill="#1A1208"
        letterSpacing="-4"
      >
        K
      </text>
      {/* P — copper/rust (from logo) */}
      <text
        x="62"
        y="72"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="78"
        fill="#B5622A"
        letterSpacing="-4"
      >
        P
      </text>
      {/* Separator line */}
      <line x1="4" y1="81" x2="138" y2="81" stroke="#B5622A" strokeWidth="1.5" />
      {/* Wordmark */}
      <text
        x="71"
        y="95"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="11"
        fill="#1A1208"
        letterSpacing="3.5"
      >
        KHEMKA PAPERS
      </text>
    </svg>
  );
}
