// src/components/sections/IndustriesStrip.tsx
import { INDUSTRIES } from '@/lib/data'

export function IndustriesStrip() {
  const doubled = [...INDUSTRIES, ...INDUSTRIES]
  return (
    <section className="border-t border-white/7 border-b border-white/7 py-8 overflow-hidden">
      <div className="industries-track flex gap-0 w-max">
        {doubled.map((name, i) => (
          <div key={i} className="flex items-center gap-5 px-12 border-r border-white/7 whitespace-nowrap">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-glow flex-shrink-0" />
            <span className="font-ui text-[11px] font-semibold tracking-[0.15em] uppercase text-silver">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
