import ChatButton from "./ChatButton";
import SoundButton from "./SoundButton";
import WhatsAppButton from "./WhatsAppButton";

export default function FloatingButtons() {
  return (
    <>
      {/* Left Side */}
      <ChatButton />

      {/* Right Side */}
      <div className="fixed bottom-6 right-4 z-[80] flex flex-col gap-3 md:right-6">
        <SoundButton />
        <WhatsAppButton />
      </div>
    </>
  );
}