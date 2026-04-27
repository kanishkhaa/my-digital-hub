import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { RepoCard } from "@/components/RepoCard";
import { featuredRepos } from "@/data/portfolio";
import { Sparkles, Rocket, Code2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanishkhaa M S — Overview" },
      { name: "description", content: "Overview of Kanishkhaa M S — Full-Stack Developer & ML/AI Enthusiast." },
    ],
  }),
  component: OverviewPage,
});

function OverviewPage() {
  return (
    <div className="space-y-12">
      {/* README card */}
      <section>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
          <span className="text-foreground">kanishkhaa</span>
          <span>/</span>
          <span>readme.md</span>
        </div>
        <div className="border border-border bg-surface rounded-md p-8 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight flex items-center gap-3 flex-wrap">
            <Sparkles className="size-6 text-accent" />
            Hi, I'm Kanishkhaa M S
            <span>👋</span>
          </h2>

          <p className="mt-4 text-base text-foreground/90">
            Passionate Full-Stack Developer | Frontend Engineer | ML/AI Enthusiast
          </p>
          <p className="mt-2 font-mono text-accent flex items-center gap-2">
            Always Learning &amp; Building <Rocket className="size-4" />
          </p>

          <div className="my-6 h-px bg-border" />

          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <Rocket className="size-5 text-accent" /> About Me
          </h3>
          <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              I'm a Full-Stack Developer and Frontend Engineer who enjoys transforming ideas into
              interactive, scalable, and thoughtfully crafted digital experiences.
            </p>
            <p>
              My work blends clean design with solid engineering — balancing intuitive UI, smooth
              animations, and reliable backend systems. I'm continually exploring new technologies,
              especially in Machine Learning and AI, to build smarter and more efficient solutions.
            </p>
          </div>

          <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Code2 className="size-4 text-accent shrink-0 mt-0.5" />
              Currently expanding my expertise in{" "}
              <span className="text-foreground font-medium">
                Backend Engineering, Machine Learning, and AI-driven development
              </span>
            </li>
            <li className="flex gap-3">
              <Code2 className="size-4 text-accent shrink-0 mt-0.5" />
              Strong foundation in{" "}
              <span className="text-foreground font-medium">
                React, Node.js, Express, MongoDB, GSAP, UI/UX
              </span>
            </li>
            <li className="flex gap-3">
              <Code2 className="size-4 text-accent shrink-0 mt-0.5" />
              Particularly interested in{" "}
              <span className="text-foreground font-medium">
                performance optimization, design systems, and immersive web interactions
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Featured */}
      <section>
        <SectionHeader title="Pinned_Projects" meta="ROOT_ACCESS_GRANTED" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredRepos.slice(0, 4).map((r) => (
            <RepoCard key={r.name} repo={r} />
          ))}
        </div>
        <div className="mt-6 text-right">
          <Link
            to="/projects"
            className="text-xs font-mono text-accent hover:underline"
          >
            View all repositories →
          </Link>
        </div>
      </section>

      {/* Activity heatmap (decorative) */}
      <section>
        <SectionHeader title="Contribution_Stream" meta="2026_ACTIVITY" />
        <div className="border border-border bg-surface/60 rounded-md p-6">
          <div className="grid grid-cols-26 sm:grid-cols-52 gap-1">
            {Array.from({ length: 52 * 7 }).map((_, i) => {
              const intensity = [0, 0, 0, 1, 1, 2, 2, 3, 4][Math.floor(Math.random() * 9)];
              const cls = [
                "bg-border/40",
                "bg-accent/20",
                "bg-accent/40",
                "bg-accent/70",
                "bg-accent",
              ][intensity];
              return <div key={i} className={`h-2.5 w-full rounded-[2px] ${cls}`} />;
            })}
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>Total: 1,284 contributions in the last year</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="size-2 rounded-[2px] bg-border/40" />
              <div className="size-2 rounded-[2px] bg-accent/20" />
              <div className="size-2 rounded-[2px] bg-accent/40" />
              <div className="size-2 rounded-[2px] bg-accent/70" />
              <div className="size-2 rounded-[2px] bg-accent" />
              <span>More</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
