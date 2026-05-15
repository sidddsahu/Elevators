// src/app/about/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Onward Elevators — 18+ years of premium elevator engineering across India. Our story, mission, and the team behind it all.',
}

const stats = [
  { value: 18, suffix: '+', label: 'Years of Excellence' },
  { value: 200, suffix: '+', label: 'Team Members' },
  { value: 32, suffix: '+', label: 'Cities Served' },
  { value: 15, suffix: '+', label: 'Industry Awards' },
]

const team = [
  { initials: 'AV', name: 'Arjun Verma', role: 'Founder & CEO' },
  { initials: 'PS', name: 'Preethi Sharma', role: 'Chief Engineering Officer' },
  { initials: 'RN', name: 'Rohan Nair', role: 'VP — Design & Architecture' },
  { initials: 'MS', name: 'Meera Singh', role: 'Chief Operations Officer' },
]

const values = [
  { icon: '⚙️', title: 'Engineering First', desc: 'Every decision starts with engineering. We never compromise on structural integrity, safety systems, or mechanical precision.' },
  { icon: '🎨', title: 'Design Matters', desc: 'An elevator is part of your building\'s architecture. We treat cabin design, materials, and finishes with the same rigour as structural engineering.' },
  { icon: '🤝', title: 'Partnership Mindset', desc: 'We work as an extension of your project team — responsive, transparent, and committed to your timelines and budget.' },
  { icon: '♻️', title: 'Sustainable Future', desc: 'Regenerative drives, energy-efficient systems, and responsible manufacturing reduce our environmental footprint on every project.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container text-center">
          <Reveal><p className="eyebrow justify-center mb-5">Est. 2008</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6">Our <em className="italic-gold">Story</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[600px] mx-auto">
              Founded with a singular vision: to redefine what an elevator company could be. Not just a supplier of mechanical systems, but a partner in architectural excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <Reveal><p className="eyebrow mb-4">Mission</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-md text-brand-white mb-7">
                  Engineered for<br /><em className="italic-gold">Architecture</em>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="space-y-4 text-silver text-[14px] font-light leading-[1.9]">
                  <p>Onward Elevators began as a boutique engineering consultancy in Indore, working with leading architects and developers to solve their most complex vertical mobility challenges. Over 18 years, we have grown into one of India's most trusted premium elevator companies.</p>
                  <p>Our philosophy is simple: every building deserves an elevator as refined as its architecture. We reject the notion that vertical transport should be an afterthought — it is an integral experience that shapes how occupants perceive and move through a space.</p>
                  <p>With 2,400+ successful installations across 32 cities and partnerships with architects, developers, and contractors who demand the very best, Onward has established itself as the go-to name for premium elevator solutions in India.</p>
                </div>
              </Reveal>
            </div>

            {/* Stats grid */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-px bg-white/7">
                {stats.map((s) => (
                  <div key={s.label} className="bg-graphite-2 px-8 py-10 text-center">
                    <div className="font-display text-[48px] font-light text-brand-white leading-none mb-2">
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </div>
                    <div className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-silver">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-graphite">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Core Values</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-16">What We <em className="italic-gold">Stand For</em></h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/7">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="bg-graphite p-10 hover:bg-graphite-2 transition-colors duration-400 group cursor-none">
                  <div className="text-3xl mb-5">{v.icon}</div>
                  <h3 className="font-ui text-[16px] font-semibold text-brand-white mb-3">{v.title}</h3>
                  <p className="text-silver text-[13px] font-light leading-[1.85]">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-black">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Leadership</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-16">The <em className="italic-gold">Team</em></h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/7">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="bg-black hover:bg-graphite-2 p-10 text-center transition-colors duration-400 cursor-none group">
                  <div className="w-20 h-20 rounded-full bg-graphite-3 border border-white/12 mx-auto mb-4
                    flex items-center justify-center font-ui text-xl font-bold text-blue-glow
                    group-hover:border-blue-glow/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]
                    transition-all duration-300">
                    {member.initials}
                  </div>
                  <div className="font-ui text-[15px] font-semibold text-brand-white mb-1">{member.name}</div>
                  <div className="text-silver text-[12px] font-light">{member.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-graphite text-center">
        <div className="section-container">
          <Reveal><p className="eyebrow justify-center mb-4">Join Us</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-5">We're Building Something <em className="italic-gold">Great</em></h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-silver text-[14px] font-light leading-[1.85] max-w-[480px] mx-auto mb-10">
              Join a team that's redefining vertical mobility across India. We're always looking for exceptional engineers, designers, and professionals.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/careers" className="btn-primary">View Open Positions</Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
