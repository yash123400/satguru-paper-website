"use client";

import { motion } from "framer-motion";
import TimelineStep from "@/components/ui/TimelineStep";

const steps = [
  {
    title: "Share Requirements",
    description: "Tell us your paper grade, quantity, and delivery location.",
  },
  {
    title: "Get Quote",
    description: "We provide competitive mill-direct pricing within 24 hours.",
  },
  {
    title: "Confirm & Dispatch",
    description: "Order confirmed, truck dispatched with e-way bill and documentation.",
  },
  {
    title: "Delivered & Invoiced",
    description: "Formal GST invoice, TReDS payment option available.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="howitworks-heading"
      className="section-padding"
      style={{ background: "var(--charcoal-mid)" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <div className="gold-line mx-auto" />
          <span className="section-label" style={{ color: "var(--gold)" }}>
            The Process
          </span>
          <h2
            id="howitworks-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--cream)",
              letterSpacing: "-0.02em",
            }}
          >
            Simple. Reliable. Fast.
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(247,244,238,0.55)" }}
          >
            From inquiry to delivery — a streamlined process designed
            around your business needs.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row gap-10 md:gap-4">
          {/* Animated background line (desktop) */}
          <motion.div
            className="hidden md:block absolute"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              top: "22px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              background: "linear-gradient(90deg, var(--gold), rgba(200,150,62,0.25))",
              transformOrigin: "left center",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <TimelineStep
              key={step.title}
              step={i + 1}
              title={step.title}
              description={step.description}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
