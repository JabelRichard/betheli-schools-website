'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Mission() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' })

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#18a8e5] flex flex-col justify-between"
    >
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.12 }}
        animate={isInView ? { scale: 1 } : { scale: 1.12 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
      >
        <Image
          src="/images/large-hero-mission.jpg"
          alt="Betheli Schools students"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Blue Brand Color Tint Overlay matching the screenshot */}
      <div className="absolute inset-0 z-10 bg-[#18a8e5]/75 mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#18a8e5]/40 via-transparent to-[#18a8e5]/60" />

      {/* Main Content Container - Flush top, padded sides & bottom */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-between px-5 sm:px-10 lg:px-16 pt-0 pb-12 md:pb-20">
        
        {/* Title Block - Strictly Left Aligned & Flush Top */}
        <div className="w-full text-left pt-0 mt-0 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-figtree font-extrabold uppercase text-[40px] sm:text-[72px] md:text-[110px] lg:text-[145px] xl:text-[160px] leading-[0.85] text-white tracking-tight pt-0 mt-0 select-none whitespace-nowrap"
          >
            OUR MISSION
          </motion.h2>
        </div>

        {/* Mission Statement Text - Left Aligned, Positioned Bottom-Third */}
        <div className="w-full max-w-4xl text-left mt-3 pt-8 md:pt-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-figtree font-medium text-[24px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-[1.2] text-white tracking-normal drop-shadow-md"
          >
           To ensure high level of achievement for every student by provinding quality education in safe, caring and learning environment.
          </motion.p>
        </div>

      </div>
    </section>
  )
}