import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, Twitter, Globe, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kanishkhaa M S" },
      { name: "description", content: "Get in touch with Kanishkhaa M S." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "kanishkhaams@gmail.com", href: "mailto:kanishkhaams@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/kanishkhaa", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kanishkhaa", href: "#" },
  { icon: Twitter, label: "Twitter / X", value: "@kanishkhaa", href: "#" },
  { icon: Globe, label: "Portfolio", value: "kanishkhaa-portfolio.vercel.app", href: "https://kanishkhaa-portfolio.vercel.app/" },
];

function ContactPage() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Send className="size-5 text-accent" /> Let's Connect
        </h2>
        <p className="text-sm text-muted-foreground mt-1 max-w-prose">
          Open to collaborations, internships, freelance work, and interesting conversations
          about frontend, full-stack, and ML.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Channels */}
        <div className="space-y-3">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 border border-border bg-surface rounded-md p-4 hover:border-accent/50 hover:bg-surface-elevated transition-colors group"
              >
                <div className="size-10 rounded-md bg-background border border-border flex items-center justify-center group-hover:border-accent/50">
                  <Icon className="size-4 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium truncate">{c.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="border border-border bg-surface rounded-md p-6 space-y-4"
        >
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1.5">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-background border border-border rounded-md py-2 px-3 text-sm focus:outline-none focus:border-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1.5">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-background border border-border rounded-md py-2 px-3 text-sm focus:outline-none focus:border-accent"
              placeholder="you@domain.com"
            />
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1.5">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full bg-background border border-border rounded-md py-2 px-3 text-sm focus:outline-none focus:border-accent resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-2.5 text-xs font-semibold tracking-widest uppercase rounded-md hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <Send className="size-3.5" /> Transmit Message
          </button>
        </form>
      </div>
    </div>
  );
}
