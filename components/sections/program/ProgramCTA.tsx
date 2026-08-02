'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ProgramCTAProps {
  imageSrc?: string
}

export function ProgramCTA({
  imageSrc = "/images/large-hero-mission.jpg",
}: ProgramCTAProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#000000]"
    >
      {/* Full-Bleed Background Image */}
      <Image
        src={imageSrc}
        alt="Betheli Schools campus environment"
        fill
        priority={false}
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Brand Accent Overlay Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#18a8e5]/20 rounded-full blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fdf9cb]/15 rounded-full blur-3xl z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-20">
        {/* Transparent Frosted Box */}
        <div className="bg-[#000000]/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Top Accent Line (#fdf9cb) */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#fdf9cb]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (8 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="lg:col-span-8 text-left"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#fdf9cb] font-figtree font-bold text-xs uppercase tracking-widest text-[#000000] mb-5 shadow-sm">
                Join Betheli Schools
              </span>
              
              <h2 className="font-figtree font-semibold text-[32px] sm:text-[34px] leading-[1.15] text-[#ffffff] tracking-tight mb-4">
                Ready to Give Your Child a Strong Foundation?
              </h2>

              <p className="font-figtree font-normal text-[18px] sm:text-[20px] leading-[1.6] text-[#ffffff]/90 max-w-2xl">
                Admissions are open for Preschool and Primary School. Schedule a visit to tour our campus, meet our teachers, and experience our community firsthand.
              </p>
            </motion.div>

            {/* Right Action Buttons (4 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center"
            >
              <a
                href="/admissions"
                className="w-full text-center px-8 py-4 rounded-xl bg-[#18a8e5] text-[#ffffff] font-figtree font-bold text-base hover:bg-[#ffffff] hover:text-[#000000] transition-colors duration-300 shadow-lg"
              >
                Apply for Admission
              </a>

              <a
                href="/contact"
                className="w-full text-center px-8 py-4 rounded-xl bg-[#fdf9cb] text-[#000000] font-figtree font-bold text-base hover:bg-[#18a8e5] hover:text-[#ffffff] transition-colors duration-300"
              >
                Book a School Tour
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}