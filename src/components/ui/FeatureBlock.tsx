"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureBlockProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
  accentColor?: string;
}

export default function FeatureBlock({ icon, title, description, index, accentColor = "var(--gold)" }: FeatureBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4 p-6 rounded-xl"
      style={{
        background: "var(--black-card)",
        border: "1px solid var(--border)",
      }}
    >
      <div
        className="flex items-center justify-center w-11 h-11 rounded-lg"
        style={{
          background: `${accentColor}12`,
          border: `1px solid ${accentColor}25`,
          color: accentColor,
        }}
      >
        {icon}
      </div>
      <div>
        <h3
          className="font-semibold mb-1.5 tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", fontSize: "1.1rem" }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
