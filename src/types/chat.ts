export interface ChatMessage {
  id: number;
  sender: "user" | "bot";
  text: string;
  time: string;
}

export interface ChatResponse {
  keywords: string[];
  answer: string;
}