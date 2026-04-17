"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/* ─── Split-text component (Arclin-style per-char animation) ─── */
function SplitText({
  text, delay = 0, className = "", style = {},
}: { text: string; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={className} style={{ display: "inline-block", ...style }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 28, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.028,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Cycling text for customer segments (Arclin-style) ─── */
const cyclingTerms = [
  "Printers",
  "Packagers",
  "Manufacturers",
  "FMCG Brands",
  "Exporters",
];

function CyclingText() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % cyclingTerms.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        minWidth: "220px",
        textAlign: "left",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "inline-block",
            color: "var(--gold)",
          }}
        >
          {cyclingTerms[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ─── 3D floating paper geometry (Arclin-inspired depth) ─── */
function PaperGeometry() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <motion.div
      ref={ref}
      style={{ y, position: "absolute", right: "clamp(1rem, 8vw, 8rem)", top: "50%", translateY: "-50%", pointerEvents: "none", zIndex: 1 }}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* 3D paper stack in perspective */}
      <div style={{ perspective: "900px", width: "clamp(200px, 25vw, 360px)", height: "clamp(260px, 32vw, 460px)" }}>
        {/* Back sheets */}
        {[
          { rotate: "rotateY(-22deg) rotateX(6deg) rotateZ(8deg) translateZ(-60px)", bg: "rgba(201,168,76,0.05)", delay: 0.9 },
          { rotate: "rotateY(-22deg) rotateX(6deg) rotateZ(4deg) translateZ(-30px)", bg: "rgba(201,168,76,0.08)", delay: 1.0 },
          { rotate: "rotateY(-22deg) rotateX(6deg) rotateZ(0deg) translateZ(0px)",   bg: "var(--card)",           delay: 1.1 },
        ].map((sheet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: sheet.delay, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              inset: 0,
              background: sheet.bg,
              border: `1px solid ${i === 2 ? "rgba(201,168,76,0.22)" : "rgba(255,255,255,0.05)"}`,
              borderRadius: "6px",
              transform: sheet.rotate,
              boxShadow: i === 2 ? "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.1)" : "none",
              transformStyle: "preserve-3d",
            }}
          >
            {i === 2 && (
              /* Front sheet content */
              <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {/* Header lines */}
                <div>
                  <div style={{ width: "42%", height: "3px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", borderRadius: "2px", marginBottom: "1.2rem" }} />
                  {[80, 65, 72, 55, 68].map((w, j) => (
                    <div key={j} style={{ height: "8px", width: `${w}%`, background: "rgba(255,255,255,0.06)", borderRadius: "4px", marginBottom: "10px" }} />
                  ))}
                </div>
                {/* Middle content */}
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "1rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[40, 55, 48].map((w, j) => (
                    <div key={j} style={{ height: "6px", width: `${w}%`, background: "rgba(201,168,76,0.15)", borderRadius: "3px" }} />
                  ))}
                </div>
                {/* Stamp */}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "50%",
                    border: "1.5px solid rgba(201,168,76,0.35)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(201,168,76,0.05)",
                  }}>
                    <div style={{ textAlign: "center", fontSize: "0.3rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--gold)", textTransform: "uppercase", lineHeight: 1.7 }}>
                      <div>MILL</div><div style={{ fontSize: "0.45rem" }}>✦</div><div>DIRECT</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}

        {/* Floating gold accent line */}
        <motion.div
          animate={{ opacity: [0.4, 0.9, 0.4], scaleX: [0.8, 1.05, 0.8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-24px",
            left: "8%",
            right: "8%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
            filter: "blur(1px)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Marquee ticker ─── */
const tickerItems = [
  "Poster Paper", "Kraft Paper", "MG Paper", "Stiffener Paper",
  "Mill-Direct Pricing", "GST Invoicing", "TReDS Enabled", "Pan-India Delivery",
  "80+ Years Heritage", "12+ Mill Partners",
];

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "0.75rem 0",
        background: "rgba(255,255,255,0.015)",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "1.5rem", padding: "0 1.5rem" }}>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
            <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-2)", whiteSpace: "nowrap" }}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── HERO ─── */
const stats = [
  { value: "80+", label: "Years" },
  { value: "Pan-India", label: "Supply" },
  { value: "12+", label: "Mill Partners" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 120]);
  const textY = useTransform(scrollY, [0, 700], [0, 60]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", background: "var(--bg)" }}
    >
      {/* Parallax dark background layer */}
      <motion.div
        style={{ y: bgY, position: "absolute", inset: "-20%", zIndex: 0, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 25% 55%, rgba(201,168,76,0.06) 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, rgba(201,168,76,0.04) 0%, transparent 45%)",
        }} />
        {/* Fine dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at 40% 50%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 40% 50%, black 20%, transparent 70%)",
        }} />
      </motion.div>

      {/* 3D paper geometry — right side */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <PaperGeometry />
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        style={{ y: textY, position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <div className="section-container" style={{ paddingTop: "clamp(5rem,12vw,8rem)", paddingBottom: "3rem" }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}
          >
            <div style={{ width: "28px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontSize: "0.67rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>
              B2B Paper Trading · Since 4 Generations
            </span>
          </motion.div>

          {/* Headline — Arclin-style split text */}
          <div
            id="hero-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.2rem, 9vw, 8rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginBottom: "2rem",
              maxWidth: "14ch",
            }}
          >
            <div>
              <SplitText text="Khemka" delay={0.3} />
            </div>
            <div>
              <SplitText
                text="Papers"
                delay={0.5}
                style={{ color: "var(--gold)", textShadow: "0 0 80px rgba(201,168,76,0.25)" }}
              />
            </div>
          </div>

          {/* Cycling subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
              color: "var(--text-2)",
              marginBottom: "0.6rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <span>India&apos;s paper — delivered to</span>
            <CyclingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            style={{ fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)", color: "var(--text-3)", maxWidth: "44ch", lineHeight: 1.7, marginBottom: "2.5rem" }}
          >
            Mill-direct sourcing · Pan-India logistics · Formal GST invoicing · TReDS enabled
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}
          >
            <a
              href="#products"
              onClick={(e) => { e.preventDefault(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                padding: "0.85rem 2.2rem",
                background: "var(--gold)",
                color: "#06070A",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
                boxShadow: "0 4px 24px rgba(201,168,76,0.25)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--gold-light)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(201,168,76,0.35)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--gold)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(201,168,76,0.25)"; }}
            >
              View Products
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                padding: "0.85rem 2.2rem",
                background: "transparent",
                color: "var(--text)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "border-color 0.2s ease, color 0.2s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Get a Quote
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            style={{ display: "flex", gap: "clamp(1.5rem, 4vw, 3.5rem)", flexWrap: "wrap" }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {s.value}
                </span>
                <span style={{ fontSize: "0.67rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-3)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Ticker strip at bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <Ticker />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: "5rem", left: "clamp(1.25rem, 5vw, 4rem)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", zIndex: 2 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
        >
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
          <span style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "var(--text-3)", textTransform: "uppercase" }}>Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
