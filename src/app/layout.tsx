// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import FloatingButtons from "@/components/floating/FloatingButtons";
import SoundButton from "@/components/floating/SoundButton";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "3Vision Studio",
  description: "Video content creation studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
           <Header/>
        {children}
        <FloatingButtons />
        <SoundButton />
        <Footer />
      </body>
    </html>
  );
}