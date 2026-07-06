"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";
import BorderGlow from "@/components/animations/BorderGlow";
import { Instrument_Serif, Poppins } from "next/font/google";

const DotField = dynamic(
    () => import("@/components/animations/DotField"),
    {
        ssr: false,
    }
);

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-instrument-serif",
    style: "italic",
});

const TAGS = ["REELS", "CAFE", "EDITING", "EVENTS"];

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [playing, setPlaying] = useState(true);

    const toggleVideo = useCallback(() => {
        if (!videoRef.current) return;

        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setPlaying((prev) => !prev);
    }, [playing]);

    return (
        <section className="relative pt-35 pb-25 lg:pt-48 w-full bg-black font-[Poppins]">

            {/* DOT BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <DotField
                    dotRadius={1.5}
                    dotSpacing={16}
                    bulgeStrength={56}
                    glowRadius={100}
                    sparkle={false}
                    waveAmplitude={0}
                    cursorRadius={200}
                    cursorForce={0.03}
                    bulgeOnly
                    gradientFrom="#ff0000"
                    gradientTo="#2a0000"
                    glowColor="#ff000091"
                />
            </div>

            {/* BACKGROUND VIDEO */}
            <video
                className="absolute inset-0 h-full w-full object-cover opacity-30 z-10"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            >
                <source
                    src="/videos/hero.mp4"
                    type="video/mp4"
                />
            </video>

            {/* SCAN LINE */}
            <div className="scan-line-vertical" />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-5 md:inset-8 z-10"
            >
                <span className="absolute size-8 border-white/40 top-0 left-0 border-t border-l"></span>
                <span className="absolute size-8 border-white/40 top-0 right-0 border-t border-r"></span>
                <span className="absolute size-8 border-white/40 bottom-0 left-0 border-b border-l"></span>
                <span className="absolute size-8 border-white/40 bottom-0 right-0 border-b border-r"></span>
            </div>

            {/* CONTENT */}
            <div className="relative z-20 flex items-center justify-between h-full md:px-10 px-5">
                <div className="max-w-[75rem] mx-auto flex items-center justify-between w-full gap-10">

                    {/* LEFT CONTENT */}
                    <div className="max-w-2xl text-white">

                        {/* BADGE */}
                        <div
                            className={`${poppins.className} inline-flex items-center gap-2 rounded-full px-3 py-1.5 glass-panel mb-5 border border-white/20 bg-white/5 backdrop-blur-md max-w-[90vw]`}
                        >
                            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#ff0000] animate-pulse"></span>

                            <span className="truncate overflow-hidden whitespace-nowrap text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-white/80">
                                Now booking cinematic reels for Rajkot brands
                            </span>
                        </div>

                        {/* HEADING */}
                        <h1
                            className={`${instrumentSerif.className} text-[44px] md:text-[76.8px] lg:text-[106px] italic leading-[1.05] max-w-[14ch]`}
                        >
                            We Create Videos
                            People Actually Watch.
                        </h1>

                        {/* SUBTEXT */}
                        <p
                            className={`${poppins.className} mt-6 text-white/70 max-w-lg text-[15px] sm:text-base md:text-[15px] tracking-wide leading-relaxed`}
                        >
                            Cinematic reels, sharp edits and brand films crafted to stop the scroll and build real impact.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex mt-8 ml-[-14px] gap-0 flex-wrap items-center">

                            {/* WHITE BUTTON */}
                            <BorderGlow
                                edgeSensitivity={10}
                                glowColor="4 8 8"
                                backgroundColor="transparent"
                                borderRadius={50}
                                glowRadius={10}
                                glowIntensity={0}
                                coneSpread={0}
                                animated={false}
                                colors={["#ffffff"]}
                                className="inline-flex w-fit"
                            >
                                <div className="group relative p-3 rounded-full bg-transparent border-color-transparent">
                                    <Link
                                        href="/work"
                                        className="group btn-glow relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium overflow-hidden"
                                    >
                                        <span className="relative z-[1] flex items-center gap-2">
                                            Watch Our Work

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                                            >
                                                <path d="M7 7h10v10" />
                                                <path d="M7 17 17 7" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </BorderGlow>

                            {/* RED BUTTON */}
                            <BorderGlow
                                edgeSensitivity={10}
                                glowColor="4 8 8"
                                backgroundColor="transparent"
                                borderRadius={50}
                                glowRadius={10}
                                glowIntensity={0}
                                coneSpread={0}
                                animated={false}
                                colors={["#ff0000"]}
                                className="inline-flex w-fit"
                            >
                                <div className="group relative p-3 rounded-full bg-transparent border-color-transparent">
                                    <Link
                                        href="/contact"
                                        className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-medium overflow-hidden"
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                            Book a Shoot
                                        </span>
                                    </Link>
                                </div>
                            </BorderGlow>

                        </div>

                        {/* STATS */}
                        <div className="flex items-center gap-3 mt-6 flex-wrap">

                            <button
                                className={`${poppins.className} px-4 py-1.5 rounded-full border border-white/15 text-white text-[11px] md:text-[13px] tracking-wide hover:bg-white/10 transition`}
                            >
                                2M+ Views Created
                            </button>

                            <button
                                className={`${poppins.className} px-4 py-1.5 rounded-full border border-white/15 text-white text-[11px] md:text-[13px] tracking-wide hover:bg-white/10 transition`}
                            >
                                Cafe Reels from ₹1500
                            </button>

                            <button
                                className={`${poppins.className} px-4 py-1.5 rounded-full border border-white/15 text-white text-[11px] md:text-[13px] tracking-wide hover:bg-white/10 transition`}
                            >
                                15 Reels Package ₹15,000
                            </button>

                        </div>

                    </div>

                </div>

                {/* RIGHT VIDEO CARD */}
                <div className="hidden lg:block absolute -bottom-15 right-8 w-[360px] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden">

                    {/* TOP BAR */}
                    <div className="flex items-center justify-between px-4 py-3 text-white/80 text-xs">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="tracking-widest">
                                3VS • SHOWREEL
                            </span>
                        </div>

                        <span>00:30</span>
                    </div>

                    {/* VIDEO */}
                    <div className="relative">

                        <video
                            ref={videoRef}
                            className="w-full h-[200px] object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        >
                            <source
                                src="/videos/hero.mp4"
                                type="video/mp4"
                            />
                        </video>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                        {/* PLAY BUTTON */}
                        <div className="absolute inset-0 flex items-center justify-center">

                            <button
                                onClick={toggleVideo}
                                className={`w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition ${playing ? "opacity-0" : "opacity-100"}`}
                                aria-label={playing ? "Pause video" : "Play video"}
                            >
                                {playing ? (
                                    <div className="flex gap-[3px]">
                                        <span className="w-1.5 h-5 bg-black" />
                                        <span className="w-1.5 h-5 bg-black" />
                                    </div>
                                ) : (
                                    <div className="w-0 h-0 border-l-[10px] border-l-black border-y-[7px] border-y-transparent ml-1" />
                                )}
                            </button>

                        </div>

                        {/* PROGRESS */}
                        <div className="absolute bottom-2 left-4 right-4 h-[2px] bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-[35%] bg-red-500" />
                        </div>

                    </div>

                    {/* TAGS */}
                    <div className="flex gap-2 px-4 py-3">

                        {TAGS.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-white/70 hover:bg-white/10 transition"
                            >
                                {tag}
                            </span>
                        ))}

                    </div>

                </div>

            </div>

            {/* SCAN LINE STYLE */}
            <style jsx>{`
                .scan-line-vertical {
                    position: absolute;
                    top: 0;
                    left: -10%;
                    width: 1.5px;
                    height: 100%;
                    overflow: hidden;

                    background: linear-gradient(
                        to bottom,
                        transparent,
                        rgba(255, 0, 0, 0.9),
                        transparent
                    );

                    box-shadow:
                        0 0 20px rgba(255, 0, 0, 0.8),
                        0 0 40px rgba(255, 0, 0, 0.4);

                    animation: scanMove 5s linear infinite;
                    will-change: transform;
                }

                @keyframes scanMove {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(108vw);
                    }
                }
            `}</style>
        </section>
    );
}