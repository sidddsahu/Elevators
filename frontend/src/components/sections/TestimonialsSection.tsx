// src/components/sections/TestimonialsSection.tsx
import { Reveal } from '@/components/ui/RevealSection'
import { TESTIMONIALS } from '@/lib/data'

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="section-container">
        <Reveal><p className="eyebrow mb-4">Client Voices</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-lg text-brand-white mb-0">
            Trusted by<br /><em className="italic-gold">India's Finest</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/7 mt-16">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <div className="group relative bg-black hover:bg-graphite-2 p-10 md:p-12 overflow-hidden transition-colors duration-400 h-full">

                {/* Big quote mark */}
                <span className="absolute top-6 right-8 font-display text-[100px] leading-none text-blue/8 font-light pointer-events-none select-none">
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-gold text-[14px]">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-display text-[17px] font-light italic text-silver-2 leading-[1.75] mb-7 relative z-10">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-dim border border-blue/30 flex items-center justify-center font-ui text-[12px] font-bold text-blue-glow flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-ui text-[13px] font-semibold text-brand-white">{t.author}</div>
                    <div className="text-[11px] font-light text-silver">{t.title}, {t.company}</div>
                  </div>
                </div>

                {/* Hover bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-glow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
