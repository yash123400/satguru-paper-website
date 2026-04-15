"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          backgroundColor: scrolled ? "rgba(28, 28, 30, 0.88)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(200, 150, 62, 0.12)" : "1px solid transparent",
        }}
        role="banner"
      >
        <div
          className="section-container flex items-center justify-between"
          style={{ height: "68px" }}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex flex-col leading-none"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            aria-label="Khemka Papers — Home"
          >
            <span
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.55rem",
                color: "var(--cream)",
                letterSpacing: "-0.02em",
              }}
            >
              Khemka Papers
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
                marginTop: "-2px",
              }}
            >
              Ludhiana · Since 2009
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="animated-underline text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(247, 244, 238, 0.75)", letterSpacing: "0.02em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.75)")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-md active:scale-95"
              style={{
                background: "var(--gold)",
                color: "var(--charcoal)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
            style={{ color: "var(--cream)", background: "rgba(255,255,255,0.06)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(28, 28, 30, 0.6)", backdropFilter: "blur(4px)" }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden flex flex-col"
              style={{
                background: "var(--charcoal-mid)",
                borderLeft: "1px solid rgba(200, 150, 62, 0.15)",
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6" style={{ borderBottom: "1px solid rgba(200,150,62,0.1)" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    color: "var(--cream)",
                    fontWeight: 700,
                  }}
                >
                  Khemka Papers
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                  style={{ color: "var(--cream)", background: "rgba(255,255,255,0.06)" }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col p-6 gap-2 flex-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="px-4 py-3 rounded-lg text-base font-medium transition-colors"
                    style={{ color: "rgba(247,244,238,0.8)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(200,150,62,0.08)"; (e.currentTarget as HTMLElement).style.color = "var(--cream)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(247,244,238,0.8)"; }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.07 + 0.15 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                  className="mt-4 px-4 py-3 rounded-lg text-base font-semibold text-center"
                  style={{ background: "var(--gold)", color: "var(--charcoal)" }}
                >
                  Get a Quote
                </motion.a>
              </nav>

              {/* Footer */}
              <div className="p-6" style={{ borderTop: "1px solid rgba(200,150,62,0.1)" }}>
                <p style={{ fontSize: "0.72rem", color: "rgba(247,244,238,0.35)", letterSpacing: "0.08em" }}>
                  © 2026 Khemka Papers, Ludhiana
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
