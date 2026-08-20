"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const sectionIds = navigation.map((item) => item.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 24);

        // Last section whose top has passed the navbar wins
        let current = sectionIds[0];
        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element && element.getBoundingClientRect().top <= 150) {
            current = id;
          }
        }
        setActiveSection(current);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const handleClick = useCallback((href: string) => {
    setOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleClick("#home")}
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105">
              <span className="text-[15px] font-bold text-primary-foreground">MB</span>
            </span>
            <span className="hidden flex-col items-start leading-tight sm:flex">
              <span className="text-[15px] font-semibold">Mohamed Bishr</span>
              <span className="text-[11px] text-muted-foreground">Senior Software Engineer</span>
            </span>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleClick(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-lg border border-white/[0.1] bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            <Button
              size="sm"
              className="ml-4 h-9 gap-2 bg-primary px-4 text-primary-foreground shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-foreground"
              onClick={() => handleClick("#contact")}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Hire Me
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/[0.06]"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[290px] border-l border-white/[0.06] bg-background/95 backdrop-blur-xl"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-8 mt-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                      <span className="text-[15px] font-bold text-primary-foreground">MB</span>
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="font-semibold">Mohamed Bishr</span>
                      <span className="text-[11px] text-muted-foreground">
                        Senior Software Engineer
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {navigation.map((item) => {
                      const isActive = activeSection === item.href.slice(1);
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => handleClick(item.href)}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all duration-300 ${
                            isActive
                              ? "border border-white/[0.1] bg-white/[0.06] text-foreground"
                              : "border border-transparent text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isActive ? "bg-foreground" : "bg-muted-foreground/30"
                            }`}
                          />
                          {item.name}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mb-8 mt-auto">
                    <Button
                      className="h-11 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => handleClick("#contact")}
                    >
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
