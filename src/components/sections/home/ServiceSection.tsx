"use client";

import dynamic from "next/dynamic";
import { Card } from "@/components/animations/CardSwap";
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

// IMPORTANT: keep GSAP component client-only
const CardSwap = dynamic(() => import("@/components/animations/CardSwap"), {
    ssr: false,
});

export default function ServicesSection() {
    return (
        <section className="relative w-full md:h-250 lg:h-200 overflow-hidden bg-black px-5 py-[3.5rem] text-white md:px-10 md:py-[7vw]">
            {/* background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
            </div>

            <div className="relative mx-auto grid max-w-[75rem] grid-cols-1 items-end gap-16 lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <div className="lg:mt-30">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-[1px] w-8 bg-red-500" />
                        <p className={`${poppins.className} text-[11px] uppercase tracking-[0.3em] text-white/60`}>
                           // Services
                        </p>
                    </div>

                    <h2 className={`${instrumentSerif.className} text-[2.5rem] leading-[1.05] md:text-[6.2vw]`}>
                        Built for screens that scroll fast.
                    </h2>

                    <p className={`${poppins.className} mt-6 max-w-md text-[12px] md:text-[15px] text-white/70 `}>
                        Reels, edits, cafe content, brand films — engineered for the first
                        three seconds and the long scroll after.
                    </p>

                    {/* buttons */}
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
                                    href="/services"
                                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/15 bg-black px-4 py-3 text-base font-bold text-white transition hover:border-red-900"
                                >
                                    All Services
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
                                    className="group inline-flex items-center gap-2 rounded-full border-2 border-[#ef1d28] bg-[#ef1d28] px-4 py-3 text-base font-bold text-white transition hover:border-red-900"
                                >
                                    Book a Shoot
                                    <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                                        ↗
                                    </span>
                                </a>
                            </div>
                        </BorderGlow>
                    </div>
                </div>

                {/* RIGHT CARD STACK ANIMATION */}
                <div className="relative flex h-[400px] w-full items-center justify-center">
                    <CardSwap
                        width={440}
                        height={420}
                        cardDistance={60}
                        verticalDistance={70}
                        delay={4000}
                        pauseOnHover={false}
                        skewAmount={6}
                        easing="elastic"
                    >
                        {/* CARD 1 */}
                        <Card className="relative bg-[#121214] p-7 text-white border border-white/10 overflow-hidden">

                            <div className="absolute -top-10 -right-10 h-50 w-50 rounded-full bg-red-600/30 blur-[80px]" />

                            {/* red dot accent */}
                            <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]" />

                            {/* number */}
                            <div className="text-xs tracking-widest text-white/40">01</div>

                            {/* title */}
                            <h3 className={`${instrumentSerif.className} mt-4 text-[2rem] md:text-[2.4rem] leading-[1.2] font-medium max-w-[18ch]`}>
                                Reels designed for the first 3 seconds.
                            </h3>

                            {/* description */}
                            <p className={`${poppins.className} mt-4 text-[14px] text-muted-white max-w-[40ch]`}>
                                Hook-first reels. Concept, shoot, edit — engineered to be watched, not skipped.
                            </p>

                            {/* bullet grid (like screenshot layout) */}
                            <ul className={`${poppins.className} relative  mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[12.5px] text-white/75`}>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Script / concept</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Shoot planning</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Cinematic shots</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Hook-focused framing</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Instagram-ready edit</li>
                            </ul>

                            {/* CTA */}
                            <button className={`${poppins.className} mt-6 flex items-center gap-2 text-[12px] tracking-[0.25em] text-white hover:text-white/80`}>
                                BOOK REEL SHOOT
                                <span className="text-white text-2xl">↗</span>
                            </button>
                            <div className="pointer-events-none absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                        </Card>
                        {/* CARD 2 */}
                        <Card className="bg-[#121214] p-7 text-white border border-white/10 overflow-hidden">

                            <div className="absolute -top-10 -right-10 h-50 w-50 rounded-full bg-red-600/30 blur-[80px]" />

                            {/* red dot */}
                            <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]" />

                            <div className="text-xs tracking-widest text-white/40">02</div>

                            <h3 className={`${instrumentSerif.className} mt-4 text-[2rem] md:text-[2.4rem] leading-[1.2] font-medium max-w-[18ch]`}>
                                Turn ambience into visits.
                            </h3>

                            <p className={`${poppins.className} mt-4 text-[14px] text-muted-white max-w-[40ch]`}>
                                Cinematic cafe content built to fill seats — food, ambience, vibe, offers.
                            </p>

                            <ul className={`${poppins.className} relative mt-5 grid grid-cols-2 gap-y-2 text-[12.5px] text-white/75`}>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Food close-ups</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Ambience reels</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Customer vibe</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Offer reels</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Behind-the-scenes</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Special dish features</li>
                            </ul>

                            <button className={`${poppins.className} mt-6 text-[12px] tracking-[0.25em] text-white flex items-center gap-2`}>
                                DM CAFE REEL <span className="text-white text-2xl">↗</span>
                            </button>
                            <div className="pointer-events-none absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                        </Card>

                        {/* CARD 3 */}
                        <Card className="bg-[#121214] p-7 text-white border border-white/10 overflow-hidden">
                            <div className="absolute -top-10 -right-10 h-50 w-50 rounded-full bg-red-600/30 blur-[80px]" />

                            <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]" />

                            <div className="text-xs tracking-widest text-white/40">03</div>

                            <h3 className={`${instrumentSerif.className} mt-4 text-[2rem] md:text-[2.4rem] leading-[1.2] font-medium max-w-[18ch]`}>
                                For brands that need more than a reel.
                            </h3>

                            <p className={`${poppins.className} mt-4 text-[14px] text-muted-white max-w-[40ch]`}>
                                2–3 minute brand films that earn attention with story, craft and grade.
                            </p>

                            <ul className={`${poppins.className} relative mt-5 grid grid-cols-2 gap-y-2 text-[12.5px] text-white/75`}>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Brand story film</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Launch video</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Campaign video</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Social cutdowns</li>
                            </ul>

                            <button className={`${poppins.className} mt-6 text-[12px] tracking-[0.25em] text-white flex items-center gap-2`}>
                                PLAN BRAND FILM <span className="text-white text-2xl">↗</span>
                            </button>
                            <div className="pointer-events-none absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                        </Card>

                        {/* CARD 4 */}
                        <Card className="bg-[#121214] p-7 text-white border border-white/10 overflow-hidden">
                            <div className="absolute -top-10 -right-10 h-50 w-50 rounded-full bg-red-600/30 blur-[80px]" />

                            <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]" />

                            <div className="text-xs tracking-widest text-white/40">04</div>

                            <h3 className={`${instrumentSerif.className} mt-4 text-[2rem] md:text-[2.4rem] leading-[1.2] font-medium max-w-[16ch]`}>
                                Raw footage in. Impact out.
                            </h3>

                            <p className={`${poppins.className} mt-4 text-[14px] text-muted-white max-w-[40ch]`}>
                                Send footage, get cinema. Cuts, color, captions and sound dialed in.
                            </p>

                            <ul className={`${poppins.className} relative mt-5 grid grid-cols-2 gap-y-2 text-[12.5px] text-white/75 `}>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Reels editing</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Talking-head edits</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Color grading</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Music sync</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Captions / subtitles</li>
                                <li className="flex gap-2"><span className="text-red-900">•</span> Motion graphics</li>
                            </ul>

                            <button className={`${poppins.className} mt-6 text-[12px] tracking-[0.25em] text-white flex items-center gap-2`}>
                                SEND FOOTAGE <span className="text-white text-2xl">↗</span>
                            </button>
                            <div className="pointer-events-none absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                        </Card>
                    </CardSwap>
                </div>
            </div>
        </section>
    );
}