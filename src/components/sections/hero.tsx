"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";

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
    return <LoadingSkeleton />;
  }

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center space-y-8 animate-fade-in"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Mohamed Bishr
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Senior Software Engineer
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            Building scalable and performant applications with modern
            technologies. Specialized in distributed systems and cloud
            architecture.
          </p>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Button
              variant="outline"
              size="icon"
              title="GitHub"
              onClick={() =>
                window.open("https://github.com/MohamedWaelBishr", "_blank")
              }
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              title="LinkedIn"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mohamed-wael-bishr/",
                  "_blank"
                )
              }
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              title="Email"
              onClick={() => window.open("mailto:mohamedwaelbishr@gmail.com")}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <Button
            className="mt-4"
            title="Download Resume"
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1V3tUAtqvv3fcgBubj-M06MFee0ISkbZi",
                "_blank"
              )
            }
          >
            Download Resume
          </Button>
        </div>

        <div className="relative w-[300px] h-[300px]  md:w-[500px] md:h-[500px]">
          <div className=" rounded-full w-full h-full">
            <div className="rounded-full overflow-hidden relative w-full h-full bg-background">
              <Image
                src="/assets/profile.png"
                alt="Profile"
                title="Mohamed Bishr"
                width={300}
                height={300}
                className="object-cover grayscale w-[300px] h-[300px]  md:w-[500px] md:h-[500px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div
        title="Scroll down"
        className="hidden md:block rounded-full p-2 bg-opacity-25 bg-gray-200 absolute bottom-2 md:bottom-8 left-[46%]  md:left-[48%] -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={handleScroll}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </div>
  );
}
