// src/components/sections/WhyUsSection.tsx
import { Reveal } from '@/components/ui/RevealSection'

const features = [
  {
    num: '01',
    title: 'German Engineering Precision',
    desc: 'Our elevator systems are engineered using German-standard components and quality control processes, ensuring sub-millimeter accuracy in every installation.',
  },
  {
    num: '02',
    title: '24/7 Emergency Support',
    desc: 'Round-the-clock monitoring with a 45-minute guaranteed response time. Our nationwide service network ensures your elevators never stay down.',
  },
  {
    num: '03',
    title: 'Energy-Efficient Systems',
    desc: 'Our VVVF drive technology and regenerative braking systems reduce energy consumption by up to 40% compared to conventional elevators.',
  },
  {
    num: '04',
    title: 'Bespoke Interior Design',
    desc: 'Our in-house design team creates custom elevator cabins that complement your buildings architectural language — from minimalist steel to opulent marble.',
  },
  {
    num: '05',
    title: '10-Year Warranty Standard',
    desc: 'Every Onward installation comes with our comprehensive decade-long warranty covering all components, labour, and emergency callouts.',
  },
]

const certs = [
  { icon: '🏆', name: 'ISO 9001:2015' },
  { icon: '🛡️', name: 'EN 81-20 / 50' },
  { icon: '⚡', name: 'BEE 5-Star' },
  { icon: '✓', name: 'NBC Compliant' },
  { icon: '🌿', name: 'IGBC Green' },
  { icon: '🔒', name: 'CE Certified' },
]

export function WhyUsSection() {
  return (
    <section className="py-36">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* Left — Features */}
          <div>
            <Reveal><p className="eyebrow mb-4">Why Onward</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-lg text-brand-white mb-14">
                The Standard<br />of <em className="italic-gold">Excellence</em>
              </h2>
            </Reveal>

            <div className="flex flex-col divide-y divide-white/7">
              {features.map((f, i) => (
                <Reveal key={f.num} delay={i * 0.07}>
                  <div className="group flex gap-6 py-8 items-start cursor-none transition-all duration-300 hover:pl-2">
                    <span className="font-display text-[13px] italic text-blue-glow min-w-[24px] mt-0.5">{f.num}</span>
                    <div>
                      <h3 className="font-ui text-[15px] font-semibold text-brand-white mb-2">{f.title}</h3>
                      <p className="text-silver text-[13px] font-light leading-[1.85]">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — Sticky visual */}
          <div className="lg:sticky lg:top-32">
            <Reveal delay={0.2}>
              <div className="border border-white/7 bg-graphite-2 p-10 flex flex-col gap-8">

                <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-blue-glow">
                  Certifications &amp; Standards
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {certs.map((c) => (
                    <div
                      key={c.name}
                      className="bg-graphite-3 border border-white/7 p-4 text-center
                        hover:border-blue-glow/30 hover:shadow-[0_0_16px_rgba(59,130,246,0.08)]
                        transition-all duration-300 cursor-none"
                    >
                      <div className="text-2xl mb-2">{c.icon}</div>
                      <div className="font-ui text-[9px] font-bold tracking-[0.15em] uppercase text-silver">{c.name}</div>
                    </div>
                  ))}
                </div>

                {/* Uptime pill */}
                <div className="bg-graphite-3 border border-white/7 p-6">
                  <div className="font-display text-4xl font-light text-brand-white mb-1">
                    99.7<span className="italic text-blue-glow">%</span>
                  </div>
                  <div className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-silver mb-4">
                    System Uptime Guarantee
                  </div>
                  <div className="h-px bg-gradient-to-r from-blue via-blue-glow to-transparent" />
                </div>

                {/* Floating speed badge */}
                <div className="border border-blue/20 bg-graphite-3/80 backdrop-blur-xl p-5 float-card">
                  <div className="font-ui text-[9px] font-semibold tracking-[0.2em] uppercase text-blue-glow mb-1">
                    Max Speed Rating
                  </div>
                  <div className="font-display text-3xl font-light text-brand-white">
                    6 <span className="text-base text-silver">m/s</span>
                  </div>
                  <div className="h-0.5 bg-gradient-to-r from-blue to-transparent mt-3 rounded-full" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
