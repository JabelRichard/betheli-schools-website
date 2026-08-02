import { FacilitiesHero } from "@/components/sections/facilities/FacilitiesHero";
import { FacilitySection } from "@/components/sections/facilities/FacilitySection";
import { facilitiesData } from "@/data/facilitiesData";

export default function AboutPage() {
  return (
    <>
      <FacilitiesHero />
      <FacilitySection facilities={facilitiesData} />
      {/* Rest of the About page content */}
    </>
  )
}