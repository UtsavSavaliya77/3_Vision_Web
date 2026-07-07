"use client";

import { useState } from "react";
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

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const contactLinks = [
    {
        label: "WhatsApp Us",
        sub: "Fastest response — under 1 hour",
        href: "https://wa.me/919428163116?text=Hi%203Vision%20Studio%2C%20I%20am%20interested%20in%20reels%2Fvideo%20shoot.%20Please%20share%20details.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 sm:size-5" aria-hidden="true">
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
            </svg>
        ),
    },
    {
        label: "DM on Instagram",
        sub: "@3vision_studio",
        href: "https://instagram.com/3vision_studio",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 sm:size-5" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "Call Now",
        sub: "+91 94281 63116",
        href: "tel:+919428163116",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 sm:size-5" aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
        ),
    },
    {
        label: "Email",
        sub: "3visionstudioff...@gmail.com",
        href: "mailto:3visionstudiofficial@gmail.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 sm:size-5" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
        ),
    },
];

const quickMessages = [
    "I want cafe reels.",
    "I want editing.",
    "I want event coverage.",
    "I want product video.",
    "I want brand film.",
];

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
/* ------------------------------------------------------------------ */

function ArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3.5 sm:size-4 text-white/70 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-white shrink-0"
            aria-hidden="true"
        >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactSection() {
    const [message, setMessage] = useState("");

    const handleQuickMessage = (msg: string) => {
        setMessage(msg);
        const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        if (textarea) {
            textarea.focus();
            if (window.innerWidth < 1024) {
                textarea.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    };

    // Base classes: px-3 (12px) on mobile scales to px-4 (16px) on sm+
    const inputClasses = "w-full bg-[#121214] border border-white/[0.08] rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-[16px] text-white placeholder:text-white/30 outline-none focus:border-red-500/50 focus:bg-red-500/10 transition-colors";

    return (
        <section className="relative py-8 sm:py-10 lg:py-[7vw] bg-[#000000]">
            {/* Outer container: px-4 (16px) on mobile to maximize width on 320px */}
            <div className="max-w-[80rem] mx-auto px-4 sm:px-[1.125rem] md:px-[4vw] grid lg:grid-cols-12 gap-8 lg:gap-10">

                {/* ------------------------------------------------------ */}
                {/* LEFT COLUMN                                              */}
                {/* ------------------------------------------------------ */}
                <div className="lg:col-span-5">
                    {/* Label */}
                    <div className="mb-3 sm:mb-4 flex items-center gap-3">
                        <span className="h-[1px] w-8 bg-red-500" />
                        <p className={`${poppins.className} text-[11px] uppercase tracking-[0.18em] font-bold text-[#ffffffa8]`}>
                            // Direct
                        </p>
                    </div>

                    {/* Heading */}
                    <h2 className={`${instrumentSerif.className} mt-4 text-white text-[26px] sm:text-[28px] md:text-[44.8px] lg:text-[57.6px] italic leading-[1.1] text-balance`}>
                        Skip the form.<br />Reach us now.
                    </h2>

                    {/* Contact Links - Tighter padding/icons on mobile */}
                    <div className="mt-6 sm:mt-8 grid gap-2.5 sm:gap-3">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-3 sm:p-4 hover:border-red-500/50 hover:bg-[#0a0a0a]/50 transition-colors"
                            >
                                {/* Smaller icon wrapper on mobile */}
                                <span className="grid place-items-center size-9 sm:size-11 shrink-0 rounded-full bg-white text-black">
                                    {link.icon}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <div className={`${poppins.className} font-semibold text-[14px] sm:text-[15px] text-white truncate`}>
                                        {link.label}
                                    </div>
                                    <div className={`${poppins.className} text-[11px] sm:text-[13px] text-white/55 truncate`}>
                                        {link.sub}
                                    </div>
                                </div>
                                <ArrowIcon />
                            </a>
                        ))}
                    </div>

                    {/* Quick Message Tags - Smaller text on tiny screens */}
                    <div className="mt-8 sm:mt-10">
                        <div className="mb-3 sm:mb-4 flex items-center gap-3">
                            <span className="h-[1px] w-8 bg-red-500" />
                            <p className={`${poppins.className} text-[11px] uppercase tracking-[0.18em] font-bold text-[#ffffffa8]`}>
                                // Quick Message
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {quickMessages.map((msg) => (
                                <button
                                    key={msg}
                                    type="button"
                                    onClick={() => handleQuickMessage(msg)}
                                    className={`${poppins.className} border border-white/[0.08] backdrop-blur-xl bg-white/[0.04] rounded-full px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-[13px] text-white/85 hover:border-red-500/60 hover:text-white transition-colors cursor-pointer active:scale-95`}
                                >
                                    {msg}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------------------ */}
                {/* RIGHT COLUMN: Contact Form                              */}
                {/* ------------------------------------------------------ */}
                <div className="lg:col-span-7">
                    {/* Form padding: p-4 (16px) on mobile, scaling up to p-8 on desktop */}
                    <form className="border border-white/[0.08] backdrop-blur-xl bg-white/[0.04] rounded-2xl sm:rounded-[22px] p-4 sm:p-5 md:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                        {/* Name */}
                        <label className="flex flex-col gap-1.5 sm:gap-2 sm:col-span-2">
                            <span className={`${poppins.className} text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/55`}>Name</span>
                            <input required name="name" className={inputClasses} placeholder="Your name" defaultValue="" />
                        </label>

                        {/* Business / Brand */}
                        <label className="flex flex-col gap-1.5 sm:gap-2">
                            <span className={`${poppins.className} text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/55`}>Business / Brand</span>
                            <input name="brand" className={inputClasses} placeholder="Brand name" defaultValue="" />
                        </label>

                        {/* Phone */}
                        <label className="flex flex-col gap-1.5 sm:gap-2">
                            <span className={`${poppins.className} text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/55`}>Phone</span>
                            <input name="phone" className={inputClasses} placeholder="+91..." defaultValue="" />
                        </label>

                        {/* Instagram handle */}
                        <label className="flex flex-col gap-1.5 sm:gap-2">
                            <span className={`${poppins.className} text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/55`}>Instagram handle</span>
                            <input name="instagram" className={inputClasses} placeholder="@yourhandle" defaultValue="" />
                        </label>

                        {/* Project Type */}
                        <label className="flex flex-col gap-1.5 sm:gap-2">
                            <span className={`${poppins.className} text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/55`}>Project Type</span>
                            <select
                                name="project-type"
                                className={`${inputClasses} appearance-none [&>option]:bg-[#121214] [&>option]:text-white`}
                                defaultValue="Cafe Reel"
                                style={{ colorScheme: "dark" }}
                            >
                                <option value="Cafe Reel">Cafe Reel</option>
                                <option value="Video Editing">Video Editing</option>
                                <option value="Event Coverage">Event Coverage</option>
                                <option value="Product Video">Product Video</option>
                                <option value="Brand Film">Brand Film</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        {/* Budget */}
                        <label className="flex flex-col gap-1.5 sm:gap-2 sm:col-span-2">
                            <span className={`${poppins.className} text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/55`}>Budget</span>
                            <select
                                name="budget"
                                className={`${inputClasses} appearance-none [&>option]:bg-[#121214] [&>option]:text-white`}
                                defaultValue="₹1500 Single Reel"
                                style={{ colorScheme: "dark" }}
                            >
                                <option value="₹1500 Single Reel">₹1500 Single Reel</option>
                                <option value="₹15,000 Cafe Package">₹15,000 Cafe Package</option>
                                <option value="Custom Quote">Custom Quote</option>
                            </select>
                        </label>

                        {/* Message (Controlled Input) */}
                        <label className="flex flex-col gap-1.5 sm:gap-2 sm:col-span-2">
                            <span className={`${poppins.className} text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/55`}>Message</span>
                            <textarea
                                name="message"
                                rows={3}
                                className={`${inputClasses} resize-none`}
                                placeholder="Tell us about your project..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </label>

                        {/* Honeypot anti-spam */}
                        <input tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" type="text" name="honeypot" defaultValue="" />

                        {/* Submit Row */}
                        <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-4 sm:mt-2">
                            <p className={`${poppins.className} text-[11px] sm:text-xs text-white/70 text-center sm:text-left`}>
                                Your next piece of content can start with one message.
                            </p>
                            <button
                                type="submit"
                                className={`${poppins.className} w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 sm:py-3 text-white text-[12px] uppercase tracking-[0.18em] font-medium disabled:opacity-60 hover:scale-[1.03] active:scale-95 transition-transform shadow-[0_12px_30px_rgba(239,29,40,0.45)]`}
                            >
                                Send Inquiry
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}