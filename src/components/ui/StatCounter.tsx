"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * value));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(value);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="stat-card text-center">
      <div
        className="text-3xl font-bold tracking-tight mb-1"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--gold-light)",
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
        }}
      >
        {prefix}{count}{suffix}
      </div>
      <div
        className="text-xs font-medium tracking-widest uppercase"
        style={{ color: "rgba(247,244,238,0.55)", letterSpacing: "0.12em" }}
      >
        {label}
      </div>
    </div>
  );
}
