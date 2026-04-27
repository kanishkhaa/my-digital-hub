import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen } from "lucide-react";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Kanishkhaa M S" },
      { name: "description", content: "Educational background of Kanishkhaa M S." },
    ],
  }),
  component: EducationPage,
});

const items = [
  {
    school: "Bannari Amman Institute of Technology",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "2023 — 2027",
    detail: "CGPA: 8.98 / 10",
    highlight: true,
  },
  {
    school: "R.J Matriculation Higher Secondary School",
    degree: "Higher Secondary Education (Class 12)",
    period: "2022 — 2023",
    detail: "Score: 95.83% · Secured centum in Computer Science · Secured Top mark award in Maths.",
  },
  {
    school: "R.J Matriculation Higher Secondary School",
    degree: "Secondary School (Class 10)",
    period: "2021 — 2022",
    detail: "Successfully completed secondary education.",
  },
];

function EducationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <GraduationCap className="size-5 text-accent" /> Education
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Academic journey & coursework.
        </p>
      </div>

      <div className="relative pl-6 border-l border-border space-y-6">
        {items.map((item) => (
          <div key={item.degree} className="relative">
            <div className="absolute -left-[27px] top-1.5 size-3 rounded-full bg-accent ring-4 ring-background" />
            <div className="border border-border bg-surface rounded-md p-5 hover:border-muted-foreground/50 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-semibold text-base">{item.school}</h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-accent font-mono flex items-center gap-2">
                <BookOpen className="size-3.5" />
                {item.degree}
              </p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
