const categoryColors: Record<string, string> = {
  RPA: "bg-blue-500/15 text-blue-500 border-blue-500/20",
  Web: "bg-emerald-500/15 text-emerald-500 border-emerald-500/20",
  Angular: "bg-red-500/15 text-red-500 border-red-500/20",
  TypeScript: "bg-sky-500/15 text-sky-500 border-sky-500/20",
  "C#": "bg-purple-500/15 text-purple-500 border-purple-500/20",
  Architecture: "bg-emerald-500/15 text-emerald-500 border-emerald-500/20",
};

export function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: string }) {
  const cls = categoryColors[variant] ?? "bg-bg-secondary text-fg-secondary border-border";
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${cls}`}>
      {children}
    </span>
  );
}
