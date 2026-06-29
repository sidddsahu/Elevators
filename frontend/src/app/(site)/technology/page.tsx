// src/app/technology/page.tsx
import type { Metadata } from 'next'
import { Reveal } from '@/components/ui/RevealSection'
import { TECH_FEATURES } from '@/lib/data'
import { TechnologySection } from '@/components/sections/TechnologySection'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Technology',
  description: 'Explore Onward Elevators\' frontier technology — VVVF drives, AI predictive maintenance, regenerative braking, and IoT smart monitoring.',
}

export default function TechnologyPage() {
  return (
    <>
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Innovation</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6">Frontier<br /><em className="italic-gold">Technology</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[560px]">
              We integrate the world's most advanced elevator technologies — from regenerative drives and IoT diagnostics to AI-powered predictive maintenance and smart building integration.
            </p>
          </Reveal>
        </div>
      </section>

      <TechnologySection />

      {/* Tech feature cards */}
      <section className="py-32 bg-black">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Deep Dive</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-16">Core <em className="italic-gold">Innovations</em></h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7">
            {TECH_FEATURES.map((feat, i) => (
              <Reveal key={feat.title} delay={i * 0.08}>
                <div className="bg-black hover:bg-graphite-2 p-10 transition-colors duration-400 group cursor-none h-full">
                  <div className="text-3xl mb-5">{feat.icon}</div>
                  <h3 className="font-ui text-[15px] font-semibold text-brand-white mb-3">{feat.title}</h3>
                  <p className="text-silver text-[13px] font-light leading-[1.85]">{feat.description}</p>
                  {/* Bottom hover line */}
                  <div className="mt-6 h-px bg-gradient-to-r from-blue-glow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
