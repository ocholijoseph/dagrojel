import { useState } from "react";
import { Image } from "lucide-react";

const categories = ["All", "Reception", "Nursery", "Primary", "Secondary", "Events", "Sports"];

const galleryItems = [
  { category: "Events", title: "Annual Sports Day 2025", color: "from-accent/70 to-accent/40" },
  { category: "Secondary", title: "WAEC Graduates 2025", color: "from-primary/70 to-secondary/40" },
  { category: "Primary", title: "Science Fair Exhibition", color: "from-secondary/70 to-primary/40" },
  { category: "Nursery", title: "Rhyme & Story Session", color: "from-accent/60 to-secondary/40" },
  { category: "Reception", title: "Welcome Day — New Students", color: "from-primary/60 to-accent/40" },
  { category: "Events", title: "Cultural Day Celebration", color: "from-secondary/60 to-primary/50" },
  { category: "Sports", title: "Football Tournament Finals", color: "from-accent/70 to-primary/40" },
  { category: "Primary", title: "Graduation — Primary 6", color: "from-primary/70 to-accent/40" },
  { category: "Secondary", title: "Debate Competition Victory", color: "from-secondary/80 to-accent/30" },
  { category: "Nursery", title: "Art Class Showcase", color: "from-accent/60 to-primary/30" },
  { category: "Events", title: "Prize Giving Day 2025", color: "from-primary/60 to-secondary/60" },
  { category: "Sports", title: "Inter-House Athletics", color: "from-secondary/70 to-primary/30" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === active);

  return (
    <main>
      {/* Header */}
      <section className="py-20 text-center" style={{ background: "var(--gradient-gold)" }}>
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground mb-4">
            Photo Gallery
          </h1>
          <div className="h-1 w-16 rounded-full mx-auto mb-4 bg-primary" />
          <p className="text-accent-foreground/75 max-w-xl mx-auto">
            A glimpse into the vibrant life at Dagrojel Excel Academy.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-card border-b border-border sticky top-[72px] z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  active === cat
                    ? { background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))", boxShadow: "var(--shadow-primary)" }
                    : { background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gradient-section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="card-hover group relative rounded-2xl overflow-hidden cursor-pointer aspect-square"
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <Image size={40} className="text-white/50 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-xs text-accent font-semibold">{item.category}</span>
                    <p className="text-white text-sm font-medium leading-tight">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No photos in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-card text-center border-t border-border">
        <div className="container">
          <p className="text-muted-foreground mb-4">
            Want to see more? Follow us on social media for daily updates from our campus.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Facebook", "Instagram", "Twitter", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 border border-border hover:border-primary hover:text-primary"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
