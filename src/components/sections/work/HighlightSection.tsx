"use client"
import Image from "next/image";
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

export default function CaseHighlight() {
  return (
    <section className="relative bg-[#050505] py-[3.5rem] lg:py-[7vw] overflow-hidden">
      {/* Radial gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(239,29,40,0.18), transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* ── Text column ── */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-red-500" />
            <p
              className={`${poppins.className} text-[11px] uppercase tracking-[0.18em] font-bold text-[#ffffffa8]`}
            >
              // Case Highlight
            </p>
          </div>

          <h1
            className={`${instrumentSerif.className} text-white text-[36px] md:text-[55px] lg:text-[96px] italic leading-[1.05]`}
          >
            <span className="text-[#EF1D2D]">2M+</span> views from one reel.
          </h1>

          <p
            className={`${poppins.className} mt-6 max-w-md text-[#ffffffd1] text-[16px] leading-relaxed`}
          >
            Proof that the right hook, edit, timing and delivery can turn one
            piece of content into serious attention.
          </p>

          {/* ── CTA Button ── */}
          <div className="mt-7">
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
                  className={`${poppins.className} group inline-flex items-center gap-2 rounded-full border-2 border-[#ef1d28] bg-[#ef1d28] py-[12px] px-[22px] text-[16px] font-bold text-white transition hover:border-red-900`}
                >
                  Create My Reel
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
          </div>
        </div>

        {/* ── Image column ── */}
        <div>
          <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden border border-white/[0.06]">
            <Image
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85"
              alt="Case highlight — editing reel that reached 2M+ views"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}