'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const slides = [
  {
    id: 1,
    title: 'Welcome to Betheli Schools',
    subtitle: 'A Bright Tomorrow Begins Here',
    image: '/images/_MG_0931-Copy.webp',
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

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length)
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length)

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
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
    })
  }

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
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
              <div className="relative w-full h-full">
                <motion.div 
                  className="relative w-full h-full"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.08 }}
                  transition={{ duration: 7, ease: "linear" }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)] z-0" />
              </div>

              {/* Centered Content */}
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
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 leading-tight drop-shadow-md"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      variants={itemVariants}
                      className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl font-medium drop-shadow"
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.div variants={itemVariants}>
                      <Link href={slide.ctaLink} passHref className="inline-block cursor-pointer">
                        <Button variant="primary" size="lg">
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

      {/* Modern Side Navigators */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
                   w-12 h-12 rounded-none bg-[#2b2359]/70 hover:bg-[#18a8e5] text-white border border-white/20
                   transition-all duration-300 flex items-center justify-center group hidden md:flex"
        aria-label="Previous slide"
      >
        <svg 
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
                   w-12 h-12 rounded-none bg-[#2b2359]/70 hover:bg-[#18a8e5] text-white border border-white/20
                   transition-all duration-300 flex items-center justify-center group hidden md:flex"
        aria-label="Next slide"
      >
        <svg 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

     
    </section>
  )
}