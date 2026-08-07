'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link' // Fixed import source
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const imageVariants: Variants = {
  hidden: { x: 50, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0],
      delay: 0.2
    }
  }
}

export function WelcomeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#18a8e5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="space-y-6">
            {/* Title */}
            <motion.h2 
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="font-bold text-[35px] leading-[42px] text-[#2b2359] text-center md:text-left"
            >
              We Inspire, Challenge, and Support Every Student
            </motion.h2>

            {/* Decorative line */}
            <div className="hidden md:block w-12 h-1 bg-[#18a8e5] rounded-none" />

            {/* Description Paragraphs */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              <p className="text-[17px] leading-[26px] text-[#222222] text-justify font-normal">
                At Betheli Schools, we believe every child has unique potential. We provide a supportive learning environment where students are encouraged to explore, think creatively, develop strong values, and achieve academic excellence.
              </p>

              <p className="text-[17px] leading-[26px] text-[#222222] text-justify font-normal">
                Through quality teaching, character development, and faith-based values, we prepare our students with the knowledge, confidence, and skills they need to succeed in a changing world.
              </p>

              <p className="text-[17px] leading-[26px] text-[#222222] text-justify font-normal">
                Our goal is to nurture responsible, confident, and compassionate leaders who can make a positive impact in their communities and beyond.
              </p>
            </motion.div>

            {/* Functional Link Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2"
            >
              <Link href="/about" className="inline-block cursor-pointer">
                <Button variant="primary" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ y: imageY }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-none overflow-hidden shadow-xl">
              <Image
                src="/images/stduentswithteach1.webp"
                alt="Betheli Schools - Inspiring Students"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b2359]/20 to-transparent" />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              style={{ y: imageY }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#18a8e5]/10 rounded-full blur-2xl"
            />
            <motion.div
              style={{ y: imageY, opacity: opacity }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-[#2b2359]/10 rounded-full blur-2xl"
            />

            {/* Stats floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-none shadow-lg p-4 border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#18a8e5]/10 rounded-none flex items-center justify-center">
                  <span className="text-[#18a8e5] text-lg">⭐</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2b2359]">Excellence</p>
                  <p className="text-xs text-slate-500">Since 2020</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}