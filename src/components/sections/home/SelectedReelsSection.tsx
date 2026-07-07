"use client";

import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import {
    Instrument_Serif,
    Poppins,
    Roboto_Mono,
} from "next/font/google";
import BorderGlow from "@/components/animations/BorderGlow";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: "italic",
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

type Category =
    | "All"
    | "Cafe"
    | "Restaurant"
    | "Editing"
    | "Shop Ads"
    | "Anchor"
    | "Car Delivery"
    | "Events"
    | "Brand Films";

interface ReelItem {
    id: number;
    title: string;
    category: Exclude<Category, "All">;
    description: string;
    type: string;
    format: string;
    likes: string;
    video: string;
    poster: string;
    tags: string[];
}

const categories: Category[] = [
    "All",
    "Cafe",
    "Restaurant",
    "Editing",
    "Shop Ads",
    "Anchor",
    "Car Delivery",
    "Events",
    "Brand Films",
];

const reels: ReelItem[] = [
    {
        id: 1,
        title: "Cafe Ambience Reel",
        category: "Cafe",
        description:
            "Warm interiors, coffee details and natural customer moments shaped into a premium reel.",
        type: "Reel",
        format: "9:16",
        likes: "6.8K",
        video: "https://assets.mixkit.co/videos/43772/43772-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
        tags: ["Coffee", "Interior", "Lifestyle"],
    },
    {
        id: 2,
        title: "Restaurant Story Reel",
        category: "Restaurant",
        description:
            "A cinematic restaurant story combining dishes, interiors and guest experience.",
        type: "Reel",
        format: "9:16",
        likes: "10K",
        video: "https://assets.mixkit.co/videos/44301/44301-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80",
        tags: ["Food", "Story", "Dining"],
    },
    {
        id: 3,
        title: "Fast Cut Edit",
        category: "Editing",
        description:
            "Raw footage transformed with timing, sound, color and emotion.",
        type: "Reel",
        format: "9:16",
        likes: "12K",
        video: "https://assets.mixkit.co/videos/43117/43117-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
        tags: ["Cut", "Beat", "Color"],
    },
    {
        id: 4,
        title: "Store Offer Campaign",
        category: "Shop Ads",
        description:
            "Product displays, customer movement and offer messaging combined into a retail campaign reel.",
        type: "Ad Reel",
        format: "9:16",
        likes: "8.2K",
        video: "https://assets.mixkit.co/videos/43292/43292-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=900&q=80",
        tags: ["Store", "Campaign", "Offer"],
    },
    {
        id: 5,
        title: "Expert Insight Reel",
        category: "Anchor",
        description:
            "A professional talking-head reel with subtitles, cutaways and polished sound.",
        type: "Talking Reel",
        format: "9:16",
        likes: "7.4K",
        video: "https://assets.mixkit.co/videos/39712/39712-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80",
        tags: ["Speaker", "Captions", "Interview"],
    },
    {
        id: 6,
        title: "Luxury Car Reveal",
        category: "Car Delivery",
        description:
            "A premium delivery film built around suspense, reveal and customer reaction.",
        type: "Delivery Reel",
        format: "9:16",
        likes: "17K",
        video: "https://assets.mixkit.co/videos/43467/43467-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=80",
        tags: ["Luxury", "Reveal", "Customer"],
    },
    {
        id: 7,
        title: "Event Impact Recap",
        category: "Events",
        description:
            "High-energy highlights capturing the atmosphere, people and key moments.",
        type: "Event Reel",
        format: "9:16",
        likes: "18K",
        video: "https://assets.mixkit.co/videos/45316/45316-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
        tags: ["Event", "Energy", "Recap"],
    },
    {
        id: 8,
        title: "Founder Story Film",
        category: "Brand Films",
        description:
            "A founder-led story combining interviews, brand details and cinematic scenes.",
        type: "Brand Film",
        format: "16:9",
        likes: "19K",
        video: "https://assets.mixkit.co/videos/39730/39730-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=80",
        tags: ["Founder", "Interview", "Story"],
    },
];

const AUTO_CHANGE_TIME = 7000;

