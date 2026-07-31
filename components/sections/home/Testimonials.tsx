'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useInView, Variants } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Betheli Schools has provided my child with an excellent education in a caring and supportive environment. The teachers truly invest in every student's growth and development.",
    name: 'Parent',
    role: ''
  },
  {
    id: 2,
    text: "The school's focus on character development and faith-based values has shaped my daughter into a confident and compassionate young leader. We are grateful for the holistic education she receives.",
    name: 'Parent',
    role: ''
  },
  {
    id: 3,
    text: "As a former student, I can confidently say that Betheli Schools prepared me for university and life beyond. The academic rigour and supportive community made all the difference.",
    name: 'Parent',
    role: ''
  },
  {
    id: 4,
    text: "My son has flourished since joining Betheli. The teachers go above and beyond to ensure every child feels valued and inspired. It's truly a second home for our family.",
    name: 'Parent',
    role: ''
  }
]

const titleVariants: Variants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(4px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
}

const textVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // Parallax effect for background image
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/_MG_0931-Copy.webp')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
        
        {/* Section Header: Centered on mobile, Right-aligned on desktop */}
        <motion.div
          variants={titleVariants} 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center sm:text-left sm:mx-0 max-w-2xl mb-12 md:mb-16"
        >
          

          <h2
            className="font-normal text-[35px] leading-[42px] text-white mb-3"
            style={{ fontWeight: 400 }}
          >
            Voices from Our <span className="text-[#18a8e5]">Community</span>
          </h2>

          {/* Decorative bar: centered on mobile, right-aligned on desktop */}
          <div className="w-12 h-1 bg-[#18a8e5] rounded-full mx-auto sm:mx-0 mb-4 hidden sm:block" />

         
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="w-full max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative flex flex-col items-center"
            >
              {/* Top-left quotation mark (White icon) */}
              <div className="self-start text-white/40 mb-2 ml-2 md:ml-0">
                <Quote size={48} strokeWidth={1.2} />
              </div>

              {/* Testimonial Text: Figtree Font, Size 35px, Weight 400 */}
              <p
                className="text-white text-center font-figtree font-normal text-[24px] sm:text-[35px] leading-[34px] sm:leading-[45px] max-w-[850px] mx-auto px-4"
                style={{ 
                  fontFamily: 'var(--font-figtree), Figtree, sans-serif',
                  fontWeight: 400 
                }}
              >
                {currentTestimonial.text}
              </p>

              {/* Bottom-right quotation mark (White icon) */}
              <div className="self-end text-white/40 mt-2 mr-2 md:mr-0">
                <Quote size={48} strokeWidth={1.2} className="rotate-180" />
              </div>

              {/* Name and Role */}
              <div className="mt-6 text-center">
                <p className="text-white font-semibold text-xl tracking-wide">
                  {currentTestimonial.name}
                </p>
                <p className="text-white/70 text-sm font-medium mt-0.5">
                  {currentTestimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative w-3 h-3 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/50"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <span
                className={`
                  absolute inset-0 rounded-full transition-all duration-500
                  ${currentIndex === index ? 'bg-[#18a8e5] w-full' : 'w-0'}
                `}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}