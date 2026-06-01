import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MessageCircle, Github, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Enes Irmak" },
      { name: "description", content: "Get in touch with Enes Irmak for RPA development and Angular projects." },
      { property: "og:title", content: "Contact — Enes Irmak" },
      { property: "og:description", content: "Let's work together on automation and web projects." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const body = `${data.message}\n\n— ${data.name} (${data.email})`;
    const url = `mailto:enesirmak81@gmail.com?subject=${encodeURIComponent(data.subject || "Inquiry from portfolio")}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  };

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind or want to discuss automation and web solutions? I'd love to hear from you."
      />

      <div className="mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-12">
        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-8">
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto rounded-full bg-success/10 grid place-items-center text-success mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold">Thanks!</h3>
              <p className="mt-2 text-fg-secondary">Your message is ready in your email client.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm text-accent hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  {...register("name", { required: "Name is required", minLength: { value: 2, message: "Min 2 characters" } })}
                  className="w-full px-4 py-2.5 rounded-lg bg-bg-secondary border border-border focus:border-accent focus:outline-none"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                  })}
                  className="w-full px-4 py-2.5 rounded-lg bg-bg-secondary border border-border focus:border-accent focus:outline-none"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select
                  {...register("subject")}
                  className="w-full px-4 py-2.5 rounded-lg bg-bg-secondary border border-border focus:border-accent focus:outline-none"
                >
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Job Opportunity</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  {...register("message", { required: "Message is required", minLength: { value: 20, message: "At least 20 characters" } })}
                  className="w-full px-4 py-2.5 rounded-lg bg-bg-secondary border border-border focus:border-accent focus:outline-none resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover disabled:opacity-50 transition-all"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display font-semibold mb-4">Direct Contact</h3>
            <a
              href="mailto:enesirmak81@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-secondary transition-colors"
            >
              <span className="w-10 h-10 rounded-lg bg-accent-subtle text-accent grid place-items-center">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-fg-muted">Email</p>
                <p className="text-sm font-medium">enesirmak81@gmail.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/905058410629"
              title="Opens WhatsApp"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-secondary transition-colors mt-2"
            >
              <span className="w-10 h-10 rounded-lg grid place-items-center text-white" style={{ background: "#25D366" }}>
                <MessageCircle size={18} />
              </span>
              <div>
                <p className="text-xs text-fg-muted">WhatsApp</p>
                <p className="text-sm font-medium">Chat on WhatsApp</p>
              </div>
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display font-semibold mb-4">Social</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex flex-col items-center gap-1 p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon size={18} />
                  <span className="text-xs">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-success/30 bg-success/5 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-success" style={{ animation: "pulse-dot 2s infinite" }} />
              <p className="font-semibold text-success">Currently Available</p>
            </div>
            <p className="text-sm text-fg-secondary">
              Open to RPA development contracts and Angular projects.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-medium">🇹🇷 Turkey</p>
            <p className="text-xs text-fg-muted mt-1">Remote-friendly worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
