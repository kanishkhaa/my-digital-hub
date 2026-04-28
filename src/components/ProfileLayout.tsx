import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Link as LinkIcon,
  Mail,
  Building2,
  Github,
  Linkedin,
  FileText,
} from "lucide-react";
import avatar from "@/assets/professional_pic.png";

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
    <div className="min-h-dvh bg-background px-6 py-10 text-foreground antialiased lg:px-12 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="space-y-6 lg:col-span-3">
            <div className="relative w-fit">
              <div className="size-56 overflow-hidden rounded-full bg-surface ring-1 ring-border lg:size-64">
                <img
                  src={avatar}
                  alt="Kanishkhaa M S"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-3 right-2 border border-border bg-background px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-accent">
                Active
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-semibold tracking-tight">Kanishkhaa M S</h1>
              <p className="font-mono text-sm text-muted-foreground">@kanishkhaa</p>
            </div>

            <p className="max-w-[32ch] text-[13px] leading-relaxed text-muted-foreground">
              Passionate Full-Stack Developer · Frontend Engineer · ML/AI Enthusiast.
              Always learning &amp; building.
            </p>

            <a
              href="https://drive.google.com/file/d/1ILbc0L0ibe1WRrNudJHUwql7pTrNzUBk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <FileText className="size-3.5" /> Resume
            </a>

            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Building2 className="size-3.5" /> Bannari Amman Institute of Technology
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="size-3.5" /> Coimbatore, India
              </div>
              <a
                href="https://kanishkhaa.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-accent hover:underline"
              >
                <LinkIcon className="size-3.5" /> kanishkhaa.vercel.app
              </a>
              <a
                href="mailto:kanishkhaams@gmail.com"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-3.5" /> kanishkhaams@gmail.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/kanishkhaa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  <Github className="size-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kanishkhaams"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  <Linkedin className="size-4" />
                </a>
              </div>
            </div>
          </aside>

          <main className="min-w-0 lg:col-span-9">
            <nav className="mb-8 flex overflow-x-auto border-b border-border scrollbar-none">
              {tabs.map((tab) => (
                <Link
                  key={tab.to}
                  to={tab.to}
                  activeOptions={{ exact: "exact" in tab ? tab.exact : false }}
                  className="whitespace-nowrap border-b-2 border-transparent px-4 py-3 -mb-[1px] text-xs font-mono tracking-tight text-muted-foreground transition-colors hover:text-foreground data-[status=active]:border-accent data-[status=active]:text-foreground"
                >
                  <span className="mr-1 text-accent/60">[{tab.index}]</span>
                  {tab.label}
                </Link>
              ))}
            </nav>

            {children}
          </main>
        </div>

        <footer className="mt-20 flex justify-between border-t border-border pt-6 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <span>© 2026 Kanishkhaa M S</span>
        </footer>
      </div>
    </div>
  );
}
