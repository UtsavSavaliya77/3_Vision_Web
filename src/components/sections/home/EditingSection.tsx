"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { Instrument_Serif, Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: "italic",
});

type ClipColor =
    | "red"
    | "white"
    | "gray"
    | "white1"
    | "gray1"
    | "white2"
    | "gray2"
    | "red1"
    | "red2";

interface TimelineClip {
    label: string;
    color: ClipColor;
    width: number;
}

interface TimelineTrack {
    name: string;
    clips: TimelineClip[];
}

const tracks: TimelineTrack[] = [
    {
        name: "V1 • VIDEO",
        clips: [
            { label: "HOOK", color: "red", width: 16 },
            { label: "CUT", color: "white", width: 12 },
            { label: "B-ROLL", color: "gray", width: 20 },
            { label: "BEAT", color: "red", width: 16 },
            { label: "COLOR", color: "white", width: 12 },
            { label: "IMPACT", color: "gray", width: 21 },
        ],
    },
    {
        name: "A1 • AUDIO",
        clips: [
            { label: "", color: "red1", width: 16 },
            { label: "", color: "white1", width: 12 },
            { label: "", color: "gray1", width: 20 },
            { label: "", color: "red1", width: 16 },
            { label: "", color: "white1", width: 12 },
            { label: "", color: "gray1", width: 21 },
        ],
    },
    {
        name: "TX • TEXT",
        clips: [
            { label: "", color: "red2", width: 16 },
            { label: "", color: "white2", width: 12 },
            { label: "", color: "gray2", width: 20 },
            { label: "", color: "red2", width: 16 },
            { label: "", color: "white2", width: 12 },
            { label: "", color: "gray2", width: 21 },
        ],
    },
];

function clipClasses(color: ClipColor) {
    switch (color) {
        case "red":
            return "border-[#ff3040]/50 bg-[#d60e2c] text-white";

        case "white":
            return "border-white/50 bg-white text-black/75";

        case "gray":
            return "border-white/10 bg-[#626266] text-white/55";

        case "white1":
            return "border-white/50 bg-white/70 text-white/40";

        case "white2":
            return "border-white/10 bg-white/50 text-white/40";

        case "gray1":
            return "border-white/10 bg-[#626266]/70 text-white/40";

        case "gray2":
            return "border-white/10 bg-[#626266]/50 text-white/40";

        case "red1":
            return "border-[#ff3040]/50 bg-red-500/70 text-white";

        case "red2":
            return "border-[#ff3040]/50 bg-red-500/50 text-white";

        default:
            return "";
    }
}

