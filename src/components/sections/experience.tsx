"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function calculateDuration(startDate: Date, endDate: Date): string {
  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months += endDate.getMonth() - startDate.getMonth();
  months += 1; // include the current month

  if (months < 0) months = 0;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo${remainingMonths !== 1 ? "s" : ""}`;
  }
  if (remainingMonths === 0) {
    return `${years} yr${years !== 1 ? "s" : ""}`;
  }
  return `${years} yr${years !== 1 ? "s" : ""} ${remainingMonths} mo${
    remainingMonths !== 1 ? "s" : ""
  }`;
}

function formatPeriod(startDate: Date, endDate: Date | null): string {
  const startStr = `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`;
  if (!endDate) return `${startStr} - Present`;
  return `${startStr} - ${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}`;
}

function monogram(company: string): string {
  // "City Data Services (CDS)" carries its own short form — use it
  const acronym = company.match(/\(([A-Za-z]{2,4})\)/);
  if (acronym) return acronym[1].toUpperCase();

  const words = company.replace(/\(.*?\)/g, "").trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

const experiencesData = [
  {
    company: "City Data Services (CDS)",
    position: "Senior Software Engineer",
    startDate: new Date(2025, 10), // Nov 2025
    endDate: null,
    location: "Remote",
    description:
      "Developing and maintaining web applications and backend systems using a diverse technology stack, contributing to data-driven solutions and enterprise software development.",
    achievements: [
      "Building and maintaining robust web applications with PHP and Perl",
      "Developing responsive frontend interfaces using JavaScript, HTML, and CSS",
      "Collaborating with cross-functional teams to deliver scalable solutions",
      "Contributing to code quality through reviews and best practices implementation",
    ],
    tags: ["Perl", "PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "iTechs EG",
    position: "Team Leader / Senior Software Engineer",
    startDate: new Date(2024, 7), // Aug 2024
    endDate: null,
    location: "Egypt",
    description:
      "Leading development teams in building enterprise-grade applications, overseeing technical architecture decisions, and mentoring junior developers while maintaining hands-on coding responsibilities.",
    achievements: [
      "Leading cross-functional development teams to deliver high-quality software solutions",
      "Architecting and developing scalable dashboards and web applications",
      "Mentoring team members and conducting code reviews to ensure best practices",
      "Collaborating with stakeholders to define technical requirements and project roadmaps",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Team Leadership"],
  },
  {
    company: "Octane",
    position: "Senior Software Engineer",
    startDate: new Date(2023, 6), // Jul 2023
    endDate: new Date(2026, 0), // Jan 2026
    location: "Egypt",
    description:
      "Designed and developed diverse dashboards, including financial analytics, transaction monitoring, and risk assessment, in collaboration with cross-functional teams.",
    achievements: [
      "Created visually appealing, user-friendly interfaces for dashboards with seamless UX",
      "Utilized React.js, MUI, Next.js, ChakraUI, Nivo, Vercel, and Atlassian tools",
      "Collaborated with backend engineers, product managers, and designers",
      "Led process improvements in code reviews, testing, and deployment strategies",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    company: "Everest Minds",
    position: "Software Engineer",
    startDate: new Date(2021, 9), // Oct 2021
    endDate: new Date(2023, 6), // Jul 2023
    location: "Egypt",
    description:
      "Full-stack Developer developing cutting-edge business process automation applications and software solutions for the medical, pharmacy, and healthcare industry.",
    achievements: [
      "Expertise in Agile methodology with Scrum and Kanban frameworks",
      "Advanced skills in Node.js, Angular, React, Next.js, MySQL, MongoDB",
      "Developed cross-platform mobile applications using React Native",
      "Led team initiatives and client presentations",
    ],
    tags: ["Node.js", "React Native", "Angular", "Strapi"],
  },
  {
    company: "Maggie Medical Company",
    position: "Maintenance Engineer / Application Engineer",
    startDate: new Date(2020, 2), // Mar 2020
    endDate: new Date(2021, 7), // Aug 2021
    location: "Egypt",
    description:
      "Provided maintenance and repair services for medical devices while developing internal tools for the customer service department.",
    achievements: [
      "Developed comprehensive SQL archiving system for customer service",
      "Collaborated with ISO team for procedure implementation",
      "Assisted with Siemens and Philips distributor qualification tests",
    ],
    tags: ["SQL", "Medical Devices", "ISO"],
  },
  {
    company: "Tele Trust for Telecommunication",
    position: "Telecommunications Field Engineer",
    startDate: new Date(2019, 11), // Dec 2019
    endDate: new Date(2020, 2), // Mar 2020
    location: "Egypt",
    description:
      "Radio Engineer with expertise in 2G, 3G, and LTE cellular technologies, providing support for wireless communication networks.",
    achievements: [
      "Transmission Engineer specializing in MW Link and ODU technologies",
      "Installation and configuration of Ericsson equipment",
    ],
    tags: ["Ericsson", "LTE", "Transmission"],
  },
];

const experiences = experiencesData.map((exp) => {
  const endDate = exp.endDate ?? new Date();
  return {
    ...exp,
    period: formatPeriod(exp.startDate, exp.endDate),
    duration: calculateDuration(exp.startDate, endDate),
    current: exp.endDate === null,
    initials: monogram(exp.company),
  };
});

export function ExperienceSection() {
  return (
    <section className="py-24 md:py-28" id="experience">
      <SectionHeading
        eyebrow="Career"
        title="Professional Experience"
        description="A journey through various roles in software engineering, from telecommunications to healthcare and fintech, building expertise across the full stack."
        className="mb-14"
      />

      {/* Timeline */}
      <div className="relative">
        {/* Rail */}
        <div
          className="timeline-rail absolute bottom-0 left-2 top-0 w-px md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
            className={`relative mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Node */}
            <span
              className="absolute left-0 top-7 z-10 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
            >
              <span
                className={`h-3.5 w-3.5 rounded-full border-2 bg-background transition-colors ${
                  exp.current
                    ? "border-foreground bg-foreground shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                    : "border-muted-foreground/40"
                }`}
              />
            </span>

            {/* Date column */}
            <div
              className={`pl-9 md:w-1/2 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <div
                className={`flex items-center gap-2 text-muted-foreground ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}
              >
                <Calendar className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                <span className="tabular text-sm">{exp.period}</span>
              </div>
              <div
                className={`mt-2 flex items-center gap-3 text-xs text-muted-foreground/60 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}
              >
                <span className="tabular" suppressHydrationWarning>
                  {exp.duration}
                </span>
                <span className="h-3 w-px bg-white/10" aria-hidden="true" />
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Content card */}
            <div
              className={`pl-9 md:w-1/2 md:pl-0 ${
                index % 2 === 0 ? "md:pl-12" : "md:pr-12"
              }`}
            >
              <article
                className={`glass-panel glass-panel--interactive p-6 ${
                  exp.current ? "glass-panel--active" : ""
                }`}
              >
                {/* Header */}
                <div className="mb-4 flex items-start gap-4">
                  <span className="icon-tile h-11 w-11 text-sm font-semibold tracking-tight text-foreground/75">
                    {exp.initials}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[17px] font-semibold leading-snug">{exp.position}</h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                        <Briefcase className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        {exp.company}
                      </p>
                      {exp.current && (
                        <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-foreground/85">
                          <span className="status-dot h-1.5 w-1.5" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="mt-4 space-y-2 border-t border-white/[0.05] pt-4">
                  {exp.achievements.slice(0, 3).map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2 text-sm">
                      <ChevronRight
                        className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <li key={tag} className="tag-chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
