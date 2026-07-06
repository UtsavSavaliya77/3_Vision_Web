"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
    Instrument_Serif,
    Poppins,
} from "next/font/google";
import BorderGlow from "@/components/animations/BorderGlow";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: "italic",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const fadeBlurVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function ContactUsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-100px",
    });

    return (
        <section
            ref={sectionRef}
            className={`${poppins.className} relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-7 sm:py-24 md:px-10 lg:py-32`}
        >
            {/* Background radial glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(239,29,40,0.22),transparent_60%)]" />

            {/* Additional soft center glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ef1d28]/10 blur-[130px]" />

            {/* Top divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

            <div className="relative mx-auto w-full max-w-[1200px] text-center">
                {/* Heading */}
                <motion.h2
                    variants={fadeBlurVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={`${instrumentSerif.className} text-[58px] leading-[0.88] tracking-tight text-white sm:text-[76px] md:text-[96px] lg:text-[118px]`}
                >
                    Let&apos;s shoot
                    <br />
                    something{" "}
                    <span className="text-[#ef1d28]">
                        real.
                    </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    variants={fadeBlurVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.12 }}
                    className="mx-auto mt-7 max-w-xl text-[14px] leading-relaxed text-white/60 sm:text-[15px] md:text-[16px]"
                >
                    Tell us about your brand, your cafe or your idea.
                    We&apos;ll turn it into content people actually watch.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={fadeBlurVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.22 }}
                    className="mt-10 flex flex-wrap justify-center"
                >
                    {/* Email button */}
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
                        <div className="group relative rounded-full bg-transparent p-3">
                            <a
                                href="mailto:3visionstudiofficial@gmail.com?subject=Book%203Vision%20Studio"
                                rel="noreferrer"
                                className="group relative inline-flex min-w-[210px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#ef1d28] px-5 py-3 text-[15px] font-bold text-white shadow-[0_0_30px_rgba(239,29,40,0.22)] transition duration-300 hover:bg-[#ff2b37]"
                            >
                                <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/15 to-transparent transition-transform duration-500 group-hover:translate-y-0" />

                                <span className="relative z-[1]">
                                    Book 3Vision Studio
                                </span>

                                <ArrowUpRight className="relative z-[1] h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
                            </a>
                        </div>
                    </BorderGlow>

                    {/* WhatsApp button */}
                    <BorderGlow
                        edgeSensitivity={10}
                        glowColor="4 8 8"
                        backgroundColor="transparent"
                        borderRadius={50}
                        glowRadius={10}
                        glowIntensity={0}
                        coneSpread={0}
                        animated={false}
                        colors={["#ffffff"]}
                        className="inline-flex w-fit"
                    >
                        <div className="group relative rounded-full bg-transparent p-3">
                            <a
                                href="https://wa.me/919428163116?text=Hi%203Vision%20Studio%2C%20I%20am%20interested%20in%20reels%2Fvideo%20shoot.%20Please%20share%20details."
                                target="_blank"
                                rel="noreferrer"
                                className="group relative inline-flex min-w-[210px] items-center justify-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white px-5 py-3 text-[15px] font-bold text-black transition duration-300 hover:border-white/30 hover:bg-white/90"
                            >
                                <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-black/10 to-transparent transition-transform duration-500 group-hover:translate-y-0" />

                                <span className="relative z-[1]">
                                    WhatsApp Us
                                </span>

                                <ArrowUpRight className="relative z-[1] h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
                            </a>
                        </div>
                    </BorderGlow>
                </motion.div>
            </div>
        </section>
    );
}