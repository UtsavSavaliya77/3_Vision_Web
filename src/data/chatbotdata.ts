import { ChatResponse } from "@/types/chat";

/**
 * Static chatbot knowledge base for 3Vision Studio.
 * Each entry matches a set of keywords (lowercased) in the user's message
 * and returns a single canned answer. Anything unrecognized falls back
 * to the conversational "Reels, shoots or packages…" prompt so the chat
 * always feels alive without needing an API.
 */
export const chatbotData: ChatResponse[] = [
  // --- Greeting & re-engagement ---------------------------------------------
  {
    keywords: ["hello", "hi", "hey", "hii", "hiii", "kem cho", "kem cho?", "namaste"],
    answer:
      "Hey! 👋 Hu 3Vision Studio assistant chu.\n\nTamne reel, shoot, editing ke package mate help joiye che?",
  },
  {
    keywords: ["question", "questions", "puchvu", "puchhvu", "puchu", "puchh"],
    answer:
      "Thoda aur batao? Aap reel, shoot, editing, package ya WhatsApp — kis baare me puchhna chahte hain?",
  },
  {
    keywords: ["language", "bhasha", "भाषा", "gujlish"],
    answer:
      "Sorry, samjhayu nahi — reply kayu language ma joi'iye? Reply: Gujarati · Hindi · Gujlish · English",
  },
  {
    keywords: ["thanks", "thank you", "thank", "aabhar", "shukriya"],
    answer:
      "❤️ Thank you! 3Vision Studio sathe connect thava mate aabhar.",
  },

  // --- Suggestion chips (each picks one of these flows) ---------------------
  {
    keywords: ["cafe", "cafes", "coffee", "restaurant reel", "cafe reel package"],
    answer:
      "For cafes we cover food close-ups, ambience and offer reels. Single reel or a monthly package?",
  },
  {
    keywords: ["business", "business ad", "brand ad", "ad reel"],
    answer:
      "Business ad reels focus on the brand story, products in use and a strong CTA. Want a 30-sec cut, 60-sec cut, or a series?",
  },
  {
    keywords: ["product", "product video", "product reel"],
    answer:
      "Product videos include clean lighting, slow 360° shots and a short hook cut. Single SKU or a full catalogue shoot?",
  },
  {
    keywords: ["anchor", "anchor reel"],
    answer:
      "Anchor reels are 30–60 sec talking-head edits with captions, b-roll and music sync. One-off or monthly?",
  },
  {
    keywords: ["car", "car delivery", "car delivery shoot", "delivery shoot"],
    answer:
      "Car delivery shoots include cinematic walkaround, key-handover and a customer reaction clip. Single delivery or monthly dealership?",
  },
  {
    keywords: ["event", "event shoot"],
    answer:
      "Event coverage available: Birthday · Corporate · Opening · Engagement · Wedding functions. Indoor or outdoor?",
  },
  {
    keywords: ["editing", "editing only", "edit only", "raw edit"],
    answer:
      "Editing-only covers color grade, captions, music sync and social exports. How much footage do you have?",
  },
  {
    keywords: ["pricing", "price", "cost", "kitna", "kati", "keto", "pricing pucho", "pucho"],
    answer:
      "Pricing depends on the package, duration and add-ons (drone, anchor, etc.). Tell me which service + single/monthly and I'll share a quote.",
  },
  {
    keywords: ["book", "book a shoot", "booking", "schedule"],
    answer:
      "📅 Shoot book karva mate WhatsApp karo: +91 94281 63116 — ya niche 'Book a Shoot' click karo.",
  },
  {
    keywords: ["contact", "number", "phone", "whatsapp"],
    answer:
      "☎️ Contact: +91 94281 63116 · Rajkot. Instagram DM pan kari shako.",
  },
  {
    keywords: ["instagram", "insta", "reel page"],
    answer:
      "📸 Instagram par amara latest reels ane projects joi shako — handle niche footer ma che.",
  },
  {
    keywords: ["location", "where", "rajkot", "city"],
    answer:
      "📍 Ame Rajkot based chie pan Gujarat bhar shoot mate available chie.",
  },
  {
    keywords: ["drone"],
    answer:
      "🚁 Drone shoot available — location ane permissions pramane additional charge lagu thai shake.",
  },
  {
    keywords: ["time", "delivery", "turnaround", "kitne din", "keto time"],
    answer:
      "⏰ Normal reel delivery 2–4 days ma thai jay che. Event films: 5–7 days.",
  },

  // --- Conversational follow-ups captured from the video -------------------
  {
    keywords: ["single", "ek reel", "one reel", "1 reel"],
    answer:
      "Single reel packages start from a 30-sec cut with 1 revision. Want me to share the rate card?",
  },
  {
    keywords: ["monthly", "package", "retainer"],
    answer:
      "Monthly packages include 4–8 reels, priority editing and a dedicated shoot day. Tell me the count you have in mind.",
  },
  {
    keywords: ["footage", "raw", "minutes", "how much"],
    answer:
      "Got it. Please share total rough-cut minutes + Google Drive / WeTransfer link, and I'll quote the edit.",
  },
  {
    keywords: ["30", "60", "sec", "seconds", "cut"],
    answer:
      "Standard cuts are 30-sec, 60-sec and 90-sec. Which duration suits the platform — Instagram, YouTube Shorts, or both?",
  },
  {
    keywords: ["indoor", "outdoor", "venue"],
    answer:
      "Indoor shoots need a 10×10 ft clear area + power socket. Outdoor shoots depend on weather and permissions.",
  },
  {
    keywords: ["quote", "quotation", "rate", "rate card"],
    answer:
      "For an exact quote, share: service type · single/monthly · location · preferred date. WhatsApp par moklo: +91 94281 63116",
  },
];

export const defaultReply =
  "Hey! 👋 Reels, shoots or packages — what would you like to talk about?";