export default function EditingSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const clipRefs = useRef<Array<HTMLDivElement | null>>([]);
    const playheadRefs = useRef<Array<HTMLDivElement | null>>([]);
    const waveformRefs = useRef<Array<HTMLSpanElement | null>>([]);

    const waveformHeights = [
        24.1649, 54.3611, 39.491, 62.5919, 47.767, 54.9075, 38.1432, 42.5071,
        43.5505, 54.493, 72.3812, 70.2074, 44.1127, 65.4171, 62.0538, 35,
        63.3756, 55.4552, 54.8911, 61.774, 58.6673, 77.0071, 36.2034,
        46.5713, 67.4422, 68.514, 24.4031, 58.5153, 66.5689, 73.0362,
        40.0508, 62.8559, 69.5382, 78.3333, 74.4455, 59.8832, 33.8126,
        68.8951, 49.9483, 37.683, 60.8244, 37.6597, 71.416, 65.2168,
        29.3203, 45.0463, 58.0239, 61.6376, 56.8086, 36.3593, 57.3021,
        51.2097, 24.3946, 51.4597, 32.0986, 94.0788, 48.1669, 38.1449,
        61.2627, 42.3313, 50, 57.0429, 56.105, 38.1789,
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const timeline = timelineRef.current;

        if (!section || !timeline) return;

        const clips = clipRefs.current.filter(
            (item): item is HTMLDivElement => Boolean(item),
        );

        const playheads = playheadRefs.current.filter(
            (item): item is HTMLDivElement => Boolean(item),
        );

        const waveformBars = waveformRefs.current.filter(
            (bar): bar is HTMLSpanElement => Boolean(bar),
        );

        // Waveform animation is now driven by CSS (.wave-bar + per-bar
    // animation-delay) — see globals.css. GSAP is reserved for the
    // one-shot clip/playhead entrance.
    const ctx = gsap.context(() => {
            gsap.fromTo(
                ".editing-copy",
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                },
            );

            gsap.fromTo(
                timeline,
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.98,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    delay: 0.15,
                    duration: 1,
                    ease: "power3.out",
                },
            );

            gsap.fromTo(
                clips,
                {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: "left center",
                },
                {
                    opacity: 1,
                    scaleX: 1,
                    delay: 0.4,
                    duration: 0.55,
                    stagger: 0.025,
                    ease: "power2.out",
                },
            );

            // Playhead infinite animation
            const playheadTimeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 0.45,
                delay: 1,
            });

            playheadTimeline.set(playheads, {
                left: "0%",
                opacity: 0,
            });

            playheadTimeline.to(playheads, {
                opacity: 1,
                duration: 0.15,
                stagger: 0.03,
            });

            playheadTimeline.to(
                playheads,
                {
                    left: "100%",
                    duration: 8,
                    ease: "none",
                },
                "<",
            );

            playheadTimeline.to(playheads, {
                opacity: 0,
                duration: 0.15,
            });
        }, section);

        return () => ctx.revert();
    }, []);


    let clipIndex = 0;

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden bg-black px-5 py-[3.5rem] text-white  md:px-10 md:py-[7vw]"
        >

            <div className="relative mx-auto w-full max-w-[75rem]">
                {/* Heading */}
                <div className="editing-copy max-w-[760px]">
                    <div className="mb-3 flex items-center gap-3 sm:mb-4">
                        <span className="h-px w-7 bg-[#ef1d28]" />

                        <p className={`${poppins.className} text-[11px] uppercase tracking-[0.18em] text-[#ffffffa8] font-[600]`}>
              // Editing
                        </p>
                    </div>

                    <h2 className={`${instrumentSerif.className} text-[2.25rem] leading-[0.95] text-white tracking-[-0.025em] md:text-[6vw] md:max-w-xs lg:max-w-lg`}>
                        Editing is{" "}
                        <span className="text-[#ef1d28]">everything.</span>
                    </h2>

                    <p className={`${poppins.className} mt-6 max-w-2xl text-[15px] leading-relexed text-muted-white `}>
                        The shot is half the work. Pace, cuts, color and sound — that&apos;s
                        where attention is engineered.
                    </p>
                </div>

                {/* Editing panel */}
                <div
                    ref={timelineRef}
                    className="relative mt-9 overflow-hidden rounded-[12px] border border-white/[0.07] bg-[#09090a]/95 shadow-[0_24px_70px_rgba(0,0,0,0.7)] sm:mt-12 sm:rounded-[15px]"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between pt-6 px-3 sm:px-5">
                        <div className="flex min-w-0 items-center gap-2">
                            <span className="price-glow-dot relative z-10 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-[#ef1d28] bg-white">
                            </span>
                            <span
                                className={`${poppins.className} truncate text-[10px] font-mono uppercase tracking-[0.2em] text-white/70`}
                            >
                                Timeline · 3V.Project
                            </span>
                        </div>

                        <div className={`${poppins.className} shine hidden items-center gap-2 sm:flex font-mono text-[10px] uppercase tracking-[0.18em] text-white/55`}>
                            <span>
                                00:00:14:21
                            </span>
                            <span>/</span>
                            <span>
                                00:00:20:00
                            </span>
                        </div>
                    </div>

                    {/* Horizontal scroll on small screens */}
                    <div className="overflow-x-auto">
                        <div className="relative min-w-[760px] px-4 pb-6 pt-4 sm:min-w-[900px] sm:px-5 sm:pb-7 md:min-w-0">
                            {/* Timeline rows */}
                            <div className="border-t border-white/[0.06] ">
                                {tracks.map((track, trackIndex) => (
                                    <div
                                        key={track.name}
                                        className="grid grid-cols-[72px_minmax(0,1fr)] items-center gap-3 border-b border-white/[0.06] py-3"
                                    >
                                        {/* Track label */}
                                        <p
                                            className={`${poppins.className} pt-2 text-[10px] font-mono uppercase tracking-[0.16em] text-white/70`}
                                        >
                                            {track.name}
                                        </p>

                                        {/* Track content */}
                                        <div className="relative overflow-hidden rounded-md border border-white/[0.04] bg-white/[0.025]">
                                            {/* Clip row */}
                                            <div className="relative flex h-10 items-center justify-center gap-1.5 overflow-hidden px-2 lg:px-0">
                                                {track.clips.map((clip, index) => {
                                                    const currentIndex = clipIndex++;

                                                    return (
                                                        <div
                                                            key={`${track.name}-${index}`}
                                                            ref={(node) => {
                                                                clipRefs.current[currentIndex] = node;
                                                            }}
                                                            className={`relative flex h-5 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border transition-all duration-300 hover:z-20 hover:shadow-[0_0_6px_rgba(239,29,40,0.55),0_0_12px_rgba(239,29,40,0.25)] ${clipClasses(
                                                                clip.color,
                                                            )}`}
                                                            style={{
                                                                width: `calc(${clip.width}% - 3px)`,
                                                            }}
                                                        >
                                                            <span
                                                                className={`${poppins.className} truncate px-1 text-[8px] font-semibold uppercase tracking-[0.07em] text-black`}
                                                            >
                                                                {clip.label}
                                                            </span>

                                                            <span className="absolute inset-x-0 top-0 h-px bg-white/15" />
                                                        </div>
                                                    );
                                                })}

                                                {/* Separate playhead for this track */}
                                                <div
                                                    ref={(node) => {
                                                        playheadRefs.current[trackIndex] = node;
                                                    }}
                                                    className="pointer-events-none absolute bottom-0 top-0 z-30 w-px bg-[#ff2532] opacity-0 shadow-[0_0_7px_rgba(255,37,50,1),0_0_16px_rgba(255,37,50,0.55)]"
                                                >
                                                    <span className="absolute -left-[6px] inset-y-0 w-[13px] bg-[#ef1d28]/10 blur-[5px]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* ================= ANIMATED WAVEFORM ================= */}
                                <div className="mt-4 grid items-center gap-[3px] border-t border-white/5 pt-3">
                                    <div className="relative flex h-6 items-end gap-[3px] px-1 max-sm:gap-[2px]">
                                        {waveformHeights.map((height, index) => (
                                            <span
                                                key={`waveform-${index}`}
                                                ref={(node) => {
                                                    waveformRefs.current[index] = node;
                                                }}
                                                className="min-w-[2px] flex-1 rounded-sm bg-white/30 will-change-transform"
                                                style={{
                                                    height: `${height}%`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Bottom glow */}
                    <div className="pointer-events-none absolute inset-x-[15%] bottom-[-28px] h-[45px] rounded-full bg-red-600/15 blur-[26px]" />
                </div>
            </div>
        </section>
    );
}