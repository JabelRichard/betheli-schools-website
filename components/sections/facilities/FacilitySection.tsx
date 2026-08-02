'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export interface FacilityItem {
  id: string
  title: string
  descriptionParagraph1: React.ReactNode
  descriptionParagraph2: React.ReactNode
  imageSrc: string
  imageAlt: string
}

interface FacilitySectionProps {
  facilities?: FacilityItem[]
}

export function FacilitySection({ facilities = [] }: FacilitySectionProps) {
  return (
    <section className="w-full bg-[#f8fafc] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-24">
        {facilities?.map((facility, index) => (
          <FacilityCard key={facility.id} facility={facility} index={index} />
        ))}
      </div>
    </section>
  )
}

function FacilityCard({ facility, index }: { facility: FacilityItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  // Alternate image position: Even indices -> Image Left, Odd indices -> Image Right
  const isImageLeft = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="bg-[#ffffff] rounded-none p-6 sm:p-10 lg:p-12 border border-slate-100 shadow-xl shadow-slate-200/50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* IMAGE COLUMN */}
        <div
          className={`lg:col-span-6 w-full ${
            isImageLeft ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Sharp Image Frame */}
          <div className="relative w-full aspect-[4/3] rounded-none overflow-hidden bg-slate-100 border border-slate-100 shadow-md">
            <Image
              src={facility.imageSrc}
              alt={facility.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* CONTENT COLUMN */}
        <div
          className={`lg:col-span-6 flex flex-col items-center lg:items-start ${
            isImageLeft ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          {/* Title */}
          <h2 className="font-figtree font-normal text-[22px] sm:text-[30px] leading-[1.15] text-[#222222] tracking-tight mb-5 text-center lg:text-left">
            {facility.title}
          </h2>

          {/* Paragraph 1 */}
          <p className="font-figtree font-normal text-[16px] sm:text-[17px] leading-[1.7] text-[#2b2359] mb-4 text-justify">
            {facility.descriptionParagraph1}
          </p>

          {/* Paragraph 2 */}
          <p className="font-figtree font-normal text-[17px] sm:text-[18px] leading-[1.7] text-[#555555]">
            {facility.descriptionParagraph2}
          </p>
        </div>

      </div>
    </motion.div>
  )
}