'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
}

const imageVariants: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
}

const textVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
}

const paragraphVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  })
}

export function OurStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const paragraphs = [
    "Betheli is registered English medium  school under the education ACT, cap 353 with Registration No EM 20422 with a simple but meaningful vision: to promote intergrity, academic, excellence and nurture future productive citizens who positively coutribute to society",
    "Since our beginning, we have remained committed to nurturing young minds through academic excellence, spritually, socially, emotionally and physically. We believe that every child is unique and deserves the opportunity to grow with confidence, curiosity, and compassion.",
    "Our dedicated teachers and staff work closely with families to create a community where students feel safe, respected, and inspired to achieve their best. Every day, we strive to shape not only successful learners but also responsible individuals who will make a positive difference in their communities.",
    "As we continue to grow, our mission remains the same to inspire a lifelong love of learning while preparing every child for a bright and meaningful future."
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center"
        >
          {/* Left Column – Text Content (order 1 on mobile, order 1 on desktop) */}
          <motion.div
            variants={textVariants}
            className="order-1 lg:order-1 space-y-6"
          >
            {/* Section Title */}
            <div>
              <h2
                className="font-figtree font-medium text-[35px] leading-[42px] text-[rgb(34,34,34)] text-center md:text-left"
                style={{ fontWeight: 700 }}
              >
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="hidden md:block w-12 h-1 bg-primary rounded-full mt-3" />
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-[rgb(85,85,85)] font-figtree font-normal text-base md:text-lg leading-relaxed text-justify">
              {paragraphs.map((text, index) => (
                <motion.p
                  key={index}
                  custom={index}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Optional: Years of excellence badge */}
            <motion.div
              variants={textVariants}
              className="pt-4 flex items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">3+</span>
                <span className="text-sm text-gray-500">Years of Excellence</span>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">200+</span>
                <span className="text-sm text-gray-500">Students</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column – Image (order 2 on mobile, order 2 on desktop) */}
          <motion.div
            variants={imageVariants}
            className="order-2 lg:order-2 relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-full"
          >
            <div className="relative w-full h-full rounded-0xl overflow-hidden shadow-2xl shadow-slate-200/60">
              <Image
                src="/images/Buidings-section2.webp"
                alt="Betheli Schools - Our Story"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Optional subtle border accent */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 ring-inset pointer-events-none" />
            </div>
            {/* Decorative accent elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}