import { Star, GitFork, BookMarked } from "lucide-react";

export interface Repo {
  name: string;
  description: string;
  language: string;
  languageColor: string; // tailwind bg color class
  stars: number;
  forks: number;
  visibility?: "Public" | "Private";
}

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <div className="group border border-border bg-surface p-5 hover:border-muted-foreground/50 transition-colors rounded-md">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <BookMarked className="size-4 text-muted-foreground shrink-0" />
          <h3 className="text-sm font-medium font-mono text-accent truncate group-hover:underline decoration-1 underline-offset-4">
            {repo.name}
          </h3>
        </div>
        <span className="text-[10px] font-mono border border-border px-2 py-0.5 rounded-full text-muted-foreground shrink-0 ml-2">
          {repo.visibility ?? "Public"}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mb-5 leading-relaxed line-clamp-3 min-h-[3rem]">
        {repo.description}
      </p>
      <div className="flex items-center gap-5 text-[11px] font-mono text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className={`size-2.5 rounded-full ${repo.languageColor}`} />
          <span>{repo.language}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="size-3" />
          <span className="tabular-nums">{repo.stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="size-3" />
          <span className="tabular-nums">{repo.forks}</span>
        </div>
      </div>
    </div>
  );
}
