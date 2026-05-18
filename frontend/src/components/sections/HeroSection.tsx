'use client'
// src/components/sections/HeroSection.tsx
import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const ElevatorScene = dynamic(
  () => import('@/components/three/ElevatorScene').then((m) => m.ElevatorScene),
  { ssr: false, loading: () => null }
)

function Particles() {
  useEffect(() => {
    const container = document.getElementById('hero-particles')
    if (!container) return
    container.innerHTML = ''
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const left = Math.random() * 100
      const dur = 8 + Math.random() * 12
      const delay = Math.random() * 8
      const drift = (Math.random() - 0.5) * 100
      const size = Math.random() > 0.7 ? 3 : 2
      p.style.cssText = `left:${left}%;bottom:-10px;animation-duration:${dur}s;animation-delay:-${delay}s;--drift:${drift}px;width:${size}px;height:${size}px;`
      container.appendChild(p)
    }
  }, [])
  return <div id="hero-particles" className="absolute inset-0 overflow-hidden pointer-events-none" />
}

function FloorDisplay() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const floors = ['G','1','2','3','4','5','6','7','8','9','10','11','12']
    let i = 0
    const t = setInterval(() => {
      i = (i + 1) % floors.length
      if (ref.current) ref.current.textContent = floors[i]
    }, 480)
    return () => clearInterval(t)
  }, [])
  return (
    <div ref={ref} className="font-ui text-xl font-black text-blue-glow tracking-[0.05em]"
      style={{ textShadow: '0 0 12px rgba(59,130,246,0.7)' }}>G</div>
  )
}

const fade = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] } }),
}

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return
    gsap.fromTo(titleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power4.out' })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[120px] pb-20 px-6">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg grid-anim pointer-events-none"
        style={{ maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }} />
      {/* Glow */}
      <div className="glow-pulse pointer-events-none" />
      <Particles />
      {/* 3D Scene */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <ElevatorScene />
      </div>

      {/* Elevator shaft visual */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[200px] h-[280px] md:w-[260px] md:h-[360px] mb-12" style={{ zIndex: 2 }}>
        {/* Shaft */}
        <div className="absolute inset-0 border border-blue-glow/30 bg-gradient-to-b from-blue/5 to-blue/10">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-glow to-transparent"
            style={{ animation: 'scanDown 3s ease-in-out infinite' }} />
        </div>
        {/* Floor markers */}
        <div className="absolute right-0 top-0 bottom-0 hidden md:flex flex-col justify-between py-3 pr-2">
          {['12','8','4','G'].map(f => (
            <div key={f} className="flex items-center gap-1">
              <div className="w-2 h-px bg-silver/20" />
              <span className="font-ui text-[9px] text-silver/40">{f}</span>
            </div>
          ))}
        </div>
        {/* Panel */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-1.5 p-2.5 bg-graphite-2/80 backdrop-blur-xl border border-blue/20">
          {['12','8','5','3','G'].map((f, i) => (
            <div key={f} className={`w-6 h-6 border flex items-center justify-center font-ui text-[8px] font-bold
              ${i === 0 ? 'bg-blue border-blue-glow text-white' : 'border-blue/30 text-silver'}`}>{f}</div>
          ))}
        </div>
        {/* Car */}
        <div className="absolute left-3 right-3 h-[76px] elevator-car-anim
          bg-gradient-to-br from-graphite-3 to-[#12121a] border border-blue-glow/50
          shadow-[0_0_20px_rgba(37,99,235,0.2)] flex flex-col items-center justify-center gap-1.5">
          <FloorDisplay />
          <span className="font-ui text-[9px] tracking-[0.2em] uppercase text-silver">FLOOR</span>
        </div>
      </motion.div>

      {/* Text */}
      <motion.p custom={0} variants={fade} initial="hidden" animate="show"
        className="eyebrow justify-center mb-6" style={{ zIndex: 2 }}>
        Est. 2008 · Premium Vertical Transport
      </motion.p>

      <h1 ref={titleRef} className="display-xl text-brand-white mb-4" style={{ zIndex: 2, opacity: 0 }}>
     Step Forward <br />
        <span className="text-outlined" style={{ fontStyle: 'normal' }}>Smoothly,</span>
        <br /> Safely
      </h1>

      {/* <motion.p custom={2} variants={fade} initial="hidden" animate="show"
        className="font-display text-[clamp(20px,4vw,44px)] font-light italic text-gold mb-8" style={{ zIndex: 2 }}>
        Elevating Tomorrow
      </motion.p> */}

      <motion.p custom={3} variants={fade} initial="hidden" animate="show"
        className="text-silver text-[15px] font-light leading-[1.9] max-w-[520px] mx-auto mb-12" style={{ zIndex: 2 }}>
       Premium, secure, and innovative
vertical mobility solutions across Bhopal and
Madhya Pradesh. Engineering absolute reliability
for residential, commercial, and industrial
landmarks.
      </motion.p>

      <motion.div custom={4} variants={fade} initial="hidden" animate="show"
        className="flex items-center gap-4 justify-center flex-wrap" style={{ zIndex: 2 }}>
        <Link href="/contact" className="btn-primary">Request a Quote</Link>
        <Link href="/projects" className="btn-ghost">View Projects</Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div custom={5} variants={fade} initial="hidden" animate="show"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 2 }}>
        <div className="scroll-line" style={{ animation: 'scrollPulse 2s ease-in-out infinite' }} />
        <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-silver" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  )
}
