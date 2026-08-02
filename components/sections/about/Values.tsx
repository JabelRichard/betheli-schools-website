'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const valuesData = [
  {
    id: 'faith',
    title: 'Faith',
    description:
      'We nurture students to grow in faith, integrity, and compassion, building a strong foundation for life.',
    image: '/images/why-faith.jpeg',
    // Uses Brand Base Purple/Indigo with multiply blend
    overlayBg: 'bg-[#4216ab]/80',
    accentLine: 'bg-[#f7f149]',
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description:
      'We are committed to providing quality education that inspires every student to achieve their very best.',
    image: '/images/build-Section1.jpg',
    // Uses Primary Brand Cyan/Blue with multiply blend
    overlayBg: 'bg-[#18a8e5]/80',
    accentLine: 'bg-[#18a8e5]',
  },
  {
    id: 'respect',
    title: 'Respect',
    description:
      'We foster a caring community where everyone is treated with kindness, dignity, and respect.',
    image: '/images/thefuture-leader.webp',
    // Warm tone tint for variety & contrast
    overlayBg: 'bg-amber-600/80',
    accentLine: 'bg-amber-500',
  },
]

export function Values() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-0 pb-16 sm:pb-24 lg:pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center md:text-left">
          <h2 className="font-figtree font-medium text-[35px] leading-[42px] text-[#222222] tracking-tight">
            Our <span className="text-[#18a8e5]">values</span>
          </h2>
          {/* Top Decorative Line matching reference photo */}
          <div className=" hidden md:block w-[70px] h-[4px] bg-[#18a8e5] rounded-full mt-4" />
        </div>

        {/* 3-Column Values Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {valuesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="group relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Image with Hover Scale */}
              <div className="absolute inset-0 z-0 bg-slate-200">
                <Image
                  src={item.image}
                  alt={`Betheli Schools value - ${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Color Tint Overlay matching the image blend pattern */}
              <div
                className={`absolute inset-0 z-10 ${item.overlayBg} mix-blend-multiply group-hover:opacity-80 transition-opacity duration-300`}
              />

              {/* Soft Gradient Overlay for text contrast */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Card Content - Anchored at Bottom */}
              <div className="relative z-20 h-full w-full p-8 flex flex-col justify-end text-left text-white">
                <h3 className="font-figtree font-normal text-3xl sm:text-4xl tracking-tight text-white group-hover:-translate-y-2 transition-transform duration-300">
                  {item.title}
                </h3>

                {/* Value Description (Reveals smoothly on hover & readable on mobile) */}
                <p className="font-figtree font-normal text-sm sm:text-base text-white/90 leading-relaxed mt-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300 j">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}