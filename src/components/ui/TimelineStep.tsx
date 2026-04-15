"use client";

import { motion } from "framer-motion";

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineStep({
  step,
  title,
  description,
  isLast = false,
}: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: step * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center flex-1 px-4"
    >
      {/* Step number watermark */}
      <div
        className="absolute -top-6 text-7xl font-bold select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-display)",
          color: "rgba(200, 150, 62, 0.07)",
          lineHeight: 1,
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {String(step).padStart(2, "0")}
      </div>

      {/* Circle */}
      <div
        className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full font-bold text-sm mb-5"
        style={{
          background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
          color: "var(--charcoal)",
          boxShadow: "0 4px 16px rgba(200, 150, 62, 0.3)",
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          fontWeight: 700,
        }}
      >
        {step}
      </div>

      {/* Content */}
      <h3
        className="font-semibold text-base mb-2 tracking-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--charcoal)", fontSize: "1.15rem" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: "20ch", margin: "0 auto" }}>
        {description}
      </p>

      {/* Connector line (hidden on last) */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-0 h-px"
          style={{ background: "linear-gradient(90deg, var(--gold), rgba(200,150,62,0.2))" }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
