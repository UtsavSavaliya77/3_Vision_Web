import { chatbotData, defaultReply } from "@/data/chatbotdata";

/**
 * Static, keyword-based bot reply.
 * Iterates the knowledge base in order and returns the answer for the
 * first entry whose keywords appear in the user's message.
 *
 * For ultra-short / non-matching inputs we return the conversational
 * `defaultReply` instead of a hard "I don't know" — this keeps the chat
 * feeling alive without any external API call.
 */
export function getBotReply(message: string): string {
  const text = message.toLowerCase().trim();

  if (!text) return defaultReply;

  for (const item of chatbotData) {
    for (const keyword of item.keywords) {
      if (text.includes(keyword.toLowerCase())) {
        return item.answer;
      }
    }
  }

  return defaultReply;
}
