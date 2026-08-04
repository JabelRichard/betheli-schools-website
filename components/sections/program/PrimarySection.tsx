'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  'Mathematics',
  'English and Kiswahili',
  'Science',
  'Social Studies',
  'ICT and Digital Skills',
  'Creative Arts',
]

export function PrimarySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8fafc] py-16 sm:py-24 lg:py-28 overflow-hidden relative border-y border-slate-100"
    >
      {/* Decorative Background Glow Accent - Soft Cream Gold Tint */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#fdf9cb] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Two-Column Responsive Grid - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Content Block (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 flex flex-col order-2 lg:order-1"
          >
            {/* Title - Centered on mobile/tablet, Left-aligned on Desktop */}
            <div className="w-full text-center lg:text-left mb-3">
              <h2 className="font-figtree font-semibold text-[36px] sm:text-[34px] leading-[1.1] text-[#000000] tracking-tight">
                Primary School
              </h2>
            </div>

            {/* Subtitle - Centered on mobile/tablet, Left-aligned on Desktop */}
            <h3 className="font-figtree font-normal text-xl sm:text-2xl text-[#18a8e5] mb-6 text-center lg:text-left">
              Building Knowledge, Character, and Confidence
            </h3>

            {/* Description Body */}
            <p className="font-figtree font-normal text-[14px] sm:text-[17px] leading-[1.7] text-[#000000]/80 mb-8 text-justify">
            Our Primary Program, from Standard 1 to Standard 7, provides students with a strong foundation for academic growth and personal development. We create a supportive and engaging learning environment where students are encouraged to explore, ask questions, think critically, and develop confidence in their abilities.

            Through a balanced approach to learning, students build essential skills in literacy, numeracy, creativity, communication, teamwork, and problem-solving. Our program focuses not only on academic achievement but also on nurturing positive values, responsibility, and a lifelong love for learning. By the end of primary education, students are prepared with the knowledge, skills, and confidence they need to successfully continue their educational journey.

            </p>

            {/* Highlights Box */}
            <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h4 className="font-figtree font-bold text-sm uppercase tracking-wider text-[#000000] mb-5 text-left">
                Key Curriculum Highlights
              </h4>

              {/* Responsive 2-Column Highlights Grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((item, idx) => (
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

          {/* RIGHT COLUMN: Feature Image with Soft Gold Accent Elements (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 relative w-full order-1 lg:order-2"
          >
            {/* Main Image Frame */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/80 bg-[#000000] border border-slate-100">
              <Image
                src="/images/students1.webp"
                alt="Primary School students engaged in interactive classroom learning"
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
              className="absolute -bottom-6 -left-2 sm:left-4 z-20 bg-[#ffffff] p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#18a8e5] flex items-center justify-center shrink-0 border border-amber-200/50">
                <span className="font-figtree font-bold text-lg text-[#000000]">6-12</span>
              </div>
              <div className="text-left">
                <p className="font-figtree font-semibold text-sm text-[#000000]">Primary Grades</p>
                <p className="font-figtree font-normal text-xs text-[#000000]/70">Academic & Character Growth</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}