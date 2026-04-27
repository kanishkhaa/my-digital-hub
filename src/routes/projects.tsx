import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { RepoCard } from "@/components/RepoCard";
import { allRepos } from "@/data/portfolio";
import { Search } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "All Projects — Kanishkhaa M S" },
      { name: "description", content: "All repositories and projects by Kanishkhaa M S." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-xl font-semibold">Repositories</h2>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-full bg-surface border border-border rounded-md py-1.5 pl-9 pr-3 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>
      </div>
      <SectionHeader title="All_Repositories" meta={`${allRepos.length} total`} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allRepos.map((r) => (
          <RepoCard key={r.name} repo={r} />
        ))}
      </div>
    </div>
  );
}
