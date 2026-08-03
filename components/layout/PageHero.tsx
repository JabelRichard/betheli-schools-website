'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { pageHeroes, PageHeroConfig } from '@/data/pageHeroes'

interface PageHeroProps {
  /** Key from data/pageHeroes.ts (e.g., 'programs', 'facilities') */
  pageKey?: keyof typeof pageHeroes
  /** Direct overrides if you don't want to use pageKey */
  title?: string
  imageSrc?: string
  alt?: string
}

export function PageHero({
  pageKey,
  title,
  imageSrc,
  alt,
}: PageHeroProps) {
  // Grab config from data file if pageKey is provided
  const config: PageHeroConfig = pageKey ? pageHeroes[pageKey] : { title: '', imageSrc: '' }

  const finalTitle = title || config.title || 'BETHELI SCHOOLS'
  const finalImage = imageSrc || config.imageSrc || '/images/large-hero-mission.jpg'
  const finalAlt = alt || config.alt || finalTitle

  return (
    <section className="relative bg-white">
      {/* Reduced Hero Height: ~60-65vh */}
      <div className="relative h-[320px] sm:h-[400px] md:h-[480px] lg:h-[75vh] min-h-[300px] max-h-[550px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={finalImage}
          alt={finalAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 to-transparent z-10" />

        {/* Centered & Nudged-Down Title */}
        <div className="relative z-20 w-full px-4 sm:px-8 text-center pt-8 sm:pt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="
              font-figtree
              font-bold
              uppercase
              tracking-wider
              text-white
              whitespace-nowrap
              drop-shadow-lg
              text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px]
              leading-none
            "
          >
            {finalTitle}
          </motion.h1>
        </div>

        {/* Bottom Concave White Curve */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <svg
            className="block w-full h-[28px] sm:h-[40px] md:h-[50px]"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}