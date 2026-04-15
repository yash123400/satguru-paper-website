"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  location: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  product: "",
  quantity: "",
  location: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.company.trim()) errors.company = "Company name is required";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit Indian mobile number";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm(initialForm);
      } else {
        setErrors({ submit: "Something went wrong. Please try again or call us directly." });
      }
    } catch {
      setErrors({ submit: "Network error. Please check your connection and try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="gold-line mx-auto" />
          <span className="section-label" style={{ color: "var(--gold)" }}>Let&apos;s Talk</span>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--cream)", letterSpacing: "-0.02em" }}
          >
            Get a Quote Today
          </h2>
          <p className="text-base" style={{ color: "rgba(247,244,238,0.55)" }}>
            Tell us what you need. We&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          
          {/* Form — col-span 3 */}
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
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,150,62,0.18)" }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(200,150,62,0.12)" }}>
                  <CheckCircle size={32} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}>
                  Enquiry Sent!
                </h3>
                <p className="text-base" style={{ color: "rgba(247,244,238,0.6)", maxWidth: "36ch" }}>
                  Thank you! We&apos;ll review your requirements and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-sm underline"
                  style={{ color: "var(--gold)" }}
                >
                  Submit another enquiry
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Quote enquiry form"
                className="rounded-2xl p-7 sm:p-9"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,150,62,0.12)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "error" : ""}`}
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" className="form-error" role="alert">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="form-label">Company Name *</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company"
                      value={form.company}
                      onChange={handleChange}
                      className={`form-input ${errors.company ? "error" : ""}`}
                      aria-required="true"
                      aria-describedby={errors.company ? "company-error" : undefined}
                    />
                    {errors.company && <p id="company-error" className="form-error" role="alert">{errors.company}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? "error" : ""}`}
                      aria-required="true"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && <p id="phone-error" className="form-error" role="alert">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com (optional)"
                      value={form.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "error" : ""}`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" className="form-error" role="alert">{errors.email}</p>}
                  </div>

                  {/* Product */}
                  <div>
                    <label htmlFor="product" className="form-label">Product Required *</label>
                    <select
                      id="product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className={`form-input ${errors.product ? "error" : ""}`}
                      aria-required="true"
                      aria-describedby={errors.product ? "product-error" : undefined}
                    >
                      <option value="">Select a product</option>
                      <option value="poster-paper">Poster Paper</option>
                      <option value="kraft-paper">Kraft Paper</option>
                      <option value="mg-paper">MG Paper (Machine Glazed)</option>
                      <option value="stiffener-paper">Stiffener Paper</option>
                      <option value="multiple">Multiple Products</option>
                    </select>
                    {errors.product && <p id="product-error" className="form-error" role="alert">{errors.product}</p>}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label htmlFor="quantity" className="form-label">Quantity Required *</label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      placeholder="e.g. 50 tons"
                      value={form.quantity}
                      onChange={handleChange}
                      className={`form-input ${errors.quantity ? "error" : ""}`}
                      aria-required="true"
                      aria-describedby={errors.quantity ? "quantity-error" : undefined}
                    />
                    {errors.quantity && <p id="quantity-error" className="form-error" role="alert">{errors.quantity}</p>}
                  </div>

                  {/* Location */}
                  <div className="sm:col-span-2">
                    <label htmlFor="location" className="form-label">Delivery Location *</label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="City, State"
                      value={form.location}
                      onChange={handleChange}
                      className={`form-input ${errors.location ? "error" : ""}`}
                      aria-required="true"
                      aria-describedby={errors.location ? "location-error" : undefined}
                    />
                    {errors.location && <p id="location-error" className="form-error" role="alert">{errors.location}</p>}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="form-label">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Any specific requirements, grade details, or questions…"
                      value={form.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                    />
                  </div>
                </div>

                {errors.submit && (
                  <p className="form-error mt-3 text-center" role="alert">{errors.submit}</p>
                )}

                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    className="w-full sm:w-auto"
                    ariaLabel="Submit enquiry form"
                  >
                    Send Enquiry
                  </Button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact info — col-span 2 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact card */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,150,62,0.15)" }}
            >
              <h3
                className="text-lg font-semibold mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--cream)", fontSize: "1.25rem" }}
              >
                Contact Details
              </h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,150,62,0.1)" }}>
                    <Phone size={15} style={{ color: "var(--gold)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", color: "rgba(247,244,238,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Phone</p>
                    <p className="text-sm font-medium" style={{ color: "var(--cream)" }}>+91 98150 00359</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,150,62,0.1)" }}>
                    <Mail size={15} style={{ color: "var(--gold)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", color: "rgba(247,244,238,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Email</p>
                    <p className="text-sm font-medium" style={{ color: "var(--cream)" }}>sales@khemkapapers.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,150,62,0.1)" }}>
                    <MapPin size={15} style={{ color: "var(--gold)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", color: "rgba(247,244,238,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Address</p>
                    <p className="text-sm font-medium" style={{ color: "var(--cream)" }}>Ludhiana, Punjab, India</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,150,62,0.1)" }}>
                    <Clock size={15} style={{ color: "var(--gold)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", color: "rgba(247,244,238,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Business Hours</p>
                    <p className="text-sm font-medium" style={{ color: "var(--cream)" }}>Mon–Sat, 9am–7pm IST</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919815000359"}?text=Hi%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20paper%20supply.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl p-5 transition-all duration-200 group"
              style={{
                background: "rgba(37,211,102,0.08)",
                border: "1px solid rgba(37,211,102,0.2)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(37,211,102,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(37,211,102,0.08)")}
              aria-label="Chat on WhatsApp"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37,211,102,0.15)" }}>
                <MessageCircle size={20} style={{ color: "#25D366" }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--cream)" }}>
                  Chat on WhatsApp
                </p>
                <p style={{ fontSize: "0.75rem", color: "rgba(247,244,238,0.5)" }}>
                  Quick response guaranteed
                </p>
              </div>
              <div className="ml-auto" style={{ color: "rgba(247,244,238,0.3)" }}>→</div>
            </a>

            {/* India map pin illustration (CSS) */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(200,150,62,0.1)", minHeight: "120px" }}
              aria-label="Pan-India supply coverage"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--gold)" }} aria-hidden="true" />
                <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(247,244,238,0.45)", fontWeight: 600 }}>
                  Pan-India Supply
                </span>
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--gold)" }} aria-hidden="true" />
              </div>
              <p style={{ fontSize: "0.8rem", color: "rgba(247,244,238,0.5)", lineHeight: 1.6 }}>
                Delivering from Ludhiana to<br />every corner of India
              </p>
              <div className="flex gap-1.5 mt-3 flex-wrap justify-center">
                {["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad"].map((city) => (
                  <span key={city} style={{ fontSize: "0.65rem", color: "rgba(247,244,238,0.3)", padding: "2px 8px", borderRadius: "999px", border: "1px solid rgba(200,150,62,0.1)" }}>
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
