
// 'use client'
// // src/components/layout/Footer.tsx
// import Link from 'next/link'
// import { useState } from 'react'
// import { useAppDispatch } from '@/hooks/redux'
// import { showToast } from '@/store/slices/uiSlice'
// import Image from 'next/image'

// const services = [
//   { label: 'Passenger Elevators', href: '/services#passenger' },
//   { label: 'Hospital Elevators', href: '/services#hospital' },
//   { label: 'Freight Elevators', href: '/services#freight' },
//   { label: 'Capsule Elevators', href: '/services#capsule' },
//   { label: 'Escalators', href: '/services#escalators' },
//   { label: 'AMC Maintenance', href: '/maintenance' },
// ]

// const company = [
//   { label: 'About Us', href: '/about' },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Technology', href: '/technology' },
//   { label: 'Safety Standards', href: '/safety' },
//   // { label: 'Careers', href: '/careers' },
//   { label: 'Blog', href: '/blog' },
// ]

// const legal = [
//   { label: 'Privacy Policy', href: '/privacy-policy' },
//   { label: 'Terms & Conditions', href: '/terms-conditions' },
// ]

// // SVG icons for social platforms
// function WhatsAppIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//     </svg>
//   )
// }

// function FacebookIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
//       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//     </svg>
//   )
// }

// function InstagramIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//     </svg>
//   )
// }

// function YouTubeIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
//       <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//     </svg>
//   )
// }

// const socials = [
//   {
//     label: 'WhatsApp',
//     href: 'https://wa.me/919589005744',
//     icon: <WhatsAppIcon />,
//     color: '#25D366',
//     hoverShadow: 'rgba(37,211,102,0.25)',
//   },
//   {
//     label: 'Facebook',
//     href: 'https://facebook.com',
//     icon: <FacebookIcon />,
//     color: '#1877F2',
//     hoverShadow: 'rgba(24,119,242,0.25)',
//   },
//   {
//     label: 'Instagram',
//     href: 'https://instagram.com',
//     icon: <InstagramIcon />,
//     color: '#E1306C',
//     hoverShadow: 'rgba(225,48,108,0.25)',
//   },
//   {
//     label: 'YouTube',
//     href: 'https://youtube.com',
//     icon: <YouTubeIcon />,
//     color: '#FF0000',
//     hoverShadow: 'rgba(255,0,0,0.25)',
//   },
// ]

// export function Footer() {
//   const dispatch = useAppDispatch()
//   const [email, setEmail] = useState('')

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!email) return
//     dispatch(showToast('Subscribed! Welcome to Onward Insights.'))
//     setEmail('')
//   }

//   return (
//     <footer className="relative bg-black border-t border-white/7 overflow-hidden">
//       {/* Animated grid bg */}
//       <div className="absolute inset-0 grid-bg grid-anim opacity-40 pointer-events-none" />

//       <div className="section-container relative">
//         {/* Main grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pt-20 pb-16">

//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-2.5 mb-2">
//                <Image
//                             src="/logoss.png"
//                             alt="Onward Elevators"
//                             width={130}
//                             height={62}
//                             className="h-[62px] w-auto object-contain"
//                             priority
//                           />
//               {/* <div className="w-7 h-7 bg-yellow flex items-center justify-center text-xs font-bold text-white font-ui">O</div>
//               <span className="font-ui text-sm font-bold tracking-[0.08em] uppercase text-brand-white">Onward Elevators</span> */}
//             </div>
//             <p className="font-display text-sm italic text-gold mb-5">Elevating Tomorrow</p>
//             <p className="text-silver text-[13px] font-light leading-[1.8] mb-7 max-w-[260px]">
//               Premium vertical transport solutions for modern architecture. Precision engineering, luxury design, uncompromising reliability.
//             </p>

//             {/* Social icons with brand colors */}
//             <div className="flex gap-3">
//               {socials.map((s) => (
//                 <a
//                   key={s.label}
//                   href={s.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={s.label}
//                   className="w-9 h-9 border border-white/7 flex items-center justify-center
//                     cursor-none transition-all duration-300"
//                   style={
//                     {
//                       '--icon-color': s.color,
//                       '--icon-shadow': s.hoverShadow,
//                     } as React.CSSProperties
//                   }
//                   onMouseEnter={(e) => {
//                     const el = e.currentTarget
//                     el.style.color = s.color
//                     el.style.borderColor = s.color + '66'
//                     el.style.boxShadow = `0 0 14px ${s.hoverShadow}`
//                   }}
//                   onMouseLeave={(e) => {
//                     const el = e.currentTarget
//                     el.style.color = ''
//                     el.style.borderColor = ''
//                     el.style.boxShadow = ''
//                   }}
//                 >
//                   <span className="text-silver transition-colors duration-300" style={{ pointerEvents: 'none' }}>
//                     {s.icon}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-5">Services</h3>
//             <ul className="flex flex-col gap-3">
//               {services.map((s) => (
//                 <li key={s.href}>
//                   <Link
//                     href={s.href}
//                     className="text-silver text-[13px] font-light no-underline hover:text-brand-white transition-colors duration-300 cursor-none"
//                   >
//                     {s.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-5">Company</h3>
//             <ul className="flex flex-col gap-3">
//               {company.map((c) => (
//                 <li key={c.href}>
//                   <Link
//                     href={c.href}
//                     className="text-silver text-[13px] font-light no-underline hover:text-brand-white transition-colors duration-300 cursor-none"
//                   >
//                     {c.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter + Contact */}
//           <div>
//             <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-3">Newsletter</h3>
//             <p className="text-silver text-[12px] font-light leading-[1.8] mb-4">
//               Industry insights, project showcases, and engineering innovations.
//             </p>
//             <form onSubmit={handleSubscribe} className="relative mb-7">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email"
//                 className="form-input-luxury pr-[90px] text-[12px] py-3"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-0 top-0 bottom-0 bg-yellow-400 hover:bg-yellow-400-glow
//                   text-white font-ui text-[9px] font-bold tracking-[0.15em] uppercase
//                   px-3.5 cursor-none transition-colors duration-300 border-none"
//               >
//                 Subscribe
//               </button>
//             </form>

