// src/app/page.tsx
import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { IndustriesStrip } from '@/components/sections/IndustriesStrip'
import { StatsSection } from '@/components/sections/StatsSection'
import { BrandIntroSection } from '@/components/sections/BrandIntroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { TechnologySection } from '@/components/sections/TechnologySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
// import { BlogSection } from '@/components/sections/BlogSection'

export const metadata: Metadata = {
  title: 'Onward Elevators — Elevating Tomorrow | Premium Vertical Transport',
  description: 'Premium elevator solutions for modern architecture across India. Passenger, hospital, freight, capsule elevators & escalators. Engineering excellence since 2008.',
  alternates: { canonical: 'https://onwardelevators.com' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IndustriesStrip />
      <StatsSection />
      <BrandIntroSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <TechnologySection />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    
    </>
  )
}
