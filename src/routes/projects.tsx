import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Badge } from "@/components/site/Badge";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Enes Irmak" },
      { name: "description", content: "Selected RPA, Angular, and architecture projects by Enes Irmak." },
      { property: "og:title", content: "Projects — Enes Irmak" },
      { property: "og:description", content: "Selected RPA, Angular, and architecture work." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const categories = ["All", "RPA", "Web", "Architecture"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
      <SectionHeading
        eyebrow="Work"
        title="Projects & Case Studies"
        subtitle="A curated selection of automation, web, and architecture projects."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              filter === c
                ? "bg-accent border-accent text-white"
                : "bg-card border-border hover:border-border-strong text-fg-secondary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/projects/$id"
                params={{ id: p.id }}
                className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-all h-full"
              >
                <div className="aspect-[16/10] relative overflow-hidden" style={{ background: p.gradient }}>
                  <div className="absolute inset-0 opacity-30 transition-transform group-hover:scale-110" style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }} />
                  <div className="absolute top-4 left-4">
                    <Badge variant={p.category}>{p.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 text-white/70 text-xs font-mono">{p.year}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors flex items-start justify-between gap-2">
                    <span>{p.title}</span>
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                  </h3>
                  <p className="mt-2 text-sm text-fg-secondary line-clamp-2">{p.shortDescription}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-bg-secondary text-fg-muted font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.githubUrl && (
                    <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm text-fg-muted">
                      <Github size={14} />
                      <span>Source available</span>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
