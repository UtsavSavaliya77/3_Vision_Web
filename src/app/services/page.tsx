import ServicesCta from "@/components/sections/services/ServicesCTA";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceReels from "@/components/sections/services/ServicesReels";


export default function WorkPage() 
{ 
    return (
        <>
        <ServicesHero/>
        <ServiceReels/>
        <ServicesCta/>
        </>
    );
}
