import Image from "next/image";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/home/HeroSection";
import ShowReelSection from "@/components/sections/home/ShowReelSection";
import ServicesSection from "@/components/sections/home/ServiceSection";
import PackagesSection from "@/components/sections/home/PackagesSection";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ShowReelSection/>
    <ServicesSection/>
    <PackagesSection/>
    </>
  );
}
