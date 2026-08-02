'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProgramHeroProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export function ProgramHero({
  title = 'PROGRAMS',
  subtitle = 'Exploring Innovative Educational Pathways at Betheli Schools: Prepare for the Future with STEM, Arts, and Leadership',
  imageSrc = '/images/large-hero-mission.jpg',
}: ProgramHeroProps) {
  return (
    <section className="relative bg-white">
      {/* Hero Image */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden flex items-center">
        <Image
          src={imageSrc}
          alt="Programs Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10" />

        {/* Large Title */}
        <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="
              font-figtree
              font-semibold
              uppercase
              tracking-tight
              text-white
              whitespace-nowrap
              drop-shadow-lg
              text-[56px] leading-[50px]
              sm:text-[100px] sm:leading-[80px]
              md:text-[130px] md:leading-[95px]
              lg:text-[162px] lg:leading-[113px]
            "
          >
            {title}
          </motion.h1>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            className="block w-full h-[35px] sm:h-[50px] md:h-[65px]"
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

      {/* Subtitle */}
      
    </section>
  )
}