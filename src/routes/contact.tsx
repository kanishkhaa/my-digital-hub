import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Github, Linkedin, Globe, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Kanishkhaa M S" },
      { name: "description", content: "Get in touch with Kanishkhaa M S." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "kanishkhaams@gmail.com",
    href: "mailto:kanishkhaams@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kanishkhaa",
    href: "https://github.com/kanishkhaa",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kanishkhaams",
    href: "https://www.linkedin.com/in/kanishkhaams",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "kanishkhaa-portfolio.vercel.app",
    href: "https://kanishkhaa-portfolio.vercel.app/",
  },
] as const;

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    );

    window.location.href = `mailto:kanishkhaams@gmail.com?subject=${subject}&body=${body}`;
  }

  const isDisabled = !name.trim() || !email.trim() || !message.trim();

  return (
    <div className="space-y-10">
      <div>
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Send className="size-5 text-accent" /> Let's Connect
        </h2>
        <p className="mt-1 max-w-prose text-sm text-muted-foreground">
          Open to collaborations, internships, freelance work, and interesting
          conversations about frontend, full-stack, and ML.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-3">
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-md border border-border bg-surface p-4 transition-colors hover:border-accent/50 hover:bg-surface-elevated"
              >
                <div className="flex size-10 items-center justify-center rounded-md border border-border bg-background group-hover:border-accent/50">
                  <Icon className="size-4 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {channel.label}
                  </p>
                  <p className="truncate text-sm font-medium">{channel.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-md border border-border bg-surface p-6"
        >
          <div>
            <label className="mb-1.5 block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
              placeholder="you@domain.com"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Sending opens your email app with the message prefilled.
          </p>
          <button
            type="submit"
            disabled={isDisabled}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-accent py-2.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="size-3.5" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
