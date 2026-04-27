import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Award, Medal, BadgeCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Certifications — Kanishkhaa M S" },
      { name: "description", content: "Awards, achievements and certifications." },
    ],
  }),
  component: AchievementsPage,
});

const achievements = [
  { icon: Trophy, title: "1st Place — National Hackathon 2024", org: "TechFest India", year: "2024" },
  { icon: Award, title: "Smart India Hackathon — Finalist", org: "Govt. of India", year: "2024" },
  { icon: Medal, title: "Top 10 — Google DSC Solution Challenge", org: "Google Developers", year: "2023" },
  { icon: Trophy, title: "Best UI/UX Award — Inter-college Symposium", org: "Anna University", year: "2023" },
];

const certs = [
  { title: "Meta Front-End Developer Professional", org: "Coursera · Meta", year: "2024" },
  { title: "Machine Learning Specialization", org: "DeepLearning.AI · Stanford", year: "2024" },
  { title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "2024" },
  { title: "MongoDB Developer Associate", org: "MongoDB University", year: "2023" },
  { title: "Responsive Web Design", org: "freeCodeCamp", year: "2023" },
  { title: "Google UX Design Certificate", org: "Coursera · Google", year: "2023" },
];

function AchievementsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Trophy className="size-5 text-accent" /> Achievements &amp; Certifications
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Recognitions, wins and credentials.
        </p>
      </div>

      <section>
        <SectionHeader title="Achievements" meta={`${achievements.length} total`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="border border-border bg-surface rounded-md p-5 flex gap-4 hover:border-accent/50 transition-colors"
              >
                <div className="size-11 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                  <Icon className="size-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">
                    {a.org} · {a.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeader title="Certifications" meta={`${certs.length} total`} />
        <div className="border border-border bg-surface rounded-md divide-y divide-border">
          {certs.map((c) => (
            <div key={c.title} className="flex items-center gap-4 p-4 hover:bg-surface-elevated transition-colors">
              <BadgeCheck className="size-5 text-accent shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{c.title}</p>
                <p className="text-xs text-muted-foreground font-mono">{c.org}</p>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {c.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
