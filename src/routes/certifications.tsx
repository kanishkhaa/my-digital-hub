import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Kanishkhaa M S - Certifications" },
      { name: "description", content: "Certifications of Kanishkhaa M S." },
    ],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <BadgeCheck className="size-5 text-accent" /> Certifications
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          A snapshot of professional learning and technical credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {certifications.map((certification) => (
          <article
            key={`${certification.title}-${certification.issuer}-${certification.year}`}
            className="flex gap-4 rounded-md border border-border bg-surface p-4 transition-colors hover:border-muted-foreground/50"
          >
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-md border border-border bg-background">
              <BadgeCheck className="size-8 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium leading-relaxed">{certification.title}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {certification.issuer}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {certification.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
