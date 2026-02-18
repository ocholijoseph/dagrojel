import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Download, ChevronDown, ChevronUp } from "lucide-react";

const steps = [
  { num: "01", title: "Submit Application", desc: "Complete the online application form below or download a paper form from our admissions office." },
  { num: "02", title: "Document Submission", desc: "Submit all required documents either in person or via email to our admissions team." },
  { num: "03", title: "Entrance Assessment", desc: "Eligible applicants are invited for an age-appropriate assessment and parent interview." },
  { num: "04", title: "Offer Letter", desc: "Successful applicants receive an official offer letter within 5 working days of assessment." },
  { num: "05", title: "Pay School Fees", desc: "Accept your offer by paying the required fees. Your child's place is confirmed upon payment." },
  { num: "06", title: "Resumption", desc: "Receive your new student kit and orientation details. Your child's journey begins!" },
];

const requirements = [
  {
    level: "Reception",
    age: "Ages 2–3",
    docs: ["Birth certificate (original + copy)", "Immunization card", "2 passport photographs", "Completed application form"],
    fees: "₦150,000 per term",
  },
  {
    level: "Nursery",
    age: "Ages 3–5",
    docs: ["Birth certificate", "Immunization/medical records", "2 passport photographs", "Completed application form", "Informal assessment"],
    fees: "₦180,000 per term",
  },
  {
    level: "Primary",
    age: "Ages 5–11",
    docs: ["Birth certificate", "Last 2 school reports", "Transfer certificate (if applicable)", "2 passport photographs", "Entrance exam results"],
    fees: "₦220,000 per term",
  },
  {
    level: "Secondary",
    age: "Ages 11–17",
    docs: ["Common Entrance results", "Primary 6 school leaving certificate", "Birth certificate", "Medical fitness certificate", "2 passport photographs"],
    fees: "₦280,000 per term",
  },
];

const faqs = [
  { q: "When does the academic year begin?", a: "The academic year begins in September and is divided into three terms: September–December, January–April, and May–July." },
  { q: "Is there a bus service available?", a: "Yes, we offer school bus services covering major areas in Abuja. Contact the admissions office for routes and pricing." },
  { q: "Do you offer bursaries or scholarships?", a: "We offer merit-based scholarships for outstanding students in our Primary and Secondary sections. Ask the admissions team for details." },
  { q: "Can I tour the school before applying?", a: "Absolutely! We encourage prospective parents to book a school visit. Contact us to arrange a convenient time." },
  { q: "Are uniforms provided by the school?", a: "School uniforms are available for purchase from our school shop. A list of required uniform items is included in the welcome pack." },
];

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    parentName: "", childName: "", email: "", phone: "", level: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your application! Our admissions team will contact you within 48 hours.");
  };

  return (
    <main>
      {/* Header */}
      <section className="py-20 text-center" style={{ background: "var(--gradient-primary)" }}>
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Admissions
          </h1>
          <div className="h-1 w-16 rounded-full mx-auto mb-4" style={{ background: "var(--gradient-gold)" }} />
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            Begin your child's journey at Dagrojel Excel Academy. We'd love to welcome your family.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title">Admission Process</h2>
            <div className="gold-line" />
            <p className="section-subtitle">A simple, transparent 6-step process to join the Dagrojel family.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="card-hover p-7 rounded-2xl border border-border bg-gradient-card">
                <div
                  className="font-display text-4xl font-bold mb-4 opacity-20"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-primary text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements per Level */}
      <section className="section-padding bg-gradient-section">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title">Requirements by Level</h2>
            <div className="gold-line" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((r, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-7">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-display font-bold text-primary text-xl">{r.level}</h3>
                    <p className="text-xs text-muted-foreground">{r.age}</p>
                  </div>
                  <span
                    className="px-4 py-2 rounded-xl text-sm font-semibold"
                    style={{ background: "var(--gradient-gold)", color: "hsl(var(--accent-foreground))" }}
                  >
                    {r.fees}
                  </span>
                </div>
                <ul className="space-y-2">
                  {r.docs.map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={15} className="text-secondary flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground italic">
              * Fees shown are per term and exclude uniforms, textbooks, and transportation. Contact us for detailed fee schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section className="section-padding bg-card" id="apply">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Online Application Form</h2>
            <div className="gold-line" />
            <p className="section-subtitle">Fill in the form below and our admissions team will contact you promptly.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gradient-card rounded-2xl p-8 border border-border space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  value={form.parentName}
                  onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="e.g. Mr. Emmanuel Johnson"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Child's Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.childName}
                  onChange={(e) => setForm({ ...form, childName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="e.g. Amara Johnson"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="+234 801 234 5678"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Programme Applying For *</label>
              <select
                required
                value={form.level}
                onChange={(e) => setForm({ ...form, level: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">— Select a programme —</option>
                <option value="reception">Reception (Ages 2–3)</option>
                <option value="nursery">Nursery (Ages 3–5)</option>
                <option value="primary">Primary School (Ages 5–11)</option>
                <option value="secondary">Secondary School (Ages 11–17)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Additional Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Any questions or additional information..."
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
              Submit Application →
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-dark transition-colors"
            >
              <Download size={16} />
              Download Admission Form (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gradient-section">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="gold-line" />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp size={16} className="text-primary flex-shrink-0" /> : <ChevronDown size={16} className="flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
