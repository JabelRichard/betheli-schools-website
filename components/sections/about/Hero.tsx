'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  '/images/_MG_1017.webp',
  '/images/IMG_0636.webp',
  '/images/IMG_0467.webp'
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#18a8e5]">
      {/* Background Images - Smooth opacity crossfade */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <motion.div
            key={src}
            initial={false}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt="Betheli Schools - About Us"
              fill
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Brand Color Blue (#18a8e5) Overlay with Multiply Blend */}
      <div className="absolute inset-0 z-10 bg-[#18a8e5]/75 mix-blend-multiply" />
      
      {/* Soft Top-to-Bottom Gradient Overlay for Depth & Contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#18a8e5]/40 via-transparent to-[#18a8e5]/60" />

      {/* Content Container - Flush Top */}
      <div className="relative z-20 w-full min-h-screen flex items-start justify-start px-6 sm:px-12 lg:px-20 pt-0">
        <div className="w-full text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-figtree font-semibold text-[80px] sm:text-[120px] md:text-[162px] leading-none text-white tracking-tight pt-0 mt-0"
            style={{ fontWeight: 600 }}
          >
            About us
          </motion.h1>
        </div>
      </div>
    </section>
  )
}