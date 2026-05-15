// src/app/maintenance/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'
import { MAINTENANCE_PLANS } from '@/lib/data'
import { CTASection } from '@/components/sections/CTASection'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'AMC Maintenance',
  description: '24/7 Annual Maintenance Contracts for all elevator brands. 45-minute emergency response, IoT monitoring, 99.9% uptime guarantee.',
}

const benefits = [
  { icon: '🕐', title: '45-Min Response', desc: 'Guaranteed emergency response within 45 minutes across our entire service network.' },
  { icon: '📡', title: 'IoT Monitoring', desc: 'Real-time sensor data streamed to our NOC, catching issues before they become failures.' },
  { icon: '🔮', title: 'Predictive AI', desc: 'Machine learning analyses 200+ data points to predict component wear weeks in advance.' },
  { icon: '📋', title: 'Monthly Reports', desc: 'Detailed performance, usage, and maintenance reports delivered to your inbox every month.' },
]

export default function MaintenancePage() {
  return (
    <>
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">After-Sales Care</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6">AMC<br /><em className="italic-gold">Maintenance</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[540px]">
              Your elevator is a mission-critical system. Our Annual Maintenance Contracts ensure it stays that way — year after year, 24 hours a day, 365 days a year.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/7">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="bg-black hover:bg-graphite-2 p-8 transition-colors duration-400 cursor-none">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="font-ui text-[14px] font-semibold text-brand-white mb-2">{b.title}</h3>
                  <p className="text-silver text-[13px] font-light leading-[1.8]">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-graphite">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4 justify-center text-center">AMC Plans</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-16 text-center">
              Choose Your <em className="italic-gold">Plan</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/7">
            {MAINTENANCE_PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div className={cn(
                  'bg-graphite-2 p-10 flex flex-col border-t-2',
                  plan.popular
                    ? 'border-t-blue-glow shadow-[0_0_40px_rgba(37,99,235,0.08)]'
                    : plan.color === 'border-gold'
                    ? 'border-t-gold'
                    : 'border-t-white/10'
                )}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn(
                      'font-ui text-[11px] font-semibold tracking-[0.2em] uppercase',
                      plan.popular ? 'text-blue-glow' : plan.color === 'border-gold' ? 'text-gold' : 'text-silver'
                    )}>
                      {plan.name}
                    </span>
                    {plan.popular && (
                      <span className="tag-blue text-[9px]">Most Popular</span>
                    )}
                  </div>

                  <div className="font-display text-[40px] font-light text-brand-white mb-1">
                    {plan.price}
                    {plan.period && <span className="text-base text-silver">{plan.period}</span>}
                  </div>

                  <div className="h-px bg-white/7 my-6" />

                  <ul className="flex flex-col gap-3 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-silver text-[13px] font-light">
                        <span className="text-green-400 text-xs flex-shrink-0">✓</span>{f}
                      </li>
                    ))}
                    {(plan.missing ?? []).map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-silver/30 text-[13px] font-light">
                        <span className="text-xs flex-shrink-0">✗</span>{f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.color === 'border-gold' ? '/contact' : '/contact'}
                    className={plan.popular ? 'btn-primary text-center justify-center' : 'btn-ghost text-center justify-center'}
                  >
                    {plan.color === 'border-gold' ? 'Contact Sales' : 'Choose Plan'}
                  </Link>
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
