"use client";

import Link from "next/link";
import { Sparkles, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getBotReply } from "@/lib/chatbot";

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

const suggestions = [
  "Cafe reel package",
  "Business ad reel",
  "Product video",
  "Anchor reel",
  "Car delivery shoot",
  "Event shoot",
  "Editing only",
  "Pricing pucho",
  "Book a shoot",
];

const initialBotMessage =
  "Hey! 👋 Hu 3Vision Studio assistant chu.\n\nTamne reel, shoot, editing ke package mate help joiye che?\n\nGujarati, Hindi ke English — je comfortable hoy ema pucho.";

function nowId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

export default function ChatModal({ open, onClose }: ChatModalProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, sender: "bot", text: initialBotMessage },
  ]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showChips, setShowChips] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Reset chat when the modal is reopened.
  useEffect(() => {
    if (open) {
      setMessages([{ id: nowId(), sender: "bot", text: initialBotMessage }]);
      setShowSuggestions(true);
      setShowChips(true);
      setMessage("");
    }
  }, [open]);

  // Auto-scroll to the latest message.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, showSuggestions, showChips]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: nowId(), sender: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setShowSuggestions(false);

    // Static bot reply — instant, no network call.
    const reply = getBotReply(trimmed);
    setMessages((prev) => [
      ...prev,
      { id: nowId(), sender: "bot", text: reply },
    ]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(message);
  }

  function handleSuggestion(item: string) {
    send(item);
    setShowChips(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="3Vision Assistant"
      className="fixed bottom-[90px] left-3 right-3 z-[90] origin-bottom-left md:bottom-24 md:left-6 md:right-auto md:w-[400px] md:max-w-[92vw] animate-chatPop"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/75 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,.6)]">
        {/* Background Noise */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Red Glow */}
        <div className="pointer-events-none absolute -inset-px rounded-3xl shadow-[inset_0_0_60px_rgba(239,29,40,.18)]" />

        {/* HEADER */}
        <div className="relative flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-red-600/40 to-black">
            <Sparkles className="h-4 w-4 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white">
              3Vision Assistant
            </h3>
            <p className="text-[11px] text-white/60">
              Ask about reels, shoots & packages
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="relative h-2 w-2 rounded-full bg-red-500">
              <span className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-70" />
            </span>
            <span className="text-[10px] uppercase tracking-[.18em] text-white/70">
              Online
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close chat"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* MESSAGES */}
        <div
          ref={scrollRef}
          className="max-h-[55vh] space-y-3 overflow-y-auto px-4 py-4 md:max-h-[420px]"
        >
          {messages.map((m, i) =>
            m.sender === "user" ? (
              <div
                key={m.id}
                className="flex animate-msgIn justify-end"
              >
                <div className="max-w-[88%] whitespace-pre-line rounded-2xl rounded-br-md bg-red-600 px-4 py-2.5 text-[13.5px] leading-relaxed text-white shadow-[0_8px_24px_rgba(239,29,40,.35)]">
                  {m.text}
                </div>
              </div>
            ) : (
              <div
                key={m.id}
                className="flex animate-msgIn justify-start"
              >
                <div className="max-w-[88%] whitespace-pre-line rounded-2xl rounded-bl-md border border-l-2 border-red-600 border-white/10 bg-white/5 px-4 py-3 text-[13.5px] leading-relaxed text-white/90">
                  {m.text}
                </div>
              </div>
            )
          )}

          {/* Suggestion Chips — shown on first turn only */}
          {showChips && showSuggestions && (
            <div className="flex flex-wrap gap-2 pt-1">
              {suggestions.map((item, i) => (
                <button
                  key={item}
                  onClick={() => handleSuggestion(item)}
                  className="animate-chipIn rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11.5px] text-white/90 transition hover:border-white/20 hover:bg-white/10"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="border-t border-white/10 px-3 pb-3 pt-2">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-4 pr-1.5 focus-within:border-white/25"
          >
            <input
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about reels, shoots, packages..."
              className="flex-1 bg-transparent text-[13px] text-white placeholder:text-white/60 outline-none"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_8px_24px_rgba(239,29,40,.45)] transition hover:scale-105 disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-2 flex items-center justify-between px-1">
            <Link
              href="https://wa.me/919428163116"
              target="_blank"
              className="text-[11px] uppercase tracking-[.16em] text-white/65 hover:text-white"
            >
              WhatsApp Us →
            </Link>
            <a
              href="/contact"
              className="text-[11px] uppercase tracking-[.16em] text-red-500 hover:text-white"
            >
              Book a Shoot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
