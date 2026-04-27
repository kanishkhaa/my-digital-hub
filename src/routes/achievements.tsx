import { createFileRoute } from "@tanstack/react-router";
import { Trophy, BadgeCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { achievements, certifications } from "@/data/portfolio";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Certifications - Kanishkhaa M S" },
      {
        name: "description",
        content: "Awards, achievements and certifications.",
      },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Trophy className="size-5 text-accent" /> Achievements &amp; Certifications
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Recognitions, wins and credentials.
        </p>
      </div>

      <section>
        <SectionHeader title="Achievements" meta={`${achievements.length} total`} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {achievements.map((achievement) => (
            <div
              key={`${achievement.title}-${achievement.year}`}
              className="flex gap-4 rounded-md border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10">
                <Trophy className="size-5 text-accent" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-snug">{achievement.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {achievement.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Certifications" meta={`${certifications.length} total`} />
        <div className="divide-y divide-border rounded-md border border-border bg-surface">
          {certifications.map((certification) => (
            <div
              key={`${certification.title}-${certification.issuer}-${certification.year}`}
              className="flex items-center gap-4 p-4 transition-colors hover:bg-surface-elevated"
            >
              <BadgeCheck className="size-5 shrink-0 text-accent" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{certification.title}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {certification.issuer} - {certification.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
