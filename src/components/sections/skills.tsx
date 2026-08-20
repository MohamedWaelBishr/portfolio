"use client";

import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Globe, Cloud } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CountUp } from "@/components/ui/count-up";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React.js", "Next.js", "Angular", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Sails.js", "Strapi", "NestJS", "REST APIs"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Cross-platform", "Mobile UI/UX"],
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    skills: ["Git", "Vercel", "MongoDB", "MySQL", "Docker"],
  },
];

const featuredSkills = [
  { name: "React / Next.js", level: 95, years: "4+" },
  { name: "TypeScript", level: 90, years: "3+" },
  { name: "Node.js", level: 90, years: "4+" },
  { name: "React Native", level: 85, years: "3+" },
];

const stats = [
  { value: 23, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Years Exp." },
  { value: 10, suffix: "+", label: "Technologies" },
];

export function SkillsSection() {
  return (
    <section className="py-24 md:py-28" id="skills">
      <SectionHeading
        eyebrow="Expertise"
        title="Technical Skills"
        description="Specialized in modern web technologies with a focus on creating scalable, performant applications that deliver exceptional user experiences."
        className="mb-12"
      />

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Featured Skills — Large Card */}
        <motion.article
          variants={itemVariants}
          className="glass-panel glass-panel--interactive flex flex-col p-6 md:col-span-2 lg:row-span-2"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="icon-tile h-10 w-10">
              <Code2 className="h-5 w-5 text-foreground/75" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-semibold leading-tight">Core Proficiencies</h3>
              <p className="text-xs text-muted-foreground">Day-to-day production stack</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {featuredSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2.5">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium md:text-[15px]">{skill.name}</span>
                  <span className="tabular text-xs text-muted-foreground">
                    {skill.years} years
                  </span>
                </div>
                <div className="meter-track">
                  <motion.div
                    className="meter-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.1,
                      delay: 0.15 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-auto pt-7 text-xs leading-relaxed text-muted-foreground/80">
            Proficiency reflects time in production codebases, not certifications.
          </p>
        </motion.article>

        {/* Skill Category Cards */}
        {skillCategories.map((category) => (
          <motion.article
            key={category.title}
            variants={itemVariants}
            className="glass-panel glass-panel--interactive group p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="icon-tile h-9 w-9 transition-transform duration-300 group-hover:scale-105">
                <category.icon
                  className="h-[18px] w-[18px] text-foreground/75"
                  aria-hidden="true"
                />
              </span>
              <h3 className="text-[15px] font-semibold">{category.title}</h3>
            </div>

            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill} className="tag-chip">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}

        {/* Stats Card */}
        <motion.article
          variants={itemVariants}
          className="glass-panel glass-panel--interactive flex items-center justify-around p-6 md:col-span-2 lg:col-span-4"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="contents">
              {index > 0 && <span className="h-12 w-px bg-white/[0.08]" aria-hidden="true" />}
              <div className="text-center">
                <div className="gradient-text text-3xl font-bold tracking-tight md:text-4xl">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1.5 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.article>
      </motion.div>
    </section>
  );
}
