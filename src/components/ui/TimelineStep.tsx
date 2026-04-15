"use client";

import { motion } from "framer-motion";

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineStep({ step, title, description, isLast = false }: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: step * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center flex-1 px-4"
    >
      <div
        className="absolute -top-6 text-7xl font-bold select-none pointer-events-none"
        style={{ fontFamily: "var(--font-display)", color: "rgba(212,168,83,0.06)", lineHeight: 1, zIndex: 0 }}
        aria-hidden="true"
      >
        {String(step).padStart(2, "0")}
      </div>

      <div
        className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full font-bold text-sm mb-5"
        style={{
          background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
          color: "#0A0A0B",
          boxShadow: "0 4px 20px rgba(212,168,83,0.35)",
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          fontWeight: 700,
        }}
      >
        {step}
      </div>

      <h3
        className="font-semibold text-base mb-2 tracking-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", fontSize: "1.15rem" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: "20ch", margin: "0 auto" }}>
        {description}
      </p>

      {!isLast && (
        <div
          className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-0 h-px"
          style={{ background: "linear-gradient(90deg, var(--gold), rgba(212,168,83,0.1))" }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
