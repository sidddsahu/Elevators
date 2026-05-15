// src/app/services/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'
import { SERVICES } from '@/lib/data'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Passenger elevators, hospital elevators, freight elevators, capsule elevators, escalators, and AMC maintenance. Full-spectrum vertical transport solutions.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Services</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6">What We <em className="italic-gold">Build</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[540px]">
              Six specialised service lines, each engineered to the highest standards and customised to your exact architectural and operational requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="py-16 bg-black">
        <div className="section-container">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-24 border-b border-white/7 last:border-0 items-center scroll-mt-24"
            >
              {/* Text side — alternate direction */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <Reveal>
                  <p className="eyebrow mb-4">0{i + 1} — {service.name}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="display-md text-brand-white mb-5">{service.name.split(' ')[0]}<br /><em className="italic-gold">{service.name.split(' ').slice(1).join(' ')}</em></h2>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="text-silver text-[14px] font-light leading-[1.9] mb-8">{service.fullDesc}</p>
                </Reveal>

                {/* Specs table */}
                <Reveal delay={0.2}>
                  <table className="w-full mb-8">
                    <tbody className="divide-y divide-white/7">
                      {service.specs.map((spec) => (
                        <tr key={spec.label}>
                          <td className="py-3 font-ui text-[10px] font-bold tracking-[0.15em] uppercase text-brand-white w-2/5">{spec.label}</td>
                          <td className="py-3 text-silver text-[13px] font-light">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Reveal>

                <Reveal delay={0.25} className="flex gap-3 flex-wrap">
                  <Link href="/contact" className="btn-primary">Get a Quote</Link>
                  <button className="btn-ghost cursor-none">Download Brochure</button>
                </Reveal>
              </div>

              {/* Visual side */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <Reveal delay={0.15}>
                  <div className="bg-graphite-2 border border-white/7 h-[400px] flex flex-col items-center justify-center p-10 relative overflow-hidden">

                    {/* Animated arch grid bg */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="xMidYMid slice">
                      {[0, 1, 2, 3].map((r) => (
                        <line key={r} x1="0" y1={`${25 * (r + 1)}%`} x2="100%" y2={`${25 * (r + 1)}%`} stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
                      ))}
                      {[0, 1, 2, 3].map((c) => (
                        <line key={c} x1={`${25 * (c + 1)}%`} y1="0" x2={`${25 * (c + 1)}%`} y2="100%" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
                      ))}
                    </svg>

                    {/* Icon */}
                    <div className="text-6xl mb-6 relative z-10">{service.icon}</div>

                    {/* Features list */}
                    <div className="w-full max-w-sm relative z-10">
                      <p className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-blue-glow mb-4 text-center">Key Features</p>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feat) => (
                          <div key={feat} className="flex items-center gap-3 bg-graphite-3/60 px-3 py-2">
                            <div className="w-1 h-1 rounded-full bg-blue-glow flex-shrink-0" />
                            <span className="text-silver text-[12px] font-light">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
