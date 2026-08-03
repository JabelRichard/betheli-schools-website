'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, Variants } from 'framer-motion'

interface AdmissionsOverviewProps {
  imageSrc?: string
}

export function AdmissionsOverview({
  imageSrc = '/images/Buidings-section1.jpg', // Replace with your admissions/staff photo
}: AdmissionsOverviewProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  }

  const paragraphs = [
    "Choosing the right school is one of the most important decisions a family can make. At Betheli Schools, we are committed to making the admissions process simple, welcoming, and informative. Our team is here to guide you every step of the way and answer any questions you may have.",
    "We welcome applications from families who value academic excellence, strong character, and a nurturing learning environment. Whether your child is joining our Preschool or Primary School, we strive to ensure a smooth and positive enrollment experience.",
    "We encourage parents and guardians to visit our campus, meet our dedicated staff, and discover what makes Betheli Schools a place where children learn, grow, and thrive."
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Left Column – Image (5 Cols) */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/4.5] rounded-sm overflow-hidden shadow-sm"
          >
            <Image
              src={imageSrc}
              alt="Betheli Schools Admissions Team"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Right Column – Description & Accent (7 Cols) */}
          <motion.div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Top Accent Line (matching your screenshot) */}
            <motion.div variants={itemVariants}>
              <div className="w-12 h-1 bg-secondary rounded-full hidden sm:block" />
            </motion.div>

            {/* Content Paragraphs */}
            <motion.div
              variants={containerVariants}
              className="space-y-6 text-dark/80 font-figtree font-normal text-base md:text-[17px] leading-relaxed text-justify"
            >
              {paragraphs.map((text, idx) => (
                <motion.p key={idx} variants={itemVariants}>
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}