'use client'
// src/components/sections/TechnologySection.tsx
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Reveal } from '@/components/ui/RevealSection'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const specs = [
  { name: 'Maximum Speed', value: '1.5 m/s', pct: 90 },
  { name: 'Load Capacity', value: 'Up to 1,500 kg', pct: 85 },
  { name: 'Travel Height', value: 'Up to 30 m/s', pct: 95 },
  { name: 'Energy Efficiency', value: 'Up to class', pct: 92 },
  { name: 'Noise Level', value: '< 70 dB(A)', pct: 80 },
  // { name: 'IoT Monitoring', value: 'Real-time Diagnostics', pct: 100 },
]

export function TechnologySection() {
  const barsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const ctx = gsap.context(() => {
      barsRef.current.forEach((bar, i) => {
        if (!bar) return
        const pct = bar.dataset.pct ?? '0'
        gsap.fromTo(bar,
          { width: '0%' },
          {
            width: pct + '%',
            duration: 1.6,
            ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: bar, start: 'top 88%', once: true },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-graphite overflow-hidden">
      <div className="section-container">
        <Reveal><p className="eyebrow mb-4">Innovation</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-lg text-brand-white mb-4">
            Frontier<br /><em className="italic-gold">Technology</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16 items-center">
          {/* Spec bars */}
          <Reveal className="flex flex-col gap-6">
            {specs.map((s, i) => (
              <div key={s.name} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-ui text-[11px] font-semibold tracking-[0.15em] uppercase text-silver">{s.name}</span>
                  <span className="font-display text-[14px] italic text-blue-glow">{s.value}</span>
                </div>
                <div className="h-0.5 bg-graphite-3 relative overflow-hidden">
                  <div ref={el => { barsRef.current[i] = el }}
                    data-pct={s.pct}
                    className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-blue to-blue-glow"
                    style={{ width: '0%' }} />
                </div>
              </div>
            ))}
            <div className="mt-4">
              <Link href="/technology" className="btn-ghost">Explore Technology →</Link>
            </div>
          </Reveal>

          {/* Ring visual */}
          <Reveal delay={0.2} className="relative flex items-center justify-center h-[400px]">
            <div className="absolute w-[300px] h-[300px] border border-blue/15 rounded-full ring-1 left-1/2 top-1/2" />
            <div className="absolute w-[220px] h-[220px] border border-dashed border-blue/15 rounded-full ring-2 left-1/2 top-1/2" />
            <div className="absolute w-[140px] h-[140px] border border-blue/20 rounded-full ring-3 left-1/2 top-1/2" />
            <div className="relative z-10 w-20 h-20 rounded-full bg-blue flex items-center justify-center text-3xl core-pulse">⚡</div>
            <div className="absolute top-10 right-8 bg-graphite-2 border border-white/7 px-3.5 py-2.5 float-card">
              <div className="font-ui text-[9px] tracking-[0.15em] uppercase text-blue-glow mb-1">VVVF Drive</div>
              <div className="font-display text-lg font-light text-brand-white">Active</div>
            </div>
            {/* <div className="absolute bottom-14 left-8 bg-graphite-2 border border-white/7 px-3.5 py-2.5 float-card-delay">
              <div className="font-ui text-[9px] tracking-[0.15em] uppercase text-blue-glow mb-1">Vibration</div>
              <div className="font-display text-lg font-light text-brand-white">0.02g</div>
            </div> */}
            <div className="absolute bottom-6 right-10 bg-graphite-2 border border-white/7 px-3.5 py-2.5 float-card" style={{ animationDelay: '2s' }}>
              <div className="font-ui text-[9px] tracking-[0.15em] uppercase text-blue-glow mb-1">Noise</div>
              <div className="font-display text-lg font-light text-brand-white">&lt;70 dB</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
