"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BorderGlow from "@/components/animations/BorderGlow";
import { Poppins, Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  style: "italic",
});


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const GooeyNav = dynamic(() => import("@/components/animations/GooeyNav"), {
  ssr: false,
});

const items = [
  { label: "Home", href: "#" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "#" },
  { label: "Packages", href: "#" },
  { label: "Contact", href: "#" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      setScrolled(scrollTop > 40);
    };

    handleScroll(); // ✅ important: run once on load

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed left-0 right-0 z-50 mx-3 lg:mx-auto  rounded-full md:px-3 lg:px-6 flex items-center justify-between transition-all duration-500 overflow-visible z-[999]
        ${scrolled
            ? "top-5 lg:max-w-6xl bg-black/75 border border-white/10 backdrop-blur-3xl shadow-[0_0_20px_rgba(255,0,0,0.2)] scale-95"
            : "top-10 lg:max-w-6xl bg-none scale-100"
          }`}
      >
        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo/logo.png" className={`${scrolled ? "h-14 md:h-18 w-auto" : "h-24 lg:h-30 w-auto"}`} />
          <span className={`${poppins.className} text-white text-[12px] md:text-[14px] tracking-[0.2em] font-semibold uppercase`}>
            3Vision <span className="text-white/60">Studio</span>
          </span>
        </a>

        {/* ================= DESKTOP GOOEY NAV ================= */}
        <div className="hidden lg:flex flex-1 justify-center relative z-[40] pointer-events-auto">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            animationTime={600}
            timeVariance={300}
            colors={[0xffffff, 0xff0000]}
            initialActiveIndex={0}
          />
        </div>

        {/* ================= DESKTOP CTA (WITH BORDER GLOW) ================= */}
        <div className="hidden lg:flex relative z-[60]">
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
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-medium overflow-hidden"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  Book a Shoot
                </span>
              </a>
            </div>
          </BorderGlow>
        </div>



        {/* MOBILE MENU BTN */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-white text-2xl px-2"
        >
          ☰
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[999] bg-black/95 backdrop-blur-2xl transition-all duration-500 ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* TOP */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <img src="/logo/logo.png" className="h-8" />
            <span className={`${poppins.className} text-white text-xs tracking-[0.2em] uppercase`}>
              3Vision Studio
            </span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col px-10 mt-10 space-y-6">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className={` ${instrumentSerif.className} text-white text-4xl font-light hover:text-red-500 transition`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="absolute mt-10 left-0 right-0 w-[100%] flex justify-center">
          <div className="group relative p-1.5 w-[90%] rounded-full bg-[linear-gradient(#1a1a1a_0%,#0d0d0d_100%)]">
            <button className={`${poppins.className} px-10 py-3 rounded-full bg-red-500 text-white w-[100%] font-bold `}>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block mr-2"></span>
              Book a Shoot
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}