"use client";

import BounceCards from "@/components/animations/BounceCards";
import { Instrument_Serif, Poppins } from "next/font/google";
import BorderGlow from "@/components/animations/BorderGlow";

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


const images = [
    "/images/packages/event.jpg",
    "/images/packages/event.jpg",
    "/images/packages/event.jpg",
    "/images/packages/event.jpg",
    "/images/packages/event.jpg"
];

const transformStyles = [
  // far left — lower and tilted outward
  "translate(-245px, 34px) rotate(-8deg)",

  // left-middle — slightly raised
  "translate(-128px, -12px) rotate(3deg)",

  // center — almost straight
  "translate(-18px, 2px) rotate(-1deg)",

  // right-middle — slightly raised
  "translate(92px, -10px) rotate(-3deg)",

  // far right — lower and tilted outward
  "translate(218px, 35px) rotate(8deg)",
];

export default function PackagesSection() {
    return (
        <section className="relative overflow-hidden bg-[#050505] px-5 py-[3.5rem] text-white md:px-10 md:py-[7vw]">

            {/* ================= BACKGROUND ================= */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* base dark cinematic bg */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,0,0,0.35),transparent_60%),linear-gradient(180deg,#070000_0%,#0b0000_50%,#050000_100%)]" />
            </div>

            {/* ================= CONTENT GRID ================= */}
            <div className="relative mx-auto grid max-w-[75rem] grid-cols-1 items-center md:grid-cols-2">

                {/* ================= LEFT ================= */}
                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-[2px] w-10 bg-red-500" />
                        <p className={`${poppins.className} text-[11px] uppercase tracking-[0.18em] text-[#ffffffa8] font-[600]`}>
                            // Content Packages
                        </p>
                    </div>

                    <h2 className={`${instrumentSerif.className} text-[2.25rem] leading-[0.95] text-white tracking-[-0.025em] md:text-[6vw] md:max-w-xs lg:max-w-lg`}>
                        <span>Every business has a story. <span className="text-red-500">We make it reel-worthy.
                        </span>
                        </span>
                    </h2>

                    <p className={`${poppins.className} mt-6 max-w-lg text-[15px] leading-relexed text-muted-white `}>
                        From cafes and restaurants to shops, cars, products, anchors and events —
                        3Vision Studio shoots, edits and delivers cinematic content built for Instagram impact.
                    </p>

                    <div className={`${poppins.className} mt-8 flex flex-wrap`}>
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
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 rounded-full border-2 border-[#ef1d28] bg-[#ef1d28] px-4 py-3 text-base font-bold text-white transition hover:border-red-900"
                                >
                                    Explore Packages
                                    <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                                        ↗
                                    </span>
                                </a>
                            </div>
                        </BorderGlow>
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
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/15 bg-black px-4 py-3 text-base font-bold text-white transition hover:border-red-900"
                                >
                                    DM "REEL"

                                </a>
                            </div>
                        </BorderGlow>
                    </div>

                    {/* pricing highlight line */}
                    <div className="relative mt-6 flex items-center gap-3 overflow-hidden rounded-full">

                        {/* red border + white center glow dot */}
                        <span className="price-glow-dot relative z-10 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-2 border-[#ef1d28] bg-white">
                        </span>

                        {/* text */}
                        <span
                            className={`${poppins.className} relative z-10 text-[11px] tracking-[0.25em] text-white/70`}
                        >
                            STARTING ₹1500 / REEL
                        </span>
                        <span className="mx-2 text-white/25">•</span>
                        <span className={`${poppins.className} relative z-10 text-[11px] tracking-[0.25em] text-white/70`}> SHOOT + EDIT + DELIVERY
                        </span>
                    </div>

                    {/* tags */}
                    <div className="mt-6 flex flex-wrap gap-2 text-xs max-w-md text-white/60">
                        {[
                            "Cafe Reels",
                            "Restaurant Shoots",
                            "Shop Ads",
                            "Anchor Reels",
                            "Car Delivery",
                            "Product Videos",
                            "Event Reels",
                            "Brand Films"
                        ].map((t, i) => (
                            <span
                                key={i}
                                className={`${poppins.className} rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[11.5px] text-white/70 hover:text-white transition-colors hover:border-[#ef1d28]/40`}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                {/* ================= RIGHT SIDE ================= */}
                <div className="relative mx-auto w-full max-w-[620px] md:mt-0">

                    <div className="relative h-[250px] w-full rounded-[24px] bg-transparent sm:h-[310px] sm:rounded-[28px] lg:h-[360px] lg:rounded-[34px]">
                        {/* ================= CLIPPED GLOW LAYER ================= */}
                        <div className="pointer mt-10 h-[220px] md:h-[300px] lg:h-[350px] w-[75%] mx-auto events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
                            <div className="glow-sweep absolute left-1/2 top-1/2 h-[70px] w-[85%] -translate-x-1/2 -translate-y-1/2 rotate-[120deg] rounded-full bg-red-600/20 blur-[55px] sm:h-[80px] lg:h-[90px]" />

                            <div className="glow-sweep absolute left-1/2 top-1/2 h-[55px] w-[92%] -translate-x-1/2 -translate-y-1/2 rotate-[120deg] rounded-full bg-red-500/30 blur-[18px] sm:h-[70px] lg:h-[80px]" />

                            <div className="glow-sweep absolute left-1/2 top-1/2 h-[45px] w-[96%] -translate-x-1/2 -translate-y-1/2 rotate-[120deg] bg-gradient-to-r from-transparent via-red-900/50 to-transparent sm:h-[60px] lg:h-[70px]" />
                        </div>

                        {/* ================= VISIBLE OVERFLOW CARD LAYER ================= */}
                        <div className="absolute mt-10 md:mt-15 lg:mt-5 inset-0 z-10 flex items-center justify-center overflow-visible">
                            <BounceCards
                                className="w-full overflow-visible"
                                images={images}
                                containerWidth={760}
                                containerHeight={420}
                                cardWidth={250}
                                cardHeight={250}
                                cardBorderWidth={5}
                                cardRadius={26}
                                animationDelay={0.5}
                                animationStagger={0.08}
                                easeType="elastic.out(1, 0.55)"
                                transformStyles={transformStyles}
                                enableHover
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}