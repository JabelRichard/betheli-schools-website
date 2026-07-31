'use client'

import { useRef } from 'react'
import Image from 'next/image'
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >

            {/* Title */}
            <h2 
              className="font-normal text-[35px] leading-[42px] text-[rgb(34,34,34)]"
              style={{ fontWeight: 400 }}
            >
              We Inspire, Challenge, and Support Every Student
            </h2>

            {/* Decorative line */}
            <div className="w-12 h-1 bg-primary rounded-full" />

            {/* Description */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              <p 
                className="text-[17px] leading-[26px] text-[rgb(34,34,34)] text-justify"
                style={{ fontWeight: 400 }}
              >
                At Betheli Schools, we believe every child has unique potential. We provide a supportive learning environment where students are encouraged to explore, think creatively, develop strong values, and achieve academic excellence.
              </p>

              <p 
                className="text-[17px] leading-[26px] text-[rgb(34,34,34)]text-justify"
                style={{ fontWeight: 400 }}
              >
                Through quality teaching, character development, and faith-based values, we prepare our students with the knowledge, confidence, and skills they need to succeed in a changing world.
              </p>

              <p 
                className="text-[17px] leading-[26px] text-[rgb(34,34,34)]text-justify"
                style={{ fontWeight: 400 }}
              >
                Our goal is to nurture responsible, confident, and compassionate leaders who can make a positive impact in their communities and beyond.
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2"
            >
              <Button variant="primary" size="lg">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ y: imageY }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-0xl overflow-hidden shadow-0xl">
              <Image
                src="/images/why-quality.jpeg"
                alt="Betheli Schools - Inspiring Students"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              style={{ y: imageY }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
            />
            <motion.div
              style={{ y: imageY, opacity: opacity }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
            />

            {/* Stats floating badge (optional) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg">⭐</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">Excellence</p>
                  <p className="text-xs text-gray-500">Since 2020</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}