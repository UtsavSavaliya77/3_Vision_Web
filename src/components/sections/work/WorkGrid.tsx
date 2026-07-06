"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

type Category =
    | "All"
    | "Cafe Reels"
    | "Editing"
    | "Events"
    | "Product Videos"
    | "Brand Films";

interface ReelItem {
    id: number;
    title: string;
    category: Exclude<Category, "All">;
    type: string;
    format: string;
    video: string;
    poster: string;
}

const reels: ReelItem[] = [
    {
        id: 1,
        title: "Cafe Ambience Reel",
        category: "Cafe Reels",
        type: "Reel",
        format: "9:16",
        video: "https://assets.mixkit.co/videos/43772/43772-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 2,
        title: "Restaurant Story Reel",
        category: "Cafe Reels",
        type: "Reel",
        format: "9:16",
        video: "https://assets.mixkit.co/videos/44301/44301-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 3,
        title: "Fast Cut Edit",
        category: "Editing",
        type: "Reel",
        format: "9:16",
        video: "https://assets.mixkit.co/videos/43117/43117-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 4,
        title: "Store Offer Campaign",
        category: "Editing",
        type: "Ad Reel",
        format: "9:16",
        video: "https://assets.mixkit.co/videos/43292/43292-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 5,
        title: "Expert Insight Reel",
        category: "Events",
        type: "Talking Reel",
        format: "9:16",
        video: "https://assets.mixkit.co/videos/39712/39712-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 6,
        title: "Luxury Car Reveal",
        category: "Events",
        type: "Delivery Reel",
        format: "9:16",
        video: "https://assets.mixkit.co/videos/43467/43467-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 7,
        title: "Event Impact Recap",
        category: "Product Videos",
        type: "Event Reel",
        format: "9:16",
        video: "https://assets.mixkit.co/videos/45316/45316-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 8,
        title: "Founder Story Film",
        category: "Brand Films",
        type: "Brand Film",
        format: "9:16",
        video: "https://assets.mixkit.co/videos/39730/39730-720.mp4",
        poster:
            "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=80",
    },
];

interface WorkGridProps {
    activeFilter?: Category;
}

function ReelCard({ item }: { item: ReelItem }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const isWide = item.format === "16:9";

    const togglePlay = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }
    }, []);

    // Pause when filter changes (video unmounts, but just in case)
    useEffect(() => {
        return () => {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        };
    }, []);

    return (
        <article
            className={`group relative overflow-hidden rounded-[20px] bg-[#0a0a0a] border border-white/[0.06] ${isWide ? "col-span-2 md:col-span-3" : ""
                }`}
        >
            <div
                className={`relative w-full overflow-hidden ${isWide ? "aspect-video" : "aspect-[9/16]"
                    }`}
            >
                {/* Poster image — hidden when playing */}
                {!playing && (
                    <Image
                        src={item.poster}
                        alt={item.title}
                        fill
                        sizes={isWide ? "100vw" : "(max-width: 768px) 50vw, 33vw"}
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                        loading="lazy"
                    />
                )}

                {/* Video element */}
                <video
                    ref={videoRef}
                    src={item.video}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${playing ? "opacity-100" : "opacity-0"
                        }`}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onEnded={() => setPlaying(false)}
                />

                {/* Gradient overlay — always visible */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-300 ${playing ? "opacity-60" : "opacity-100"
                        }`}
                />

                {/* Right category label */}
                <span className="absolute top-3 right-3 z-10 text-[10px] font-medium tracking-[0.18em] text-white/70 uppercase">
                    {item.category}
                </span>

                {/* Play / Pause button */}
                <button
                    aria-label={playing ? "Pause" : "Play"}
                    onClick={togglePlay}
                    className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
            grid place-items-center size-14 rounded-full
            bg-white/95 text-black cursor-pointer
            transition-all duration-500
            shadow-[0_0_60px_rgba(239,29,40,0.45)]
            ${playing
                            ? "opacity-100 scale-100 hover:scale-110"
                            : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                        }
          `}
                >
                    {playing ? (
                        /* Pause icon */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5"
                            aria-hidden="true"
                        >
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                    ) : (
                        /* Play icon */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5 ml-0.5"
                            aria-hidden="true"
                        >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                    )}
                </button>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="font-['Space_Grotesk'] italic text-2xl text-white leading-[0.95]">
                        {item.title}
                    </h3>
                </div>
            </div>
        </article>
    );
}

export default function WorkGrid({ activeFilter = "All" }: WorkGridProps) {
    const filtered =
        activeFilter === "All"
            ? reels
            : reels.filter((item) => item.category === activeFilter);

    return (
        <section className="bg-black py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {filtered.map((item) => (
                    <ReelCard key={item.id} item={item} />
                ))}

                {filtered.length === 0 && (
                    <div className="col-span-2 md:col-span-3 text-center py-24">
                        <p className="text-white/40 text-lg">
                            No work found in this category yet.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}