"use client";

import { useState } from "react";
import ChatModal from "../chat/ChatModel";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open 3Vision Assistant"
        className="group fixed bottom-[18px] left-4 z-[80] md:bottom-6 md:left-6"
      >
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-[0_18px_50px_rgba(239,29,40,0.35)] backdrop-blur-xl transition-transform duration-200 group-hover:scale-105 group-active:scale-95">

          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(239,29,40,0.45),transparent_60%)]" />

          <span className="absolute -inset-1 animate-pulse rounded-full ring-1 ring-red-500/20" />

          {/* Chat Icon */}
          <svg
            viewBox="0 0 40 40"
            className="relative h-7 w-7 text-white"
            fill="none"
          >
            <path
              d="M6 11a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5H17l-6 5v-5a5 5 0 0 1-5-5V11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle
              cx="20"
              cy="17"
              r="4.5"
              stroke="#ef1d28"
              strokeWidth="2"
            />
            <circle
              cx="20"
              cy="17"
              r="1.6"
              fill="#ef1d28"
            />
          </svg>

          {/* Online Dot */}
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,29,40,.9)]">
            <span className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-70" />
          </span>
        </span>

        {/* Tooltip */}
        <span className="pointer-events-none absolute left-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 md:block">
          Ask 3Vision
        </span>
      </button>

      <ChatModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}