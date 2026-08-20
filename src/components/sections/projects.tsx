"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, Calendar } from "lucide-react";

// Employer companies — projects from these won't carry the "Freelancing" tag
const employerCompanies = [
  "Everest Minds",
  "Octane",
  "CDS",
  "City Data Services",
  "iTechs",
  "iTechs EG",
  "Tele Trust",
  "TeleTrust",
  "Maggie Medical",
];

const isFreelanceProject = (client: string) =>
  !employerCompanies.some((employer) =>
    client.toLowerCase().includes(employer.toLowerCase())
  );

const projects = [
  {
    title: "Azooz LMS",
    description:
      "Learning Management System with classified topics, exam simulation, and real-time progress tracking.",
    tags: ["Next.js", "Strapi.js"],
    category: ["Front End", "Full Stack"],
    client: "Saudi Client",
    period: "Nov 2025 - Jan 2026",
  },
  {
    title: "AlRahhal Dashboard V2",
    description:
      "Global shipping solution dashboard V2 for clients, brokers, and suppliers with enhanced features.",
    tags: ["Next.js"],
    category: ["Front End"],
    client: "Freelancing",
    period: "Feb 2025 - Mar 2025",
  },
  {
    title: "AlRahhal Admin V2",
    description:
      "Global shipping solution admin panel V2 for clients, brokers, and suppliers.",
    tags: ["Next.js"],
    category: ["Front End"],
    client: "Freelancing",
    period: "Feb 2025 - Mar 2025",
  },
  {
    title: "ARES",
    description:
      "OSINT App for Event and Media Analysis with advanced data processing capabilities.",
    tags: ["Next.js", "Strapi.js"],
    category: ["Front End", "Full Stack"],
    client: "Part Time",
    period: "Nov 2024 - Feb 2025",
  },
  {
    title: "WFM - Work Force Management",
    description:
      "App for Work Force Management with task rotation flows and scheduling features.",
    tags: ["Next.js"],
    category: ["Front End"],
    client: "Part Time",
    period: "Nov 2024 - Feb 2025",
  },
  {
    title: "AlRahhal Dashboard",
    description:
      "Global shipping solution dashboard for clients, brokers, and suppliers.",
    tags: ["Angular 18"],
    category: ["Front End"],
    client: "Freelancing",
    period: "Nov 2024 - Jan 2025",
  },
  {
    title: "AlRahhal Admin",
    description:
      "Global shipping solution admin panel for clients, brokers, and suppliers.",
    tags: ["Angular 18"],
    category: ["Front End"],
    client: "Freelancing",
    period: "Nov 2024 - Jan 2025",
  },
  {
    title: "AI-Based App",
    description:
      "AI-powered mobile app for photo enhancements, video, and audio editing.",
    tags: ["Strapi.js", "React Native"],
    category: ["Mobile App", "Full Stack"],
    client: "Freelancing",
    period: "Apr 2024 - Jun 2024",
  },
  {
    title: "Dentology Cloud",
    description:
      "SaaS platform for streamlining the exchange of tooth scans and formulas between dentists and dental laboratories.",
    tags: ["Next.js", "ShadcnUI", "TailwindCSS", "Strapi"],
    category: ["Front End", "Full Stack"],
    client: "Freelancing",
    period: "Jan 2024 - Apr 2024",
  },
  {
    title: "Strike Dashboard - Octane",
    description:
      "Fuel and Payments Dashboard, Clients Transactions, and Money Dashboard for admins.",
    tags: ["Next.js", "ShadcnUI", "TailwindCSS"],
    category: ["Front End"],
    client: "Octane",
    period: "Jul 2023 - Jan 2026",
  },
  {
    title: "O-Tolls Admin Dashboard - Octane",
    description:
      "Admin dashboard for managing tolls & trucks scaling expenses. Features digital payments, real-time balance monitoring, automated transaction reports, and NFC cashless transactions.",
    tags: ["Next.js", "ShadcnUI", "TailwindCSS"],
    category: ["Front End"],
    client: "Octane",
    period: "Sep 2024 - Jan 2025",
  },
  {
    title: "O-Tolls Client Dashboard - Octane",
    description:
      "Client-facing dashboard for tolls & trucks scaling expenses management. Enables digital payments, real-time balance consumption tracking, and easier fleet management on the road.",
    tags: ["Next.js", "ShadcnUI", "TailwindCSS"],
    category: ["Front End"],
    client: "Octane",
    period: "Sep 2024 - Jan 2025",
  },
  {
    title: "Admin Dashboard - Octane",
    description:
      "Fuel and Payments Dashboard & KPIs for admins with comprehensive analytics.",
    tags: ["React.js", "ChakraUI"],
    category: ["Front End"],
    client: "Octane",
    period: "Jul 2023 - Jan 2026",
  },
  {
    title: "Client Dashboard - Octane",
    description:
      "Fuel and Payments Dashboard & KPIs for clients with real-time data visualization.",
    tags: ["React.js", "MUI"],
    category: ["Front End"],
    client: "Octane",
    period: "Jul 2023 - Jan 2026",
  },
  {
    title: "Fluxtore Plugin",
    description:
      "Workflow and Pipes Builder WordPress Plugin for an Italian client.",
    tags: ["React.js"],
    category: ["Front End"],
    client: "Freelancing",
    period: "Dec 2023 - Feb 2024",
  },
  {
    title: "IL FUTURO DEL CINEMA Portal",
    description:
      "Digital portal screen to onboard visitors at The National Museum of Cinema (Torino, Italy).",
    tags: ["React.js"],
    category: ["Front End"],
    client: "Museum of Cinema",
    period: "Dec 2023",
  },
  {
    title: "EASE - Egypt Air Hospital",
    description:
      "Electronic medical record (EMR) and Patient Management System for Egypt Air Hospital.",
    tags: ["Sails.js", "Angular.js"],
    category: ["Front End", "Full Stack"],
    client: "Everest Minds",
    period: "Nov 2022 - Mar 2023",
  },
  {
    title: "Roche Meets",
    description:
      "Web platform to help Roche Patient Journey Partners (PJP) schedule virtual meetings with Healthcare professionals.",
    tags: ["Strapi.js", "React.js"],
    category: ["Front End", "Full Stack"],
    client: "Everest Minds",
    period: "Oct 2022 - Jan 2023",
  },
  {
    title: "EGVRS Events App",
    description:
      "Mobile app to guide HCP specialists through events, including agendas, event details, speakers, and engagement features.",
    tags: ["Strapi.js", "React Native"],
    category: ["Mobile App", "Full Stack"],
    client: "Everest Minds",
    period: "Aug 2022 - Mar 2023",
  },
  {
    title: "Roche Clever",
    description:
      "Mobile app and web admin dashboard to help Roche employees request administrative tasks and admins to manage them.",
    tags: ["Strapi.js", "React.js", "React Native"],
    category: ["Mobile App", "Front End", "Full Stack"],
    client: "Everest Minds",
    period: "Jul 2022 - Mar 2023",
  },
  {
    title: "Zoetis Chicklist App",
    description:
      "Auditing mobile app and web admin dashboard for Zoetis's Auditors and farm owners to audit chicken hatcheries.",
    tags: ["Strapi.js", "React Native"],
    category: ["Mobile App", "Full Stack"],
    client: "Everest Minds",
    period: "May 2022 - Mar 2023",
  },
  {
    title: "TRACK IT - Zoetis Inc.",
    description:
      "Regulatory Management System for automating and tracking submissions for regulatory affairs.",
    tags: ["Sails.js", "React.js"],
    category: ["Front End", "Full Stack"],
    client: "Everest Minds",
    period: "May 2022 - Jun 2022",
  },
  {
    title: "PROMAT - Egyptian Drug Authority",
    description:
      "Platform for automating approvals for marketing and advertising materials for the Central Administration for Pharmaceutical Care.",
    tags: ["Sails.js", "Angular.js"],
    category: ["Front End", "Full Stack"],
    client: "Everest Minds",
    period: "Oct 2021 - May 2022",
  },
];

