"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Small uppercase label above the title, e.g. "Career" */
  eyebrow: string;
  title: string;
  description?: ReactNode;
  /** Optional right-aligned content (counts, filters, links) */
  aside?: ReactNode;
  className?: string;
}

/**
 * Every section opened with the same three-part heading written four
 * different ways. This is that heading, once.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  aside,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`flex flex-col gap-4 ${className}`}
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
        <span className="section-eyebrow">{eyebrow}</span>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
        <h2 className="section-title max-w-2xl">{title}</h2>
        {aside ? <div className="flex-shrink-0">{aside}</div> : null}
      </div>

      {description ? <p className="section-lede">{description}</p> : null}
    </motion.header>
  );
}
