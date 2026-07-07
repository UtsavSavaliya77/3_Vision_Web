"use client"
import Link from "next/link";
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

export default function CtaSection() {
  return (
    <section className="bg-black py-[3.5rem] lg:py-[7vw] text-center">
      <div className="mx-auto max-w-4xl px-5">
        <h1
            className={`${instrumentSerif.className} text-white text-[34px] md:text-[55px] lg:text-[96px] italic leading-[1.05]`}
          >
          Have a reel idea?{" "}
          <span className="text-[#EF1D2D]">Let&apos;s shoot it.</span>
        </h1>

        <div className="mt-8 flex flex-wrap justify-center">
          {/* ── Primary CTA (with BorderGlow) ── */}
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
            <div className="group relative p-3 rounded-full bg-transparent">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-[#ef1d28] bg-[#ef1d28] px-[22px] py-[12px] text-base font-bold text-white transition hover:border-red-900"
              >
                Book a Shoot
                <span className="inline-block bg-transparent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </a>
            </div>
          </BorderGlow>

          {/* ── Ghost CTA ── */}
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
            <div className="group relative p-3 rounded-full bg-transparent">
              <a
                href="/packages"
                className={`${poppins.className} group inline-flex items-center rounded-full border-1 border-white/10 bg-black px-[22px] py-[12px] text-base font-bold text-white transition hover:border-white`}
              >
                See Packages
              </a>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
}