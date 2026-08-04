import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react'

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
  style,
  ...props
}: ButtonProps) {

  const variantClasses = {
    primary: 'bg-[#18a8e5] text-white font-semibold hover:bg-white hover:text-[#2b2359] border-2 border-[#18a8e5]',
    secondary: 'bg-[#2b2359] text-white font-semibold hover:bg-white hover:text-[#2b2359] border-2 border-[#2b2359]',
    outline: 'border-2 border-[#2b2359] text-[#2b2359] font-semibold hover:bg-[#2b2359] hover:text-white',
    white: 'bg-white text-[#2b2359] font-semibold hover:bg-[#18a8e5] hover:text-white border-2 border-white',
  }

  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'py-[var(--button-padding-y,11px)] px-[var(--button-padding-x,50px)] text-[var(--button-font-size,16px)]',
    lg: 'px-12 py-4 text-lg',
  }

  return (
    <button
      className={cn(
        // Added cursor-pointer to force the hand cursor on hover
        'inline-flex items-center justify-center cursor-pointer transition-all duration-300 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#18a8e5] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed active:scale-[0.98]',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      style={{
        ...({
          '--button-padding-y': '11px',
          '--button-padding-x': '50px',
          '--button-font-size': '16px',
        } as CSSProperties),
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  )
}