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
    title: "Services | 3Vision Studio",
    description:
        "From concept to shoot to final edit — 3Vision creates video content built for social attention.",
};

export default function ServicesHero() {
    const words = [
        "Everything",
        "your",
        "brand",
        "needs",
        "to",
        "look",
        "alive",
        "on",
        "screen.",
    ];

    return (
        <section className="relative pt-36 md:pt-44 pb-20 bg-[#050505] overflow-hidden">
            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(239,29,40,0.18), transparent 60%)",
                }}
            />

            <div className="relative max-w-[80rem] mx-auto px-[1.125rem] md:px-[4vw]">
                {/* Section label */}
                <div className="mb-4 flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-red-500" />
                    <p className={`${poppins.className} text-[11px] uppercase tracking-[0.18em] font-bold text-[#ffffffa8]`}>
                        // Services
                    </p>
                </div>

                {/* Heading — each word individually wrapped for animation potential */}
                <h1
                    className={`${instrumentSerif.className} mt-5 text-white text-[40px] md:text-[76.8px] lg:text-[102.4px] italic leading-[1.05] max-w-[18ch] -tracking-[0.03em]`}
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
                    From concept to shoot to final edit — 3Vision creates video
                    content built for social attention.
                </p>
            </div>
        </section>
    );
}