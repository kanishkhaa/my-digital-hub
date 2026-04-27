import { ExternalLink } from "lucide-react";

export interface Repo {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  liveDemo?: string;
  visibility?: "Public" | "Private";
}

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <div className="group border border-border bg-surface p-5 hover:border-muted-foreground/50 transition-colors rounded-md flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <a
            href={repo.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium font-mono text-accent truncate group-hover:underline decoration-1 underline-offset-4 hover:text-accent/80 transition-colors"
          >
            {repo.name}
          </a>
        </div>
        <span className="text-[10px] font-mono border border-border px-2 py-0.5 rounded-full text-muted-foreground shrink-0 ml-2">
          {repo.visibility ?? "Public"}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mb-5 leading-relaxed line-clamp-3 min-h-[3rem] flex-1">
        {repo.description}
      </p>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {repo.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-1 rounded bg-muted text-muted-foreground font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={repo.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center text-[11px] px-3 py-1.5 border border-border rounded hover:border-accent hover:text-accent transition-colors text-muted-foreground font-mono"
          >
            GitHub
          </a>
          {repo.liveDemo && (
            <a
              href={repo.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1 text-[11px] px-3 py-1.5 bg-accent/10 border border-accent/30 rounded hover:bg-accent/20 hover:border-accent transition-colors text-accent font-mono"
            >
              Live
              <ExternalLink className="size-2.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
