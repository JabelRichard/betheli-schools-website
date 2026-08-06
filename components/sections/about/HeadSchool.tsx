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
  hidden: { x: -60, opacity: 0 },
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

export function HeadSchool() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

const paragraphs = [
  "Dear Parents, Guardians, and Visitors,",

  "It is my pleasure to welcome you to Betheli Pre & Primary School. Thank you for visiting our website and taking the time to learn about our school. At Betheli, we are committed to providing a safe, caring, and inspiring environment where every child can learn, grow, and succeed.",

  "We believe that every child has unique potential. Through quality English Medium education, dedicated teachers, and strong moral values, we help our pupils develop academically, socially, and personally while preparing them for the future.",

  "We also believe that a child's success is built on a strong partnership between the school and families. Together, we create a supportive community where children are encouraged to be confident, responsible, and lifelong learners.",

  'Guided by our motto, "A Bright Tomorrow Begins Here," we are dedicated to helping every child build a strong foundation for a successful future.',

  "On behalf of our Board, management, teachers, and staff, I warmly invite you to become part of the Betheli family. We look forward to welcoming you to our school.",

  "Yours faithfully,",
  "Jacob Isack Mkumbo",
  "Head Teacher"
];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center"
        >
          {/* Left Column – Head of School's Portrait */}
          <motion.div
            variants={imageVariants}
            className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-full order-2 lg:order-1"
          >
            <div className="relative w-full h-full rounded-0xl overflow-hidden shadow-2xl shadow-slate-200/60">
              <Image
                src="/images/headofschool.webp"
                alt="Head of School - Betheli Schools"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Optional subtle border accent */}
              <div className="absolute inset-0 rounded-0xl ring-1 ring-white/20 ring-inset pointer-events-none" />
            </div>
            {/* Decorative accent element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Right Column – Content */}
          <motion.div
            variants={textVariants}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Section Title */}
            <div>
              <h2
                className="font-figtree font-bold text-[35px] leading-[42px] text-[rgb(34,34,34)] text-center md:text-left"
                style={{ fontWeight: 700 }}
              >
                Message from the{' '}
                <span className="text-primary">Head of School</span>
              </h2>
              <div className="hidden md:blockw-12 h-1 bg-primary rounded-full mt-3" />
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
                  className={index === 0 ? 'font-medium text-dark' : ''}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              variants={textVariants}
              className="pt-4 border-t border-gray-100 mt-6"
            >
              <p className="font-figtree font-semibold text-xl text-dark">
                Head of School
              </p>
              <p className="font-figtree font-medium text-primary text-lg">
                Betheli Schools
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}