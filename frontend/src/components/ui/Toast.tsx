'use client'
// src/components/ui/Toast.tsx
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { hideToast } from '@/store/slices/uiSlice'
import { cn } from '@/lib/utils'

export function Toast() {
  const dispatch = useAppDispatch()
  const { toastVisible, toastMessage } = useAppSelector(s => s.ui)

  useEffect(() => {
    if (toastVisible) {
      const t = setTimeout(() => dispatch(hideToast()), 4000)
      return () => clearTimeout(t)
    }
  }, [toastVisible, dispatch])

  return (
    <div className={cn('toast-container bg-graphite-2 border border-blue-glow/30 border-l-[3px] border-l-blue-glow px-6 py-4 flex items-center gap-3 backdrop-blur-xl', toastVisible && 'show')} role="alert">
      <span className="text-blue-glow text-lg">✓</span>
      <span className="font-ui text-[13px] font-medium text-brand-white">{toastMessage}</span>
    </div>
  )
}
