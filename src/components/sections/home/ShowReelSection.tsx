"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, ArrowUpRight } from "lucide-react";
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

export default function ShowreelSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(10);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      setDuration(video.duration || 30);
    };

    const handleTime = () => {
      setCurrent(video.currentTime || 0);
      setProgress(
        video.duration ? (video.currentTime / video.duration) * 100 : 0
      );
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("timeupdate", handleTime);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("timeupdate", handleTime);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-[3.5rem] text-white md:px-10 md:py-[7vw]">
      {/* red glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[150px] w-[500px] md:w-[900px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[140px]" />
       
      </div>

      <div className="relative mx-auto max-w-[75rem]">
        {/* top label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-red-500" />
          <p className={poppins.className + " text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65"}>
            // Showreel
          </p>
        </div>

        {/* heading row */}
        <div className="mb-10 grid items-end gap-8 md:mb-14 md:grid-cols-[1.4fr_0.7fr]">
          <h2 className="max-w-4xl text-[44px] leading-[0.95] text-white md:text-[64px] lg:text-7xl">
            <span className={instrumentSerif.className}>
              Before you read what we do,
              watch what we create.
            </span>
          </h2>

          <p className={poppins.className + " max-w-md pt-2 text-base leading-7 text-white/75 md:justify-self-end md:text-[16px] lg:text-lg"}>
            A quick look at the frames, cuts, colors and stories we create for
            brands, cafes and creators.
          </p>
        </div>

        {/* video card */}
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.55)]">
          <div className="relative aspect-[16/9] w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              preload="metadata"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* play button */}
            <button
              onClick={toggleVideo}
              className={` absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-2xl shadow-[0_0_80px_rgba(239,29,40,0.45)] transition hover:scale-105 size-10 md:size-20 ${isPlaying ? "opacity-0" : "opacity-100"}`}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 md:h-8 md:w-8 fill-current" />
              ) : (
                <Play className="h-4 w-4 md:h-8 md:w-8 fill-current" />
              )}
            </button>

            {/* bottom controls/info */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
              <div className="mb-3 h-[2px] w-full overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-red-500 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between gap-4 text-[8px] uppercase tracking-[0.28em] text-white/80 md:text-xs">
                <span>
                  {formatTime(current)} / {formatTime(duration)}
                </span>
                <span className="hidden md:block">3Vision Showreel</span>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-5 flex justify-center">
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
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white/15 bg-black px-4 py-3 text-base font-semibold text-white transition hover:border-red-900"
              >
                <span className={`${poppins.className} flex items-center gap-2 font-bold tracking-[0.05em]`}>
                  View Work
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
}