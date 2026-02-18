import { Link } from "react-router-dom";
import { BookOpen, Users, Target, Eye, Heart, Shield, Star, Lightbulb } from "lucide-react";

const values = [
  { icon: Star, title: "Excellence", desc: "We pursue the highest standards in everything we do — academic, moral, and social." },
  { icon: Heart, title: "Integrity", desc: "We build honest, responsible citizens who lead with character and respect." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace modern teaching methods and creative thinking for 21st-century readiness." },
  { icon: Shield, title: "Safety", desc: "Every child is protected in a secure, nurturing, and inclusive environment." },
  { icon: Users, title: "Community", desc: "We foster strong partnerships between school, parents, and the wider community." },
  { icon: BookOpen, title: "Learning", desc: "Lifelong love of learning is at the heart of everything we do here." },
];

const leadership = [
  { name: "Dr. Adaobi Nwosu", role: "Proprietress / Director of Academics", initial: "A" },
  { name: "Mr. Emeka Dagrojel", role: "School Principal", initial: "E" },
  { name: "Mrs. Fatima Ibrahim", role: "Head of Nursery & Reception", initial: "F" },
  { name: "Mr. Chuka Okafor", role: "Head of Primary School", initial: "C" },
  { name: "Mrs. Ngozi Eze", role: "Head of Secondary School", initial: "N" },
  { name: "Mr. Tunde Adeleke", role: "Director of Admissions", initial: "T" },
];

const facilities = [
  "Modern Air-conditioned Classrooms", "Fully Equipped Science Laboratories",
  "Library with 5,000+ Books", "Computer Lab with Internet Access",
  "Sports Complex & Playing Fields", "Music & Art Studio",
  "School Bus Service", "Cafeteria with Nutritious Meals",
  "Medical / First Aid Room", "CCTV Security System",
  "Assembly Hall / Auditorium", "Parent Resource Centre",
];

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <section
        className="py-20 text-center"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <div className="h-1 w-16 rounded-full mx-auto mb-4" style={{ background: "var(--gradient-gold)" }} />
          <p className="text-primary-foreground/75 max-w-xl mx-auto">
            Learn about our history, mission, and the dedicated team behind Dagrojel Excel Academy.
          </p>
        </div>
      </section>

      {/* School History */}
      <section className="section-padding bg-card">
        <div className="container grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Our Story</span>
            <h2 className="section-title mb-4">A Legacy of Academic Excellence</h2>
            <div className="h-1 w-16 rounded-full mb-6" style={{ background: "var(--gradient-gold)" }} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dagrojel Excel Academy was founded with a singular vision — to provide world-class education rooted in African values within the heart of Abuja. Since our establishment, we have grown from a small nursery school to a comprehensive institution serving students from Reception through Secondary School.
              </p>
              <p>
                Our name reflects our founders' commitment to building generations of excellent young Nigerians. Every year, our students consistently achieve outstanding results in national examinations, and our alumni are found in leading universities and institutions across Nigeria and internationally.
              </p>
              <p>
                Today, Dagrojel Excel Academy stands as a beacon of quality education in Abuja — trusted by hundreds of families and recognized for our commitment to <strong className="text-primary">Building Solid Foundations</strong>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Years of Excellence" },
              { value: "500+", label: "Current Students" },
              { value: "40+", label: "Dedicated Staff" },
              { value: "98%", label: "WAEC Pass Rate" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-2xl text-center border border-border"
                style={{ background: "var(--gradient-card)" }}
              >
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-section">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-10 border border-secondary/20" style={{ background: "var(--gradient-secondary)" }}>
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
              <Target size={28} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To provide a stimulating, inclusive, and high-quality education that equips every student with the knowledge, skills, values, and character needed to excel academically and contribute meaningfully to society.
            </p>
          </div>
          <div className="rounded-2xl p-10 border border-primary/20" style={{ background: "var(--gradient-primary)" }}>
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
              <Eye size={28} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To be the leading school in Abuja and Nigeria, recognized for producing morally upright, intellectually sound, and globally competitive graduates who build a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Core Values</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card-hover p-6 rounded-2xl border border-border bg-gradient-card">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-gold)" }}>
                  <v.icon size={22} className="text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gradient-section">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <div className="gold-line" />
            <p className="section-subtitle">Experienced educators dedicated to guiding Dagrojel Excel Academy forward.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {leadership.map((person, i) => (
              <div key={i} className="card-hover text-center bg-card rounded-2xl p-6 border border-border">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary-foreground"
                  style={{ background: i % 2 === 0 ? "var(--gradient-primary)" : "var(--gradient-secondary)" }}
                >
                  {person.initial}
                </div>
                <h4 className="font-display font-bold text-primary text-sm">{person.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Facilities</h2>
            <div className="gold-line" />
            <p className="section-subtitle">Modern, well-equipped facilities designed to inspire learning and creativity.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facilities.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-gradient-card hover:border-primary/30 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: "var(--gradient-gold)" }}>
        <div className="container text-center">
          <h3 className="font-display text-2xl font-bold text-accent-foreground mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-accent-foreground/80 mb-6">
            Visit our campus and experience the Dagrojel difference firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Book a Visit
            </Link>
            <Link
              to="/admissions"
              className="px-8 py-3 rounded-xl font-semibold text-sm border-2 border-accent-foreground/40 text-accent-foreground hover:bg-white/10 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
