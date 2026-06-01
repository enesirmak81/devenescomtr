import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/site/Badge";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Enes Irmak` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.post.slug}` }] : [],
  }),
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="max-w-[1200px] mx-auto px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Post not found</h1>
      <Link to="/blog" className="text-accent mt-4 inline-block">← Back to blog</Link>
    </div>
  ),
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <div className="aspect-[21/9] md:aspect-[21/7] relative" style={{ background: post.gradient }}>
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="max-w-[720px] mx-auto px-4 sm:px-6 -mt-24 relative">
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-fg-secondary hover:text-accent mb-6">
          <ArrowLeft size={14} /> All posts
        </Link>

        <Badge variant={post.category}>{post.category}</Badge>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">{post.title}</h1>

        <div className="mt-6 flex items-center gap-4 text-sm text-fg-muted flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-accent grid place-items-center text-white text-xs font-semibold">EI</span>
            <span>{post.author}</span>
          </div>
          <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {post.readingTime} min read</span>
        </div>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-fg-secondary">
          {post.content.split("\n\n").map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((t: string) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs border border-border bg-card font-mono text-fg-secondary">
              #{t}
            </span>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex items-center gap-4">
          <span className="w-12 h-12 rounded-full bg-accent grid place-items-center text-white font-display font-bold">EI</span>
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-sm text-fg-muted">RPA Developer & Angular Engineer</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 mt-24 pt-12 border-t border-border">
          <h2 className="font-display text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/50 transition-all"
              >
                <div className="aspect-[16/9]" style={{ background: p.gradient }} />
                <div className="p-5">
                  <Badge variant={p.category}>{p.category}</Badge>
                  <h3 className="mt-3 font-display font-semibold group-hover:text-accent line-clamp-2">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
