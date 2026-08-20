"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Honours the OS "reduce motion" setting across every Framer Motion
 * animation on the site. CSS transitions are handled in globals.css;
 * this covers the JS-driven ones.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
