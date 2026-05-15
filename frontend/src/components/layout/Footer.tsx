'use client'
// src/components/layout/Footer.tsx
import Link from 'next/link'
import { useState } from 'react'
import { useAppDispatch } from '@/hooks/redux'
import { showToast } from '@/store/slices/uiSlice'

const services = [
  { label: 'Passenger Elevators', href: '/services#passenger' },
  { label: 'Hospital Elevators', href: '/services#hospital' },
  { label: 'Freight Elevators', href: '/services#freight' },
  { label: 'Capsule Elevators', href: '/services#capsule' },
  { label: 'Escalators', href: '/services#escalators' },
  { label: 'AMC Maintenance', href: '/maintenance' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Technology', href: '/technology' },
  { label: 'Safety Standards', href: '/safety' },
  // { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
]

const socials = [
  { label: 'LinkedIn', icon: 'in', href: '#' },
  { label: 'X / Twitter', icon: '𝕏', href: '#' },
  { label: 'Instagram', icon: 'ig', href: '#' },
  { label: 'YouTube', icon: '▶', href: '#' },
]

export function Footer() {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    dispatch(showToast('Subscribed! Welcome to Onward Insights.'))
    setEmail('')
  }

  return (
    <footer className="relative bg-black border-t border-white/7 overflow-hidden">
      {/* Animated grid bg */}
      <div className="absolute inset-0 grid-bg grid-anim opacity-40 pointer-events-none" />

      <div className="section-container relative">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pt-20 pb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 bg-blue flex items-center justify-center text-xs font-bold text-white font-ui">O</div>
              <span className="font-ui text-sm font-bold tracking-[0.08em] uppercase text-brand-white">Onward Elevators</span>
            </div>
            <p className="font-display text-sm italic text-gold mb-5">Elevating Tomorrow</p>
            <p className="text-silver text-[13px] font-light leading-[1.8] mb-7 max-w-[260px]">
              Premium vertical transport solutions for modern architecture. Precision engineering, luxury design, uncompromising reliability.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/7 flex items-center justify-center
                    text-silver text-sm cursor-none transition-all duration-300
                    hover:border-blue-glow/40 hover:text-blue-glow hover:[box-shadow:0_0_12px_rgba(59,130,246,0.15)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-5">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-silver text-[13px] font-light no-underline hover:text-brand-white transition-colors duration-300 cursor-none"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-5">Company</h3>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-silver text-[13px] font-light no-underline hover:text-brand-white transition-colors duration-300 cursor-none"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-3">Newsletter</h3>
            <p className="text-silver text-[12px] font-light leading-[1.8] mb-4">
              Industry insights, project showcases, and engineering innovations.
            </p>
            <form onSubmit={handleSubscribe} className="relative mb-7">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email "
                className="form-input-luxury pr-[90px] text-[12px] py-3"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 bg-blue hover:bg-blue-glow
                  text-white font-ui text-[9px] font-bold tracking-[0.15em] uppercase
                  px-3.5 cursor-none transition-colors duration-300 border-none"
              >
                Subscribe
              </button>
            </form>

            <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-3">Contact</h3>
            <div className="text-silver text-[12px] font-light leading-[2]">
              <p>📞 +91 800 100 2345</p>
              <p>✉ info@onwardelevators.com</p>
              <p>📍 Indore, Madhya Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/7 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-silver text-[12px] font-light">
            © 2026 Onward Elevators Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-silver text-[12px] font-light no-underline hover:text-brand-white transition-colors duration-300 cursor-none"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-silver text-[12px] font-light no-underline hover:text-brand-white transition-colors duration-300 cursor-none"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
