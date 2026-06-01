import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-accent/30 bg-[#050505] text-[#E5E5E0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent text-white font-display font-bold">EI</span>
            <span className="font-display font-semibold text-lg">Enes Irmak</span>
          </div>
          <p className="text-sm text-[#9A9A95] max-w-xs">
            RPA Developer & Angular Engineer. Building intelligent automation and scalable web systems.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-[#6A6A65] mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/projects", "Projects"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-accent transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-[#6A6A65] mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:enesirmak81@gmail.com" className="hover:text-accent">enesirmak81@gmail.com</a>
            </li>
            <li>
              <a href="https://wa.me/905058410629" className="hover:text-accent">WhatsApp</a>
            </li>
            <li className="text-[#9A9A95]">Turkey 🇹🇷 · Remote-friendly</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6A6A65]">
          <p>© {new Date().getFullYear()} Enes Irmak. Built with React.</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="hover:text-accent"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent"><Twitter size={18} /></a>
            <a href="mailto:enesirmak81@gmail.com" aria-label="Email" className="hover:text-accent"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
