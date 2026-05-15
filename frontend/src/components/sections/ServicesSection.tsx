// src/components/sections/ServicesSection.tsx
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'
import { SERVICES } from '@/lib/data'

export function ServicesSection() {
  return (
    <section className="py-36">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Our Services</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-lg text-brand-white">
                What We<br />
                <em className="italic-gold">Deliver</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link href="/services" className="btn-ghost flex-shrink-0">
              All Services →
            </Link>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <Link
                href={`/services#${service.id}`}
                className="group block bg-black hover:bg-graphite-2 p-10 md:p-12 relative overflow-hidden cursor-none transition-colors duration-400 h-full"
              >
                {/* Blue gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 border border-white/12 flex items-center justify-center text-xl mb-8
                  transition-all duration-300 group-hover:border-blue-glow/40 group-hover:shadow-[0_0_16px_rgba(59,130,246,0.15)]">
                  {service.icon}
                </div>

                {/* Name */}
                <h3 className="relative z-10 font-ui text-[17px] font-semibold text-brand-white mb-3">
                  {service.name}
                </h3>

                {/* Desc */}
                <p className="relative z-10 text-silver text-[13px] font-light leading-[1.8] mb-6">
                  {service.shortDesc}
                </p>

                {/* Arrow */}
                <span className="relative z-10 font-ui text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-glow flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                  Explore <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
