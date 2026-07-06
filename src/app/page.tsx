import Image from "next/image";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/home/HeroSection";
import ShowReelSection from "@/components/sections/home/ShowReelSection";
import ServicesSection from "@/components/sections/home/ServiceSection";
import PackagesSection from "@/components/sections/home/PackagesSection";
import EditingSection from "@/components/sections/home/EditingSection";
import SelectedReelSection from "@/components/sections/home/SelectedReelsSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ContactUsSection from "@/components/sections/home/ContactUsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ShowReelSection/>
    <ServicesSection/>
    <PackagesSection/>
    <EditingSection/>
    <SelectedReelSection/>
    <ProcessSection/>
    <TestimonialsSection/>
    <ContactUsSection/>
    <Footer/>
    </>
  );
}
