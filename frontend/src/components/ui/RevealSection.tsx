'use client'
// src/components/ui/RevealSection.tsx
import { useEffect, useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
  threshold?: number
}

export function Reveal({ children, className, delay = 0, direction = 'up', threshold = 0.08 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  const base = direction === 'up' ? 'reveal' : direction === 'left' ? 'reveal-left' : 'reveal-right'
  return (
    <div ref={ref} className={cn(base, className)}>
      {children}
    </div>
  )
}
