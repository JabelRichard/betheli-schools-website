'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function TeachingTeam() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 sm:py-10 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Two-Column Grid - Vertically Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col text-left"
          >
          
          <div className="flex items-center justify-center md:justify-start gap-5 mb-8">
         
          <div className="hidden md:block w-[6px] h-20 bg-[#18a8e5] rounded-full shrink-0" />

          {/* Stacked Heading - Centered on Mobile, Left-Aligned on Desktop */}
          <h2 className="font-figtree font-medium text-[32px] leading-[1.05] text-[rgb(34,34,34)] tracking-tight text-center md:text-left">
            Our <br />
            <span className="text-[#18a8e5]">Teaching Team</span>
          </h2>
        </div>

            {/* Paragraphs with Key Highlight Phrases */}
            <div className="font-figtree font-normal text-[20px] leading-[1.8] text-[rgb(85,85,85)] space-y-6 text-justify">
              <p>
                Our teachers are the <strong className="font-semibold text-[rgb(34,34,34)]">heart of Betheli Schools</strong>. They are passionate about helping every child grow, not only academically but also in character, confidence, and faith.
              </p>
              <p>
                Every day, our teaching team creates a <strong className="font-semibold text-[rgb(34,34,34)]">welcoming and supportive classroom</strong> where students feel safe to ask questions, explore new ideas, and develop a love for learning. They understand that every child learns differently and are committed to helping each student reach their full potential.
              </p>
              <p>
                We believe that great teachers do more than teach lessons they inspire, encourage, and guide children as they grow into responsible, compassionate, and confident individuals. By working closely with families, our teachers help create a <strong className="font-semibold text-[rgb(34,34,34)]">caring school community</strong> where every child feels valued, supported, and prepared for the future.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Classroom Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-full min-h-[350px] sm:min-h-[450px] aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 bg-slate-100"
          >
            <Image
              src="/images/teachers.webp"
              alt="Betheli Schools teachers interacting with students in the classroom"
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