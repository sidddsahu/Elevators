// src/components/sections/BrandIntroSection.tsx
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'

export function BrandIntroSection() {
  return (
    <section className="py-36 bg-black">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Text */}
          <div>
            <Reveal><p className="eyebrow mb-4">Our Philosophy</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-lg text-brand-white mb-8">
                Engineering<br /><em className="italic-gold">Perfection,</em><br />Vertically
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="space-y-4 text-silver text-[15px] font-light leading-[1.9] mb-10">
                <p>At Onward Elevators, we believe that vertical movement is more than mechanical function — it is an architectural statement, a moment of luxury, a testament to precision engineering.</p>
                <p>Every elevator we design and install is a marriage of cutting-edge technology and timeless elegance. From the whisper-quiet motor systems to the hand-finished cabin interiors, we obsess over every detail so your building's occupants never have to.</p>
                <p>With 200+ engineers, designers, and installation specialists bringing decades of expertise to every project, Onward ensures your vertical transport solution exceeds the highest international standards.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/about" className="btn-primary">Our Story →</Link>
            </Reveal>
          </div>

          {/* Visual card */}
          <Reveal delay={0.2} className="relative h-[480px]">
            {/* Main card */}
            <div className="absolute inset-0 bg-graphite-2 border border-white/7 flex flex-col justify-end p-10 overflow-hidden">

              {/* SVG elevator animation */}
              <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                {/* Shaft verticals */}
                <line x1="120" y1="20" x2="120" y2="380" stroke="rgba(59,130,246,0.15)" strokeWidth="1"/>
                <line x1="280" y1="20" x2="280" y2="380" stroke="rgba(59,130,246,0.15)" strokeWidth="1"/>
                {/* Floor lines */}
                {[80,140,200,260,320].map((y) => (
                  <line key={y} x1="120" y1={y} x2="280" y2={y} stroke="rgba(59,130,246,0.08)" strokeWidth="1"/>
                ))}
                {/* Floor labels */}
                {['5','4','3','2','1','G'].map((f, i) => (
                  <text key={f} x="95" y={90 + i * 60} fill="rgba(168,170,184,0.3)" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    {f}
                  </text>
                ))}
                {/* Animated car */}
                <rect x="135" y="295" width="130" height="65" fill="rgba(37,99,235,0.12)" stroke="rgba(59,130,246,0.5)" strokeWidth="1" rx="1">
                  <animate attributeName="y" values="295;35;35;295;295" dur="6s" repeatCount="indefinite"
                    calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"/>
                </rect>
                {/* Scan line */}
                <line x1="120" y1="0" x2="280" y2="0" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5">
                  <animate attributeName="y1" values="20;380" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="y2" values="20;380" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="1;0" dur="3s" repeatCount="indefinite"/>
                </line>
              </svg>

              {/* Status row */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-glow core-pulse" />
                <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-silver">
                  System Online · All Elevators Operational
                </span>
              </div>
            </div>

            {/* Floating speed badge */}
            <div className="absolute -right-5 bottom-16 bg-graphite-3/95 backdrop-blur-xl border border-blue/20 px-5 py-4 float-card shadow-glow-blue z-10">
              <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-blue-glow mb-1">Speed Rating</div>
              <div className="font-display text-3xl font-light text-brand-white">
                6 <span className="text-base text-silver">m/s</span>
              </div>
              <div className="h-0.5 bg-gradient-to-r from-blue to-transparent mt-2 rounded-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
