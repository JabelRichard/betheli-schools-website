'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform, useInView, Variants } from 'framer-motion'
import { useActivePath } from '@/hooks/useActivePath'
import { navigation } from '@/data/navigation'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isActive } = useActivePath()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Animation variants (Your original variants preserved)
  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const navItemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  const mobileMenuVariants: Variants= {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const mobileItemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`
        fixed top-0 left-0 right-0 z-[999] 
        py-5 px-10 
        transform-gpu translate-z-0
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/" className="flex items-center gap-2 relative z-[1001]">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/LOGO.jpg"
                alt="Betheli Schools Logo"
                width={60}
                height={60}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
            </motion.div>
            
            <motion.span 
              className="text-xl font-bold text-dark hidden sm:block"
              whileHover={{ 
                color: '#18a8e5',
                transition: { duration: 0.3 }
              }}
            >
              Betheli Schools
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navigation.map((item, index) => {
            if (item.label === 'Contact') return null
            const active = isActive(item.href)
            return (
              <motion.li 
                key={item.href}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={item.href}
                  className={`
                    transition-colors duration-300 font-medium relative
                    ${active ? 'text-primary' : 'text-dark hover:text-primary'}
                  `}
                >
                  {item.label}
                </Link>
              </motion.li>
            )
          })}
        </ul>

        {/* Contact Button with animation */}
        <motion.div 
          className="hidden lg:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link 
            href="/contact"
            className="btn btn-primary relative overflow-hidden group"
          >
            <span className="relative z-10">Contact</span>
            <motion.span 
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.4 }}
            />
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[1001]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`
            w-6 h-0.5 bg-dark transition-all duration-300
            ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
          `}></span>
          <span className={`
            w-6 h-0.5 bg-dark transition-all duration-300
            ${isMobileMenuOpen ? 'opacity-0' : ''}
          `}></span>
          <span className={`
            w-6 h-0.5 bg-dark transition-all duration-300
            ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
          `}></span>
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={`
              lg:hidden fixed inset-0 h-[100dvh] w-full 
              bg-white z-[1000] pt-24
              overflow-y-auto
            `}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="h-full p-6">
              <ul className="flex flex-col gap-4">
                {navigation.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <motion.li 
                      key={item.href}
                      variants={mobileItemVariants}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href={item.href}
                        className={`
                          block py-3 text-lg transition-colors duration-300 font-medium
                          ${active ? 'text-primary' : 'text-dark hover:text-primary'}
                        `}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}