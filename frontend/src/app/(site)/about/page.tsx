

// src/app/about/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Onward Elevators — promoted by seasoned MNC elevator professionals, serving Bhopal and Madhya Pradesh with premium vertical mobility solutions.',
}

const stats = [
  { value: 18,  suffix: '+', label: 'Years of Excellence' },
  { value: 200, suffix: '+', label: 'Team Members' },
  { value: 32,  suffix: '+', label: 'Cities Served' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction Rate' },
]

// NOTE: Team section removed as client did not provide team names in PDF.
// Re-add when client provides actual team details.

const values = [
  {
    icon: '🏆',
    title: 'MNC Corporate Expertise',
    desc: 'Driven by a core team with deep-rooted technical experience in global elevator standards from world-class MNC elevator brands.',
  },
  {
    icon: '🛡️',
    title: 'Safety First',
    desc: 'Top-tier safety is non-negotiable. Every installation is fully compliant with NBC 2016, BIS IS 14665, and all applicable statutory regulations.',
  },
  {
    icon: '⚙️',
    title: 'Advanced Engineering',
    desc: 'Equipped with energy-efficient Gearless Motors and cutting-edge Machine Room Less (MRL) technology for smarter, greener vertical mobility.',
  },
  {
    icon: '🤝',
    title: '24/7 Prompt Support',
    desc: 'Dependable customer service backed by rigid preventive maintenance protocols and transparent real-time communication with every client.',
  },
]

const prestigiousClients = [
  { icon: '🏛️', name: 'M.P. Mantralaya, Bhopal' },
  { icon: '🏛️', name: 'M.P. Vidhan Sabha' },
  { icon: '🏢', name: 'Police Housing Department' },
  { icon: '🏗️', name: 'Renowned Residential Realty Projects & Top-Class Builders in Bhopal' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container text-center">
          <Reveal>
            <p className="eyebrow justify-center mb-5">Bhopal &amp; Madhya Pradesh</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6">
              Our <em className="italic-gold">Story</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[600px] mx-auto">
              Onward Elevators is a dynamic enterprise promoted by seasoned industry
              professionals with extensive experience in leading Multi-National Corporation
              (MNC) elevator brands — elevating mobility across Bhopal and Madhya Pradesh.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <Reveal>
                <p className="eyebrow mb-4">Company Profile</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-md text-brand-white mb-7">
                  Engineered for<br />
                  <em className="italic-gold">Modern India</em>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="space-y-4 text-silver text-[14px] font-light leading-[1.9]">
                  <p>
                    Onward Elevators is a newly formed enterprise in the segment of Lifts &amp;
                    Elevators, promoted by professionals who bring immense experience from
                    world-class MNC elevator brands. We have established a powerful operational
                    footprint across Bhopal and the wider Madhya Pradesh region by rendering
                    unparalleled installation, modernization, and maintenance services to both
                    private sectors and prestigious government organizations.
                  </p>
                  <p>
                    The journey of our promoters started with a clear vision: to fulfill the
                    vertical transit aspirations of modern architectural spaces by adapting
                    top-tier safety, absolute design flexibility, continuous innovation, and
                    prompt services. Rapid urbanization demands smart, efficient, and robust
                    technological prowess — and our comprehensive product lineup has been
                    specifically engineered to cater to these exact dynamics, bringing vertical
                    transportation to a completely new and different level.
                  </p>
                  <p>
                    From iconic government infrastructures to premium residential spaces, we
                    elevate mobility with an uncompromising focus on safety, continuous
                    innovation, and prompt service.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Stats grid — structure unchanged */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-px bg-white/7">
                {stats.map((s) => (
                  <div key={s.label} className="bg-graphite-2 px-8 py-10 text-center">
                    <div className="font-display text-[48px] font-light text-brand-white leading-none mb-2">
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </div>
                    <div className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-silver">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Core Values ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-graphite">
        <div className="section-container">
          <Reveal>
            <p className="eyebrow mb-4">Why Choose Us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-16">
              What We <em className="italic-gold">Stand For</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/7">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="bg-graphite p-10 hover:bg-graphite-2 transition-colors duration-400 group cursor-none">
                  <div className="text-3xl mb-5">{v.icon}</div>
                  <h3 className="font-ui text-[16px] font-semibold text-brand-white mb-3">
                    {v.title}
                  </h3>
                  <p className="text-silver text-[13px] font-light leading-[1.85]">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prestigious Clients ────────────────────────────────────────────── */}
      <section className="py-32 bg-black">
        <div className="section-container">
          <Reveal>
            <p className="eyebrow mb-4">Our Clients</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-6">
              Prestigious Projects &amp; <em className="italic-gold">Institutional Clients</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-silver text-[14px] font-light leading-[1.9] max-w-[600px] mb-16">
              Our technical excellence is validated by our regular association with elite civic
              bodies and premium developers across Madhya Pradesh.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/7">
            {prestigiousClients.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <div className="bg-graphite p-10 hover:bg-graphite-2 transition-colors duration-400 cursor-none">
                  <div className="text-3xl mb-4">{c.icon}</div>
                  <p className="font-ui text-[15px] font-semibold text-brand-white leading-snug">
                    {c.name}
                  </p>
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