const fadeBlurVariants = {
    hidden: {
        opacity: 0,
        y: 22,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function SelectedReelSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-100px",
    });

    const [selectedCategory, setSelectedCategory] =
        useState<Category>("All");

    const [activeReelId, setActiveReelId] = useState(5);
    const [likedReels, setLikedReels] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);

    const filteredReels = useMemo(() => {
        if (selectedCategory === "All") {
            return reels;
        }

        return reels.filter(
            (reel) => reel.category === selectedCategory,
        );
    }, [selectedCategory]);

    const activeReel = useMemo(() => {
        return (
            filteredReels.find((reel) => reel.id === activeReelId) ??
            filteredReels[0] ??
            reels[0]
        );
    }, [activeReelId, filteredReels]);

    const changeReel = useCallback((reel: ReelItem) => {
        setProgress(0);
        setActiveReelId(reel.id);
    }, []);

    const changeCategory = useCallback((category: Category) => {
        setSelectedCategory(category);
        setProgress(0);

        const nextCategoryReels =
            category === "All"
                ? reels
                : reels.filter((reel) => reel.category === category);

        if (nextCategoryReels.length > 0) {
            setActiveReelId(nextCategoryReels[0].id);
        }
    }, []);

    useEffect(() => {
        if (filteredReels.length === 0) return;

        const progressInterval = window.setInterval(() => {
            setProgress((currentProgress) => {
                const increment = 100 / (AUTO_CHANGE_TIME / 50);

                return Math.min(currentProgress + increment, 100);
            });
        }, 50);

        const reelInterval = window.setInterval(() => {
            const currentIndex = filteredReels.findIndex(
                (reel) => reel.id === activeReel.id,
            );

            const nextIndex =
                currentIndex < 0
                    ? 0
                    : (currentIndex + 1) % filteredReels.length;

            changeReel(filteredReels[nextIndex]);
        }, AUTO_CHANGE_TIME);

        return () => {
            window.clearInterval(progressInterval);
            window.clearInterval(reelInterval);
        };
    }, [activeReel.id, changeReel, filteredReels]);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.currentTime = 0;

        const playPromise = video.play();

        playPromise?.catch(() => {
            // Browser can block autoplay in some situations.
        });
    }, [activeReel.id]);

    const toggleLike = () => {
        setLikedReels((currentLikedReels) => {
            if (currentLikedReels.includes(activeReel.id)) {
                return currentLikedReels.filter(
                    (reelId) => reelId !== activeReel.id,
                );
            }

            return [...currentLikedReels, activeReel.id];
        });
    };

    const isLiked = likedReels.includes(activeReel.id);

    return (
        <section
            ref={sectionRef}
            className={`${poppins.className} relative overflow-hidden bg-[#050505] px-5 py-16 text-white sm:px-7 sm:py-20 md:px-10 md:py-[7vw]`}
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(239,29,40,0.12),transparent_60%)]" />

            <div className="relative mx-auto w-full max-w-[1200px]">
                {/* Heading */}
                <div className="mb-8 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
                    <div>
                        <motion.div
                            variants={fadeBlurVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#ef1d28]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
                  // Selected Reels
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeBlurVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: 0.08 }}
                            className={`${instrumentSerif.className} mt-3 text-[44px] leading-[0.96] text-white sm:text-[58px] md:text-[70px] lg:text-[78px]`}
                        >
                            Frames built to stop the scroll.
                        </motion.h2>

                        <motion.p
                            variants={fadeBlurVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: 0.16 }}
                            className="mt-4 max-w-xl text-[13px] leading-relaxed text-white/55 sm:text-[15px]"
                        >
                            Watch the kind of reels, edits and brand videos we
                            create for cafes, businesses, products, events and
                            creators.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={fadeBlurVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.22 }}
                    >
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
                                    href="/work"
                                    className="group inline-flex items-center gap-2 rounded-full border-2 border-white/15 bg-black px-5 py-3 text-[12px] font-bold text-white transition hover:border-red-900"
                                >
                                    See Full Portfolio
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
      
                                </a>
                                
                            </div>
                        </BorderGlow>
                    </motion.div>
                </div>

                {/* Mobile category buttons */}
                <div className="-mx-5 mb-6 overflow-x-auto px-5 md:hidden">
                    <div className="flex w-max gap-2 pb-2">
                        {categories.map((category) => {
                            const active = selectedCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => changeCategory(category)}
                                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-all ${active
                                        ? "bg-[#ef1d28] text-white shadow-[0_0_24px_rgba(239,29,40,0.4)]"
                                        : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6 lg:gap-8">
                    {/* Desktop categories */}
                    <motion.aside
                        initial={{ opacity: 0, x: -22 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -22 }
                        }
                        transition={{
                            delay: 0.2,
                            duration: 0.7,
                        }}
                        className="hidden flex-col gap-1.5 md:col-span-2 md:flex"
                    >
                        <div
                            className={`${robotoMono.className} mb-2 text-[10px] uppercase tracking-[0.2em] text-white/70`}
                        >
                            Categories
                        </div>

                        {categories.map((category) => {
                            const active = selectedCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => changeCategory(category)}
                                    className={`group relative rounded-lg px-3 py-2 text-left text-[13px] transition-all ${active
                                        ? "bg-white/[0.06] text-white"
                                        : "text-white/55 hover:bg-white/[0.03] hover:text-white"
                                        }`}
                                >
                                    <AnimatePresence>
                                        {active && (
                                            <motion.span
                                                layoutId="selected-category-indicator"
                                                initial={{
                                                    scaleY: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    scaleY: 1,
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    scaleY: 0,
                                                    opacity: 0,
                                                }}
                                                className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-[#ef1d28] shadow-[0_0_12px_rgba(239,29,40,0.7)]"
                                            />
                                        )}
                                    </AnimatePresence>

                                    <span className="pl-2">{category}</span>
                                </button>
                            );
                        })}
                    </motion.aside>

                    {/* Main video reel */}
                    <div className="col-span-12 flex justify-center md:col-span-6">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 35,
                                scale: 0.96,
                            }}
                            animate={
                                isInView
                                    ? {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }
                                    : {
                                        opacity: 0,
                                        y: 35,
                                        scale: 0.96,
                                    }
                            }
                            transition={{
                                delay: 0.25,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative w-full max-w-[320px]"
                        >
                            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[#ef1d28]/15 blur-3xl" />

                            <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_30px_120px_-20px_rgba(0,0,0,0.9)]">
                                {/* Progress */}
                                <div
                                    className="absolute left-0 top-0 z-30 h-[2px] bg-[#ef1d28] transition-[width] duration-75"
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeReel.id}
                                        initial={{
                                            opacity: 0,
                                            scale: 1.035,
                                            filter: "blur(5px)",
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            filter: "blur(0px)",
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.985,
                                            filter: "blur(5px)",
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0"
                                    >
                                        <video
                                            ref={videoRef}
                                            src={activeReel.video}
                                            poster={activeReel.poster}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                            aria-label={`${activeReel.title} autoplay reel preview`}
                                            className="absolute inset-0 h-full w-full object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                                        {/* REC */}
                                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 backdrop-blur-md">
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ef1d28] shadow-[0_0_8px_#ef1d28]" />

                                            <span
                                                className={`${robotoMono.className} text-[10px] uppercase tracking-[0.18em] text-white/90`}
                                            >
                                                REC
                                            </span>
                                        </div>

                                        {/* Category label */}
                                        <span
                                            className={`${robotoMono.className} absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md`}
                                        >
                                            {activeReel.category}
                                        </span>

                                        {/* Like button */}
                                        <div className="absolute bottom-28 right-3 flex flex-col items-center gap-4 text-white">
                                            <button
                                                type="button"
                                                onClick={toggleLike}
                                                aria-label={`Like ${activeReel.title}`}
                                                className="group flex min-h-11 min-w-11 flex-col items-center justify-center gap-1"
                                            >
                                                <span
                                                    className={`grid h-9 w-9 place-items-center rounded-full border bg-black/40 backdrop-blur-md transition ${isLiked
                                                        ? "border-[#ef1d28] text-[#ef1d28] shadow-[0_0_15px_rgba(239,29,40,0.35)]"
                                                        : "border-white/10 text-white group-hover:border-[#ef1d28]/60"
                                                        }`}
                                                >
                                                    <Heart
                                                        className={`h-4 w-4 ${isLiked ? "fill-current" : ""
                                                            }`}
                                                    />
                                                </span>

                                                <span
                                                    className={`${robotoMono.className} text-[9px] uppercase tracking-wider text-white/80`}
                                                >
                                                    {activeReel.likes}
                                                </span>
                                            </button>
                                        </div>

                                        {/* Video bottom information */}
                                        <div className="absolute bottom-0 left-0 right-14 p-4">
                                            <h3
                                                className={`${instrumentSerif.className} mb-1.5 text-2xl leading-none text-white`}
                                            >
                                                {activeReel.title}
                                            </h3>

                                            <p className="line-clamp-2 text-[12px] leading-snug text-white/70">
                                                {activeReel.description}
                                            </p>

                                            <div className="mt-2 flex flex-wrap gap-1.5">
                                                {activeReel.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full border border-white/15 bg-white/[0.04] px-2 py-0.5 text-[9.5px] uppercase tracking-wider text-white/70"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side */}
                    <div className="col-span-12 flex flex-col gap-5 md:col-span-4">
                        {/* Details */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`detail-${activeReel.id}`}
                                initial={{
                                    opacity: 0,
                                    x: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -15,
                                }}
                                transition={{
                                    duration: 0.42,
                                    ease: "easeInOut",
                                }}
                                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                            >
                                <div
                                    className={`${robotoMono.className} mb-2 text-[10px] uppercase tracking-[0.2em] text-[#ef1d28]`}
                                >
                                    Now Playing — {activeReel.category}
                                </div>

                                <h4
                                    className={`${instrumentSerif.className} text-3xl leading-[1.05] text-white`}
                                >
                                    {activeReel.title}
                                </h4>

                                <p className="mt-3 text-[13.5px] leading-relaxed text-white/65">
                                    {activeReel.description}
                                </p>

                                <div
                                    className={`${robotoMono.className} mt-4 flex flex-wrap items-center gap-4 border-y border-white/10 py-3 text-[11px] uppercase tracking-wider text-white/70`}
                                >
                                    <span className="font-semibold text-white">
                                        {activeReel.category}
                                    </span>

                                    <span className="text-white/30">•</span>

                                    <span>{activeReel.format}</span>

                                    <span className="text-white/30">•</span>

                                    <span>{activeReel.type}</span>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {activeReel.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 px-2.5 py-1 text-[10.5px] uppercase tracking-wider text-white/75"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-5 w-full [&>*]:!block [&>*]:!w-full [&>*]:!max-w-none">
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
                                        className="!block !w-full !max-w-none"
                                    >
                                        <div className="w-full rounded-full bg-transparent p-3">
                                            <a
                                                href="/contact"
                                                className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#ef1d28] bg-[#ef1d28] px-5 py-3 text-[13px] font-semibold text-white transition duration-300 hover:border-red-900 hover:bg-[#ff2b37]"
                                            >
                                                <span>Book Similar Reel</span>

                                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
                                            </a>
                                        </div>
                                    </BorderGlow>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Filtered right-side reels */}
                        <div>
                            <div
                                className={`${robotoMono.className} mb-2.5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/70`}
                            >
                                <span>More Reels</span>

                                <span className="text-white/30">
                                    {filteredReels.length}
                                </span>
                            </div>

                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={selectedCategory}
                                    initial={{
                                        opacity: 0,
                                        y: 12,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -10,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                    }}
                                    className="grid grid-cols-4 gap-2"
                                >
                                    {filteredReels.map((reel, index) => {
                                        const active = reel.id === activeReel.id;

                                        return (
                                            <motion.button
                                                key={reel.id}
                                                type="button"
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.92,
                                                    y: 10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: active ? 1.03 : 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.045,
                                                    duration: 0.35,
                                                }}
                                                onClick={() => changeReel(reel)}
                                                aria-label={`Play reel: ${reel.title}`}
                                                aria-pressed={active}
                                                className={`relative aspect-[9/16] overflow-hidden rounded-lg border transition-all duration-300 ${active
                                                    ? "border-[#ef1d28] shadow-[0_0_18px_rgba(239,29,40,0.5)]"
                                                    : "border-white/10 hover:border-white/30"
                                                    }`}
                                            >
                                                <img
                                                    alt={reel.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    src={reel.poster}
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />

                                                {active && (
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute left-1 top-1 h-1.5 w-1.5 animate-pulse rounded-full bg-[#ef1d28] shadow-[0_0_6px_#ef1d28]"
                                                    />
                                                )}

                                                <ArrowUpRight className="absolute bottom-1 right-1 h-3 w-3 text-white/80" />
                                            </motion.button>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}