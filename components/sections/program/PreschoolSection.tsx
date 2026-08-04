'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  'Early literacy and numeracy',
  'Language development',
  'Social and emotional learning',
  'Creative play',
  'Motor skills development',
]

export function PreschoolSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Two-Column Responsive Grid - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Feature Image with Decorative Elements (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Background Decorative Accent Box */}
            <div className="absolute -inset-4 rounded-3xl bg-[#18a8e5]/10 transform -rotate-2 -z-10" />

            {/* Main Image Frame */}
            <div className="relative w-full aspect-[4/5] rounded-0xl overflow-hidden shadow-2xl shadow-slate-200/80 bg-slate-100 border border-slate-100">
              <Image
                src="/images/why-teachers.webp"
                alt="Children in Betheli Preschool classroom engaging in play-based learning"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay at Bottom of Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            </div>

            {/* Floating Info Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 sm:right-4 z-20 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f7f149]/30 flex items-center justify-center shrink-0">
                <span className="font-figtree font-bold text-lg text-[#4216ab]">2-5</span>
              </div>
              <div className="text-left">
                <p className="font-figtree font-semibold text-sm text-[#222222]">Ages 2 – 5 Years</p>
                <p className="font-figtree font-normal text-xs text-slate-500">Play-based Foundation</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Content Block (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 flex flex-col pt-4 lg:pt-0"
          >
            {/* Title - Centered on mobile/tablet, Left-aligned on Desktop */}
            <div className="w-full text-center lg:text-left mb-3">
              <h2 className="font-figtree font-semibold text-[36px] sm:text-[34px] leading-[1.1] text-[#222222] tracking-tight">
                Pre-school
              </h2>
            </div>

            {/* Subtitle - Centered on mobile/tablet, Left-aligned on Desktop */}
            <h3 className="font-figtree font-normal text-xl sm:text-2xl text-[#18a8e5] mb-6 text-center lg:text-left">
              A Strong Start for Lifelong Learning
            </h3>

            {/* Description Body */}
            <p className="font-figtree font-normal text-[14px] sm:text-[17px] leading-[1.7] text-[#2b2359] mb-8 text-justify">
           Our Preschool Program provides a safe, caring, and engaging environment where young children build confidence, curiosity, and essential early learning skills through play-based and guided activities. The program is designed to prepare children for their next stage of education by developing social, emotional, language, and foundational academic skills.

            The Preschool Program typically takes one year, helping children gain the readiness and confidence needed to begin formal schooling. However, depending on each child's individual development, learning pace, and understanding, some children may require an additional year to fully prepare for the next level.
            </p>

            {/* Highlights Box */}
            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-100">
              <h4 className="font-figtree font-bold text-sm uppercase tracking-wider text-[#222222] mb-4 text-left">
                Program Highlights
              </h4>

              {/* Responsive 2-Column Highlights Grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#18a8e5]/15 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3.5 h-3.5 text-[#18a8e5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-figtree font-medium text-base text-[#222222]">
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