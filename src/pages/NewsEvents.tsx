import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const news = [
  {
    date: "Feb 10, 2026",
    category: "Events",
    title: "Inter-House Sports Competition 2026 — Champions Crowned",
    excerpt: "This year's Inter-House Sports Competition was a spectacular showcase of talent, teamwork, and school spirit. Students from all four houses competed fiercely in track, field, and ball games.",
    color: "bg-accent/10 text-accent-foreground border-accent/30",
    gradColor: "var(--gradient-gold)",
  },
  {
    date: "Jan 28, 2026",
    category: "Achievement",
    title: "WAEC 2025 Results — 98% Distinction Rate",
    excerpt: "We are delighted to announce that our Secondary School students achieved an outstanding 98% distinction rate in the 2025 WAEC examinations. We congratulate all our students and teachers.",
    color: "bg-primary/10 text-primary border-primary/30",
    gradColor: "var(--gradient-primary)",
  },
  {
    date: "Jan 15, 2026",
    category: "Admissions",
    title: "2025/2026 Academic Year Registration Now Open",
    excerpt: "Registration for the 2025/2026 academic session is officially open. We invite parents to apply early to secure their child's spot across all levels — Reception, Nursery, Primary, and Secondary.",
    color: "bg-secondary/10 text-secondary border-secondary/30",
    gradColor: "var(--gradient-secondary)",
  },
  {
    date: "Dec 5, 2025",
    category: "Events",
    title: "End-of-Year Prize Giving Ceremony 2025",
    excerpt: "The annual prize giving ceremony celebrated outstanding students across all departments. Awards were presented in academics, sports, arts, and character/leadership.",
    color: "bg-accent/10 text-accent-foreground border-accent/30",
    gradColor: "var(--gradient-gold)",
  },
  {
    date: "Nov 20, 2025",
    category: "Community",
    title: "Dagrojel Academy Participates in Abuja Education Fair",
    excerpt: "Our school represented academic excellence at the 2025 Abuja Education Fair, showcasing student projects, artwork, and our commitment to quality education.",
    color: "bg-secondary/10 text-secondary border-secondary/30",
    gradColor: "var(--gradient-secondary)",
  },
  {
    date: "Oct 10, 2025",
    category: "Achievement",
    title: "National Mathematics Competition — 1st Place",
    excerpt: "Our Primary 5 student, Master Chukwuemeka Obi, clinched first place in the FCT National Mathematics Competition. A proud moment for the entire Dagrojel family!",
    color: "bg-primary/10 text-primary border-primary/30",
    gradColor: "var(--gradient-primary)",
  },
];

const upcomingEvents = [
  { date: "Mar 1, 2026", title: "New Term Resumption", type: "Academic" },
  { date: "Mar 15, 2026", title: "PTA Meeting — All Parents", type: "Meetings" },
  { date: "Apr 5, 2026", title: "Easter Holiday Break", type: "Holiday" },
  { date: "Apr 22, 2026", title: "Inter-School Debate Competition", type: "Competition" },
  { date: "May 3, 2026", title: "Third Term Resumption", type: "Academic" },
  { date: "May 28, 2026", title: "Cultural Day Celebration", type: "Events" },
  { date: "Jun 15, 2026", title: "Primary 6 Mock Exams Begin", type: "Exams" },
  { date: "Jul 5, 2026", title: "End of Session / Prize Giving", type: "Events" },
];

export default function NewsEvents() {
  return (
    <main>
      {/* Header */}
      <section className="py-20 text-center" style={{ background: "var(--gradient-secondary)" }}>
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            News & Events
          </h1>
          <div className="h-1 w-16 rounded-full mx-auto mb-4" style={{ background: "var(--gradient-gold)" }} />
          <p className="text-secondary-foreground/75 max-w-xl mx-auto">
            Stay connected with all the exciting happenings at Dagrojel Excel Academy.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-gradient-card rounded-3xl p-8 md:p-12 border border-border">
            <div
              className="h-64 rounded-2xl flex items-center justify-center"
              style={{ background: "var(--gradient-primary)" }}
            >
              <div className="text-center text-primary-foreground">
                <div className="text-6xl mb-2">🏆</div>
                <p className="font-display font-bold text-xl">Featured Story</p>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-4 border border-primary/20">
                <Tag size={12} /> Achievement
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                WAEC 2025 — Dagrojel Students Excel with 98% Distinction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                For the third consecutive year, Dagrojel Excel Academy's Secondary School students have achieved exceptional results in the West African Senior School Certificate Examinations (WASSCE). 98% of candidates scored distinctions across all subjects, with 12 students making a clean sweep of A1 grades.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={14} />
                  January 28, 2026
                </div>
                <button className="inline-flex items-center gap-1 text-sm text-secondary font-semibold hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-gradient-section">
        <div className="container">
          <h2 className="section-title mb-3">Latest News</h2>
          <div className="gold-line mx-0 mb-10" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <article key={i} className="card-hover bg-card rounded-2xl border border-border overflow-hidden group">
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ background: item.gradColor }}
                >
                  <span className="text-4xl text-white/80">
                    {item.category === "Events" ? "📅" : item.category === "Achievement" ? "🏅" : item.category === "Admissions" ? "📝" : "🏫"}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.color}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={11} /> {item.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{item.excerpt}</p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm text-secondary font-semibold hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-card">
        <div className="container">
          <h2 className="section-title mb-3">Upcoming Events</h2>
          <div className="gold-line mx-0 mb-10" />
          <div className="max-w-2xl">
            <div className="space-y-3">
              {upcomingEvents.map((event, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-xl border border-border bg-gradient-card hover:border-primary/30 transition-colors group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0 text-primary-foreground text-xs font-bold"
                    style={{ background: i % 3 === 0 ? "var(--gradient-gold)" : i % 3 === 1 ? "var(--gradient-primary)" : "var(--gradient-secondary)" }}
                  >
                    <span className="text-lg leading-none">{event.date.split(",")[0].split(" ")[1]}</span>
                    <span className="text-[10px] opacity-80">{event.date.split(" ")[0].toUpperCase()}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {event.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{event.date}</p>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground hidden sm:block"
                  >
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14" style={{ background: "var(--gradient-primary)" }}>
        <div className="container text-center">
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
            Never Miss an Update
          </h3>
          <p className="text-primary-foreground/70 mb-6 text-sm">
            Subscribe to our newsletter to receive news and event updates directly in your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl text-sm bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "var(--gradient-gold)", color: "hsl(var(--accent-foreground))" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
