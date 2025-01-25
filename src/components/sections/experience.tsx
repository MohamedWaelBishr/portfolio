"use client";

import { CalendarIcon, Building2 } from "lucide-react";

const experiences = [
  {
    company: "Octane",
    position: "Senior Software Engineer",
    period: "Jul 2023 - Present · 1 yr 7 mos",
    description:
      "Designed and developed diverse dashboards, including financial analytics, transaction monitoring, and risk assessment, in collaboration with cross-functional teams.",
    achievements: [
      "Created visually appealing, user-friendly interfaces for dashboards, ensuring a seamless and fast user experience.",
      "Utilized frontend technologies like React.js, MUI, Next.js, ChakraUI, Nivo, Vercel, and Atlassian to build responsive, pixel-perfect UIs.",
      "Worked closely with backend engineers, product managers, and designers to align frontend development with project goals.",
      "Solved complex technical challenges creatively and precisely, enhancing frontend capabilities.",
      "Contributed to process improvements in code reviews, testing methodologies, and deployment strategies.",
      "Engaged in agile practices, using Scrum or Kanban frameworks to deliver high-quality software within tight deadlines.",
      "Stayed updated with the latest industry trends and best practices, adopting cutting-edge technologies and methodologies.",
    ],
  },
  {
    company: "Everest Minds",
    position: "Software Engineer",
    period: "Oct 2021 - Jul 2023 · 1 yr 10 mos",
    description:
      "Accomplished Full-stack Developer and Software Engineer with extensive experience developing cutting-edge business process automation applications and software solutions for the medical, pharmacy, and healthcare industry.",
    achievements: [
      "Proficient in Agile methodology with expertise in Scrum and Kanban frameworks.",
      "Possess advanced technical skills in a range of programming languages and frameworks, including Node JS, Angular JS, Sails JS, React JS, Nest JS, Next JS, MySQL, MongoDB, Strapi, and Stripe.",
      "Expertise in developing cross-platform mobile applications using React Native.",
      "Demonstrated excellence in leadership, teamwork, time management, communication, and presentation skills.",
    ],
  },
  {
    company: "Maggie Medical Company",
    position: "Maintenance Engineer / Application Engineer",
    period: "Mar 2020 - Aug 2021 · 1 yr 6 mos",
    description:
      "Provided maintenance and repair services for a range of medical devices in the customer service department.",
    achievements: [
      "Developed and implemented a comprehensive SQL archiving system for the customer service department.",
      "Collaborated with the ISO team to support the implementation and maintenance of ISO procedures.",
      "Assisted with preparation for and successful completion of Siemens and Philips distributor qualification tests.",
    ],
  },
  {
    company: "Tele Trust for Telecommunication",
    position: "Telecommunications Field Engineer",
    period: "Dec 2019 - Mar 2020 · 4 mos",
    description:
      "Skilled Radio Engineer with expertise in 2G, 3G, and LTE cellular technologies, providing essential support and maintenance for wireless communication networks.",
    achievements: [
      "Experienced Transmission Engineer specializing in MW Link and ODU technologies.",
      "Proficient in the installation, configuration, and maintenance of Ericsson equipment.",
      "Knowledgeable in the operation and maintenance of SIAE equipment.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16 animate-fade-in" id="experience">
      <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
      <div className="relative">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-8 relative">
            <div className="absolute w-1 h-full bg-border left-[-1.5rem] top-0" />
            <div className="absolute w-4 h-4 bg-primary rounded-full left-[-1.85rem] top-1" />
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Building2 className="h-5 w-5 text-primary" />
                {exp.company}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="h-4 w-4" />
                {exp.period}
              </div>
              <h3 className="text-xl font-medium">{exp.position}</h3>
              <p className="text-muted-foreground">{exp.description}</p>
              <ul className="list-disc list-inside text-muted-foreground">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
