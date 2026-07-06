import type { Metadata } from "next";
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


export const metadata: Metadata = {
    title: "Work | 3Vision Studio",
    description:
        "A collection of reels, edits, cafe shoots, product videos and brand stories crafted by 3Vision Studio.",
};

export default function WorkHero() {
    const words = ["Work", "that", "stopped", "the", "scroll."];

    return (
        <section className="relative pt-36 md:pt-44 pb-16 bg-[#050505] overflow-hidden">
            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(239,29,40,0.16), transparent 60%)",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                {/* Section label */}
                <div className="mb-4 flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-red-500" />
                    <p className={`${poppins.className} text-[11px] uppercase tracking-[0.18em] font-bold text-[#ffffffa8] `}>
                           // Work
                    </p>
                </div>


                {/* Heading — each word individually wrapped for animation potential */}
                <h1
                    className={`${instrumentSerif.className} text-white text-[40px] md:text-[76.8px] lg:text-[102.4px] italic leading-[1.05] max-w-[16ch]`}
                >
                    {words.map((word, i) => (
                        <span
                            key={i}
                            className="inline-block mr-[0.25em] will-change-transform"
                        >
                            {word}
                        </span>
                    ))}
                </h1>

                {/* Subtitle */}
                <p className={`${poppins.className} mt-6 max-w-xl text-[#ffffffd1] text-[16px] leading-relaxed`}>
                    A collection of reels, edits, cafe shoots, product videos and brand
                    stories crafted by 3Vision Studio.
                </p>
            </div>
        </section>
    );
}