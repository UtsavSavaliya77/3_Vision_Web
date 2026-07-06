"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Mail,
    MessageCircle,
    Phone,
} from "lucide-react";
import {
    Instrument_Serif,
    Poppins,
} from "next/font/google";
import SoftAurora from "@/components/animations/SoftAurora";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: "italic",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const navigationLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Work",
        href: "/work",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Packages",
        href: "/packages",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer
            className={`${poppins.className} relative overflow-hidden bg-black px-5 pt-[3.5rem] text-white md:px-10 md:pt-[7vw]`}
        >
            {/* Top divider */}
            <div className="absolute inset-x-0 top-0 z-30 h-px bg-white/10" />

            {/* Thick center aurora animation */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[53%] z-[2] h-[360px] w-[125%] -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-100 mix-blend-screen sm:h-[420px] md:top-[55%] lg:top-[50%] md:h-[500px]"
            >
                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
                    <SoftAurora
                        speed={0.4}
                        scale={1.15}
                        brightness={1}
                        color1="#ffffff"
                        color2="#ef1d28"
                        noiseFrequency={2}
                        noiseAmplitude={1.25}
                        bandHeight={0.52}
                        bandSpread={0.65}
                        octaveDecay={0.2}
                        layerOffset={0.35}
                        colorSpeed={0.75}
                        enableMouseInteraction={false}
                        mouseInfluence={0.15}
                    />
                </div>
            </div>

            {/* Footer content */}
            <div className="relative z-10 mx-auto max-w-[75rem] ">
                <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <Link
                            href="/"
                            aria-label="3Vision Studio home"
                            className="inline-flex items-center gap-3"
                        >
                            <Image
                                src="/logo/logo.png"
                                alt="3Vision Studio"
                                width={64}
                                height={64}
                                priority
                                className="h-12 w-auto object-contain"
                            />

                            <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white">
                                3Vision{" "}
                                <span className="text-white/60">
                                    Studio
                                </span>
                            </span>
                        </Link>

                        <p
                            className={`${instrumentSerif.className} mt-5 max-w-sm text-2xl leading-[1.05] text-white sm:text-3xl`}
                        >
                            Reels. Videos. Real Impact.
                        </p>

                        <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-white/55 sm:text-sm">
                            A Rajkot-based video studio building cinematic
                            content for cafes, brands, creators and
                            businesses.
                        </p>
                    </div>

                    {/* Explore */}
                    <div className="md:col-span-3">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-6 bg-[#ef1d28]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
                                Explore
                            </span>
                        </div>

                        <ul className="mt-4">
                            {navigationLinks.map((item) => {
                                const active =
                                    item.href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(item.href);

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            aria-current={
                                                active ? "page" : undefined
                                            }
                                            className={`group inline-flex items-center gap-2 text-[14.5px] transition-colors duration-300 ${active
                                                ? "text-white"
                                                : "text-white/70 hover:text-white"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-6 bg-[#ef1d28]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
                                Contact
                            </span>
                        </div>

                        <ul className="mt-4 space-y-2.5 text-[14.5px] text-white/70">
                            <li>
                                <a
                                    href="mailto:3visionstudiofficial@gmail.com"
                                    className="group inline-flex items-center gap-2 break-all transition-colors duration-300 hover:text-white"
                                >
                                    <Mail className="h-4 w-4 shrink-0 transition-colors duration-300" />

                                    <span>
                                        3visionstudiofficial@gmail.com
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+919428163116"
                                    className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
                                >
                                    <Phone className="h-4 w-4 shrink-0 transition-colors duration-300" />

                                    <span>+91 94281 63116</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://wa.me/919428163116?text=Hi%203Vision%20Studio%2C%20I%20am%20interested%20in%20reels%2Fvideo%20shoot.%20Please%20share%20details."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
                                >
                                    <MessageCircle className="h-4 w-4 shrink-0 transition-colors duration-300" />

                                    <span>WhatsApp</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://instagram.com/3vision_studio"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
                                >
                                    <InstagramIcon className="h-4 w-4 shrink-0 transition-colors duration-300" />

                                    <span>@3vision_studio</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright row */}
                <div className="mt-10 flex flex-col gap-3 pt-6 md:mt-14 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                            © {new Date().getFullYear()} 3Vision Studio
                        </div>

                        <div className="footer-shine-text mt-1 text-sm text-white/90">
                            Built for stories that deserve to be seen.
                        </div>
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                        Rajkot · India
                    </div>
                </div>

                {/* Large footer typography */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none -mx-5 mt-8 mb-10 select-none overflow-hidden md:-mx-8 md:mt-10"
                >
                    <div
                        className={`${instrumentSerif.className} whitespace-nowrap text-center text-[clamp(3.5rem,18vw,17rem)] leading-[0.85] text-white/[0.18]`}
                        style={{
                            textShadow:
                                "0 0 60px rgba(239,29,40,0.25), 0 0 120px rgba(239,29,40,0.12)",
                        }}
                    >
                        REAL IMPACT
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes footerShine {
          0% {
            background-position: 200% center;
          }

          100% {
            background-position: -200% center;
          }
        }

        .footer-shine-text {
          background: linear-gradient(
            90deg,
            rgba(66, 66, 66, 0.55),
            rgb(124, 124, 124),
            rgba(255, 255, 255, 0.9),
rgb(124, 124, 124),
            rgba(66, 66, 66, 0.55)
          );
          background-size: 220% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: footerShine 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-shine-text {
            animation: none;
            background: none;
            color: rgba(255, 255, 255, 0.9);
          }
        }
      `}</style>
        </footer>
    );
}

interface InstagramIconProps {
    className?: string;
}

function InstagramIcon({
    className = "",
}: InstagramIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
            />

            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />

            <line
                x1="17.5"
                y1="6.5"
                x2="17.51"
                y2="6.5"
            />
        </svg>
    );
}