'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Vision() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col text-left"
          >
            {/* Title with Primary Color Highlight on "Vision" */}
            <h2
              className="font-figtree font-bold text-[35px] leading-[42px] text-[#222222] tracking-tight text-center md:text-left"
              style={{ fontWeight: 700 }}
            >
              Our <span className="text-[#18a8e5]">Vision</span>
            </h2>

            {/* Decorative Horizontal Line */}
            <div className="hidden md:block w-[70px] h-[4px] bg-[#18a8e5] rounded-full my-6" />

            {/* Vision Statement Text */}
            <p
              className="font-figtree font-normal text-[20px] leading-[1.8] text-[#3c3c3c] text-justify"
              style={{ fontWeight: 400 }}
            >
              At Betheli Schools, our vision is to promote intergrity, academic, excellence and nurture future productive citizens who positively coutribute to society.
            </p>
          </motion.div>

          {/* Right Column: High-Quality Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-full min-h-[300px] sm:min-h-[400px] aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 bg-slate-100"
          >
            <Image
              src="/images/build-Section1.jpg"
              alt="Betheli Schools campus environment and students learning"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              quality={90}
              className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}