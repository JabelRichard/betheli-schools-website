import { PageHero } from '@/components/layout/PageHero'
import { DirectorMessage } from '@/components/sections/about/DirectorMessage'
import { Mission } from '@/components/sections/about/Mission'
import { OurStory } from '@/components/sections/about/OurStory'
import { TeachingTeam } from '@/components/sections/about/TeachingTeam'
import { Values } from '@/components/sections/about/Values'
import { Vision } from '@/components/sections/about/Vision'

export default function AboutPage() {
  return (
    <>
      <PageHero pageKey="about" />
      <DirectorMessage />
      <OurStory />
      <Mission />
      <Vision />
      <Values />
      <TeachingTeam />
      {/* Rest of the About page content */}
    </>
  )
}