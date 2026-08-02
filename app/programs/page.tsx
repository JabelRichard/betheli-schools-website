import { EnrichmentSection } from "@/components/sections/program/EnrichmentSection";
import { PreschoolSection } from "@/components/sections/program/PreschoolSection";
import { PrimarySection } from "@/components/sections/program/PrimarySection";
import { ProgramCTA } from "@/components/sections/program/ProgramCTA";
import { ProgramHero } from "@/components/sections/program/ProgramHero";

export default function AboutPage() {
  return (
    <>
      <ProgramHero />
      <PreschoolSection />
      <PrimarySection />
      <EnrichmentSection />
      <ProgramCTA />
      {/* Rest of the About page content */}
    </>
  )
}