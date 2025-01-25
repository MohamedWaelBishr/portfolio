"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "PROMAT - Egyptian Drug Authority",
    description:
      "Platform for automating approvals for marketing and advertising materials for the Central Administration for Pharmaceutical Care in the Egyptian Drug Authority.",
    tags: ["Sails.js", "Angular.js"],
    demo: "",
    github: "",
    category: ["Front End", "Full Stack"],
    classified: false,
  },
  {
    title: "TRACK IT - Zoetis Inc.",
    description:
      "Regulatory Management System for automating and tracking submissions for regulatory affairs.",
    tags: ["Sails.js", "React.js"],
    demo: "",
    github: "",
    category: ["Front End", "Full Stack"],
    classified: false,
  },
  {
    title: "Zoetis Chicklist App",
    description:
      "Auditing mobile app and web admin dashboard for Zoetis’s Auditors and farm owners to audit chicken hatcheries.",
    tags: ["Strapi.js", "React Native"],
    demo: "",
    github: "",
    category: ["Mobile App", "Front End", "Full Stack"],
    classified: false,
  },
  {
    title: "Roche Clever",
    description:
      "Mobile app and web admin dashboard to help Roche employees request administrative tasks and admins to manage them.",
    tags: ["Strapi.js", "React.js", "React Native"],
    demo: "",
    github: "",
    category: ["Mobile App", "Front End", "Full Stack"],
    classified: false,
  },
  {
    title: "EGVRS Events App",
    description:
      "Mobile app to guide HCP specialists through events, including agendas, event details, and engagement features.",
    tags: ["Strapi.js", "React Native"],
    demo: "",
    github: "",
    category: ["Mobile App", "Front End", "Full Stack"],
    classified: false,
  },
  {
    title: "Roche Meets",
    description:
      "Web platform to help Roche Patient Journey Partners (PJP) schedule virtual meetings with Healthcare professionals (HCPs).",
    tags: ["Strapi.js", "React.js"],
    demo: "",
    github: "",
    category: ["Front End", "Full Stack"],
    classified: false,
  },
  {
    title: "EASE - Egypt Air Hospital",
    description:
      "Electronic medical record (EMR) and Patient Management System for Egypt Air Hospital.",
    tags: ["Sails.js", "Angular.js"],
    demo: "",
    github: "",
    category: ["Front End", "Full Stack"],
    classified: false,
  },
  {
    title: "IL FUTURO DEL CINEMA Portal App",
    description:
      "Digital portal screen to onboard visitors at The National Museum of Cinema (Torino, Italy).",
    tags: ["React.js"],
    demo: "",
    github: "",
    category: ["Front End"],
    classified: false,
  },
  {
    title: "Fluxtore Plugin",
    description:
      "Workflow and Pipes Builder WordPress Plugin for an Italian client.",
    tags: ["React.js"],
    demo: "",
    github: "",
    category: ["Front End"],
    classified: false,
  },
  {
    title: "Client Dashboard - Egypt Octane",
    description: "Fuel and Payments Dashboard & KPIs for clients.",
    tags: ["ReactJS", "MUI"],
    demo: "",
    github: "",
    category: ["Front End"],
    classified: false,
  },
  {
    title: "Admin Dashboard - Egypt Octane",
    description: "Fuel and Payments Dashboard & KPIs for admins.",
    tags: ["ReactJS", "ChakraUI"],
    demo: "",
    github: "",
    category: ["Front End"],
    classified: false,
  },
  {
    title: "Strike Dashboard - Egypt Octane",
    description:
      "Fuel and Payments Dashboard, Clients Transactions, and Money Dashboard for admins.",
    tags: ["NextJS", "ShadcnUI", "TailwindCSS"],
    demo: "",
    github: "",
    category: ["Front End"],
    classified: false,
  },
  {
    title: "Dentology Cloud",
    description:
      "SaaS platform for streamlining the exchange of tooth scans and formulas between dentists and dental laboratories.",
    tags: ["NextJS", "ShadcnUI", "TailwindCSS", "Strapi"],
    demo: "",
    github: "",
    category: ["Front End", "Full Stack"],
    classified: false,
  },
  {
    title: "AI-Based App",
    description:
      "AI-powered mobile app for photo enhancements, video, and audio editing.",
    tags: ["Strapi.js", "React Native"],
    demo: "",
    github: "",
    category: ["Mobile App", "Full Stack"],
    classified: false,
  },
  {
    title: "AlRahhal Admin",
    description:
      "Global shipping solution for clients, brokers, and suppliers.",
    tags: ["Angular 18"],
    demo: "",
    github: "",
    category: ["Front End"],
    classified: false,
  },
  {
    title: "AlRahhal Dashboard",
    description:
      "Global shipping solution dashboard for clients, brokers, and suppliers.",
    tags: ["Angular 18"],
    demo: "",
    github: "",
    category: ["Front End"],
    classified: false,
  },
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All"
      ? true
      : project.category.includes(selectedCategory)
  );

  return (
    <section className="py-16 animate-fade-in" id="projects">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="flex gap-2 mb-8">
        {["All", "Front End", "Mobile App", "Full Stack"].map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            className="capitalize"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="group relative rounded-lg overflow-hidden bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.04] hover:border hover:border-primary"
          >
            {project.classified && (
              <div className="absolute top-[29px] right-[29px] w-20 h-20 ">
                <div className="absolute top-0 right-0 transform translate-x-[50%] -translate-y-[50%] rotate-45 bg-red-500 text-white text-xs py-1 px-8">
                  Classified
                </div>
              </div>
            )}
            <div className="p-6 space-y-4">
              <h3 className={`text-xl font-semibold`}>{project.title}</h3>
              <p
                className={`text-muted-foreground ${
                  project.classified ? "blur-[4px] select-none" : ""
                }`}
              >
                {project.description}
              </p>
              <div
                className={`flex flex-wrap gap-2 ${
                  project.classified ? "blur-[2px] select-none" : ""
                }`}
              >
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
