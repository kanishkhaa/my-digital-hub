import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import certThumbnail from "@/assets/certification-thumbnail.svg";
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
          Each card includes a thumbnail slot where you can add the certificate photo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {certifications.map((certification) => (
          <article
            key={certification}
            className="flex gap-4 rounded-md border border-border bg-surface p-4 transition-colors hover:border-muted-foreground/50"
          >
            <img
              src={certThumbnail}
              alt="Certification thumbnail placeholder"
              className="h-24 w-24 shrink-0 rounded-md border border-border bg-background object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-medium leading-relaxed">{certification}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Replace the thumbnail with your certificate image when you're ready.
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
