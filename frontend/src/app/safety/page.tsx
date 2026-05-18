// src/app/safety/page.tsx
import type { Metadata } from 'next'
import { Reveal } from '@/components/ui/RevealSection'
import { SAFETY_STANDARDS } from '@/lib/data'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Safety Standards',
  description: 'Safety Features Our elevators are heavily armed with advanced protective systems to guarantee zero-compromise safety for passengers',
}

export default function SafetyPage() {
  return (
    <>
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Compliance</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6">Safety<br /><em className="italic-gold">Standards</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[560px]">
              Safety Features Our elevators are
heavily armed with advanced protective systems
to guarantee zero-compromise safety for
passengers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7 mb-24">
            {SAFETY_STANDARDS.map((std, i) => (
              <Reveal key={std.badge} delay={i * 0.08}>
                <div className="bg-black hover:bg-graphite-2 p-10 transition-colors duration-400 cursor-none h-full">
                  <span className="inline-block bg-blue-dim border border-blue/30 font-ui text-[10px] font-bold tracking-[0.15em] uppercase text-blue-glow px-3 py-1.5 mb-5">
                    {std.badge}
                  </span>
                  <h3 className="font-ui text-[16px] font-semibold text-brand-white mb-3">{std.title}</h3>
                  <p className="text-silver text-[13px] font-light leading-[1.85]">{std.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Safety commitment */}
          <Reveal>
            <div className="border border-white/7 bg-graphite-2 p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: '🔬', title: 'Factory Testing', desc: 'Every component is load-tested, dynamically balanced, and certified at our ISO 9001 manufacturing facility before dispatch.' },
                { icon: '📋', title: 'Third-Party Certification', desc: 'Independent inspection by accredited third-party agencies ensures impartiality and rigour in every safety assessment.' },
                { icon: '📊', title: 'Ongoing Audits', desc: 'Annual safety audits by regulatory bodies on all active installations, with full documentation maintained throughout the elevator\'s lifecycle.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-ui text-[14px] font-semibold text-brand-white mb-2">{item.title}</h3>
                  <p className="text-silver text-[13px] font-light leading-[1.8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
