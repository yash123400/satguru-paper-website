"use client";

import { motion } from "framer-motion";
import { Layers, Package, Sparkles, Shield } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";

const products = [
  {
    icon: <Layers size={22} />,
    title: "Poster Paper",
    description:
      "Available in 1000, 3000 and 5000 grade. Premium quality for printing, advertising, and packaging applications.",
    tags: ["1000 Grade", "3000 Grade", "5000 Grade"],
  },
  {
    icon: <Package size={22} />,
    title: "Kraft Paper",
    description:
      "Strong, durable kraft paper for packaging, wrapping, and industrial applications across India.",
    tags: ["Packaging", "Industrial", "Custom Sizes"],
  },
  {
    icon: <Sparkles size={22} />,
    title: "MG Paper",
    description:
      "Smooth, glazed finish paper for food packaging, butter paper applications, and specialty printing.",
    tags: ["Food Grade", "Glazed Finish", "Specialty"],
  },
  {
    icon: <Shield size={22} />,
    title: "Stiffener Paper",
    description:
      "High-stiffness paper for garment, textile and industrial packaging requirements. Consistent quality guaranteed.",
    tags: ["Garment Industry", "Textile", "Industrial"],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="section-padding"
      style={{ background: "var(--cream-dark)" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-xl"
        >
          <div className="gold-line" />
          <span className="section-label">What We Supply</span>
          <h2
            id="products-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--charcoal)", letterSpacing: "-0.02em" }}
          >
            Our Product Range
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Sourced directly from India&apos;s leading paper mills — quality assured,
            competitively priced, pan-India delivery.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.title} {...product} index={i} />
          ))}
        </div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Need a specific grade or size?{" "}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="font-semibold animated-underline"
              style={{ color: "var(--gold)" }}
            >
              Get in touch
            </a>{" "}
            — we source to spec.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
