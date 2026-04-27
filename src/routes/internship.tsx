import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, ArrowRight } from "lucide-react";
import { internships } from "@/data/portfolio";
import internshipCert from "@/assets/internship-certificate.png";

export const Route = createFileRoute("/internship")({
  head: () => ({
    meta: [
      { title: "Kanishkhaa M S - Internship Experience" },
      { name: "description", content: "Internship experience of Kanishkhaa M S." },
    ],
  }),
  component: InternshipPage,
});

function InternshipPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Briefcase className="size-5 text-accent" /> Internship Experience
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Hands-on work building product-ready interfaces and systems.
        </p>
      </div>

      {internships.map((internship) => (
        <section
          key={internship.role}
          className="rounded-md border border-border bg-surface p-6"
        >
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">{internship.role}</h3>
              <p className="text-sm text-accent">{internship.company}</p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {internship.period}
            </span>
          </div>

          <div className="space-y-3">
            {internship.points.map((point) => (
              <div key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-accent" />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="max-w-xs rounded-md border border-border overflow-hidden bg-background">
              <img
                src={internshipCert}
                alt="Internship Certificate"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default InternshipPage;
