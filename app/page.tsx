import { Hero } from "@/components/sections/home/Hero";
import { OurPrograms } from "@/components/sections/home/OurPrograms";
import { PreFooterGallery } from "@/components/sections/home/PreGallery";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { WelcomeSection } from "@/components/sections/home/WelcomeSection";
import { WhyBetheli } from "@/components/sections/home/WhyBetheli";


export default function Home() {
  return (
    <>
    <Hero />
    <WhyBetheli />
    <WelcomeSection />
    <OurPrograms />
    <Testimonials />
    <PreFooterGallery />
    </>
  )
}