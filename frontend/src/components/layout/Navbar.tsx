'use client'
// src/components/layout/Navbar.tsx
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { toggleMobileMenu, setMobileMenuOpen } from '@/store/slices/uiSlice'
import { NAV_ITEMS } from '@/lib/data'
import { cn } from '@/lib/utils'

const mobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Technology', href: '/technology' },
  { label: 'Safety', href: '/safety' },
  { label: 'Careers', href: '/careers' },
  // { label: 'Blog', href: '/blog' },
  // { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const { scrolled } = useScrollProgress()
  const dispatch = useAppDispatch()
  const mobileOpen = useAppSelector(s => s.ui.mobileMenuOpen)
  const pathname = usePathname()
  const [dropdown, setDropdown] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => { dispatch(setMobileMenuOpen(false)) }, [pathname, dispatch])

  const open = (label: string) => { clearTimeout(timer.current); setDropdown(label) }
  const close = () => { timer.current = setTimeout(() => setDropdown(null), 150) }

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between px-6 md:px-12 border-b border-transparent transition-all duration-500',
        scrolled && 'nav-scrolled'
      )}>
        <Link href="/" className="flex items-center gap-2.5 no-underline cursor-none">
          <div className="w-7 h-7 bg-blue flex items-center justify-center text-xs font-bold text-white font-ui">O</div>
          <span className="font-ui text-[15px] font-bold tracking-[0.08em] uppercase text-brand-white">Onward Elevators</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <div key={item.label} className="relative"
              onMouseEnter={() => item.children && open(item.label)}
              onMouseLeave={() => item.children && close()}>
              <Link href={item.href} className={cn(
                'font-ui text-[11px] font-semibold tracking-[0.12em] uppercase text-silver hover:text-brand-white transition-colors duration-300',
                'relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-blue-glow after:transition-all after:duration-300 hover:after:w-full',
                pathname === item.href && 'text-brand-white after:!w-full'
              )}>
                {item.label}
              </Link>
              <AnimatePresence>
                {item.children && dropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[220px] bg-graphite-2/95 backdrop-blur-2xl border border-white/7 py-2"
                    onMouseEnter={() => clearTimeout(timer.current)}
                    onMouseLeave={close}>
                    {item.children.map(child => (
                      <Link key={child.href} href={child.href}
                        className="block px-5 py-3 font-ui text-[11px] font-medium tracking-[0.1em] uppercase text-silver hover:text-blue-glow hover:bg-blue-muted transition-all duration-200 cursor-none">
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden lg:flex btn-primary text-[10px] py-2.5 px-5 cursor-none">Contact</Link>
          <button onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden flex flex-col gap-[5px] cursor-none bg-transparent border-none p-1" aria-label="Menu">
            {[0, 1, 2].map(i => (
              <motion.span key={i} className="block w-6 h-px bg-brand-white"
                animate={{ rotate: mobileOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0, y: mobileOpen ? (i === 0 ? 6 : i === 2 ? -6 : 0) : 0, opacity: mobileOpen && i === 1 ? 0 : 1 }}
                transition={{ duration: 0.3 }} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={cn('mobile-menu-overlay', mobileOpen && 'open')}>
        {mobileLinks.map((link, i) => (
          <motion.div key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
            transition={{ delay: mobileOpen ? i * 0.06 : 0, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
            <Link href={link.href}
              className="font-display text-[clamp(28px,7vw,52px)] font-light text-brand-white no-underline tracking-[0.04em] hover:text-blue-glow transition-colors duration-300 cursor-none">
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
          transition={{ delay: mobileOpen ? mobileLinks.length * 0.06 : 0 }}>
          <Link href="/contact" className="btn-primary mt-4 cursor-none">Contact→</Link>
        </motion.div>
      </div>
    </>
  )
}