//             <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-3">Contact</h3>
//             <div className="text-silver text-[12px] font-light leading-[2]">
//               {/* Phone — clicks to call */}
//               <p>
//                 📞{' '}
//                 <a
//                   href="tel:+917554941509"
//                   className="text-silver hover:text-brand-white transition-colors duration-300 no-underline cursor-none"
//                 >
//                   0755-4941509
//                 </a>
//               </p>
//               {/* Email — clicks to open mail client */}
//               <p>
//                 ✉{' '}
//                 <a
//                   href="mailto:onwardelevators@gmail.com"
//                   className="text-silver hover:text-brand-white transition-colors duration-300 no-underline cursor-none"
//                 >
//                   onwardelevators@gmail.com
//                 </a>
//               </p>
//               <p>
//                 📍 C-40, Vidhyanagar,<br />
//                 Narmadapuram Road, Bhopal, Madhya Pradesh
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="border-t border-white/7 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-silver text-[12px] font-light">
//             © 2026 Onward Elevators Pvt. Ltd. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             {legal.map((l) => (
//               <Link
//                 key={l.href}
//                 href={l.href}
//                 className="text-silver text-[12px] font-light no-underline hover:text-brand-white transition-colors duration-300 cursor-none"
//               >
//                 {l.label}
//               </Link>
//             ))}
//             <Link
//               href="/contact"
//               className="text-silver text-[12px] font-light no-underline hover:text-brand-white transition-colors duration-300 cursor-none"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

'use client'
// src/components/layout/Footer.tsx
import Link from 'next/link'
import { useState } from 'react'
import { useAppDispatch } from '@/hooks/redux'
import { showToast } from '@/store/slices/uiSlice'
import Image from 'next/image'

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

// SVG icons for social platforms
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const socials = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919589005744',
    icon: <WhatsAppIcon />,
    color: '#25D366',
    hoverShadow: 'rgba(37,211,102,0.25)',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: <FacebookIcon />,
    color: '#1877F2',
    hoverShadow: 'rgba(24,119,242,0.25)',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: <InstagramIcon />,
    color: '#E1306C',
    hoverShadow: 'rgba(225,48,108,0.25)',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: <YouTubeIcon />,
    color: '#FF0000',
    hoverShadow: 'rgba(255,0,0,0.25)',
  },
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-6 gap-y-10 md:gap-10 pt-16 md:pt-20 pb-12 md:pb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-2">
               <Image
                            src="/logoss.png"
                            alt="Onward Elevators"
                            width={130}
                            height={62}
                            className="h-[62px] w-auto object-contain"
                            priority
                          />
              {/* <div className="w-7 h-7 bg-yellow flex items-center justify-center text-xs font-bold text-white font-ui">O</div>
              <span className="font-ui text-sm font-bold tracking-[0.08em] uppercase text-brand-white">Onward Elevators</span> */}
            </div>
            <p className="font-display text-sm italic text-gold mb-5">Elevating Tomorrow</p>
            <p className="text-silver text-[13px] font-light leading-[1.8] mb-7 max-w-[260px]">
              Premium vertical transport solutions for modern architecture. Precision engineering, luxury design, uncompromising reliability.
            </p>

            {/* Social icons with brand colors */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/7 flex items-center justify-center
                    cursor-none transition-all duration-300"
                  style={
                    {
                      '--icon-color': s.color,
                      '--icon-shadow': s.hoverShadow,
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = s.color
                    el.style.borderColor = s.color + '66'
                    el.style.boxShadow = `0 0 14px ${s.hoverShadow}`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = ''
                    el.style.borderColor = ''
                    el.style.boxShadow = ''
                  }}
                >
                  <span className="text-silver transition-colors duration-300" style={{ pointerEvents: 'none' }}>
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
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
          <div className="col-span-1">
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
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-3">Newsletter</h3>
            <p className="text-silver text-[12px] font-light leading-[1.8] mb-4 max-w-[320px]">
              Industry insights, project showcases, and engineering innovations.
            </p>
            <form onSubmit={handleSubscribe} className="relative mb-7 max-w-[320px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="form-input-luxury pr-[90px] text-[12px] py-3"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 bg-yellow-400 hover:bg-yellow-400-glow
                  text-white font-ui text-[9px] font-bold tracking-[0.15em] uppercase
                  px-3.5 cursor-none transition-colors duration-300 border-none"
              >
                Subscribe
              </button>
            </form>

            <h3 className="font-ui text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white mb-3">Contact</h3>
            <div className="text-silver text-[12px] font-light leading-[2]">
              {/* Phone — clicks to call */}
              <p>
                📞{' '}
                <a
                  href="tel:+917554941509"
                  className="text-silver hover:text-brand-white transition-colors duration-300 no-underline cursor-none"
                >
                  0755-4941509
                </a>
              </p>
              {/* Email — clicks to open mail client */}
              <p>
                ✉{' '}
                <a
                  href="mailto:onwardelevators@gmail.com"
                  className="text-silver hover:text-brand-white transition-colors duration-300 no-underline cursor-none"
                >
                  onwardelevators@gmail.com
                </a>
              </p>
              <p>
                📍 C-40, Vidhyanagar,<br />
                Narmadapuram Road, Bhopal, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/7 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-silver text-[12px] font-light text-center sm:text-left">
            © 2026 Onward Elevators Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
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