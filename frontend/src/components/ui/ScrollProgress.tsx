'use client'
// src/components/ui/ScrollProgress.tsx
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const { progress } = useScrollProgress()
  return (
    <div className="scroll-progress-bar" style={{ width: `${progress}%` }}
      role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} />
  )
}
