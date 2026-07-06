"use client";

import { useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    useInView,
} from "framer-motion";
import {
    Instrument_Serif,
    Poppins,
    Roboto_Mono,
} from "next/font/google";
import TextType from "@/components/animations/TextTyping";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: "italic",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
});

interface Testimonial {
    id: number;
    name: string;
    position: string;
    image: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Aanya Kapoor",
        position: "Founder, Aroma Cafe",
        image:
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
        quote:
            "They understood our brand immediately and turned our cafe into a visual story people wanted to experience.",
    },
    {
        id: 2,
        name: "Devin Shah",
        position: "Head of Brand, Studio 9",
        image:
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
        quote:
            "Calm on set, ruthless in the edit. Every frame felt intentional and the final reel performed beyond expectation.",
    },
    {
        id: 3,
        name: "Mira Sen",
        position: "Marketing Lead, Noir & Co.",
        image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
        quote:
            "From concept to final delivery, the entire process was smooth, creative and completely aligned with our campaign.",
    },
    {
        id: 4,
        name: "Rohan Mehta",
        position: "Owner, Lume Bakery",
        image:
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
        quote:
            "The content made our products feel cinematic without losing the warmth and personality of our brand.",
    },
];

const fadeBlurVariants = {
    hidden: {
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const gridVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.18,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 34,
        scale: 0.97,
        filter: "blur(7px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-100px",
    });

    const [activeTestimonial, setActiveTestimonial] = useState<
        number | null
    >(null);

    const openTestimonial = (id: number) => {
        setActiveTestimonial(id);
    };

    const closeTestimonial = () => {
        setActiveTestimonial(null);
    };

    const toggleTestimonial = (id: number) => {
        setActiveTestimonial((current) =>
            current === id ? null : id,
        );
    };

    return (
        <section
            ref={sectionRef}
            className={`${poppins.className} relative overflow-hidden bg-[#050505] px-5 py-16 text-white sm:px-7 sm:py-20 md:px-10 lg:py-28`}
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,29,40,0.08),transparent_32%),radial-gradient(circle_at_80%_75%,rgba(239,29,40,0.05),transparent_35%)]" />
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noiseFilter%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22_opacity=%221%22/%3E%3C/svg%3E')]" />

            <div className="relative mx-auto w-full max-w-[1200px]">
                {/* Label */}
                <motion.div
                    variants={fadeBlurVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#ef1d28]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                            Testimonials
                        </span>
                    </div>
                </motion.div>

                {/* Heading */}
                <div className="mb-12 mt-4 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
                    <motion.div
                        variants={fadeBlurVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.08 }}
                    >
                        <h2
                            className={`${instrumentSerif.className} max-w-3xl text-[46px] leading-[0.95] tracking-tight text-white sm:text-[58px] md:text-[72px]`}
                        >
                            Words from the <br />

                            <span className="text-[#ef1d28]">
                                people we shoot for.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeBlurVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.16 }}
                    >
                        <p className="max-w-sm text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
                            Hover any frame to hear what they had to say —
                            typed out like a director&apos;s note on set.
                        </p>
                    </motion.div>
                </div>

                {/* Cards */}
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4"
                >
                    {testimonials.map((testimonial) => {
                        const active =
                            activeTestimonial === testimonial.id;

                        return (
                            <motion.article
                                key={testimonial.id}
                                variants={cardVariants}
                                tabIndex={0}
                                role="button"
                                aria-label={`Read testimonial from ${testimonial.name}`}
                                aria-expanded={active}
                                onMouseEnter={() =>
                                    openTestimonial(testimonial.id)
                                }
                                onMouseLeave={closeTestimonial}
                                onFocus={() =>
                                    openTestimonial(testimonial.id)
                                }
                                onBlur={closeTestimonial}
                                onClick={() =>
                                    toggleTestimonial(testimonial.id)
                                }
                                whileHover={{
                                    y: -5,
                                }}
                                transition={{
                                    duration: 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[20px] border border-white/15 bg-[#080a0c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef1d28]"
                            >
                                {/* Portrait */}
                                <motion.img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    loading="lazy"
                                    animate={{
                                        scale: active ? 1.06 : 1,
                                        filter: active
                                            ? "grayscale(0.35) blur(4px)"
                                            : "grayscale(1) blur(0px)",
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                {/* Permanent gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

                                {/* Hover dark overlay */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        opacity: active ? 0.8 : 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    className="absolute inset-0 bg-[#050708]"
                                />

                                {/* Soft hover glow */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        opacity: active ? 1 : 0,
                                        scale: active ? 1 : 0.85,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 blur-[45px]"
                                />

                                {/* Red corner frame */}
                                <AnimatePresence>
                                    {active && (
                                        <>
                                            <motion.span
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.7,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.7,
                                                }}
                                                className="absolute left-3 top-3 z-40 h-4 w-4 border-l border-t border-[#ef1d28]"
                                            />

                                            <motion.span
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.7,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.7,
                                                }}
                                                className="absolute right-3 top-3 z-40 h-4 w-4 border-r border-t border-[#ef1d28]"
                                            />

                                            <motion.span
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.7,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.7,
                                                }}
                                                className="absolute bottom-3 left-3 z-40 h-4 w-4 border-b border-l border-[#ef1d28]"
                                            />

                                            <motion.span
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.7,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.7,
                                                }}
                                                className="absolute bottom-3 right-3 z-40 h-4 w-4 border-b border-r border-[#ef1d28]"
                                            />
                                        </>
                                    )}
                                </AnimatePresence>

                                {/* Quote icon */}
                                <AnimatePresence>
                                    {active && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: -8,
                                                scale: 0.85,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -5,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                            className="absolute left-7 top-7 z-30 text-[#ef1d28]"
                                        >
                                            <QuoteIcon />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Typed testimonial */}
                                <AnimatePresence mode="wait">
                                    {active && (
                                        <motion.div
                                            key={`quote-${testimonial.id}`}
                                            initial={{
                                                opacity: 0,
                                                y: 14,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 10,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                                delay: 0.08,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="absolute inset-x-0 top-1/2 z-30 -translate-y-1/2 px-7"
                                        >
                                            <TextType
                                                key={`typing-${testimonial.id}`}
                                                as="p"
                                                text={testimonial.quote}
                                                typingSpeed={24}
                                                initialDelay={250}
                                                loop={false}
                                                showCursor
                                                hideCursorWhileTyping={false}
                                                cursorCharacter=""
                                                cursorBlinkDuration={0.55}
                                                cursorClassName="h-[1.15em] w-[2px] translate-y-[3px] bg-[#ef1d28]"
                                                className="text-[15px] leading-[1.55] text-white"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Client information */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        y: active ? -2 : 0,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                    }}
                                    className="absolute bottom-0 left-0 right-0 z-30 p-6"
                                >
                                    {/* Default client label */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            opacity: active ? 0 : 1,
                                            height: active ? 0 : "auto",
                                            marginBottom: active ? 0 : 4,
                                        }}
                                        className={`${robotoMono.className} flex items-center gap-2 overflow-hidden text-[9px] uppercase tracking-[0.18em] text-white/60`}
                                    >
                                        <span className="h-px w-4 bg-[#ef1d28]" />
                                        Client
                                    </motion.div>

                                    <p
                                        className={`${instrumentSerif.className} text-[24px] leading-none text-white sm:text-[26px]`}
                                    >
                                        {testimonial.name}
                                    </p>

                                    <p className="mt-2 text-[11px] text-white/55 sm:text-xs">
                                        {testimonial.position}
                                    </p>
                                </motion.div>

                                {/* Active border */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        opacity: active ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="pointer-events-none absolute inset-0 z-50 rounded-[20px] border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.45),0_14px_50px_rgba(0,0,0,0.5)]"
                                />
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

function QuoteIcon() {
    return (
        <svg
            width="27"
            height="27"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M5.5 8.5H12.5V16.2C12.5 21.5 9.8 24.6 5.5 25.8V21.7C7.5 20.9 8.6 19.5 8.8 17.5H5.5V8.5Z"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinejoin="round"
            />

            <path
                d="M18.5 8.5H25.5V16.2C25.5 21.5 22.8 24.6 18.5 25.8V21.7C20.5 20.9 21.6 19.5 21.8 17.5H18.5V8.5Z"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinejoin="round"
            />
        </svg>
    );
}