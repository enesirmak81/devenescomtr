import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border backdrop-blur-xl bg-bg/70" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent text-white font-display font-bold">
            EI
          </span>
          <span className="font-display font-semibold tracking-tight hidden sm:inline">Enes Irmak</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg transition-colors relative data-[status=active]:text-fg"
              activeProps={{ className: "text-fg [&_span]:scale-x-100" }}
            >
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent origin-left scale-x-0 transition-transform" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 grid place-items-center rounded-lg border border-border hover:border-border-strong hover:bg-bg-secondary transition-all"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Hire Me
          </Link>
          <button
            className="md:hidden w-9 h-9 grid place-items-center rounded-lg border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-3 rounded-lg hover:bg-bg-secondary text-fg-secondary"
                activeProps={{ className: "bg-bg-secondary text-fg" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
