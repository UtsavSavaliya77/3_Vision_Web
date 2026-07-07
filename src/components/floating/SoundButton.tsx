"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface AudioManagerType {
    audio: HTMLAudioElement;
    isPlaying: boolean;
    play: () => void;
    pause: () => void;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SoundButton() {
    const managerRef = useRef<AudioManagerType | null>(null);
    const [isSoundOn, setIsSoundOn] = useState(false);

    useEffect(() => {
        if (!(window as any).__3vsAudio) {
            const audio = new Audio("/audio/audio1.mp3");
            audio.loop = true;
            audio.preload = "auto";

            const manager: AudioManagerType = {
                audio: audio,
                isPlaying: false,
                play() {
                    if (this.isPlaying) return;
                    this.audio.play().then(() => {
                        this.isPlaying = true;
                    }).catch((err: any) => console.error("Audio play failed:", err));
                },
                pause() {
                    if (!this.isPlaying) return;
                    this.audio.pause();
                    this.isPlaying = false;
                }
            };

            // ------------------------------------------------------------------
            // THE FIX: "Watchdog" event listener
            // If the browser pauses the audio automatically during a page change,
            // this intercepts it and forces it to resume immediately.
            // ------------------------------------------------------------------
            audio.addEventListener('pause', () => {
                // If our app state thinks it SHOULD be playing, but it got paused...
                if (manager.isPlaying) {
                    setTimeout(() => {
                        audio.play().catch(() => {}); // Silently force it to resume
                    }, 100); // 100ms gives Next.js time to finish the route swap
                }
            });

            (window as any).__3vsAudio = manager;
        }
        
        managerRef.current = (window as any).__3vsAudio;
    }, []);

    const toggleSound = () => {
        const manager = managerRef.current;
        if (!manager) return;

        // Ask the audio element itself what its state is, not React
        const nextState = !manager.isPlaying;
        setIsSoundOn(nextState);

        if (nextState) {
            manager.play();
        } else {
            manager.pause();
        }

        // Fallback: Mute / Unmute any other existing video elements on the page
        document.querySelectorAll<HTMLMediaElement>("video").forEach((media) => {
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