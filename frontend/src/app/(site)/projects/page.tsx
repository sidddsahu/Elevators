// src/app/projects/page.tsx
import type { Metadata } from 'next'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { CTASection } from '@/components/sections/CTASection'
import { Reveal } from '@/components/ui/RevealSection'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio of 2,400+ elevator installations across India — residential towers, hospitals, hotels, malls, and corporate campuses.',
}

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Portfolio</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6"><em className="italic-gold">Projects</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[500px]">
              From intimate boutique hotels to 60-storey supertalls — a selection of our most distinctive installations across India and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <ProjectsSection />
      <CTASection />
    </>
  )
}
