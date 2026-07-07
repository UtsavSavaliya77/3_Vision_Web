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
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ServiceData {
    number: string;
    heading: string;
    description: string;
    features: string[];
    ctaText: string;
    badgeText: string;
    reversed: boolean;
    bgAlt: boolean;
}

const services: ServiceData[] = [
    {
        number: "01",
        heading: "Reels designed for the first 3 seconds.",
        description:
            "Hook-first reels. Concept, shoot, edit — engineered to be watched, not skipped.",
        features: [
            "Script / concept",
            "Shoot planning",
            "Cinematic shots",
            "Hook-focused framing",
            "Instagram-ready edit",
        ],
        ctaText: "Book Reel Shoot",
        badgeText: "Reel Shoots",
        reversed: false,
        bgAlt: false,
    },
    {
        number: "02",
        heading: "Raw footage in. Impact out.",
        description:
            "Send footage, get cinema. Cuts, color, captions and sound dialed in.",
        features: [
            "Reels editing",
            "Talking-head edits",
            "Color grading",
            "Music sync",
            "Captions / subtitles",
            "Motion graphics",
        ],
        ctaText: "Send Footage",
        badgeText: "Video Editing",
        reversed: true,
        bgAlt: true,
    },
    {
        number: "03",
        heading: "Turn ambience into visits.",
        description:
            "Cinematic cafe content built to fill seats — food, ambience, vibe, offers.",
        features: [
            "Food close-ups",
            "Ambience reels",
            "Customer vibe",
            "Offer reels",
            "Behind-the-scenes",
            "Special dish features",
        ],
        ctaText: "DM CAFE REEL",
        badgeText: "Cafe & Restaurant Reels",
        reversed: false,
        bgAlt: false,
    },
    {
        number: "04",
        heading: "For brands that need more than a reel.",
        description:
            "2–3 minute brand films that earn attention with story, craft and grade.",
        features: [
            "Brand story film",
            "Launch video",
            "Campaign video",
            "Social cutdowns",
        ],
        ctaText: "Plan Brand Film",
        badgeText: "Brand Films",
        reversed: true,
        bgAlt: true,
    },
    {
        number: "05",
        heading: "Moments captured before they disappear.",
        description:
            "Reels, highlight films and aftermovies that hold the energy of the night.",
        features: [
            "Event reels",
            "Highlight film",
            "Aftermovie",
            "Guest moments",
            "Social-ready clips",
        ],
        ctaText: "Book Event Coverage",
        badgeText: "Event Coverage",
        reversed: false,
        bgAlt: false,
    },
    {
        number: "06",
        heading: "Make the product feel premium before people touch it.",
        description:
            "Tactile product films and ads built to convert on social and storefronts.",
        features: [
            "Product demo",
            "Packaging shots",
            "Lifestyle shots",
            "Social ads",
            "Reel cutdowns",
        ],
        ctaText: "Create Product Video",
        badgeText: "Product Videos",
        reversed: true,
        bgAlt: true,
    },
];

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
/* ------------------------------------------------------------------ */

function PlayButton() {
    return (
        <button
            className="grid place-items-center size-16 rounded-full bg-white text-black shadow-[0_0_60px_rgba(239,29,40,0.45)] hover:scale-105 transition-transform"
            aria-label="Play video"
        >
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
                className="size-5 fill-black ml-0.5"
                aria-hidden="true"
            >
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            </svg>
        </button>
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
/*  Service card                                                       */
/* ------------------------------------------------------------------ */

function ServiceCard({
    number,
    heading,
    description,
    features,
    ctaText,
    badgeText,
    reversed,
    bgAlt,
}: ServiceData) {
    return (
        <section
            className={`relative py-[2.75rem] lg:py-[5vw] ${
                bgAlt ? "bg-[#0b0b0c]" : "bg-[#000]"
            }`}
        >
            <div className="max-w-[80rem] mx-auto px-[1.125rem] md:px-[4vw] grid md:grid-cols-12 gap-10 items-center">
                {/* ---- Content column ---- */}
                <div
                    className={`md:col-span-6 ${
                        reversed ? "md:order-2" : ""
                    }`}
                >
                    <span className="font-mono text-[11px] tracking-[0.2em] text-red-500">
                        {number}
                    </span>

                    <h2
                        className={`${instrumentSerif.className} mt-3 text-white text-[36px] md:text-[55.296px] lg:text-[73.728px] italic leading-[1.05] max-w-[16ch] -tracking-[0.025em]`}
                    >
                        {heading}
                    </h2>

                    <p
                        className={`${poppins.className} mt-5 text-[#ffffffd1] text-[16px] leading-relaxed max-w-md`}
                    >
                        {description}
                    </p>

                    <ul
                        className={`${poppins.className} mt-6 grid grid-cols-2 gap-y-2 max-w-md text-[14px] text-white/80`}
                    >
                        {features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-center gap-2"
                            >
                                <span className="size-1 shrink-0 rounded-full bg-red-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* CTA button with BorderGlow */}
                    <div className="mt-8">
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
                                    {ctaText}
                                    <span className="inline-block bg-transparent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                                        <ArrowIcon />
                                    </span>
                                </a>
                            </div>
                        </BorderGlow>
                    </div>
                </div>

                {/* ---- Video thumbnail column ---- */}
                <div
                    className={`md:col-span-6 ${
                        reversed ? "md:order-1" : ""
                    }`}
                >
                    <div className="relative aspect-[4/5] md:aspect-[4/3] rounded-[22px] overflow-hidden border border-white/[0.08] backdrop-blur-xl bg-white/[0.04]">
                        {/* Radial glow */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(ellipse at 50% 50%, rgba(239,29,40,0.25), transparent 60%)",
                            }}
                        />

                        {/* Inner play area */}
                        <div className="absolute inset-6 border border-white/[0.08] rounded-xl flex items-center justify-center">
                            <PlayButton />
                        </div>

                        {/* Top-left badge */}
                        <span className="absolute top-4 left-4 inline-flex items-center gap-2 backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5">
                            <span className="relative w-1.5 h-1.5 rounded-full bg-red-500 before:absolute before:inset-0 before:rounded-full before:bg-red-500 before:animate-ping" />
                            <span
                                className={`${poppins.className} font-mono text-[10px] uppercase tracking-[0.18em] text-white`}
                            >
                                {badgeText}
                            </span>
                        </span>

                        {/* Bottom progress bar */}
                        <div className="absolute left-5 right-5 bottom-5 h-[2px] bg-white/15 rounded-full overflow-hidden">
                            <div className="h-full w-[40%] bg-red-500 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Page export                                                        */
/* ------------------------------------------------------------------ */

export default function ServicesList() {
    return (
        <>
            {services.map((service) => (
                <ServiceCard key={service.number} {...service} />
            ))}
        </>
    );
}