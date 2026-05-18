// // src/app/maintenance/page.tsx
// import type { Metadata } from 'next'
// import Link from 'next/link'
// import { Reveal } from '@/components/ui/RevealSection'
// import { MAINTENANCE_PLANS } from '@/lib/data'
// import { CTASection } from '@/components/sections/CTASection'
// import { cn } from '@/lib/utils'

// export const metadata: Metadata = {
//   title: 'AMC Maintenance',
//   description: '24/7 Annual Maintenance Contracts for all elevator brands. 45-minute emergency response, IoT monitoring, 99.9% uptime guarantee.',
// }

// const benefits = [
//   { icon: '🕐', title: '45-Min Response', desc: 'Guaranteed emergency response within 45 minutes across our entire service network.' },
//   { icon: '📡', title: 'IoT Monitoring', desc: 'Real-time sensor data streamed to our NOC, catching issues before they become failures.' },
//   { icon: '🔮', title: 'Predictive AI', desc: 'Machine learning analyses 200+ data points to predict component wear weeks in advance.' },
//   { icon: '📋', title: 'Monthly Reports', desc: 'Detailed performance, usage, and maintenance reports delivered to your inbox every month.' },
// ]

// export default function MaintenancePage() {
//   return (
//     <>
//       <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
//         <div className="section-container">
//           <Reveal><p className="eyebrow mb-4">After-Sales Care</p></Reveal>
//           <Reveal delay={0.1}>
//             <h1 className="display-xl text-brand-white mb-6">AMC<br /><em className="italic-gold">Maintenance</em></h1>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[540px]">
//               Your elevator is a mission-critical system. Our Annual Maintenance Contracts ensure it stays that way — year after year, 24 hours a day, 365 days a year.
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-24 bg-black">
//         <div className="section-container">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/7">
//             {benefits.map((b, i) => (
//               <Reveal key={b.title} delay={i * 0.08}>
//                 <div className="bg-black hover:bg-graphite-2 p-8 transition-colors duration-400 cursor-none">
//                   <div className="text-3xl mb-4">{b.icon}</div>
//                   <h3 className="font-ui text-[14px] font-semibold text-brand-white mb-2">{b.title}</h3>
//                   <p className="text-silver text-[13px] font-light leading-[1.8]">{b.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>



//       <CTASection />
//     </>
//   )
// }

// src/app/maintenance/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'AMC Maintenance',
  description:
    'Annual Maintenance Contracts for all elevator brands across Bhopal and Madhya Pradesh. Preventive maintenance, 24/7 emergency callouts, and certified technicians.',
}

const benefits = [
  {
    icon: '🔧',
    title: 'Preventive Maintenance',
    desc: 'Scheduled, proactive preventive maintenance cycles established for all elevators to minimize mechanical breakdown ratios and maximize equipment life.',
  },
  {
    icon: '👷',
    title: 'Certified Technicians',
    desc: 'Only fully qualified, verified, and certified technicians are authorized to perform structural maintenance and precise repairs on our systems.',
  },
  {
    icon: '🕐',
    title: '24/7 Emergency Callout',
    desc: 'Round-the-clock emergency support, 365 days a year. Prompt response to all technical concerns and immediate service requests across M.P.',
  },
  {
    icon: '📋',
    title: 'Transparent Reporting',
    desc: 'Clear and transparent communication including real-time updates on service requests and estimated repair times for complete client peace of mind.',
  },
]

const policies = [
  {
    number: '01',
    title: 'Preventive Maintenance',
    description:
      'Scheduled, proactive preventive maintenance cycles are established for all elevators to minimize mechanical breakdown ratios and maximize the operational life of the equipment. Every cycle is documented and reported to the client.',
  },
  {
    number: '02',
    title: 'Qualified Technicians Only',
    description:
      'Only fully qualified, verified, and certified technicians are authorized to perform structural maintenance and precise repairs on our systems — no compromise on personnel quality.',
  },
  {
    number: '03',
    title: 'Timely Emergency Response',
    description:
      'We prioritize client peace of mind by responding promptly to all customer inquiries, technical concerns, and immediate service requests — 24 hours a day, 7 days a week, 365 days a year.',
  },
  {
    number: '04',
    title: 'Transparent Communication',
    description:
      'Clear and transparent interaction with our customers is a strict priority, including providing real-time updates on service requests and estimated repair times at every stage.',
  },
  {
    number: '05',
    title: 'Customer Education',
    description:
      'We actively provide structural owners and building managers with proper guidelines regarding correct elevator usage to minimize routine wear and tear and extend equipment life.',
  },
  {
    number: '06',
    title: 'Multi-Brand Coverage',
    description:
      'Our AMC covers all elevator brands and models — not just Onward installations. We take over maintenance of elevators by any manufacturer after a thorough inspection and condition assessment.',
  },
]

const safetyChecks = [
  'Auto Rescue Device (ARD) functionality test',
  'Infrared light curtain sensor verification',
  'Overload sensor and audio-visual indication check',
  'Emergency lighting and fan battery backup test',
  'Emergency alarm and Push-to-Talk communication test',
  'Over-travel electrical isolation mechanism check',
  'Over-speed governor and rope safety system inspection',
  'Car fan automatic sleep mode verification',
  'Lubrication of all moving mechanical components',
  'Door alignment and closing force calibration',
  'Control panel and ARD panel diagnostics',
  'Guide rail and buffer inspection',
]

