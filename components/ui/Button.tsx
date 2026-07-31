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

  const sizeClasses = {
    sm: 'px-8 py-2 text-sm',
    md: 'px-[50px] py-[11px] text-[14px]',
    lg: 'px-16 py-4 text-base',
  }

  return (
    <button
      className={cn(
        `btn btn-${variant}`,
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}