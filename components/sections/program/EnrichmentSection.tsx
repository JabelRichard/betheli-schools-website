'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const activities = [
  'Sports and Games',
  'Music and Choir',
  'Art and Craft',
  'Drama',
  'Debate and Public Speaking',
  'STEM and Coding',
  'School Clubs',
  'Educational Trips',
]

export function EnrichmentSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#ffffff] py-16 sm:py-24 lg:py-28 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Two-Column Grid - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Image Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 relative w-full"
          >
          

            {/* Main Image Frame */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/80 bg-[#000000] border border-slate-100">
              <Image
                src="/images/programs/enrichment.jpg"
                alt="Betheli Schools students participating in sports and enrichment activities"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent z-10" />
            </div>

            {/* Floating Info Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 sm:right-4 z-20 bg-[#ffffff] p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#18a8e5] flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-[#ffffff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 1 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 1 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 1 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 1 00-.364-1.118L2.49 10.101c-.783-.57-.38-1.81.588-1.81h4.914a1 1 1 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-figtree font-semibold text-sm text-[#000000]">Holistic Growth</p>
                <p className="font-figtree font-normal text-xs text-[#000000]/70">Co-Curricular Excellence</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Content Block (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 flex flex-col text-left pt-4 lg:pt-0"
          >
            {/* Header with Blue Vertical Accent Bar */}
            <div className="flex items-stretch gap-4 mb-3">
              
              <div>
                <h2 className="font-figtree font-semibold text-[36px] sm:text-[34px] leading-[1.1] text-[#000000] tracking-tight text-center md:text-left">
                  Enrichment Activities
                </h2>
              </div>
            </div>

            {/* Subtitle */}
            <h3 className="font-figtree font-normal text-xl sm:text-2xl text-[#18a8e5] mb-6 text-center md:text-left">
              Learning Beyond the Classroom
            </h3>

            {/* Description Body */}
            <p className="font-figtree font-normal text-[18px] sm:text-[20px] leading-[1.7] text-[#000000]/80 mb-8 text-justify">
              Education extends beyond academics. Our enrichment activities help students <strong className="font-semibold text-[#000000]">discover their talents, build leadership skills, stay active</strong>, and develop confidence in a supportive environment.
            </p>

            {/* Activities Highlights Box */}
            <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h4 className="font-figtree font-bold text-sm uppercase tracking-wider text-[#000000] mb-5">
                Activities Include
              </h4>

              {/* 2-Column Responsive Activities Grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {activities.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#fdf9cb] flex items-center justify-center shrink-0 border border-amber-200/60 shadow-xs">
                      <svg
                        className="w-3.5 h-3.5 text-[#000000]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-figtree font-medium text-base text-[#000000]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}