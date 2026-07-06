"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919428163116?text=Hi%203Vision%20Studio%2C%20I%20am%20interested%20in%20reels%2Fvideo%20shoot.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-[18px] right-4 z-[85] md:bottom-6 md:right-6"
    >
      {/* Glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/30 blur-xl animate-[wa-pulse_2.6s_ease-in-out_infinite]"
      />

      {/* Main Button */}
      <span className="relative inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/70 py-2.5 pl-2.5 pr-3 backdrop-blur-xl shadow-[0_18px_50px_-12px_rgba(37,211,102,0.55),0_8px_30px_-12px_rgba(239,29,40,0.35)] transition-all duration-200 group-hover:scale-[1.06] group-hover:border-white/20 group-active:scale-95 md:pr-4">
        
        {/* WhatsApp Icon */}
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-[0_0_24px_rgba(37,211,102,0.55)]">
          <svg
            viewBox="0 0 32 32"
            className="h-5 w-5 text-white"
            fill="currentColor"
          >
            <path d="M19.11 17.51c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.44-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.02 5.33C10.13 5.33 5.34 10.12 5.34 16c0 1.93.51 3.81 1.47 5.46L5.33 26.67l5.36-1.41a10.65 10.65 0 0 0 5.33 1.41c5.89 0 10.67-4.79 10.67-10.67S21.91 5.33 16.02 5.33zm0 19.5a8.83 8.83 0 0 1-4.5-1.23l-.32-.19-3.18.84.85-3.1-.21-.33A8.83 8.83 0 1 1 24.85 16c0 4.87-3.96 8.83-8.83 8.83z" />
          </svg>

          {/* Online Indicator */}
          <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366] ring-2 ring-black">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-70" />
          </span>
        </span>

        {/* Text */}
        <span className="hidden text-[12px] font-medium uppercase tracking-[0.18em] text-white md:inline">
          WhatsApp
        </span>
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </Link>
  );
}