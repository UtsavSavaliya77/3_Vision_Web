import PackagesHero from "@/components/sections/packages/PackageHero";
import PricingSection from "@/components/sections/packages/PricingSection";
import CompareSection from "@/components/sections/packages/CompareSection";
import PackagesBottomCta from "@/components/sections/packages/PackagesCTA";

export default function WorkPage() 
{ 
    return (
        <>
        <PackagesHero/>
        <PricingSection/>
        <CompareSection/>
        <PackagesBottomCta/>
        </>
    );
}
