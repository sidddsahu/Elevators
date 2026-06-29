// src/app/industries/page.tsx
import type { Metadata } from 'next'
import { Reveal } from '@/components/ui/RevealSection'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Onward Elevators serves residential towers, corporate offices, hospitals, hotels, retail malls, airports, and industrial facilities across India.',
}

const industries = [
  {
    icon: '🏙️', title: 'Residential Towers',
    desc: 'From luxury penthouses to mid-range apartment complexes, our passenger and capsule elevators enhance residential buildings with whisper-quiet performance and bespoke finishes.',
    detail: 'High-speed traction elevators, panoramic cabins, smart access control integration, and 10-year warranty as standard.',
  },
  {
    icon: '🏢', title: 'Corporate & Commercial',
    desc: 'High-traffic office buildings demand elevators that are as efficient as the businesses they serve. Our destination dispatch systems reduce peak-hour wait times by up to 30%.',
    detail: 'Destination dispatch, energy regeneration, BMS integration, security access zoning, and usage analytics dashboards.',
  },
  {
    icon: '🏥', title: 'Healthcare Facilities',
    desc: 'Hospital elevators are mission-critical infrastructure. Our medical-grade units are built for reliability, hygiene, and the unique spatial requirements of healthcare environments.',
    detail: 'Extra-wide cabins, antimicrobial surfaces, ARD auto-rescue, EN 81-73 fire mode, priority emergency service.',
  },
  {
    icon: '🏨', title: 'Hospitality & Hotels',
    desc: 'In luxury hospitality, the elevator is an extension of the guest experience. Our capsule and premium passenger elevators become architectural centrepieces that guests remember.',
    detail: 'Custom cabin interiors, panoramic glass, mood lighting, silent belt drives, and concierge service integration.',
  },
  {
    icon: '🛍️', title: 'Retail & Shopping Malls',
    desc: 'High-capacity escalators and elevators designed for the unique demands of retail environments — high foot traffic, wide door openings, and continuous daily operation.',
    detail: 'Energy-efficient escalators up to 9,000 pph, wide-cabin elevators, CCTV integration, and energy standby modes.',
  },
  {
    icon: '🏭', title: 'Industrial & Warehousing',
    desc: 'Our heavy-duty freight elevators handle the most demanding industrial load cycles, with cabins engineered to withstand forklift entry, chemical exposure, and continuous use.',
    detail: 'Loads up to 10,000 kg, ATEX-rated options, forklift-compatible flooring, and corrosion-resistant cabins.',
  },
  {
    icon: '✈️', title: 'Airports & Transit Hubs',
    desc: 'Mission-critical public infrastructure requires elevators and escalators that handle enormous foot traffic with zero tolerance for downtime. Our transit solutions are built for scale.',
    detail: 'Heavy-duty escalators, wide-cabin elevators, real-time monitoring, redundant systems, and rapid service response.',
  },
  {
    icon: '🏛️', title: 'Heritage & Retrofit',
    desc: 'Modernising vertical transport in heritage buildings requires sensitivity to architectural context and creative engineering within existing structural constraints.',
    detail: 'Machine room-less solutions, minimal civil work, shaft-within-shaft design, and heritage-sensitive cabin aesthetics.',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Sectors</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6">Industries We <em className="italic-gold">Serve</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[540px]">
              From luxury residential towers to airport terminals, our elevator solutions are engineered for the precise demands of each industry sector.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/7">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.06}>
                <div className="group bg-black hover:bg-graphite-2 p-10 lg:p-12 transition-colors duration-400 cursor-none h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="relative z-10">
                    <div className="text-4xl mb-5">{ind.icon}</div>
                    <h2 className="font-ui text-[18px] font-semibold text-brand-white mb-3">{ind.title}</h2>
                    <p className="text-silver text-[13px] font-light leading-[1.85] mb-4">{ind.desc}</p>
                    <div className="h-px bg-white/7 mb-4" />
                    <p className="text-silver/60 text-[12px] font-light leading-[1.7] italic">{ind.detail}</p>
                    <div className="mt-6 h-px bg-gradient-to-r from-blue-glow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  </div>
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
