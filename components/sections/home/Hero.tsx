'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform, useInView, Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const slides = [
  {
    id: 1,
    title: 'Welcome to Betheli Schools',
    subtitle: 'Shaping Young Minds for a Better Tomorrow',
    image: '/images/_MG_0931 - Copy.webp',
    ctaText: 'Who We Are',
    ctaLink: '/about'
  },
  {
    id: 2,
    title: 'A Friendly and Welcoming Learning Environment',
    subtitle: 'Where Every Child Feels Welcome, Valued, and Inspired',
    image: '/images/NY8A0809.webp',
    ctaText: 'View Gallery',
    ctaLink: '/gallery'
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Navigation handlers with delay resume
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Animation variants
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  }

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-black select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={currentSlide}>
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              custom={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full overflow-hidden"
            >
              {/* Image & Background Wrapper */}
              <div className="relative w-full h-full">
                
                {/* 1. KEN BURNS SLOW-ZOOM EFFECT */}
                <motion.div 
                  className="relative w-full h-full"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.08 }}
                  transition={{ duration: 7, ease: "linear" }}
                >
                  {/* 2. CENTERED OBJECT FRAMING (object-cover object-center) */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority
                    className="object-cover object-center"
                    quality={95}
                  />
                </motion.div>
                
                {/* 3. THREE-LAYER OVERLAY SYSTEM */}
                {/* Layer A: Base Dark Tint */}
                <div className="absolute inset-0 bg-black/40 z-0" />
                
                {/* Layer B: Vertical Gradient for Header & Footer Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-0" />

                {/* Layer C: Subtle Radial Vignette to Direct Focus to Center */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] z-0" />
              </div>

              {/* Centered Content Container */}
              <div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 md:p-12">
                <div className="container-custom flex justify-center">
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl text-center flex flex-col items-center"
                  >
                    <motion.h1 
                      variants={itemVariants}
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 leading-tight drop-shadow-md"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      variants={itemVariants}
                      className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl drop-shadow"
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.div variants={itemVariants}>
                      <Link href={slide.ctaLink} passHref>
                        <Button 
                          variant="primary" 
                          size="lg"
                          className="text-base px-10 py-4 shadow-lg hover:shadow-xl transition-all"
                        >
                          {slide.ctaText}
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

     

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
                   w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm 
                   transition-all duration-300 flex items-center justify-center group hidden md:block"
        aria-label="Previous slide"
      >
        <svg 
          className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
                   w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm 
                   transition-all duration-300 flex items-center justify-center group hidden md:block"
        aria-label="Next slide"
      >
        <svg 
          className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}