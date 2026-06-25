
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/data'

export function StatsSection() {
  return (
    <section className="border-t border-white/7 border-b border-white/7">
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-y lg:divide-y-0 divide-white/7">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="group relative bg-black hover:bg-graphite-2 transition-colors duration-400 p-10 lg:p-12 text-center overflow-hidden"
          >
            {/* Bottom glow line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-glow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-luxury" />

            <div className="font-display text-[clamp(36px,5vw,64px)] font-light text-brand-white leading-none mb-2">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-silver">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
