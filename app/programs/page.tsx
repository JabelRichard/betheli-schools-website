import { PageHero } from "@/components/layout/PageHero";
import { EnrichmentSection } from "@/components/sections/program/EnrichmentSection";
import { PreschoolSection } from "@/components/sections/program/PreschoolSection";
import { PrimarySection } from "@/components/sections/program/PrimarySection";
import { ProgramCTA } from "@/components/sections/program/ProgramCTA";

export default function AboutPage() {
  return (
    <>
      <PageHero pageKey="programs" />
      <PreschoolSection />
      <PrimarySection />
      <EnrichmentSection />
      <ProgramCTA />
      {/* Rest of the About page content */}
    </>
  )
}