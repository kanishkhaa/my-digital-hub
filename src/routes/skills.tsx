import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiMongodb,
  SiPython, SiTailwindcss, SiGreensock, SiFigma, SiGit, SiDocker,
  SiPostgresql, SiNextdotjs, SiTensorflow, SiHtml5, SiCss3, SiVite,
} from "@icons-pack/react-simple-icons";
import { Brain, Sparkles, Server, Palette, Wrench } from "lucide-react";
import type { ComponentType } from "react";

interface Skill {
  name: string;
  icon: ComponentType<{ className?: string; color?: string }>;
  color: string;
  level: number; // 0-100
}

interface SkillGroup {
  title: string;
  icon: ComponentType<{ className?: string }>;
  skills: Skill[];
}

const groups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: 95 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 90 },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 95 },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 80 },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", level: 92 },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02", level: 85 },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
      { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", level: 88 },
      { name: "Express", icon: SiExpress, color: "#FFFFFF", level: 85 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 82 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 75 },
    ],
  },
  {
    title: "ML / AI",
    icon: Brain,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB", level: 85 },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", level: 70 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 70 },
      { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 85 },
      { name: "Vite", icon: SiVite, color: "#646CFF", level: 88 },
    ],
  },
];

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Kanishkhaa M S" },
      { name: "description", content: "Technical skills and tools used by Kanishkhaa M S." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Sparkles className="size-5 text-accent" /> Skills &amp; Stack
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Tools, languages and frameworks I work with daily.
        </p>
      </div>

      {groups.map((group) => {
        const Icon = group.icon;
        return (
          <section key={group.title}>
            <SectionHeader
              title={group.title.replace(/ /g, "_")}
              meta={`${group.skills.length} items`}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {group.skills.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group relative border border-border bg-surface rounded-md p-4 hover:border-muted-foreground/50 transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="size-9 rounded-md flex items-center justify-center bg-background border border-border"
                        style={{
                          boxShadow: `0 0 16px -6px ${skill.color}`,
                        }}
                      >
                        <SkillIcon className="size-5" color={skill.color} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{skill.name}</p>
                        <p className="text-[10px] font-mono text-muted-foreground tabular-nums">
                          {skill.level}%
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="sr-only">
              <Icon />
            </div>
          </section>
        );
      })}
    </div>
  );
}
