"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export default function ProductCard({ icon, title, description, tags, index }: ProductCardProps) {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        background: "var(--black-card)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
      whileHover={{ boxShadow: "0 0 0 1px var(--border-strong), var(--shadow-gold)" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col rounded-2xl p-7 cursor-default overflow-hidden"
    >
      {/* Dynamic spotlight gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(201,168,76,0.10) 0%, transparent 60%)`
          ),
        }}
      />

      <div
        className="relative flex items-center justify-center w-12 h-12 rounded-xl mb-5"
        style={{
          background: "var(--gold-subtle)",
          border: "1px solid var(--border-gold)",
          color: "var(--gold)",
          transform: "translateZ(12px)",
        }}
      >
        {icon}
      </div>

      <h3
        className="relative text-xl font-semibold mb-3 tracking-tight"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--text-primary)",
          transform: "translateZ(8px)",
        }}
      >
        {title}
      </h3>

      <p
        className="relative text-sm leading-relaxed mb-5 flex-1"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      <div className="relative flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}
