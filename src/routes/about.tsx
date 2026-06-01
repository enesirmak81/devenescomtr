import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Sparkles, Zap, BookOpen, Layers, Bot, Code2, Database } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { skillCategories, toolsAndPlatforms, timeline, values } from "@/data/skills";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Enes Irmak" },
      { name: "description", content: "About Enes Irmak: RPA developer and Angular engineer building intelligent automation and clean architecture." },
      { property: "og:title", content: "About — Enes Irmak" },
      { property: "og:description", content: "Background, skills, and principles." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Sparkles, Zap, BookOpen, Layers, Bot, Code2, Database,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-fg-muted font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-bg-secondary overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-border" style={{
            background: "linear-gradient(135deg, #1A6BFF 0%, #0D1F40 100%)",
          }}>
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-8xl font-bold text-white/90">EI</span>
            </div>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }} />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-success" style={{ animation: "pulse-dot 2s infinite" }} />
              Available for new projects
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">About Me</h1>
            <p className="mt-3 text-xl font-display text-accent">Building tomorrow's automation, today.</p>

            <div className="mt-8 space-y-4 text-fg-secondary leading-relaxed">
              <p>
                I'm Enes Irmak, an RPA Developer and Angular engineer passionate about bridging intelligent
                automation with modern web development. I specialize in designing and implementing robotic
                process automation solutions that save businesses time, reduce errors, and free humans for
                meaningful work.
              </p>
              <p>
                My technical journey spans RPA platforms (UiPath, Blue Prism), Angular frontend development,
                C# and .NET backend systems, and software architecture design. I believe in clean code,
                testable systems, and MVC principles that make software maintainable at scale.
              </p>
              <p>
                When I'm not automating workflows, I'm exploring new web technologies, contributing to
                projects, and writing about what I learn.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-strong hover:bg-bg-secondary font-medium text-sm transition-colors"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-20 border-t border-border">
        <SectionHeading eyebrow="Toolbox" title="Skills & Expertise" />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <div key={cat.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 grid place-items-center rounded-lg bg-accent-subtle text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display font-semibold text-lg">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((s, i) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <h3 className="font-display font-semibold text-lg mb-4">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {toolsAndPlatforms.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-sm border border-border bg-card font-mono text-fg-secondary">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-20 border-t border-border">
        <SectionHeading eyebrow="Journey" title="Experience & Education" />
        <div className="mt-12 max-w-3xl relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-2 w-6 h-6 rounded-full bg-accent border-4 border-bg" />
                <p className="text-xs font-mono text-fg-muted uppercase tracking-widest">{entry.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{entry.role}</h3>
                <p className="text-accent text-sm">{entry.org}</p>
                <p className="mt-2 text-fg-secondary">{entry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-20 border-t border-border">
        <SectionHeading eyebrow="Principles" title="What I value" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = iconMap[v.icon] ?? Sparkles;
            return (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 hover:border-accent/40 transition-colors">
                <span className="w-10 h-10 grid place-items-center rounded-lg bg-accent-subtle text-accent">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 font-display font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-fg-secondary">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
