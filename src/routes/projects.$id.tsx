import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/site/Badge";

export const Route = createFileRoute("/projects/$id")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Enes Irmak` },
          { name: "description", content: loaderData.project.shortDescription },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.shortDescription },
          { property: "og:type", content: "article" },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/projects/${loaderData.project.id}` }] : [],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="max-w-[1200px] mx-auto px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Project not found</h1>
      <Link to="/projects" className="text-accent mt-4 inline-block">← Back to projects</Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3);

  return (
    <article>
      <div className="aspect-[21/9] md:aspect-[21/7] relative" style={{ background: project.gradient }}>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 -mt-20 relative">
        <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-fg-secondary hover:text-accent mb-6">
          <ArrowLeft size={14} /> All projects
        </Link>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          <div>
            <Badge variant={project.category}>{project.category}</Badge>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-fg-secondary">{project.shortDescription}</p>

            <div className="mt-10 prose prose-invert max-w-none text-fg-secondary leading-relaxed">
              <p>{project.fullDescription}</p>
            </div>

            {project.highlights && (
              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {project.highlights.map((h: string, i: number) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <div className="text-2xl font-display font-bold text-accent">★</div>
                    <p className="mt-2 text-sm font-medium">{h}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 self-start space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display font-semibold mb-4">Project Info</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-fg-muted">Year</dt>
                  <dd className="flex items-center gap-1"><Calendar size={14} /> {project.year}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-fg-muted">Category</dt>
                  <dd>{project.category}</dd>
                </div>
              </dl>
              <div className="mt-5 pt-5 border-t border-border">
                <h4 className="text-xs uppercase tracking-widest text-fg-muted mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t: string) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-bg-secondary text-fg-secondary font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-5 pt-5 border-t border-border space-y-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg border border-border hover:bg-bg-secondary text-sm font-medium">
                      <Github size={14} /> Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-24 pt-12 border-t border-border">
            <h2 className="font-display text-2xl font-bold mb-8">Related Projects</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to="/projects/$id"
                  params={{ id: p.id }}
                  className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all"
                >
                  <div className="aspect-[16/10]" style={{ background: p.gradient }} />
                  <div className="p-5">
                    <h3 className="font-display font-semibold group-hover:text-accent">{p.title}</h3>
                    <p className="mt-1 text-sm text-fg-secondary line-clamp-2">{p.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
