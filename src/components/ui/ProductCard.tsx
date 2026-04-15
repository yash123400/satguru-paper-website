"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export default function ProductCard({ icon, title, description, tags, index }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col rounded-2xl p-7 cursor-default"
      style={{
        background: "var(--black-card)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-gold)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      <div
        className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
        style={{
          background: "var(--gold-subtle)",
          border: "1px solid var(--border)",
          color: "var(--gold)",
        }}
      >
        {icon}
      </div>

      <h3
        className="text-xl font-semibold mb-3 tracking-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
      >
        {title}
      </h3>

      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}
