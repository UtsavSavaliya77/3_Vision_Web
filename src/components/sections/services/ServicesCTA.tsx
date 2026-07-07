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

export default function ServicesCta() {
    return (
        <section className="relative py-[2.75rem] lg:py-[7vw] bg-[#050505] text-center overflow-hidden">
            {/* Bottom radial glow pointing upwards to anchor the section */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 100%, rgba(239,29,40,0.12), transparent 60%)",
                }}
            />

            <div className="relative max-w-[80rem] mx-auto px-[1.125rem] md:px-[4vw]">
                {/* Heading */}
                <h2
                    className={`${instrumentSerif.className} text-white text-[40px] md:text-7xl italic leading-[1.05] -tracking-[0.025em]`}
                >
                    Not sure where to start?
                </h2>

                {/* Subtitle */}
                <p
                    className={`${poppins.className} mt-4 text-[#ffffffd1] text-[16px] leading-relaxed max-w-md mx-auto`}
                >
                    Tell us your goal. We&apos;ll suggest the right service.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap justify-center">
                    {/* Primary CTA (Red with BorderGlow) */}
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
                        <div className="group relative p-3 rounded-full bg-transparent">
                            <a
                                href="/contact"
                                className={`${poppins.className} group inline-flex items-center gap-2 rounded-full border-2 border-[#ef1d28] bg-[#ef1d28] py-[12px] px-[22px] text-[16px] font-semibold text-white transition hover:border-red-900`}
                            >
                                Book a Shoot
                                <span className="inline-block bg-transparent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                                    <ArrowIcon />
                                </span>
                            </a>
                        </div>
                    </BorderGlow>

                    {/* Secondary CTA (Ghost) */}
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
                        <div className="group relative p-3 rounded-full bg-transparent">
                            <a
                                href="/packages"
                                className={`${poppins.className} group inline-flex items-center gap-2 rounded-full border-2 border-white/10 bg-black py-[13px] px-[22px] text-[16px] font-semibold text-white transition hover:border-red-900`}
                            >
                                See Packages
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