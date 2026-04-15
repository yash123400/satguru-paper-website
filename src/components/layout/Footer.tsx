import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: "var(--black-mid)", borderTop: "2px solid var(--gold)" }}
      role="contentinfo"
    >
      <div className="section-container section-padding" style={{ paddingTop: "3.5rem", paddingBottom: "2rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Khemka Papers
            </h2>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginTop: "2px", marginBottom: "1rem" }}>
              Ludhiana · Since 2009
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)", maxWidth: "26ch" }}>
              Quality paper. Reliable supply. Every time.
            </p>
            <div className="flex flex-wrap gap-2">
              {["GST Registered", "MSME Registered", "TReDS Enabled"].map((b) => (
                <span key={b} className="trust-badge" style={{ fontSize: "0.7rem" }}>{b}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="section-label mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors duration-200 animated-underline"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="section-label mb-4">Get in Touch</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Phone size={14} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px" }} aria-hidden="true" />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>+91 98150 00359</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px" }} aria-hidden="true" />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>sales@khemkapapers.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px" }} aria-hidden="true" />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Ludhiana, Punjab, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>© 2026 Khemka Papers. All rights reserved.</p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Made with ❤️ in Ludhiana, Punjab</p>
        </div>
      </div>
    </footer>
  );
}
