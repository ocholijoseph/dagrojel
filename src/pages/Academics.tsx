import { Link } from "react-router-dom";
import { BookOpen, Music, Globe, Dumbbell, Palette, Code } from "lucide-react";

const programmes = [
  {
    id: "reception",
    emoji: "🍼",
    label: "Reception",
    age: "Ages 2–3 Years",
    tagline: "A gentle start to a lifetime of learning",
    overview: "Our Reception programme provides a warm, play-based learning environment where toddlers begin to explore the world around them. Small class sizes ensure every child gets personalised attention.",
    curriculum: [
      "Language & communication development",
      "Numbers and early numeracy through play",
      "Social skills and emotional intelligence",
      "Fine motor skills and creative expression",
      "Music, rhymes, and storytelling",
      "Introduction to phonics",
    ],
    admission: [
      "Child must be 2 years old by September of entry year",
      "Birth certificate required",
      "Medical / immunization records",
      "Parent/guardian interview",
    ],
    activities: ["Sensory play", "Story time", "Music & movement", "Outdoor play", "Arts & crafts"],
    colorGrad: "var(--gradient-gold)",
    colorBorder: "border-accent/30",
    colorBg: "bg-accent/5",
  },
  {
    id: "nursery",
    emoji: "🌱",
    label: "Nursery",
    age: "Ages 3–5 Years",
    tagline: "Growing minds, growing hearts",
    overview: "The Nursery programme builds on foundational skills through structured play, creative learning, and early literacy. Children develop curiosity, confidence, and a love for school.",
    curriculum: [
      "Early Reading and Phonics (JOLLY PHONICS)",
      "Early Numeracy — counting, patterns, shapes",
      "Basic Science and Nature Studies",
      "Creative Arts and Handwriting",
      "Civic & Social Education",
      "French Language (beginners)",
    ],
    admission: [
      "Child must be 3–5 years old",
      "Birth certificate required",
      "Completed admission form",
      "Child assessment (informal)",
      "Parent orientation meeting",
    ],
    activities: ["Sandpit & water play", "Drama & role play", "Dance classes", "Picture books", "Field trips"],
    colorGrad: "var(--gradient-secondary)",
    colorBorder: "border-secondary/30",
    colorBg: "bg-secondary/5",
  },
  {
    id: "primary",
    emoji: "📚",
    label: "Primary School",
    age: "Ages 5–11 Years (Primary 1–6)",
    tagline: "Strong foundations, bright futures",
    overview: "Our Primary School follows the Nigerian National Curriculum with enrichment from British educational standards. Students receive a rigorous, engaging education that prepares them for Common Entrance examinations.",
    curriculum: [
      "English Language & Literature",
      "Mathematics",
      "Basic Science & Technology",
      "Social Studies & Civic Education",
      "Yoruba / Hausa / Igbo (Nigerian Languages)",
      "Computer Studies",
      "Physical & Health Education",
      "Cultural & Creative Arts",
    ],
    admission: [
      "Birth certificate or age declaration",
      "Last school report card",
      "Completed application form",
      "Entrance examination",
      "Parent interview",
    ],
    activities: ["STEM Club", "Reading Club", "Sports Teams", "School Band", "Quiz Competitions", "Science Fair"],
    colorGrad: "var(--gradient-primary)",
    colorBorder: "border-primary/30",
    colorBg: "bg-primary/5",
  },
  {
    id: "secondary",
    emoji: "🎓",
    label: "Secondary School",
    age: "Ages 11–17 Years (JSS1–SS3)",
    tagline: "Preparing leaders for a global world",
    overview: "Our Secondary School programme prepares students for WAEC, NECO, and JAMB examinations while developing critical thinking, leadership, and life skills. We maintain a 98%+ distinction rate.",
    curriculum: [
      "English Language & Literature",
      "Mathematics & Further Mathematics",
      "Physics, Chemistry, Biology",
      "Economics, Government, Literature",
      "Agricultural Science",
      "Information Technology",
      "French Language",
      "Technical Drawing / Fine Arts",
    ],
    admission: [
      "Common Entrance results (JSS1 entry)",
      "Previous school transcripts",
      "Birth certificate",
      "Entrance exam and interview",
      "Medical fitness report",
    ],
    activities: ["Debate Society", "Science Club", "Drama Group", "Football & Basketball", "Young Leaders Forum"],
    colorGrad: "var(--gradient-secondary)",
    colorBorder: "border-secondary/30",
    colorBg: "bg-secondary/5",
  },
];

