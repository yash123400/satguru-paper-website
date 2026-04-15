"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string; company: string; phone: string; email: string;
  product: string; quantity: string; location: string; message: string;
}
interface FormErrors { [key: string]: string; }

const initialForm: FormData = { name: "", company: "", phone: "", email: "", product: "", quantity: "", location: "", message: "" };

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.company.trim()) errors.company = "Company name is required";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ""))) errors.phone = "Enter a valid 10-digit Indian mobile number";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address";
  if (!data.product) errors.product = "Please select a product";
  if (!data.quantity.trim()) errors.quantity = "Quantity is required";
  if (!data.location.trim()) errors.location = "Delivery location is required";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setSuccess(true); setForm(initialForm); }
      else setErrors({ submit: "Something went wrong. Please try again or call us directly." });
    } catch { setErrors({ submit: "Network error. Please check your connection." }); }
    finally { setLoading(false); }
  };

  const inputStyle = { background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: "8px", padding: "0.8rem 1rem", fontSize: "0.95rem", color: "var(--text-primary)", outline: "none", fontFamily: "inherit", width: "100%", transition: "border-color 150ms ease, box-shadow 150ms ease" };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding" style={{ background: "var(--black)" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="gold-line mx-auto" />
          <span className="section-label">Let&apos;s Talk</span>
          <h2 id="contact-heading" className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            Get a Quote Today
          </h2>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>Tell us what you need. We&apos;ll respond within 24 hours.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full min-h-80 rounded-2xl p-10"
                style={{ background: "var(--black-card)", border: "1px solid var(--border)" }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "var(--gold-subtle)" }}>
                  <CheckCircle size={32} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Enquiry Sent!</h3>
                <p className="text-base" style={{ color: "var(--text-secondary)", maxWidth: "36ch" }}>Thank you! We&apos;ll review your requirements and contact you within 24 hours.</p>
                <button onClick={() => setSuccess(false)} className="mt-6 text-sm underline" style={{ color: "var(--gold)" }}>Submit another enquiry</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Quote enquiry form" className="rounded-2xl p-7 sm:p-9"
                style={{ background: "var(--black-card)", border: "1px solid var(--border)" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: "name", label: "Name *", type: "text", placeholder: "Your full name", autoComplete: "name", required: true },
                    { id: "company", label: "Company Name *", type: "text", placeholder: "Your company", autoComplete: "organization", required: true },
                    { id: "phone", label: "Phone Number *", type: "tel", placeholder: "10-digit mobile number", autoComplete: "tel", required: true },
                    { id: "email", label: "Email", type: "email", placeholder: "your@email.com (optional)", autoComplete: "email", required: false },
                  ].map(({ id, label, type, placeholder, autoComplete, required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="form-label">{label}</label>
                      <input
                        id={id} name={id} type={type} autoComplete={autoComplete}
                        placeholder={placeholder}
                        value={form[id as keyof FormData]}
                        onChange={handleChange}
                        className={`form-input ${errors[id] ? "error" : ""}`}
                        aria-required={required}
                      />
                      {errors[id] && <p className="form-error" role="alert">{errors[id]}</p>}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="product" className="form-label">Product Required *</label>
                    <select id="product" name="product" value={form.product} onChange={handleChange}
                      className={`form-input ${errors.product ? "error" : ""}`} aria-required="true"
                      style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="">Select a product</option>
                      <option value="poster-paper">Poster Paper</option>
                      <option value="kraft-paper">Kraft Paper</option>
                      <option value="mg-paper">MG Paper (Machine Glazed)</option>
                      <option value="stiffener-paper">Stiffener Paper</option>
                      <option value="multiple">Multiple Products</option>
                    </select>
                    {errors.product && <p className="form-error" role="alert">{errors.product}</p>}
                  </div>

                  <div>
                    <label htmlFor="quantity" className="form-label">Quantity Required *</label>
                    <input id="quantity" name="quantity" type="text" placeholder="e.g. 50 tons"
                      value={form.quantity} onChange={handleChange}
                      className={`form-input ${errors.quantity ? "error" : ""}`} aria-required="true" />
                    {errors.quantity && <p className="form-error" role="alert">{errors.quantity}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="location" className="form-label">Delivery Location *</label>
                    <input id="location" name="location" type="text" placeholder="City, State"
                      value={form.location} onChange={handleChange}
                      className={`form-input ${errors.location ? "error" : ""}`} aria-required="true" />
                    {errors.location && <p className="form-error" role="alert">{errors.location}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="form-label">Message (Optional)</label>
                    <textarea id="message" name="message" rows={3}
                      placeholder="Any specific requirements, grade details, or questions…"
                      value={form.message} onChange={handleChange} className="form-input resize-none" />
                  </div>
                </div>

                {errors.submit && <p className="form-error mt-3 text-center" role="alert">{errors.submit}</p>}

                <div className="mt-6">
                  <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full sm:w-auto" ariaLabel="Submit enquiry form">
                    Send Enquiry
                  </Button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="rounded-2xl p-7" style={{ background: "var(--black-card)", border: "1px solid var(--border)" }}>
              <h3 className="text-lg font-semibold mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", fontSize: "1.25rem" }}>
                Contact Details
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: <Phone size={15} />, label: "Phone", value: "+91 98150 00359" },
                  { icon: <Mail size={15} />, label: "Email", value: "sales@khemkapapers.com" },
                  { icon: <MapPin size={15} />, label: "Address", value: "Ludhiana, Punjab, India" },
                  { icon: <Clock size={15} />, label: "Business Hours", value: "Mon–Sat, 9am–7pm IST" },
                ].map(({ icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--gold-subtle)", color: "var(--gold)" }}>
                      {icon}
                    </div>
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{label}</p>
                      <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919815000359"}?text=Hi%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20paper%20supply.`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl p-5 transition-all duration-200"
              style={{ background: "rgba(37,211,102,0.07)", border: "1px solid rgba(37,211,102,0.18)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(37,211,102,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(37,211,102,0.07)")}
              aria-label="Chat on WhatsApp"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37,211,102,0.15)" }}>
                <MessageCircle size={20} style={{ color: "#25D366" }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Chat on WhatsApp</p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Quick response guaranteed</p>
              </div>
              <div className="ml-auto" style={{ color: "var(--text-muted)" }}>→</div>
            </a>

            <div className="rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              style={{ background: "var(--black-card)", border: "1px solid var(--border)", minHeight: "120px" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--gold)" }} aria-hidden="true" />
                <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 600 }}>Pan-India Supply</span>
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--gold)" }} aria-hidden="true" />
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Delivering from Ludhiana to<br />every corner of India
              </p>
              <div className="flex gap-1.5 mt-3 flex-wrap justify-center">
                {["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad"].map((city) => (
                  <span key={city} style={{ fontSize: "0.65rem", color: "var(--text-muted)", padding: "2px 8px", borderRadius: "999px", border: "1px solid var(--border)" }}>{city}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
