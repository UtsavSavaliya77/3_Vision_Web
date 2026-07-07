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
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PackagesBottomCta() {
    return (
        <section className="relative py-[2.75rem] lg:py-[5vw] bg-[#050505] text-center overflow-hidden">
            {/* Subtle top radial glow to ground the section */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(239,29,40,0.1), transparent 60%)",
                }}
            />

            <div className="relative max-w-[80rem] mx-auto px-[1.125rem] md:px-[4vw]">
                {/* Heading */}
                <h2
                    className={`${instrumentSerif.className} text-white text-5xl md:text-7xl italic leading-[1.05] max-w-3xl mx-auto -tracking-[0.025em]`}
                >
                    Confused what to choose?
                </h2>

                {/* Subtitle */}
                <p
                    className={`${poppins.className} mt-4 text-[#ffffffd1] text-[16px] leading-relaxed max-w-md mx-auto`}
                >
                    Tell us your goal — we&apos;ll suggest the right package.
                </p>

                {/* Buttons */}
                <div className="mt-5 flex flex-col sm:flex-row justify-center max-w-md mx-auto">
                    {/* WhatsApp Button (Red) */}
                    <BorderGlow
                        edgeSensitivity={10} glowColor="4 8 8" backgroundColor="transparent"
                        borderRadius={50} glowRadius={10} glowIntensity={0} coneSpread={0}
                        animated={false} colors={["#ff0000"]} className="w-full block"
                    >
                        <div className="group relative p-3 rounded-full bg-transparent w-full">
                            <a
                                href="https://wa.me/919428163116?text=Hi%203Vision%20Studio%2C%20I%20am%20interested%20in%20reels%2Fvideo%20shoot.%20Please%20share%20details."
                                target="_blank"
                                rel="noreferrer"
                                className={`${poppins.className} group flex items-center justify-center gap-2 w-full rounded-full border-1 border-[#ef1d28] bg-[#ef1d28] py-[12px] px-[22px] text-[16px] font-semibold text-white transition hover:border-red-900`}
                            >
                                WhatsApp Us
                                <span className="inline-block bg-transparent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                                    <ArrowIcon />
                                </span>
                            </a>
                        </div>
                    </BorderGlow>

                    {/* Send Inquiry Button (Ghost / White Outline) */}
                    <BorderGlow
                        edgeSensitivity={10} glowColor="4 8 8" backgroundColor="transparent"
                        borderRadius={50} glowRadius={10} glowIntensity={0} coneSpread={0}
                        animated={false} colors={["#ff0000"]} className="w-full block"
                    >
                        <div className="group relative p-3 rounded-full bg-transparent w-full">
                            <a
                                href="/contact"
                                className={`${poppins.className} group flex items-center justify-center gap-2 w-full rounded-full border-1 border-white/20 bg-black py-[12px] px-[22px] text-[16px] font-semibold text-white transition hover:border-red-500`}
                            >
                                Send Inquiry
                                <span className="inline-block bg-transparent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                                    <ArrowIcon />
                                </span>
                            </a>
                        </div>
                    </BorderGlow>
                </div>
            </div>
        </section>
    );
}