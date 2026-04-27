import { Link } from "@tanstack/react-router";
import { MapPin, Link as LinkIcon, Mail, Building2, Github, Linkedin } from "lucide-react";
import avatar from "@/assets/avatar.png";

const tabs = [
  { to: "/", label: "Overview", index: 0, exact: true },
  { to: "/education", label: "Education", index: 1 },
  { to: "/internship", label: "Internships", index: 2 },
  { to: "/projects", label: "Projects", index: 3 },
  { to: "/skills", label: "Skills", index: 4 },
  { to: "/achievements", label: "Achievements", index: 5 },
  { to: "/contact", label: "Contact", index: 6 },
] as const;

export function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground antialiased px-6 py-10 lg:px-12 lg:py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="relative w-fit">
              <div className="bg-surface size-56 lg:size-64 rounded-full ring-1 ring-border overflow-hidden">
                <img
                  src={avatar}
                  alt="Kanishkhaa M S"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-3 right-2 bg-background border border-border px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-accent">
                ● Active
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-semibold tracking-tight">Kanishkhaa M S</h1>
              <p className="text-muted-foreground font-mono text-sm">@kanishkhaa</p>
            </div>

            <p className="text-[13px] leading-relaxed text-muted-foreground max-w-[32ch]">
              Passionate Full-Stack Developer · Frontend Engineer · ML/AI Enthusiast.
              Always learning &amp; building.
            </p>

            <button className="w-full bg-primary text-primary-foreground py-2.5 text-xs font-semibold tracking-widest uppercase transition-colors hover:bg-primary/90 rounded-md">
              Follow
            </button>

            <div className="pt-4 space-y-3 border-t border-border">
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                <span className="tabular-nums text-foreground">128</span> followers
                <span className="text-border">·</span>
                <span className="tabular-nums text-foreground">64</span> following
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Building2 className="size-3.5" /> SNS College of Technology
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="size-3.5" /> Coimbatore, India
              </div>
              <a
                href="https://kanishkhaa-portfolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-accent hover:underline"
              >
                <LinkIcon className="size-3.5" /> kanishkhaa-portfolio.vercel.app
              </a>
              <a
                href="mailto:kanishkhaams@gmail.com"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-3.5" /> kanishkhaams@gmail.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  <Github className="size-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  <Linkedin className="size-4" />
                </a>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="lg:col-span-9 min-w-0">
            <nav className="flex border-b border-border mb-8 overflow-x-auto scrollbar-none">
              {tabs.map((tab) => (
                <Link
                  key={tab.to}
                  to={tab.to}
                  activeOptions={{ exact: "exact" in tab ? tab.exact : false }}
                  className="px-4 py-3 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors tracking-tight whitespace-nowrap border-b-2 border-transparent -mb-[1px] data-[status=active]:text-foreground data-[status=active]:border-accent"
                >
                  <span className="text-accent/60 mr-1">[{tab.index}]</span>
                  {tab.label}
                </Link>
              ))}
            </nav>

            {children}
          </main>
        </div>

        <footer className="mt-20 pt-6 border-t border-border text-[10px] font-mono uppercase tracking-widest text-muted-foreground flex justify-between">
          <span>© 2026 Kanishkhaa M S</span>
        </footer>
      </div>
    </div>
  );
}
