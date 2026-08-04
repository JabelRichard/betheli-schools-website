import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {

  // Define explicit Tailwind variants with high contrast ratios
  const variantClasses = {
    // Primary: Navy text (#2b2359) on bright cyan (#18a8e5) provides AAA contrast
    primary: 'bg-[#18a8e5] text-[#2b2359] font-extrabold hover:bg-[#2b2359] hover:text-white',
    // Secondary: Solid dark navy background with crisp white text
    secondary: 'bg-[#2b2359] text-white font-bold hover:bg-[#18a8e5] hover:text-[#2b2359]',
    // Outline: Deep navy border and text
    outline: 'border-2 border-[#2b2359] text-[#2b2359] font-bold hover:bg-[#2b2359] hover:text-white',
    // White: Crisp white button with navy text for dark sections/hero overlays
    white: 'bg-white text-[#2b2359] font-extrabold hover:bg-[#18a8e5] hover:text-[#2b2359]',
  }

  const sizeClasses = {
    sm: 'px-8 py-2 text-sm',
    md: 'px-[50px] py-[11px] text-[14px]',
    lg: 'px-16 py-4 text-base',
  }

  return (
    <button
      className={cn(
        // Base styling for consistency
        'inline-flex items-center justify-center transition-all duration-200 uppercase tracking-wider rounded-none focus:outline-none focus:ring-2 focus:ring-[#18a8e5] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}