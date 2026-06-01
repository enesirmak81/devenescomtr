import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog-posts";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Badge } from "@/components/site/Badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enes Irmak — RPA Developer & Angular Engineer" },
      {
        name: "description",
        content:
          "Personal portfolio of Enes Irmak. RPA development, Angular engineering, and clean software architecture.",
      },
    ],
  }),
  component: HomePage,
});

const roles = ["RPA Developer", "Angular Engineer", "Software Architect", "Automation Specialist"];
const techs = ["UiPath", "Blue Prism", "Automation Anywhere", "Angular", "TypeScript", "C#", ".NET", "SQL Server", "REST APIs", "Azure"];

function HomePage() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--bg-primary))] pointer-events-none" />

        {/* Floating tech badges */}
        {["RPA", "Angular", "C#", ".NET"].map((t, i) => (
          <div
            key={t}
            className="absolute hidden lg:block px-3 py-1.5 rounded-full text-xs font-mono border border-border bg-card/60 backdrop-blur"
            style={{
              top: `${15 + i * 20}%`,
              right: `${5 + (i % 2) * 10}%`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {t}
          </div>
        ))}

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-fg-muted font-mono mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
          >
            Enes Irmak
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex items-center gap-2 text-xl sm:text-2xl text-fg-secondary font-display"
          >
            <span className="text-accent">{roles[roleIdx]}</span>
            <span className="inline-block w-0.5 h-6 bg-accent" style={{ animation: "blink 1s infinite" }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-fg-secondary text-balance"
          >
            I design and build intelligent automation solutions and scalable web applications. Specializing in
            RPA development and Angular engineering, I bridge the gap between business processes and modern
            technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-all hover:scale-[1.02]"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-border-strong hover:bg-bg-secondary font-medium transition-all"
            >
              Read My Blog
            </Link>
            <a href="#" aria-label="GitHub" className="w-12 h-12 grid place-items-center rounded-lg border border-border hover:border-accent hover:text-accent transition-colors">
              <Github size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-12 h-12 grid place-items-center rounded-lg border border-border hover:border-accent hover:text-accent transition-colors">
              <Linkedin size={18} />
            </a>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fg-muted animate-bounce">
            <ArrowDown size={20} />
          </div>
        </div>
      </section>

      {/* Tech marquee */}
      <section className="py-16 border-y border-border bg-bg-secondary/50 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-fg-muted mb-8">
          Technologies I work with
        </p>
        <div className="flex overflow-hidden">
          <div className="flex gap-12 shrink-0" style={{ animation: "marquee 30s linear infinite" }}>
            {[...techs, ...techs].map((t, i) => (
              <span key={i} className="font-display text-2xl font-semibold text-fg-secondary whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <SectionHeading eyebrow="Selected Work" title="Projects I'm proud of" />
          <Link to="/projects" className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1">
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/projects/$id"
                params={{ id: p.id }}
                className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[16/10] relative overflow-hidden" style={{ background: p.gradient }}>
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }} />
                  <div className="absolute top-4 left-4">
                    <Badge variant={p.category}>{p.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-fg-secondary line-clamp-2">{p.shortDescription}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-bg-secondary text-fg-muted font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-24 border-t border-border">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <SectionHeading eyebrow="From the Blog" title="Latest thoughts" />
          <Link to="/blog" className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1">
            All posts <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[16/9]" style={{ background: post.gradient }} />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-fg-muted mb-3">
                  <Badge variant={post.category}>{post.category}</Badge>
                  <span>{post.readingTime} min read</span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-tight group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-fg-secondary line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
