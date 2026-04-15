"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// TODO: Replace with real testimonials from actual customers
const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Anand Packaging Industries",
    city: "Delhi",
    rating: 5,
    text: "Khemka Papers has been our go-to supplier for poster paper for the past 3 years. Consistent quality, on-time delivery, and competitive pricing — exactly what we need.",
  },
  {
    name: "Priya Mehta",
    company: "Mehta Print Solutions",
    city: "Mumbai",
    rating: 5,
    text: "Young, responsive team that actually answers the phone. Got our kraft paper order delivered to Mumbai within the promised timeline. Highly recommended.",
  },
  {
    name: "Suresh Nair",
    company: "KeraPack Industries",
    city: "Kochi",
    rating: 5,
    text: "TReDS payment option was the deciding factor for us. Formal, documented dealings, GST invoices, everything in order. The MG paper quality is excellent.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="var(--gold)" style={{ color: "var(--gold)" }} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="section-padding" style={{ background: "var(--black-mid)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="gold-line mx-auto" />
          <span className="section-label">What Clients Say</span>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Trusted by Manufacturers Across India
          </h2>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>
            From Delhi to Kochi — businesses that count on us, every order.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col p-7 rounded-2xl"
              style={{ background: "var(--black-card)", border: "1px solid var(--border)" }}
            >
              <StarRating count={t.rating} />
              <blockquote className="text-sm leading-relaxed my-5 flex-1" style={{ color: "var(--text-secondary)" }}>
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: "var(--gold)", color: "#0A0A0B" }}
                  aria-hidden="true"
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t.company} · {t.city}</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
