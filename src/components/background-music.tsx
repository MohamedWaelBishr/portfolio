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
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePlay}
        className="bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
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
