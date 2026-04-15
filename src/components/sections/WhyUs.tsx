"use client";

import { motion } from "framer-motion";
import {
  Trophy, Factory, Truck, CreditCard, CheckCircle, Zap,
} from "lucide-react";
import FeatureBlock from "@/components/ui/FeatureBlock";

const features = [
  {
    icon: <Trophy size={20} />,
    title: "15 Years of Trust",
    description:
      "Established relationships with top mills across India. Reliable supply when others can't deliver.",
    color: "var(--gold)",
  },
  {
    icon: <Factory size={20} />,
    title: "Direct Mill Sourcing",
    description:
      "We source directly from mills — no middlemen, better rates, guaranteed quality control at origin.",
    color: "#6B9E78",
  },
  {
    icon: <Truck size={20} />,
    title: "Pan-India Delivery",
    description:
      "From Ludhiana to any corner of India. Logistics handled, e-way bills provided, tracking available.",
    color: "#5B8DB8",
  },
  {
    icon: <CreditCard size={20} />,
    title: "TReDS Enabled",
    description:
      "Digital payment infrastructure for formal, transparent transactions. Safe, compliant, and auditable.",
    color: "var(--gold)",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Quality Assurance",
    description:
      "Every lot checked before dispatch. Mill-certified grades. No quality surprises — ever.",
    color: "#6B9E78",
  },
  {
    icon: <Zap size={20} />,
    title: "Responsive Team",
    description:
      "Young, tech-enabled management. Fast response on WhatsApp, email, and phone. Business hours + beyond.",
    color: "#5B8DB8",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="whyus-heading"
      className="section-padding"
      style={{ background: "var(--cream)" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <div className="gold-line mx-auto" />
          <span className="section-label">Our Advantage</span>
          <h2
            id="whyus-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--charcoal)", letterSpacing: "-0.02em" }}
          >
            Why Businesses Choose Us
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Built on relationships, backed by systems. The reliability of a 15-year
            business with the speed of a modern operation.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <FeatureBlock
              key={feat.title}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              index={i}
              accentColor={feat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
