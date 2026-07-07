"use client";

import BorderGlow from "@/components/animations/BorderGlow";
import { Instrument_Serif, Poppins } from "next/font/google";

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

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
/* ------------------------------------------------------------------ */

function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 mt-[2px] shrink-0"
            aria-hidden="true"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
        >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/*  Packages Grid                                                      */
/* ------------------------------------------------------------------ */

export default function PackagesGrid() {
    return (
        <section className="relative py-[2.75rem] lg:py-[5vw] bg-[#000000]">
            <div className="max-w-[80rem] mx-auto px-[1.125rem] md:px-[4vw] grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">

                {/* ------------------------------------------------------ */}
                {/* CARD 1: Single Cafe Reel                                */}
                {/* ------------------------------------------------------ */}
                <div className="relative rounded-[24px] p-7 flex flex-col bg-[#0a0a0a] border border-white/[0.08]">
                    <div className={`${poppins.className} text-[11px] uppercase tracking-[0.2em] text-white/70`}>
                        / Reel
                    </div>
                    <h3 className={`${instrumentSerif.className} mt-2 text-[30px] italic leading-tight text-white`}>
                        Single Cafe Reel
                    </h3>
                    <div className={`${instrumentSerif.className} mt-6 text-[60px] leading-none text-white`}>
                        ₹1500
                    </div>
                    <p className={`${poppins.className} mt-4 text-sm text-[#ffffffd1]`}>
                        Testing cinematic content for your cafe or restaurant.
                    </p>
                    <ul className={`${poppins.className} mt-6 space-y-2 text-[14px] text-white/80`}>
                        <li className="flex items-start gap-2"><CheckIcon />Basic concept</li>
                        <li className="flex items-start gap-2"><CheckIcon />Shoot</li>
                        <li className="flex items-start gap-2"><CheckIcon />Edit</li>
                        <li className="flex items-start gap-2"><CheckIcon />Music sync</li>
                        <li className="flex items-start gap-2"><CheckIcon />Color grading</li>
                        <li className="flex items-start gap-2"><CheckIcon />Instagram-ready export</li>
                    </ul>
                    <div className="mt-8">
                        {/* Added 'block' here to override inline-flex behavior */}
                        <BorderGlow
                            edgeSensitivity={10} glowColor="4 8 8" backgroundColor="transparent"
                            borderRadius={50} glowRadius={10} glowIntensity={0} coneSpread={0}
                            animated={false} colors={["#ff0000"]} className="w-full block"
                        >
                            <div className="group relative p-3 rounded-full bg-transparent w-full">
                                <a
                                    href="/contact"
                                    className={`${poppins.className} group flex items-center justify-center gap-2 w-full rounded-full border-2 border-[#ef1d28] bg-[#ef1d28] py-[12px] px-[22px] text-[16px] font-semibold text-white transition hover:border-red-900`}
                                >
                                    Book 1 Reel
                                    <span className="inline-block bg-transparent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                                        <ArrowIcon />
                                    </span>
                                </a>
                            </div>
                        </BorderGlow>
                    </div>
                </div>

                {/* ------------------------------------------------------ */}
                {/* CARD 2: Cafe Reel Growth Pack (Featured)                */}
                {/* ------------------------------------------------------ */}
                <div className="relative rounded-[24px] p-7 flex flex-col bg-[#ef1d28] text-white shadow-[0_0_80px_rgba(239,29,40,0.4)]">
                    <span className={`${poppins.className} absolute top-4 right-4 rounded-full bg-black/30 px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-semibold text-white`}>
                        Featured
                    </span>
                    <div className={`${poppins.className} text-[11px] uppercase tracking-[0.2em] text-white/70`}>
                        15 Reels Package
                    </div>
                    <h3 className={`${instrumentSerif.className} mt-2 text-[30px] italic leading-tight text-white`}>
                        Cafe Reel Growth Pack
                    </h3>
                    <div className={`${instrumentSerif.className} mt-6 text-[60px] leading-none text-white`}>
                        ₹15,000
                    </div>
                    <p className={`${poppins.className} mt-4 text-sm text-white/85`}>
                        Cafes that want consistent Instagram presence.
                    </p>
                    <ul className={`${poppins.className} mt-6 space-y-2 text-[14px] text-white/90`}>
                        <li className="flex items-start gap-2"><CheckIcon />15 reels</li>
                        <li className="flex items-start gap-2"><CheckIcon />Food reels</li>
                        <li className="flex items-start gap-2"><CheckIcon />Ambience reels</li>
                        <li className="flex items-start gap-2"><CheckIcon />Customer vibe</li>
                        <li className="flex items-start gap-2"><CheckIcon />Offer reels</li>
                        <li className="flex items-start gap-2"><CheckIcon />Special dishes</li>
                        <li className="flex items-start gap-2"><CheckIcon />Color grading</li>
                        <li className="flex items-start gap-2"><CheckIcon />Social-ready exports</li>
                    </ul>
                    <div className="mt-8">
                        {/* Added 'block' here */}
                        <BorderGlow
                            edgeSensitivity={10} glowColor="4 8 8" backgroundColor="transparent"
                            borderRadius={50} glowRadius={10} glowIntensity={0} coneSpread={0}
                            animated={false} colors={["#ffffff"]} className="w-full block"
                        >
                            <div className="group relative p-3 rounded-full bg-transparent w-full">
                                <a
                                    href="/contact"
                                    className={`${poppins.className} group flex items-center justify-center gap-2 w-full rounded-full border-2 border-[#ef1d28] bg-white py-[12px] px-[22px] text-[15px] font-semibold text-black transition hover:border-red-900`}
                                >
                                    DM &quot;CAFE REEL&quot;
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
                                </a>
                            </div>
                        </BorderGlow>
                    </div>
                </div>

                {/* ------------------------------------------------------ */}
                {/* CARD 3: Editing Package                                 */}
                {/* ------------------------------------------------------ */}
                <div className="relative rounded-[24px] p-7 flex flex-col bg-[#0a0a0a] border border-white/[0.08]">
                    <div className={`${poppins.className} text-[11px] uppercase tracking-[0.2em] text-white/70`}>
                        Quote
                    </div>
                    <h3 className={`${instrumentSerif.className} mt-2 text-[30px] italic leading-tight text-white`}>
                        Editing Package
                    </h3>
                    <div className={`${instrumentSerif.className} mt-6 text-[60px] leading-none text-white`}>
                        Custom
                    </div>
                    <p className={`${poppins.className} mt-4 text-sm text-[#ffffffd1]`}>
                        Creators and brands who already have footage.
                    </p>
                    <ul className={`${poppins.className} mt-6 space-y-2 text-[14px] text-white/80`}>
                        <li className="flex items-start gap-2"><CheckIcon />Reels editing</li>
                        <li className="flex items-start gap-2"><CheckIcon />Captions</li>
                        <li className="flex items-start gap-2"><CheckIcon />Music sync</li>
                        <li className="flex items-start gap-2"><CheckIcon />Color tone</li>
                        <li className="flex items-start gap-2"><CheckIcon />Hook / pacing</li>
                        <li className="flex items-start gap-2"><CheckIcon />Multiple exports</li>
                    </ul>
                    <div className="mt-8">
                        {/* Added 'block' here */}
                        <BorderGlow
                            edgeSensitivity={10} glowColor="4 8 8" backgroundColor="transparent"
                            borderRadius={50} glowRadius={10} glowIntensity={0} coneSpread={0}
                            animated={false} colors={["#ff0000"]} className="w-full block"
                        >
                            <div className="group relative p-3 rounded-full bg-transparent w-full">
                                <a
                                    href="/contact"
                                    className={`${poppins.className} group flex items-center justify-center gap-2 w-full rounded-full border-2 border-[#ef1d28] bg-[#ef1d28] py-[12px] px-[22px] text-[16px] font-semibold text-white transition hover:border-red-900`}
                                >
                                    Send Footage
                                    <span className="inline-block bg-transparent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                                        <ArrowIcon />
                                    </span>
                                </a>
                            </div>
                        </BorderGlow>
                    </div>
                </div>

                {/* ------------------------------------------------------ */}
                {/* CARD 4: Brand / Event Film                              */}
                {/* ------------------------------------------------------ */}
                <div className="relative rounded-[24px] p-7 flex flex-col bg-[#0a0a0a] border border-white/[0.08]">
                    <div className={`${poppins.className} text-[11px] uppercase tracking-[0.2em] text-white/70`}>
                        Quote
                    </div>
                    <h3 className={`${instrumentSerif.className} mt-2 text-[30px] italic leading-tight text-white`}>
                        Brand / Event Film
                    </h3>
                    <div className={`${instrumentSerif.className} mt-6 text-[60px] leading-none text-white`}>
                        Custom
                    </div>
                    <p className={`${poppins.className} mt-4 text-sm text-[#ffffffd1]`}>
                        Launches, events, brand stories and campaign videos.
                    </p>
                    <ul className={`${poppins.className} mt-6 space-y-2 text-[14px] text-white/80`}>
                        <li className="flex items-start gap-2"><CheckIcon />Concept</li>
                        <li className="flex items-start gap-2"><CheckIcon />Shoot</li>
                        <li className="flex items-start gap-2"><CheckIcon />Direction</li>
                        <li className="flex items-start gap-2"><CheckIcon />Edit</li>
                        <li className="flex items-start gap-2"><CheckIcon />Brand film</li>
                        <li className="flex items-start gap-2"><CheckIcon />Social cutdowns</li>
                    </ul>
                    <div className="mt-8">
                        {/* Added 'block' here */}
                        <BorderGlow
                            edgeSensitivity={10} glowColor="4 8 8" backgroundColor="transparent"
                            borderRadius={50} glowRadius={10} glowIntensity={0} coneSpread={0}
                            animated={false} colors={["#ff0000"]} className="w-full block"
                        >
                            <div className="group relative p-3 rounded-full bg-transparent w-full">
                                <a
                                    href="/contact"
                                    className={`${poppins.className} group flex items-center justify-center gap-2 w-full rounded-full border-2 border-[#ef1d28] bg-[#ef1d28] py-[12px] px-[22px] text-[16px] font-semibold text-white transition hover:border-red-900`}
                                >
                                    Plan Project
                                    <span className="inline-block bg-transparent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                                        <ArrowIcon />
                                    </span>
                                </a>
                            </div>
                        </BorderGlow>
                    </div>
                </div>

            </div>
        </section>
    );
}