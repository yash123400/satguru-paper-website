"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const badges = ["GST Registered", "MSME Registered", "TReDS Enabled", "Pan-India Supply"];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding" style={{ background: "var(--black)" }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="gold-line" />
            <span className="section-label">Our Story</span>
            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              India&apos;s Paper Trading Partner of Choice,
              <span style={{ color: "var(--gold)" }}> Since 4 Generations</span>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              What started as a two-person operation has grown into a trusted name in India&apos;s paper supply chain. We combine 15 years of deep mill relationships with modern, tech-enabled operations — giving our buyers the best of both worlds: reliability and responsiveness.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Today, we supply poster paper, kraft, MG, and stiffener paper to manufacturers across India, with every order backed by formal documentation and transparent pricing. Heritage trust. Fresh energy.
            </p>
            <div className="flex flex-wrap gap-3" role="list" aria-label="Certifications and credentials">
              {badges.map((badge) => (
                <div key={badge} className="trust-badge" role="listitem">
                  <BadgeCheck size={13} style={{ color: "var(--gold)" }} aria-hidden="true" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative flex items-center justify-center" style={{ width: "360px", height: "400px" }}>
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: "radial-gradient(ellipse at center, rgba(212,168,83,0.07) 0%, transparent 70%)" }}
              />
              <div className="paper-stack">
                <div className="paper-layer paper-layer-1" />
                <div className="paper-layer paper-layer-2" />
                <div className="paper-layer paper-layer-3">
                  <div className="absolute top-8 left-8 right-8">
                    <div className="h-2 rounded-full mb-3" style={{ background: "var(--gold)", width: "45%", opacity: 0.5 }} />
                    <div className="h-1.5 rounded-full mb-2" style={{ background: "var(--black-border)", width: "80%" }} />
                    <div className="h-1.5 rounded-full mb-2" style={{ background: "var(--black-border)", width: "65%" }} />
                    <div className="h-1.5 rounded-full mb-5" style={{ background: "var(--black-border)", width: "72%" }} />
                    <div className="h-px w-full mb-5" style={{ background: "var(--border)" }} />
                    {[55, 70, 45, 60, 50].map((w, i) => (
                      <div key={i} className="h-1 rounded-full mb-2" style={{ background: "var(--black-raised)", width: `${w}%` }} />
                    ))}
                  </div>
                  <div
                    className="absolute bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ border: "2px solid var(--border-strong)", background: "var(--gold-subtle)" }}
                  >
                    <div className="text-center" style={{ fontSize: "0.42rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--gold)", textTransform: "uppercase" }}>
                      <div>Quality</div>
                      <div>Assured</div>
                    </div>
                  </div>
                </div>
                <div className="paper-layer-gold" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
