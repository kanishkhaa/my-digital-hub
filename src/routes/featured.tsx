import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { RepoCard } from "@/components/RepoCard";
import { featuredRepos } from "@/data/portfolio";
import { Star } from "lucide-react";

export const Route = createFileRoute("/featured")({
  head: () => ({
    meta: [
      { title: "Featured Projects — Kanishkhaa M S" },
      { name: "description", content: "Pinned and featured projects by Kanishkhaa M S." },
    ],
  }),
  component: FeaturedPage,
});

function FeaturedPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Star className="size-5 text-accent fill-accent" /> Featured Projects
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Hand-picked work I'm most proud of.
        </p>
      </div>
      <SectionHeader title="Pinned" meta={`${featuredRepos.length} repositories`} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredRepos.map((r) => (
          <RepoCard key={r.name} repo={r} />
        ))}
      </div>
    </div>
  );
}