const coverageItems = [
  { label: 'Coverage Hours',   value: '24/7 × 365 Days' },
  { label: 'Technicians',      value: 'Certified & Verified Only' },
  { label: 'Brands Covered',   value: 'All Major Manufacturers' },
  { label: 'Service Area',     value: 'Bhopal & Madhya Pradesh' },
  { label: 'Uptime Focus',     value: 'Maximum Uptime Guaranteed' },
  { label: 'Compliance',       value: 'NBC 2016 · IS 14665 · EN 81' },
]

export default function MaintenancePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">After-Sales Care</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6">
              AMC<br /><em className="italic-gold">Maintenance</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[540px]">
              Your elevator is a mission-critical system. Our Annual Maintenance Contracts
              ensure it stays that way — with scheduled preventive care, certified technicians,
              and 24/7 emergency support across Bhopal and Madhya Pradesh.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 4 Key Benefits ───────────────────────────────────────────────── */}
      <section className="py-24 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/7">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="bg-black hover:bg-graphite-2 p-8 transition-colors duration-400 cursor-none">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="font-ui text-[14px] font-semibold text-brand-white mb-2">
                    {b.title}
                  </h3>
                  <p className="text-silver text-[13px] font-light leading-[1.8]">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Maintenance Policy Steps ─────────────────────────────────────── */}
      <section className="py-32 bg-graphite">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Our Maintenance Policy</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-16">
              How We <em className="italic-gold">Work</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7">
            {policies.map((p, i) => (
              <Reveal key={p.number} delay={i * 0.08}>
                <div className="bg-graphite p-10 hover:bg-graphite-2 transition-colors duration-400 cursor-none h-full">
                  <div className="font-display text-[40px] font-light text-white/10 leading-none mb-5">
                    {p.number}
                  </div>
                  <h3 className="font-ui text-[15px] font-semibold text-brand-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-silver text-[13px] font-light leading-[1.85]">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety Checklist ─────────────────────────────────────────────── */}
      <section className="py-32 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <Reveal><p className="eyebrow mb-4">What We Check</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-md text-brand-white mb-6">
                  Every Visit <em className="italic-gold">Checklist</em>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-silver text-[14px] font-light leading-[1.9] mb-10">
                  Every preventive maintenance visit follows a rigorous, documented checklist
                  aligned with NBC 2016 and IS 14665 safety standards — no step is ever skipped.
                  Any operational anomaly discovered is addressed and rectified promptly.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 gap-3">
                  {safetyChecks.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 py-3 border-b border-white/7 last:border-0"
                    >
                      <span className="text-gold-light text-[11px] font-semibold tracking-widest uppercase mt-[3px] shrink-0">
                        ✓
                      </span>
                      <span className="text-silver text-[13px] font-light leading-[1.7]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Coverage Summary Card */}
            <Reveal delay={0.25}>
              <div className="bg-graphite-2 border border-white/7 p-10 sticky top-32">
                <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-silver mb-8">
                  AMC Coverage Summary
                </p>
                <div className="space-y-0 divide-y divide-white/7">
                  {coverageItems.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-5">
                      <span className="text-silver text-[12px] font-light tracking-wide">
                        {item.label}
                      </span>
                      <span className="font-ui text-[12px] font-semibold text-brand-white text-right max-w-[180px]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/7">
                  <p className="text-silver text-[12px] font-light leading-[1.8]">
                    We also cover elevators installed by other manufacturers — contact us
                    for a condition assessment and custom AMC quote.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Emergency Response Banner ─────────────────────────────────────── */}
      <section className="py-20 bg-graphite border-y border-white/7">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <p className="eyebrow mb-4">Emergency Support</p>
                <h2 className="display-md text-brand-white mb-5">
                  We Respond <em className="italic-gold">Promptly</em>
                </h2>
                <p className="text-silver text-[14px] font-light leading-[1.9] max-w-[480px]">
                  In case of any technical emergency, our certified service team is available
                  24 hours a day, 7 days a week across Bhopal and Madhya Pradesh. A
                  well-defined emergency response plan is always in place — including strict
                  procedures for safely evacuating passengers in the rare event of a malfunction
                  or power failure.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-1 gap-px bg-white/7">
                {[
                  { icon: '📞', label: 'Helpline', value: '0755-4941509' },
                  { icon: '📧', label: 'Email', value: 'onwardelevators@gmail.com' },
                  { icon: '📍', label: 'Head Office', value: 'C-40, Vidhyanagar, Narmadapuram Road, Bhopal, M.P.' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-graphite p-7 flex items-start gap-5 hover:bg-graphite-2 transition-colors duration-300"
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-ui text-[10px] font-semibold tracking-[0.18em] uppercase text-silver mb-1">
                        {item.label}
                      </p>
                      <p className="font-ui text-[13px] font-semibold text-brand-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}