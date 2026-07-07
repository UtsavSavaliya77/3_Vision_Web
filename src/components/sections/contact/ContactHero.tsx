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
    title: "Book a Shoot | 3Vision Studio",
    description:
        "We'll help you turn the idea into a reel, video or brand film that creates impact.",
};

export default function BookShootHero() {
    const words = ["Tell", "us", "what", "you", "want", "to", "shoot."];

    return (
        <section className="relative pt-36 md:pt-44 pb-16 bg-[#050505] overflow-hidden">
            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(239,29,40,0.20), transparent 60%)",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                {/* Section label */}
                <div className="mb-4 flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-red-500" />
                    <p className={`${poppins.className} text-[11px] uppercase tracking-[0.18em] font-bold text-[#ffffffa8]`}>
                        // Book a Shoot
                    </p>
                </div>

                {/* Heading — each word individually wrapped for animation potential */}
                <h1
                    className={`${instrumentSerif.className} mt-5 text-white text-[40px] md:text-[76.8px] lg:text-[102.4px] -tracking-[0.03em] leading-[0.92] max-w-[14ch]`}
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
                    We&apos;ll help you turn the idea into a reel, video or brand
                    film that creates impact.
                </p>
            </div>
        </section>
    );
}