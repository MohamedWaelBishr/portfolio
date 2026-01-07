"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full items-center justify-center glass hover:bg-white/[0.08] border border-white/[0.1] hover:border-primary/50 transition-all duration-300 group"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
