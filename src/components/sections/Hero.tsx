"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/ui/StatCounter";
import Button from "@/components/ui/Button";

const stats = [
  { value: 15, suffix: "+", label: "Years in Business" },
  { value: 28, suffix: "+", label: "States Supplied" },
  { value: 12, suffix: "+", label: "Mill Partners" },
  { value: 250, suffix: "+", label: "Tons / Month" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col justify-center grain-overlay hero-pattern overflow-hidden"
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,150,62,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,150,62,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold circle accent */}
      <div
        className="absolute -right-40 top-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(200,150,62,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 pt-28 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={lineVariants}>
            <span className="section-label" style={{ color: "var(--gold)" }}>
              B2B Paper Trading · Ludhiana, Punjab
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={lineVariants}
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7.5vw, 6rem)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
            }}
          >
            India&apos;s Paper.
            <br />
            <span style={{ color: "var(--gold)" }}>Delivered Right.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={lineVariants}
            className="mb-10 text-base sm:text-lg leading-relaxed"
            style={{ color: "rgba(247,244,238,0.65)", maxWidth: "52ch" }}
          >
            Trusted B2B paper trading from Ludhiana — supplying quality poster
            paper, kraft, MG and stiffener paper to manufacturers across India
            for 15 years.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={lineVariants} className="flex flex-wrap gap-4 mb-16">
            <Button
              variant="primary"
              size="lg"
              href="#products"
              onClick={() => {
                document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
              }}
              ariaLabel="View our product range"
            >
              View Our Products
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#contact"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              ariaLabel="Contact us"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
          aria-label="Company statistics"
        >
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.18em", color: "rgba(247,244,238,0.3)", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(200,150,62,0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
