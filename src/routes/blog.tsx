import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Badge } from "@/components/site/Badge";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Enes Irmak" },
      { name: "description", content: "Writings on RPA, Angular, .NET, and software architecture by Enes Irmak." },
      { property: "og:title", content: "Blog — Enes Irmak" },
      { property: "og:description", content: "Notes on RPA, Angular, and architecture." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = ["All", "RPA", "Angular", "Architecture", "TypeScript", "C#"] as const;
const PAGE_SIZE = 6;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function BlogPage() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => setPage(1), [debounced, category]);

  const filtered = useMemo(() => {
    const q = debounced.toLowerCase().trim();
    return blogPosts.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [debounced, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
      <SectionHeading eyebrow="Blog" title="Notes & writings" subtitle="Practical lessons from RPA, Angular, .NET, and software architecture." />

      <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="relative max-w-sm w-full">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border focus:border-accent focus:outline-none text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                category === c
                  ? "bg-accent border-accent text-white"
                  : "bg-card border-border text-fg-secondary hover:border-border-strong"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {debounced && (
        <p className="mt-4 text-sm text-fg-muted">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{debounced}"
        </p>
      )}

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paged.map((post) => (
          <Link
            key={post.id}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/50 hover:-translate-y-1 transition-all"
          >
            <div className="aspect-[16/9] relative" style={{ background: post.gradient }}>
              <div className="absolute inset-0 opacity-25" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }} />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-fg-muted mb-3">
                <Badge variant={post.category}>{post.category}</Badge>
                <span>{formatDate(post.publishedAt)}</span>
                <span>·</span>
                <span>{post.readingTime} min</span>
              </div>
              <h3 className="font-display text-lg font-semibold leading-tight group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-fg-secondary line-clamp-3">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-fg-muted">No posts match your search.</div>
      )}

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => { setPage((p) => p - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="w-9 h-9 grid place-items-center rounded-lg border border-border disabled:opacity-40 hover:bg-bg-secondary"
          >
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setPage(i + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`w-9 h-9 rounded-lg text-sm font-medium ${
                page === i + 1 ? "bg-accent text-white" : "border border-border hover:bg-bg-secondary"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => { setPage((p) => p + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="w-9 h-9 grid place-items-center rounded-lg border border-border disabled:opacity-40 hover:bg-bg-secondary"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
