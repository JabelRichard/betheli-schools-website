'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface FacilitiesHeroProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export function FacilitiesHero({
  title = 'FACILITIES',
  imageSrc = '/images/large-hero-mission.jpg',
}: FacilitiesHeroProps) {
  return (
    <section className="relative bg-white">
      {/* Hero Image Block */}
      <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden flex items-center">
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10" />

        {/* Oversized 162px Title */}
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
              font-extrabold
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

        {/* Bottom Concave White Curve */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
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
    </section>
  )
}