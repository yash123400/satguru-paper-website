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

export default function ProductCard({
  icon,
  title,
  description,
  tags,
  index,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col rounded-2xl p-7 cursor-default"
      style={{
        background: "var(--cream)",
        border: "1px solid rgba(200, 150, 62, 0.15)",
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "var(--shadow-lg), 0 0 0 1px rgba(200, 150, 62, 0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
        style={{
          background: "rgba(200, 150, 62, 0.08)",
          border: "1px solid rgba(200, 150, 62, 0.18)",
          color: "var(--gold)",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-xl font-semibold mb-3 tracking-tight"
        style={{ fontFamily: "var(--font-display)", color: "var(--charcoal)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>

      {/* Gold accent line on hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-300"
        style={{
          background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
          width: "0%",
        }}
      />
    </motion.article>
  );
}
