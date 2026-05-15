'use client'
// src/components/sections/ProcessSection.tsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Reveal } from '@/components/ui/RevealSection'
import { PROCESS_STEPS } from '@/lib/data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function ProcessSection() {
  const lineRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleX: 0 }, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: lineRef.current, start: 'top 80%', end: 'top 40%', scrub: 1 },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-36 bg-graphite">
      <div className="section-container">
        <Reveal><p className="eyebrow mb-4">How It Works</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-lg text-brand-white">Our <em className="italic-gold">Process</em></h2>
        </Reveal>

        {/* Desktop */}
        <div className="hidden md:block mt-20 relative">
          <div className="absolute top-8 left-[10%] right-[10%] h-px bg-white/7">
            <div ref={lineRef} className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-glow to-transparent origin-left" />
          </div>
          <div className="grid grid-cols-5 gap-0">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1} className="flex flex-col items-center text-center px-4">
                <div className="w-16 h-16 border border-white/12 bg-graphite flex items-center justify-center
                  font-display text-xl font-light text-blue-glow mb-6 z-10
                  hover:border-blue-glow hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:bg-blue-dim
                  transition-all duration-300 cursor-none">
                  {step.number}
                </div>
                <h3 className="font-ui text-[12px] font-bold tracking-[0.1em] uppercase text-brand-white mb-2">{step.title}</h3>
                <p className="text-silver text-[12px] font-light leading-[1.75]">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden mt-12 flex flex-col gap-0 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-glow via-blue/30 to-transparent" />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="flex gap-6 pl-4 pb-10">
              <div className="w-9 h-9 border border-blue/30 bg-graphite flex items-center justify-center
                font-ui text-[11px] font-bold text-blue-glow flex-shrink-0 z-10">
                {step.number}
              </div>
              <div className="pt-1">
                <h3 className="font-ui text-[13px] font-bold tracking-[0.1em] uppercase text-brand-white mb-1">{step.title}</h3>
                <p className="text-silver text-[13px] font-light leading-[1.75]">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
