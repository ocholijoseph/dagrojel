import { Link } from "react-router-dom";
import {
  GraduationCap, Users, BookOpen, Star, Award, Heart,
  ChevronRight, Quote, Calendar, ArrowRight
} from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

const sections = [
  {
    icon: "🍼",
    title: "Reception",
    age: "Ages 2–3",
    desc: "A warm, nurturing environment where toddlers take their very first steps into learning through play.",
    color: "bg-accent/10 border-accent/30",
    iconColor: "text-accent",
    href: "/academics#reception",
  },
  {
    icon: "🌱",
    title: "Nursery",
    age: "Ages 3–5",
    desc: "Fostering curiosity, creativity and foundational skills in a safe and joyful learning space.",
    color: "bg-secondary/10 border-secondary/30",
    iconColor: "text-secondary",
    href: "/academics#nursery",
  },
  {
    icon: "📚",
    title: "Primary",
    age: "Ages 5–11",
    desc: "A rigorous and engaging curriculum building strong academic foundations across all core subjects.",
    color: "bg-primary/10 border-primary/30",
    iconColor: "text-primary",
    href: "/academics#primary",
  },
  {
    icon: "🎓",
    title: "Secondary",
    age: "Ages 11–17",
    desc: "Preparing students for national examinations and higher education with excellence and integrity.",
    color: "bg-accent/10 border-accent/30",
    iconColor: "text-accent",
    href: "/academics#secondary",
  },
];

const whyUs = [
  { icon: Award, title: "Academic Excellence", desc: "Consistent record of outstanding results in WAEC, NECO, and Common Entrance examinations." },
  { icon: Users, title: "Expert Teachers", desc: "Highly qualified and dedicated educators committed to every child's growth and success." },
  { icon: Heart, title: "Safe Environment", desc: "A secure, inclusive, and supportive campus where every child feels valued and protected." },
  { icon: BookOpen, title: "Holistic Development", desc: "Balanced focus on academics, sports, arts, and character formation for well-rounded students." },
  { icon: Star, title: "Modern Facilities", desc: "State-of-the-art classrooms, library, science labs, and recreational spaces." },
  { icon: GraduationCap, title: "Strong Alumni", desc: "A growing network of successful graduates making impact across Nigeria and beyond." },
];

const testimonials = [
  {
    name: "Mrs. Adaeze Okonkwo",
    role: "Parent of Primary 4 Student",
    text: "Dagrojel Excel Academy has transformed my daughter's love for learning. The teachers are exceptional and the school's values align perfectly with ours.",
    rating: 5,
  },
  {
    name: "Mr. Ibrahim Yusuf",
    role: "Parent of Secondary Student",
    text: "My son's results improved dramatically since joining DEA. The academic support and discipline here are unmatched in Abuja.",
    rating: 5,
  },
  {
    name: "Mrs. Blessing Eze",
    role: "Parent of Nursery Student",
    text: "The teachers genuinely care. My daughter looks forward to school every day — that says everything you need to know about this school.",
    rating: 5,
  },
];

const news = [
  {
    date: "Feb 10, 2026",
    tag: "Events",
    title: "Inter-House Sports Competition 2026",
    desc: "Students competed in exciting events celebrating sportsmanship and teamwork across all houses.",
    tagColor: "bg-accent/15 text-accent-foreground",
  },
  {
    date: "Jan 28, 2026",
    tag: "Achievement",
    title: "WAEC 2025 — 98% Distinction Rate",
    desc: "Our Secondary School students achieved remarkable results with 98% scoring distinctions.",
    tagColor: "bg-primary/15 text-primary",
  },
  {
    date: "Jan 15, 2026",
    tag: "Admissions",
    title: "2025/2026 Academic Year Registration Open",
    desc: "Registration is now open for all levels. Apply early to secure your child's place.",
    tagColor: "bg-secondary/15 text-secondary",
  },
];

export default function Index() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Dagrojel Excel Academy Campus"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container py-24">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6"
              style={{
                background: "hsl(var(--accent) / 0.2)",
                color: "hsl(var(--accent-light))",
                border: "1px solid hsl(var(--accent) / 0.4)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
              Admissions Open — 2025/2026 Academic Session
            </div>

            <h1
              className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              Building Solid
              <br />
              <span style={{ color: "hsl(var(--accent-light))" }}>Foundations</span> for
              <br />
              Tomorrow's Leaders
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl">
              At Dagrojel Excel Academy, Abuja, we nurture academic excellence, strong character, and lifelong values from Reception through Secondary School.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-1 hover:shadow-gold"
                style={{
                  background: "var(--gradient-gold)",
                  color: "hsl(var(--accent-foreground))",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white border-2 border-white/40 hover:bg-white/10 transition-all duration-200"
              >
                Book a Visit
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { value: "500+", label: "Students" },
                { value: "40+", label: "Expert Staff" },
                { value: "98%", label: "WAEC Pass Rate" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-3xl font-bold" style={{ color: "hsl(var(--accent-light))" }}>
                    {s.value}
                  </p>
                  <p className="text-white/70 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── School Sections ── */}
      <section className="section-padding bg-gradient-section">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Academic Programmes</h2>
            <div className="gold-line" />
            <p className="section-subtitle">
              Four carefully structured programmes designed to support every stage of your child's educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section) => (
              <Link
                key={section.title}
                to={section.href}
                className={`card-hover group block rounded-2xl border p-7 bg-card ${section.color} transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <div
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }}
                >
                  {section.age}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{section.desc}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title">Why Choose Dagrojel Excel Academy?</h2>
            <div className="gold-line" />
            <p className="section-subtitle">
              We offer more than education — we offer a foundation for life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="card-hover group p-7 rounded-2xl bg-gradient-card border border-border"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <item.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-16"
        style={{ background: "var(--gradient-secondary)" }}
      >
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Dagrojel Family?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Give your child the best possible start. Spaces are limited — apply today for the 2025/2026 session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1"
              style={{ background: "var(--gradient-gold)", color: "hsl(var(--accent-foreground))", boxShadow: "var(--shadow-gold)" }}
            >
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title">What Parents Say</h2>
            <div className="gold-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card-hover bg-card rounded-2xl p-8 border border-border relative"
              >
                <Quote
                  size={36}
                  className="absolute top-6 right-6 opacity-10"
                  style={{ color: "hsl(var(--primary))" }}
                />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── News & Events ── */}
      <section className="section-padding bg-gradient-section">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <h2 className="section-title mb-2">Latest News & Events</h2>
              <div className="gold-line mx-0" />
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all text-sm"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <div key={i} className="card-hover bg-card rounded-2xl border border-border overflow-hidden group">
                <div
                  className="h-44 flex items-center justify-center"
                  style={{
                    background: i === 0 ? "var(--gradient-gold)" : i === 1 ? "var(--gradient-primary)" : "var(--gradient-secondary)",
                  }}
                >
                  <Calendar size={48} className="text-white/60" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-14 bg-primary">
        <div className="container text-center">
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
            Stay Updated
          </h3>
          <p className="text-primary-foreground/70 mb-6 text-sm">
            Subscribe for school news, events, and important announcements.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl text-sm bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-gold)",
                color: "hsl(var(--accent-foreground))",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