const coCurricular = [
  { icon: Music, label: "Music & Arts" },
  { icon: Dumbbell, label: "Sports & Athletics" },
  { icon: Globe, label: "Debates & Oratory" },
  { icon: Code, label: "STEM & Technology" },
  { icon: Palette, label: "Creative Arts" },
  { icon: BookOpen, label: "Reading Club" },
];

export default function Academics() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-20 text-center" style={{ background: "var(--gradient-secondary)" }}>
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Academic Programmes
          </h1>
          <div className="h-1 w-16 rounded-full mx-auto mb-4" style={{ background: "var(--gradient-gold)" }} />
          <p className="text-secondary-foreground/75 max-w-xl mx-auto">
            Four structured programmes from Reception through Secondary School — all designed for excellence.
          </p>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Teaching Methodology</h2>
            <div className="gold-line" />
            <p className="section-subtitle">
              We combine the best of the Nigerian National Curriculum with internationally proven teaching methods.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Child-Centred Learning", desc: "Every lesson is designed around the learner's needs, pace, and learning style, ensuring no child is left behind." },
              { title: "Project-Based Learning", desc: "Students learn by doing — through experiments, projects, and real-world problem solving that deepens understanding." },
              { title: "Continuous Assessment", desc: "Regular, formative assessments guide instruction and give parents timely feedback on their child's progress." },
            ].map((m) => (
              <div key={m.title} className="card-hover p-7 rounded-2xl border border-border bg-gradient-card text-center">
                <h3 className="font-display font-bold text-primary text-lg mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Sections */}
      {programmes.map((prog, idx) => (
        <section
          key={prog.id}
          id={prog.id}
          className={`section-padding ${idx % 2 === 0 ? "bg-gradient-section" : "bg-card"}`}
        >
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div
                  className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl mb-6 border ${prog.colorBg} ${prog.colorBorder}`}
                >
                  <span className="text-3xl">{prog.emoji}</span>
                  <div>
                    <p className="font-display font-bold text-primary text-xl">{prog.label}</p>
                    <p className="text-xs text-muted-foreground">{prog.age}</p>
                  </div>
                </div>
                <p className="text-muted-foreground font-medium italic mb-4">"{prog.tagline}"</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{prog.overview}</p>

                {/* Activities */}
                <div
                  className="rounded-xl p-5 border"
                  style={{ background: `${prog.colorBg}`, borderColor: `${prog.colorBorder}` }}
                >
                  <h4 className="font-display font-semibold text-primary mb-3 text-sm uppercase tracking-wide">
                    Class Activities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {prog.activities.map((a) => (
                      <span
                        key={a}
                        className="text-xs px-3 py-1.5 rounded-full font-medium border"
                        style={{
                          background: "hsl(var(--card))",
                          color: "hsl(var(--foreground))",
                          borderColor: "hsl(var(--border))",
                        }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Curriculum */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="font-display font-bold text-primary mb-4 flex items-center gap-2">
                    <BookOpen size={18} className="text-secondary" />
                    Curriculum Highlights
                  </h4>
                  <ul className="space-y-2">
                    {prog.curriculum.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent font-bold mt-0.5">✓</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Admission */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="font-display font-bold text-primary mb-4 flex items-center gap-2">
                    <BookOpen size={18} className="text-primary" />
                    Admission Requirements
                  </h4>
                  <ul className="space-y-2">
                    {prog.admission.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5">→</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-primary-foreground transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-primary)" }}
                >
                  Apply for {prog.label} →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Co-Curricular */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-3">
              Co-Curricular Activities
            </h2>
            <div className="h-1 w-16 rounded-full mx-auto mb-4" style={{ background: "var(--gradient-gold)" }} />
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              Education extends beyond the classroom. We offer a rich variety of extracurricular activities to develop well-rounded, confident individuals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {coCurricular.map((item) => (
              <div key={item.label} className="text-center p-5 rounded-2xl bg-primary-dark/40 hover:bg-primary-dark/60 transition-colors cursor-default">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <item.icon size={24} className="text-accent-foreground" />
                </div>
                <p className="text-sm font-medium text-primary-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
