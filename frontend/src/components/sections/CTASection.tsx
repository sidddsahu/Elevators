// src/components/sections/CTASection.tsx
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'

export function CTASection() {
  return (
    <section className="relative py-36 bg-graphite overflow-hidden text-center">
      {/* Glow radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="section-container relative">
        <Reveal>
          <p className="eyebrow justify-center mb-6">Start Your Project</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display-lg text-brand-white mb-6">
            Ready to Elevate<br />Your <em className="italic-gold">Vision?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-silver text-[15px] font-light leading-[1.85] max-w-[480px] mx-auto mb-12">
            Tell us about your project. Our engineering team will craft a bespoke vertical transport solution that exceeds your expectations.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="btn-primary">Request a Free Quote</Link>
          <Link href="/contact" className="btn-ghost">Schedule a Consultation</Link>
        </Reveal>

        {/* Floating stat badges */}
        {/* <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
          <div className="bg-graphite-2 border border-white/7 px-4 py-3 float-card text-left">
            <div className="font-ui text-[9px] tracking-[0.15em] uppercase text-blue-glow mb-1">Response</div>
            <div className="font-display text-xl font-light text-brand-white">45 min</div>
          </div>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
          <div className="bg-graphite-2 border border-white/7 px-4 py-3 float-card-delay text-left">
            <div className="font-ui text-[9px] tracking-[0.15em] uppercase text-blue-glow mb-1">Warranty</div>
            <div className="font-display text-xl font-light text-brand-white">10 Years</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
