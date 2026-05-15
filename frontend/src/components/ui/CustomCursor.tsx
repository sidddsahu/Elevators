'use client'
// src/components/ui/CustomCursor.tsx
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ cx: 0, cy: 0, rx: 0, ry: 0 })
  const raf = useRef<number>()

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const onMove = (e: MouseEvent) => {
      pos.current.cx = e.clientX
      pos.current.cy = e.clientY
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const animate = () => {
      pos.current.rx += (pos.current.cx - pos.current.rx) * 0.12
      pos.current.ry += (pos.current.cy - pos.current.ry) * 0.12
      ring.style.left = pos.current.rx + 'px'
      ring.style.top = pos.current.ry + 'px'
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    document.addEventListener('mousemove', onMove)

    const attach = () => {
      document.querySelectorAll<HTMLElement>('a,button,[data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'))
      })
    }
    attach()
    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf.current!)
      document.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
