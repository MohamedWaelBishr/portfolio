"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const Particles = dynamic(
  () => import("@/components/GalaxyBackgroung").then((mod) => mod.default),
  { loading: () => null, ssr: false }
);

/**
 * The particle field is decoration. If WebGL throws — no GPU, hardware
 * acceleration disabled, a driver blocklist — it must not take the page
 * down with it, so it renders inside its own boundary.
 */
class CanvasBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Ambient background disabled:", error);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

export function AmbientBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!reduceMotion && supportsWebGL());
  }, []);

  if (!enabled) return null;

  return (
    <div className="bg-canvas" aria-hidden="true">
      <CanvasBoundary>
        <Particles />
      </CanvasBoundary>
    </div>
  );
}
