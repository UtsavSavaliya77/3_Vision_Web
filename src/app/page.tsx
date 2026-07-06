import HeroSection from "@/components/sections/home/HeroSection";
import ShowReelSection from "@/components/sections/home/ShowReelSection";
import ServicesSection from "@/components/sections/home/ServiceSection";
import PackagesSection from "@/components/sections/home/PackagesSection";
import EditingSection from "@/components/sections/home/EditingSection";
import SelectedReelSection from "@/components/sections/home/SelectedReelsSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import ContactUsSection from "@/components/sections/home/ContactUsSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ShowReelSection/>
    <ServicesSection/>
    <PackagesSection/>
    <EditingSection/>
    <SelectedReelSection/>
    <ProcessSection/> 
    <TestimonialsSection/>
    <ContactUsSection/>
    </>
  );
}
