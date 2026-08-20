"use client";

import { useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
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

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1V3tUAtqvv3fcgBubj-M06MFee0ISkbZi";

export function HeroSection() {
  const handleScroll = useCallback(() => {
    document
      .querySelector("#skills")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToContact = useCallback(() => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center py-24 md:py-28"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-between gap-14 lg:flex-row lg:gap-20"
      >
        {/* Content Side */}
        <div className="order-2 flex-1 space-y-8 text-center lg:order-1 lg:text-left">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <span className="glass-subtle inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4">
              <span className="status-dot text-foreground/80" />
              <span className="text-[13px] font-medium text-muted-foreground">
                Available for opportunities
              </span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.75rem] font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            <span className="text-foreground">Mohamed</span>
            <br />
            <span className="gradient-text">Bishr</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start"
          >
            <p className="text-xl font-medium text-foreground/90 md:text-2xl">
              Senior Software Engineer
            </p>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Egypt · Remote
            </span>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="glass-panel glass-panel--interactive mx-auto max-w-xl p-6 lg:mx-0"
          >
            <ul className="divide-y divide-white/[0.05]">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3 py-2.5 text-left text-sm first:pt-0 last:pb-0 md:text-[15px]"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/70" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="group h-12 w-full gap-2 bg-primary px-8 text-primary-foreground shadow-[0_10px_34px_rgba(0,0,0,0.55)] transition-all duration-300 hover:bg-foreground sm:w-auto"
              onClick={scrollToContact}
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full gap-2 border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-foreground sm:w-auto"
              onClick={() => window.open(RESUME_URL, "_blank", "noopener,noreferrer")}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 lg:justify-start"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="icon-tile group h-11 w-11 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <link.icon
                  className="h-[18px] w-[18px] text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                  aria-hidden="true"
                />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image Side */}
        <motion.div
          variants={itemVariants}
          className="relative order-1 flex-shrink-0 lg:order-2"
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-transparent blur-3xl"
            aria-hidden="true"
          />

          <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[420px] lg:w-[420px]">
            {/* Slow orbiting accent ring */}
            <div
              className="animate-spin-slow absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.42) 90deg, transparent 200deg, rgba(255,255,255,0.18) 300deg, transparent 360deg)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
              }}
              aria-hidden="true"
            />

            {/* Static hairline ring */}
            <div
              className="absolute inset-0 rounded-full border border-white/[0.07]"
              aria-hidden="true"
            />

            {/* Inner gradient wash */}
            <div
              className="absolute inset-2 rounded-full bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02]"
              aria-hidden="true"
            />

            {/* Portrait */}
            <div
              className="absolute inset-4 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl"
              style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)" }}
            >
              <Image
                src="/assets/profile.png"
                alt="Mohamed Bishr, Senior Software Engineer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        onClick={handleScroll}
        aria-label="Scroll to skills"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Scroll
        </span>
        <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-white/[0.12] p-1.5 transition-colors duration-300 group-hover:border-white/30">
          <motion.span
            animate={{ y: [0, 7, 0], opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-foreground/80"
          />
        </span>
      </motion.button>
    </section>
  );
}
