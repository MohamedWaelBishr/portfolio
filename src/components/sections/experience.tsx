"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

// Helper function to format month name
const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Helper function to calculate duration between two dates
function calculateDuration(startDate: Date, endDate: Date): string {
  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months += endDate.getMonth() - startDate.getMonth();
  
  // Add 1 to include the current month
  months += 1;
  
  if (months < 0) months = 0;
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
  } else if (remainingMonths === 0) {
    return `${years} yr${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} yr${years !== 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
  }
}

// Helper function to format period string
function formatPeriod(startDate: Date, endDate: Date | null): string {
  const startStr = `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`;
  
  if (!endDate) {
    return `${startStr} - Present`;
  }
  
  const endStr = `${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}`;
  return `${startStr} - ${endStr}`;
}

// Experience data with date objects for dynamic calculation
const experiencesData = [
  {
    company: "City Data Services (CDS)",
    position: "Senior Software Engineer",
    startDate: new Date(2025, 10), // Nov 2025 (month is 0-indexed)
    endDate: null, // null means current/present
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
    startDate: new Date(2024, 7), // Aug 2024 (month is 0-indexed)
    endDate: null, // null means current/present
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

// Process experiences with calculated period and duration
const experiences = experiencesData.map((exp) => {
  const now = new Date();
  const endDate = exp.endDate || now;
  
  return {
    ...exp,
    period: formatPeriod(exp.startDate, exp.endDate),
    duration: calculateDuration(exp.startDate, endDate),
    current: exp.endDate === null,
  };
});

// Glassmorphism card style
const glassCardStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
};

export function ExperienceSection() {
  return (
    <section className="py-24" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Career</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          A journey through various roles in software engineering, from telecommunications 
          to healthcare and fintech, building expertise across the full stack.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 top-8">
              <div className={`w-4 h-4 rounded-full border-2 ${
                exp.current 
                  ? "border-primary bg-primary animate-pulse" 
                  : "border-muted-foreground/50 bg-background"
              }`} />
            </div>

            {/* Date section */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
              <div className={`flex items-center gap-2 text-muted-foreground mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{exp.period}</span>
              </div>
              <span className="text-xs text-muted-foreground/60">{exp.duration}</span>
            </div>

            {/* Content card */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-8 md:pl-0`}>
              <div 
                className={`rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12] ${exp.current ? "ring-1 ring-primary/30" : ""}`}
                style={glassCardStyle}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  {exp.current && (
                    <span className="text-xs uppercase tracking-wider text-green-400 font-medium px-2 py-1 rounded-full bg-green-400/10 backdrop-blur-sm">
                      Current
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {exp.achievements.slice(0, 3).map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
