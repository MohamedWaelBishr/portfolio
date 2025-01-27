import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import "./styles.scss";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import ParticlesBackground from "@/components/GalaxyBackgroung";
import dynamic from "next/dynamic";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BackgroundMusic } from "@/components/background-music";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ParticlesBackgroundComponent = dynamic(
  () => import("@/components/GalaxyBackgroung").then((mod) => mod.default),
  {
    loading: () => <LoadingSkeleton />,
  }
);

export const metadata: Metadata = {
  title: "Mohamed Bishr Portfolio | Senior Software Engineer",
  description:
    "Professional portfolio showcasing full-stack development expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-black text-white stars-container `}
      >
        {/* <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> */}
        <ParticlesBackgroundComponent />
        <BackgroundMusic />
        <Navbar />
        {children}

        {/* <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> */}

        <ScrollToTop />
        {/* <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> */}
      </body>
    </html>
  );
}
