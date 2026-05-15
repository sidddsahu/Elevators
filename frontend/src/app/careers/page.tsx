// src/app/careers/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'
import { JOBS } from '@/lib/data'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Onward Elevators — India\'s most innovative elevator company. Open positions in engineering, technology, design, sales, and operations.',
}

const perks = [
  { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical, dental & vision cover for you and your family.' },
  { icon: '📈', title: 'ESOP Programme', desc: 'Employee stock ownership plan available from senior roles upward.' },
  { icon: '🎓', title: 'Learning Budget', desc: '₹50,000/year learning budget for courses, certifications, and conferences.' },
  { icon: '🏡', title: 'Flexible Work', desc: 'Hybrid work model for non-site roles — choose where you do your best work.' },
  { icon: '✈️', title: 'Travel Allowances', desc: 'Pan-India project travel covered with premium travel policies for all roles.' },
  { icon: '🎯', title: 'Performance Bonus', desc: 'Quarterly performance-linked bonuses tied to individual and company goals.' },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Work With Us</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6"><em className="italic-gold">Careers</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[540px]">
              Build your career with India's most innovative elevator company. We're always looking for passionate engineers, designers, and professionals who want to reshape vertical mobility.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-black">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Why Onward</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-14">Life at <em className="italic-gold">Onward</em></h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.07}>
                <div className="bg-black hover:bg-graphite-2 p-9 transition-colors duration-400 cursor-none group h-full">
                  <div className="text-3xl mb-4">{perk.icon}</div>
                  <h3 className="font-ui text-[14px] font-semibold text-brand-white mb-2">{perk.title}</h3>
                  <p className="text-silver text-[13px] font-light leading-[1.8]">{perk.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-24 bg-graphite">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Open Positions</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-md text-brand-white mb-14">Current <em className="italic-gold">Openings</em></h2>
          </Reveal>

          <div className="flex flex-col gap-px bg-white/7">
            {JOBS.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.06}>
                <div className="group bg-graphite hover:bg-graphite-2 transition-colors duration-300 cursor-none
                  flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 py-7">
                  <div>
                    <h3 className="font-ui text-[16px] font-semibold text-brand-white mb-2 group-hover:text-blue-glow transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-silver text-[12px] font-light">
                      <span>📍 {job.location}</span>
                      <span>⏱ {job.type}</span>
                      <span>💰 {job.salary}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="tag-blue">{job.department}</span>
                    <Link
                      href="/contact"
                      className="font-ui text-[10px] font-semibold tracking-[0.15em] uppercase text-blue-glow
                        border border-blue/30 px-4 py-2 hover:bg-blue-dim hover:border-blue-glow
                        transition-all duration-300 cursor-none whitespace-nowrap"
                    >
                      Apply →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* General applications */}
          <Reveal delay={0.2} className="mt-16 border border-white/7 bg-graphite-2 p-10 text-center">
            <h3 className="font-ui text-[16px] font-semibold text-brand-white mb-3">Don't see your role?</h3>
            <p className="text-silver text-[13px] font-light leading-[1.8] mb-6 max-w-md mx-auto">
              We're always interested in exceptional talent. Send us your CV and we'll reach out when the right opportunity comes up.
            </p>
            <Link href="/contact" className="btn-primary">Send Us Your CV</Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
