import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import dynamic from "next/dynamic";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { BackgroundMusic } from "@/components/background-music";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const ParticlesBackgroundComponent = dynamic(
  () => import("@/components/GalaxyBackgroung").then((mod) => mod.default),
  {
    loading: () => null,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Mohamed Bishr | Senior Software Engineer",
  description:
    "Professional portfolio showcasing full-stack development expertise. Building scalable, high-performance applications with React, Node.js, and modern web technologies.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Mohamed Bishr" }],
  openGraph: {
    title: "Mohamed Bishr | Senior Software Engineer",
    description: "Professional portfolio showcasing full-stack development expertise.",
    type: "website",
  },
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
        className={`${outfit.variable} ${dmSans.variable} antialiased min-h-screen`}
      >
        <ParticlesBackgroundComponent />
        <ScrollProgress />
        <BackgroundMusic />
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
