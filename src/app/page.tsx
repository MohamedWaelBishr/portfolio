"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/sections/hero").then((mod) => mod.HeroSection),
  { ssr: false }
);

const SkillsSection = dynamic(
  () => import("@/components/sections/skills").then((mod) => mod.SkillsSection),
  { ssr: false }
);

const ProjectsSection = dynamic(
  () => import("@/components/sections/projects").then((mod) => mod.ProjectsSection),
  { ssr: false }
);

const ExperienceSection = dynamic(
  () => import("@/components/sections/experience").then((mod) => mod.ExperienceSection),
  { ssr: false }
);

const ContactSection = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.ContactSection),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
