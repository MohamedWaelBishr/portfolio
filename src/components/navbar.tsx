"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navigation.map(n => n.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    if (href === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleClick("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-lg font-bold text-primary-foreground">MB</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-lg">Mohamed Bishr</span>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            
            {/* CTA Button */}
            <Button
              size="sm"
              className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              onClick={() => handleClick("#contact")}
            >
              <Sparkles className="w-4 h-4" />
              Hire Me
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-white/[0.05]">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[280px] glass border-l border-white/[0.05] bg-background/95"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 mb-8 mt-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-foreground">MB</span>
                    </div>
                    <span className="font-semibold">Mohamed Bishr</span>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex flex-col gap-2">
                    {navigation.map((item) => {
                      const isActive = activeSection === item.href.replace("#", "");
                      return (
                        <button
                          key={item.name}
                          onClick={() => handleClick(item.href)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-white/[0.03] hover:text-foreground"
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? "bg-primary" : "bg-muted-foreground/30"
                          }`} />
                          {item.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-auto mb-8">
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                      onClick={() => handleClick("#contact")}
                    >
                      <Sparkles className="w-4 h-4" />
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
