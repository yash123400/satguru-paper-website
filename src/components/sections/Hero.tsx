"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "28+", label: "States Supplied" },
  { value: "12+", label: "Mill Partners" },
  { value: "250+", label: "Tons / Month" },
];

function OrnamentalDivider({ light = false }: { light?: boolean }) {
  const c = light ? "rgba(139,100,20,0.5)" : "#8B6414";
  const ca = light ? "rgba(180,130,40,0.6)" : "#B8860B";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, transparent, ${c})` }} />
      <span style={{ color: c, fontSize: "0.55rem", letterSpacing: "6px" }}>✦ ✦ ✦</span>
      <span style={{ color: ca, fontSize: "0.9rem" }}>❦</span>
      <span style={{ color: c, fontSize: "0.55rem", letterSpacing: "6px" }}>✦ ✦ ✦</span>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(to left, transparent, ${c})` }} />
    </div>
  );
}

const scrollVariants = {
  hidden: { scaleY: 0.04, opacity: 0 },
  show: {
    scaleY: 1, opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const contentVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at center, #1A1208 0%, #0A0704 60%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(5rem,10vw,7rem) clamp(1rem,4vw,2rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient gold glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 50%, rgba(180,130,40,0.07) 0%, transparent 65%)",
      }} />

      {/* Decorative corner marks */}
      {[
        { top: "2rem", left: "2rem" },
        { top: "2rem", right: "2rem", transform: "scaleX(-1)" },
        { bottom: "2rem", left: "2rem", transform: "scaleY(-1)" },
        { bottom: "2rem", right: "2rem", transform: "scale(-1,-1)" },
      ].map((pos, i) => (
        <div key={i} aria-hidden="true" style={{
          position: "absolute", ...pos,
          width: "48px", height: "48px",
          borderTop: "1px solid rgba(180,130,40,0.25)",
          borderLeft: "1px solid rgba(180,130,40,0.25)",
          pointerEvents: "none",
        }} />
      ))}

      {/* THE SCROLL */}
      <motion.div
        variants={scrollVariants}
        initial="hidden"
        animate="show"
        style={{ width: "100%", maxWidth: "720px", transformOrigin: "center center" }}
      >
        {/* Top wooden roller */}
        <div style={{
          height: "28px",
          borderRadius: "6px 6px 0 0",
          background: "linear-gradient(to bottom, #3D2206 0%, #7A4A12 18%, #C48020 35%, #E8B848 50%, #C48020 65%, #7A4A12 82%, #3D2206 100%)",
          boxShadow: "0 -4px 16px rgba(0,0,0,0.7), 0 4px 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,220,100,0.2)",
          position: "relative",
          zIndex: 2,
        }}>
          {/* Roller end caps */}
          {[{ left: "12px" }, { right: "12px" }].map((pos, i) => (
            <div key={i} style={{
              position: "absolute", top: "3px", bottom: "3px",
              width: "18px", borderRadius: "4px",
              background: "linear-gradient(to bottom, #5C3210, #A06020, #5C3210)",
              boxShadow: "inset 0 0 4px rgba(0,0,0,0.4)",
              ...pos,
            }} />
          ))}
        </div>

        {/* Parchment body */}
        <div style={{
          background: `
            linear-gradient(
              175deg,
              #F0DFA8 0%, #EDD490 6%,
              #F5E6B4 18%, #EED888 30%,
              #F8EEC0 42%, #F0DC98 54%,
              #F8EEC0 66%, #EED888 78%,
              #F5E6B4 90%, #EDD490 96%,
              #F0DFA8 100%
            )
          `,
          padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 3.5rem)",
          position: "relative",
          boxShadow: "0 0 60px rgba(0,0,0,0.8), inset 0 0 80px rgba(139,90,20,0.12)",
          overflow: "hidden",
        }}>
          {/* Paper grain overlay */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.07'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
            opacity: 0.6,
            mixBlendMode: "multiply",
          }} />

          {/* Aged edge vignette */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `
              radial-gradient(ellipse at 0% 0%, rgba(120,70,10,0.18) 0%, transparent 50%),
              radial-gradient(ellipse at 100% 0%, rgba(120,70,10,0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 0% 100%, rgba(120,70,10,0.18) 0%, transparent 50%),
              radial-gradient(ellipse at 100% 100%, rgba(120,70,10,0.15) 0%, transparent 50%)
            `,
          }} />

          {/* CONTENT */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="show"
            style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", textAlign: "center" }}
          >
            {/* Top ornamental */}
            <motion.div variants={itemVariants} style={{ width: "100%" }}>
              <OrnamentalDivider />
            </motion.div>

            {/* Establishment line */}
            <motion.p variants={itemVariants} style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#7A4E14",
              fontFamily: "var(--font-body)",
            }}>
              Established 2009 &nbsp;·&nbsp; Ludhiana, Punjab
            </motion.p>

            {/* Company name */}
            <motion.div variants={itemVariants}>
              <h1 id="hero-heading" style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                fontWeight: 700,
                color: "#2C1608",
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                marginBottom: "0.1rem",
              }}>
                Khemka Papers
              </h1>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.95rem, 2.2vw, 1.3rem)",
                fontStyle: "italic",
                color: "#7A4E14",
                letterSpacing: "0.04em",
              }}>
                Trusted B2B Paper Trading Across India
              </p>
            </motion.div>

            {/* Mid ornamental */}
            <motion.div variants={itemVariants} style={{ width: "80%" }}>
              <OrnamentalDivider light />
            </motion.div>

            {/* Tagline */}
            <motion.p variants={itemVariants} style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 3vw, 1.9rem)",
              fontWeight: 600,
              color: "#3A1E08",
              lineHeight: 1.4,
              maxWidth: "36ch",
              fontStyle: "italic",
            }}>
              &ldquo;India&apos;s paper, sourced from the finest mills &mdash; delivered to your door for fifteen years.&rdquo;
            </motion.p>

            {/* Body */}
            <motion.p variants={itemVariants} style={{
              fontSize: "clamp(0.82rem, 1.4vw, 0.95rem)",
              color: "#5C3A18",
              lineHeight: 1.75,
              maxWidth: "48ch",
              fontFamily: "var(--font-body)",
            }}>
              Supplying poster paper, kraft, MG &amp; stiffener paper to printers,
              packagers &amp; manufacturers across India. Mill-direct sourcing.
              Formal GST invoicing. TReDS enabled.
            </motion.p>

            {/* Stats row */}
            <motion.div variants={itemVariants} style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
              width: "100%",
              marginTop: "0.25rem",
              borderTop: "1px solid rgba(139,100,20,0.3)",
              borderBottom: "1px solid rgba(139,100,20,0.3)",
            }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  padding: "0.9rem 0.5rem",
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(139,100,20,0.25)" : "none",
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.3rem, 3vw, 2rem)",
                    fontWeight: 700,
                    color: "#5C3210",
                    lineHeight: 1,
                  }}>{s.value}</div>
                  <div style={{
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#8B6018",
                    marginTop: "0.3rem",
                    fontFamily: "var(--font-body)",
                  }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  padding: "0.75rem 2rem",
                  background: "linear-gradient(135deg, #5C3210, #8B4A18, #5C3210)",
                  color: "#F5E6B4",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(139,90,20,0.6)",
                  borderRadius: "3px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,220,100,0.1)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #7A4418, #B05C20, #7A4418)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #5C3210, #8B4A18, #5C3210)"; }}
              >
                View Products
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  padding: "0.75rem 2rem",
                  background: "transparent",
                  color: "#5C3210",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(92,50,16,0.5)",
                  borderRadius: "3px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(92,50,16,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                Get a Quote
              </a>
            </motion.div>

            {/* Bottom ornamental */}
            <motion.div variants={itemVariants} style={{ width: "100%" }}>
              <OrnamentalDivider />
            </motion.div>

            {/* Wax seal / stamp */}
            <motion.div
              variants={itemVariants}
              style={{
                width: "72px", height: "72px",
                borderRadius: "50%",
                background: "radial-gradient(circle at 38% 38%, #D44420, #8B1A0A)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,100,80,0.2)",
                border: "2px solid rgba(180,60,30,0.5)",
              }}
              aria-label="Quality assured seal"
            >
              <div style={{ fontSize: "0.36rem", fontWeight: 800, letterSpacing: "0.12em", color: "#F5D0B0", textTransform: "uppercase", textAlign: "center", lineHeight: 1.6 }}>
                <div>QUALITY</div>
                <div style={{ fontSize: "0.55rem" }}>✦</div>
                <div>ASSURED</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wooden roller */}
        <div style={{
          height: "28px",
          borderRadius: "0 0 6px 6px",
          background: "linear-gradient(to bottom, #3D2206 0%, #7A4A12 18%, #C48020 35%, #E8B848 50%, #C48020 65%, #7A4A12 82%, #3D2206 100%)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.7), 0 -4px 8px rgba(0,0,0,0.4), inset 0 -1px 0 rgba(255,220,100,0.2)",
          position: "relative",
          zIndex: 2,
        }}>
          {[{ left: "12px" }, { right: "12px" }].map((pos, i) => (
            <div key={i} style={{
              position: "absolute", top: "3px", bottom: "3px",
              width: "18px", borderRadius: "4px",
              background: "linear-gradient(to bottom, #5C3210, #A06020, #5C3210)",
              boxShadow: "inset 0 0 4px rgba(0,0,0,0.4)",
              ...pos,
            }} />
          ))}
        </div>
      </motion.div>

      {/* Scroll down hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}
        aria-hidden="true"
      >
        <span style={{ fontSize: "0.58rem", letterSpacing: "0.22em", color: "rgba(180,130,40,0.45)", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, rgba(180,130,40,0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
