"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Globe, 
  Cloud
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    skills: ["React.js", "Next.js", "Angular", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-violet-500 to-purple-500",
    skills: ["Node.js", "Sails.js", "Strapi", "NestJS", "REST APIs"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    skills: ["React Native", "Cross-platform", "Mobile UI/UX"],
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    color: "from-amber-500 to-orange-500",
    skills: ["Git", "Vercel", "MongoDB", "MySQL", "Docker"],
  },
];

const featuredSkills = [
  { name: "React/Next.js", level: 95, years: "4+" },
  { name: "TypeScript", level: 90, years: "3+" },
  { name: "Node.js", level: 90, years: "4+" },
  { name: "React Native", level: 85, years: "3+" },
];

// Glassmorphism card style
const glassCardStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
};

export function SkillsSection() {
  return (
    <section className="py-24" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Expertise</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Specialized in modern web technologies with a focus on creating scalable, 
          performant applications that deliver exceptional user experiences.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Featured Skills - Large Card */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 lg:row-span-2 rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12] group"
          style={glassCardStyle}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-primary/10 backdrop-blur-sm">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Core Proficiencies</h3>
          </div>
          
          <div className="space-y-6">
            {featuredSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.years} years</span>
                </div>
                <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Category Cards */}
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="group rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]"
            style={glassCardStyle}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${category.color}`}>
                <category.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1] hover:border-primary/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Stats Card */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 flex items-center justify-around rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]"
          style={glassCardStyle}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">23+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects</div>
          </div>
          <div className="w-px h-12 bg-white/[0.1]" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Exp.</div>
          </div>
          <div className="w-px h-12 bg-white/[0.1]" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Technologies</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
