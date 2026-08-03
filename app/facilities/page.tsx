import { PageHero } from "@/components/layout/PageHero";
import { FacilitySection } from "@/components/sections/facilities/FacilitySection";
import { facilitiesData } from "@/data/facilitiesData";

export default function AboutPage() {
  return (
    <>
      <PageHero pageKey="facilities" />
      <FacilitySection facilities={facilitiesData} />
      {/* Rest of the About page content */}
    </>
  )
}