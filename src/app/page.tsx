"use client";

import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/sections/hero").then((mod) => mod.HeroSection),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const SkillsSection = dynamic(
  () => import("@/components/sections/skills").then((mod) => mod.SkillsSection),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects").then((mod) => mod.ProjectsSection),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience").then(
      (mod) => mod.ExperienceSection
    ),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact").then((mod) => mod.ContactSection),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
