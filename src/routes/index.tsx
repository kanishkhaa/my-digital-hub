import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { RepoCard } from "@/components/RepoCard";
import { featuredRepos } from "@/data/portfolio";
import { Sparkles, Rocket, Code2, ExternalLink } from "lucide-react";

const leetCodeStats = {
  profileUrl: "https://leetcode.com/u/Kani0045/",
  syncedOn: "April 27, 2026",
  totalSolved: 676,
  totalContributions: 1527,
  activeDays: 347,
  allBadgesCount: 7,
  badges: [
    {
      displayName: "365 Days Badge",
      creationDate: "2026-02-14",
      icon: "https://assets.leetcode.com/static_assets/marketing/lg365.png",
    },
    {
      displayName: "100 Days Badge 2026",
      creationDate: "2026-04-14",
      icon: "https://assets.leetcode.com/static_assets/others/100_1080_1080.png",
    },
    {
      displayName: "50 Days Badge 2026",
      creationDate: "2026-02-20",
      icon: "https://assets.leetcode.com/static_assets/others/50_1080_1080.png",
    },
    {
      displayName: "200 Days Badge 2025",
      creationDate: "2025-10-28",
      icon: "https://assets.leetcode.com/static_assets/others/lg200.png",
    },
  ],
  weeks: [
    [1, 1, 1, 1, 1, 1, 2],
    [0, 1, 1, 2, 0, 4, 3],
    [5, 3, 2, 3, 3, 10, 12],
    [0, 6, 4, 4, 4, 4, 4],
    [4, 6, 0, 6, 5, 4, 4],
    [5, 2, 13, 3, 3, 3, 0],
    [4, 5, 4, 1, 1, 4, 1],
    [1, 5, 2, 2, 3, 3, 6],
    [5, 5, 2, 2, 2, 2, 1],
    [1, 3, 6, 6, 2, 2, 1],
    [1, 3, 6, 1, 1, 1, 1],
    [8, 10, 1, 1, 1, 1, 1],
    [3, 1, 1, 1, 1, 1, 1],
    [1, 11, 7, 1, 1, 2, 1],
    [1, 1, 4, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 1, 1],
    [8, 7, 13, 16, 2, 2, 10],
    [1, 1, 4, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [5, 1, 1, 1, 2, 2, 2],
    [1, 1, 2, 1, 7, 8, 21],
    [1, 0, 2, 1, 1, 7, 1],
    [1, 4, 4, 2, 9, 1, 1],
    [1, 1, 1, 1, 1, 1, 2],
    [1, 1, 2, 1, 1, 1, 2],
    [2, 2, 2, 2, 10, 2, 9],
    [2, 1, 1, 1, 2, 1, 1],
    [0, 16, 2, 1, 6, 1, 14],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [2, 1, 1, 1, 2, 2, 25],
    [8, 11, 1, 7, 5, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 2, 0, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 5, 1, 1],
    [1, 3, 6, 15, 12, 5, 9],
    [8, 23, 6, 84, 22, 9, 26],
    [1, 22, 12, 8, 23, 2, 8],
    [5, 7, 8, 2, 22, 22, 10],
    [1, 4, 3, 21, 8, 16, 8],
    [5, 3, 3, 3, 3, 1, 2],
    [1, 1, 4, 1, 1, 10, 6],
    [1, 2, 3, 6, 7, 24, 11],
    [4, 7, 11, 6, 22, 5, 21],
    [0, 16, 16, 2, 3, 5, 6],
    [4, 2, 8, 17, 7, 2, 2],
    [2, 3, 2, 3, 0, 2, 3],
    [4, 5, 3, 3, 3, 6, 4],
    [3, 0, 5, 4, 5, 5, 2],
    [2, 3, 14, 3, 0, 2, 6],
    [2, 3, 0, 5, 29],
  ],
} as const;

const heatmapLevels = [
  "bg-border/40",
  "bg-emerald-500/20",
  "bg-emerald-500/40",
  "bg-emerald-500/70",
  "bg-emerald-500",
];

const normalizedWeeks = leetCodeStats.weeks.map((week) => [
  ...week,
  ...Array.from({ length: Math.max(0, 7 - week.length) }, () => 0),
]);

function getHeatmapLevel(count: number) {
  if (count === 0) {
    return heatmapLevels[0];
  }
  if (count <= 2) {
    return heatmapLevels[1];
  }
  if (count <= 6) {
    return heatmapLevels[2];
  }
  if (count <= 15) {
    return heatmapLevels[3];
  }
  return heatmapLevels[4];
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanishkhaa M S - Overview" },
      {
        name: "description",
        content:
          "Overview of Kanishkhaa M S - Full-Stack Developer, Frontend Engineer, and ML/AI enthusiast.",
      },
    ],
  }),
  component: OverviewPage,
});

function OverviewPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="mb-3 flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <span className="text-foreground">kanishkhaa</span>
          <span>/</span>
          <span>readme.md</span>
        </div>
        <div className="rounded-md border border-border bg-surface p-8 lg:p-10">
          <h2 className="flex flex-wrap items-center gap-3 text-2xl font-semibold tracking-tight lg:text-3xl">
            <Sparkles className="size-6 text-accent" />
            Hi, I&apos;m Kanishkhaa M S
          </h2>

          <p className="mt-4 text-base text-foreground/90">
            Passionate Full-Stack Developer | Frontend Engineer | ML/AI Enthusiast
          </p>
          <p className="mt-2 flex items-center gap-2 font-mono text-accent">
            Always Learning &amp; Building <Rocket className="size-4" />
          </p>

          <div className="my-6 h-px bg-border" />

          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <Rocket className="size-5 text-accent" /> About Me
          </h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Full-Stack Developer and Frontend Engineer who enjoys
              transforming ideas into interactive, scalable, and thoughtfully crafted
              digital experiences.
            </p>
            <p>
              My work blends clean design with solid engineering, balancing intuitive
              UI, smooth product experiences, and reliable backend systems. I&apos;m
              continually exploring Machine Learning and AI to build smarter and more
              efficient solutions.
            </p>
          </div>

          <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Code2 className="mt-0.5 size-4 shrink-0 text-accent" />
              Currently expanding my expertise in{" "}
              <span className="font-medium text-foreground">
                backend engineering, machine learning, and AI-driven development
              </span>
            </li>
            <li className="flex gap-3">
              <Code2 className="mt-0.5 size-4 shrink-0 text-accent" />
              Strong foundation in{" "}
              <span className="font-medium text-foreground">
                React, Node.js, Express, MongoDB, MySQL, UI/UX, NumPy, and Pandas
              </span>
            </li>
            <li className="flex gap-3">
              <Code2 className="mt-0.5 size-4 shrink-0 text-accent" />
              Particularly interested in{" "}
              <span className="font-medium text-foreground">
                performance optimization, design systems, and thoughtful web experiences
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <SectionHeader title="Pinned_Projects" meta="ROOT_ACCESS_GRANTED" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredRepos.slice(0, 4).map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </div>
        <div className="mt-6 text-right">
          <Link to="/projects" className="text-xs font-mono text-accent hover:underline">
            View all repositories →
          </Link>
        </div>
      </section>

      <section>
        <SectionHeader
          title="LeetCode_Stats"
          meta={`SYNCED_${leetCodeStats.syncedOn.replace(/ /g, "_").toUpperCase()}`}
        />
        <div className="space-y-6 rounded-2xl border border-border bg-surface/70 p-4 shadow-sm sm:p-6">
          <div className="rounded-xl border border-border/80 bg-background/70 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-accent">
                  Competitive Profile
                </p>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  LeetCode
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  A live-style snapshot of problem solving progress, earned badges, and
                  year-round consistency.
                </p>
              </div>
              <div className="space-y-1 text-left lg:text-right">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Snapshot synced on
                </p>
                <p className="text-sm font-medium text-foreground">
                  {leetCodeStats.syncedOn}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={leetCodeStats.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/15"
              >
                View profile <ExternalLink className="size-4" />
              </a>
              <span className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {leetCodeStats.totalContributions} yearly contributions
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              {
                label: "Problems Solved",
                value: leetCodeStats.totalSolved,
                accent: "text-emerald-400",
              },
              {
                label: "Badges Earned",
                value: leetCodeStats.allBadgesCount,
                accent: "text-sky-400",
              },
              {
                label: "Contributions",
                value: leetCodeStats.totalContributions,
                accent: "text-amber-400",
              },
              {
                label: "Active Days",
                value: leetCodeStats.activeDays,
                accent: "text-rose-400",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-background px-4 py-4 sm:px-5"
              >
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
                <p className={`mt-3 text-2xl font-semibold sm:text-3xl ${item.accent}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-foreground">Contribution Graph</p>
                <p className="text-xs text-muted-foreground">
                  Consistency across the last 52 weeks
                </p>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Last 52 weeks
              </p>
            </div>

            <div
              className="grid gap-1.5"
              style={{
                gridTemplateColumns: `repeat(${normalizedWeeks.length}, minmax(0, 1fr))`,
              }}
            >
              {normalizedWeeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-1.5">
                  {week.map((count, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      title={`${count} submissions`}
                      className={`aspect-square w-full rounded-[3px] ${getHeatmapLevel(count)}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 text-[10px] font-mono text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <span>{leetCodeStats.totalContributions} contributions in the last year</span>
              <div className="flex items-center gap-2">
                <span>Less</span>
                {heatmapLevels.map((level) => (
                  <div key={level} className={`size-2.5 rounded-[2px] ${level}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-base font-semibold text-foreground">Badges Earned</p>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {leetCodeStats.allBadgesCount} total
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {leetCodeStats.badges.map((badge) => (
                <div
                  key={badge.displayName}
                  className="rounded-2xl border border-border bg-surface px-4 py-5 text-center shadow-sm"
                >
                  <img
                    src={badge.icon}
                    alt={badge.displayName}
                    className="mx-auto h-24 w-24 object-contain sm:h-28 sm:w-28"
                  />
                  <p className="mt-4 text-sm font-semibold leading-snug text-foreground">
                    {badge.displayName}
                  </p>
                  <p className="mt-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {badge.creationDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
