import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: ["Along Road D, Aco Estate Phase 1/2", "Airport Road, Abuja"],
    color: "bg-primary/10 text-primary",
    grad: "var(--gradient-primary)",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: ["+234 816 4800 973", "+234 803 3995 446"],
    color: "bg-secondary/10 text-secondary",
    grad: "var(--gradient-secondary)",
  },
  {
    icon: Mail,
    title: "Email Addresses",
    lines: ["excel@dagrojel.com", "excel@dagrojel.com"],
    color: "bg-accent/10 text-accent-foreground",
    grad: "var(--gradient-gold)",
  },
  {
    icon: Clock,
    title: "School Hours",
    lines: ["Mon – Fri: 7:30am – 4:00pm", "Sat: 8:00am – 12:00pm (Admin)"],
    color: "bg-primary/10 text-primary",
    grad: "var(--gradient-primary)",
  },
  {
    icon: Globe,
    title: "Website",
    lines: ["https://dagrojel.com"],
    color: "bg-secondary/10 text-secondary",
    grad: "var(--gradient-secondary)",
  },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Header */}
      <section className="py-20 text-center" style={{ background: "var(--gradient-primary)" }}>
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <div className="h-1 w-16 rounded-full mx-auto mb-4" style={{ background: "var(--gradient-gold)" }} />
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            We'd love to hear from you. Reach out for admissions, enquiries, or to book a school visit.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-gradient-section">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="card-hover bg-card rounded-2xl border border-border p-6 text-center">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: info.grad }}
                >
                  <info.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-primary mb-3">{info.title}</h3>
                {info.lines.map((line, j) => (
                  <p key={j} className="text-sm text-muted-foreground">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section-padding bg-card">
        <div className="container grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="section-title mb-3">Send Us a Message</h2>
            <div className="h-1 w-16 rounded-full mb-8" style={{ background: "var(--gradient-gold)" }} />

            {submitted ? (
              <div className="rounded-2xl p-10 text-center border border-secondary/30 bg-secondary/5">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-bold text-secondary text-xl mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold text-secondary border border-secondary hover:bg-secondary/5 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="+234 816 4800 973"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="excel@dagrojel.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">— Select a subject —</option>
                    <option>Admissions Enquiry</option>
                    <option>Book a School Visit</option>
                    <option>General Enquiry</option>
                    <option>Fees & Payments</option>
                    <option>Academic Matters</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    background: "var(--gradient-primary)",
                    color: "hsl(var(--primary-foreground))",
                    boxShadow: "var(--shadow-primary)",
                  }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Map + Social */}
          <div>
            <h2 className="section-title mb-3">Find Us</h2>
            <div className="h-1 w-16 rounded-full mb-8" style={{ background: "var(--gradient-gold)" }} />

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border mb-6">
              <iframe
                title="Dagrojel Excel Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.3088!2d7.4500!3d9.0800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba7e37e85b3%3A0x1659d7f9c1b5a0ef!2sGwarinpa%2C+Abuja!5e0!3m2!1sen!2sng!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social Media */}
            <div className="bg-gradient-card rounded-2xl p-6 border border-border">
              <h3 className="font-display font-bold text-primary mb-4">Follow Us</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Stay updated with school news and events on our social media pages.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <s.icon size={16} className="text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
