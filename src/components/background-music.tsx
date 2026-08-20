"use client";

import { Volume2, VolumeX, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const initializeAudio = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.3;
        await audioRef.current.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (error) {
        console.log("Autoplay prevented:", error);
      }
    }
  };

  const togglePlay = async () => {
    if (!hasInteracted) {
      await initializeAudio();
      return;
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    /* Sits above the scroll-to-top button on desktop so the two never overlap */
    <div className="fixed bottom-4 right-4 z-50 md:bottom-24 md:right-8">
      <button
        onClick={togglePlay}
        className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.08] hover:text-primary md:h-12 md:w-12"
        aria-label={
          !hasInteracted
            ? "Start music"
            : isPlaying
            ? "Mute music"
            : "Play music"
        }
      >
        {!hasInteracted ? (
          <Play className="w-6 h-6" />
        ) : isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
      <audio
        ref={audioRef}
        loop
        src="/audio/background-music.mp3"
        style={{ display: "none" }}
      />
    </div>
  );
};
