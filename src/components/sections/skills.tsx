"use client";

import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React/Next.js", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Languages" },
  { name: "TailwindCSS", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Languages" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "React Query", level: 90, category: "Frontend" },
].sort((a, b) => b.level - a.level);

export function SkillsSection() {
  return (
    <section className="py-16 animate-fade-in" id="skills">
      <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 rounded-lg bg-card hover:bg-card/80 transition-all group"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{skill.name}</h3>
              <span className="text-sm text-muted-foreground">
                {skill.category}
              </span>
            </div>
            <Progress value={skill.level} className="h-2" />
            <span className="text-sm text-muted-foreground mt-1 block">
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
