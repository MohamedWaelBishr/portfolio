"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MohamedWaelBishr",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohamed-wael-bishr/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:mohamedwaelbishr@gmail.com",
    label: "Email",
  },
];

const highlights = [
  "Building scalable, high-performance applications",
  "React.js, Node.js & cross-platform solutions",
  "Agile methodologies & collaborative teamwork",
  "Delivering user-centric software solutions",
];

// Glassmorphism card style
const glassCardStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
};

const glassSubtleStyle = {
  background: "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
};

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
      >
        {/* Content Side */}
        <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="text-foreground">Mohamed</span>
            <br />
            <span className="gradient-text">Bishr</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground font-medium"
          >
            Senior Software Engineer
          </motion.p>

          {/* Highlights */}
          <motion.div 
            variants={itemVariants} 
            className="max-w-xl mx-auto lg:mx-0 rounded-2xl p-6"
            style={glassCardStyle}
          >
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 text-sm md:text-base">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2"
              onClick={() => {
                const el = document.querySelector("#contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=1V3tUAtqvv3fcgBubj-M06MFee0ISkbZi",
                  "_blank"
                )
              }
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.08]"
                style={glassSubtleStyle}
                title={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image Side */}
        <motion.div
          variants={itemVariants}
          className="relative order-1 lg:order-2 flex-shrink-0"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-3xl scale-110" />
          
          {/* Image container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
            
            {/* Inner gradient ring */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            
            {/* Image with glass effect */}
            <div 
              className="absolute inset-4 rounded-full overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src="/assets/profile.png"
                alt="Mohamed Bishr - Senior Software Engineer"
                fill
                className="object-cover transition-all duration-700"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer group"
        onClick={handleScroll}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2 group-hover:border-primary/50 transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
