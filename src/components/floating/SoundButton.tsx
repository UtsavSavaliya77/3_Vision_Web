"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundButton() {
  const [isSoundOn, setIsSoundOn] = useState(false);

  const toggleSound = () => {
    const nextState = !isSoundOn;
    setIsSoundOn(nextState);

    // Mute / Unmute all audio & video elements
    document.querySelectorAll<HTMLMediaElement>("audio, video").forEach((media) => {
      media.muted = !nextState;
    });
  };

  return (
    <button
      onClick={toggleSound}
      aria-label={isSoundOn ? "Turn sound off" : "Turn sound on"}
      className="fixed bottom-[78px] right-4 md:bottom-[86px] md:right-6 z-[80] inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all hover:border-white/20 hover:bg-black/75"
    >
      {/* Animated Status Dot */}
      <span className="relative inline-flex">
        <span
          className={`size-2 rounded-full ${
            isSoundOn ? "bg-red-500" : "hidden"
          }`}
        />
        {isSoundOn && (
          <span className="absolute inset-0 size-2 animate-ping rounded-full bg-red-500 opacity-70" />
        )}
      </span>

      {/* Icon */}
      {isSoundOn ? (
        <Volume2 className="size-3.5" />
      ) : (
        <VolumeX className="size-3.5" />
      )}

      {/* Text */}
      <span>{isSoundOn ? "Sound On" : "Sound"}</span>
    </button>
  );
}