const categories = ["All", "Front End", "Mobile App", "Full Stack"] as const;
type Category = (typeof categories)[number];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const counts = useMemo(
    () =>
      categories.reduce<Record<string, number>>((acc, category) => {
        acc[category] =
          category === "All"
            ? projects.length
            : projects.filter((p) => p.category.includes(category)).length;
        return acc;
      }, {}),
    []
  );

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.category.includes(selectedCategory)
  );

  return (
    <section className="py-24 md:py-28" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className="flex flex-col gap-4"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
          <span className="section-eyebrow">Portfolio</span>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
          <h2 className="section-title max-w-2xl">Featured Projects</h2>
          <p className="tabular text-sm text-muted-foreground md:pb-1">
            <span className="text-foreground">{filteredProjects.length}</span> of{" "}
            {projects.length} shown
          </p>
        </div>

        <p className="section-lede">
          A collection of {projects.length} projects spanning healthcare, enterprise, fintech,
          and consumer applications. Each built with modern technologies and a focus on user
          experience.
        </p>

        {/* Category Filters */}
        <div
          className="mt-4 flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter projects by discipline"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_6px_22px_rgba(0,0,0,0.5)]"
                    : "border border-white/[0.08] bg-white/[0.03] text-muted-foreground backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.06] hover:text-foreground"
                }`}
              >
                {category}
                <span
                  className={`tabular text-[11px] ${
                    isActive ? "text-primary-foreground/70" : "text-muted-foreground/60"
                  }`}
                >
                  {counts[category]}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="sync">
          {filteredProjects.map((project, index) => {
            const isFreelance = isFreelanceProject(project.client);

            return (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.025, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-panel glass-panel--interactive group flex flex-col overflow-hidden p-6"
              >
                {/* Header row: icon + status */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="icon-tile h-11 w-11 group-hover:scale-105">
                    <Folder className="h-5 w-5 text-foreground/75" aria-hidden="true" />
                  </span>

                  {isFreelance && (
                    <span className="rounded-full border border-white/[0.1] bg-white/[0.05] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      Freelance
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-semibold leading-snug">
                  {project.title}
                </h3>

                {/* Client & Period */}
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground/70">
                  <span className="truncate">{project.client}</span>
                  <span className="text-muted-foreground/30" aria-hidden="true">
                    •
                  </span>
                  <span className="tabular inline-flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {project.period}
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li key={tag} className="tag-chip">
                      {tag}
                    </li>
                  ))}
                  {project.tags.length > 3 && (
                    <li className="tag-chip">+{project.tags.length - 3}</li>
                  )}
                </ul>

                {/* Hover accent */}
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/[0.045] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
