"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Folder, Filter } from "lucide-react";

// Employer companies - projects from these won't have "Freelancing" tag
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

const isFreelanceProject = (client: string) => {
  return !employerCompanies.some(
    (employer) => client.toLowerCase().includes(employer.toLowerCase())
  );
};

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

const categories = ["All", "Front End", "Mobile App", "Full Stack"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All"
      ? true
      : project.category.includes(selectedCategory)
  );

  return (
    <section className="py-24" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mb-8">
          A collection of {projects.length} projects spanning healthcare, enterprise, fintech, and consumer applications. 
          Each built with modern technologies and a focus on user experience.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={`rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {selectedCategory === category && (
                <span className="ml-2 text-xs opacity-70">
                  ({filteredProjects.length})
                </span>
              )}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="sync">
          {filteredProjects.map((project, index) => {
            const isFreelance = isFreelanceProject(project.client);
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                layout
                className={`group relative overflow-hidden rounded-2xl p-6 
                  bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]
                  hover:bg-white/[0.06] hover:border-white/[0.15]
                  transition-all duration-500
                  ${isFreelance ? "ring-1 ring-secondary/20" : ""}
                `}
                style={{
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Freelancing indicator */}
                {isFreelance && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] uppercase tracking-wider text-secondary font-medium px-2 py-1 rounded-full bg-secondary/10 backdrop-blur-sm">
                      Freelancing
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Client & Period */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-muted-foreground/70">{project.client}</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span className="text-xs text-muted-foreground/70">{project.period}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Projects count */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </motion.div>
    </section>
  );
}
