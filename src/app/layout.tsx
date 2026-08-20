import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { AmbientBackground } from "@/components/ambient-background";
import { BackgroundMusic } from "@/components/background-music";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { MotionProvider } from "@/components/motion-provider";

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

export const metadata: Metadata = {
  title: "Mohamed Bishr | Senior Software Engineer",
  description:
    "Professional portfolio showcasing full-stack development expertise. Building scalable, high-performance applications with React, Node.js, and modern web technologies.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Mohamed Bishr" }],
  creator: "Mohamed Bishr",
  openGraph: {
    title: "Mohamed Bishr | Senior Software Engineer",
    description:
      "Professional portfolio showcasing full-stack development expertise.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Bishr | Senior Software Engineer",
    description:
      "Professional portfolio showcasing full-stack development expertise.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0c",
  colorScheme: "dark",
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
        className={`${outfit.variable} ${dmSans.variable} min-h-screen antialiased`}
      >
        <MotionProvider>
          <AmbientBackground />

          <ScrollProgress />
          <BackgroundMusic />
          <Navbar />

          <div className="relative z-10">{children}</div>

          <Footer />
          <ScrollToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
