import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">{eyebrow}</div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-fg-secondary text-lg">{subtitle}</p>}
    </div>
  );
}
