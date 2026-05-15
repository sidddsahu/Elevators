// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Syne, Inter } from 'next/font/google'
import { Providers } from '@/components/layout/Providers'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { Toast } from '@/components/ui/Toast'
// import { SmoothScroll } from '@/components/layout/SmoothScroll'
import '@/styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://onwardelevators.com'),
  title: {
    default: 'Onward Elevators — Elevating Tomorrow | Premium Vertical Transport',
    template: '%s | Onward Elevators',
  },
  description:
    'Onward Elevators delivers world-class premium elevator solutions for modern architecture. Precision engineering meets futuristic luxury. Passenger, hospital, freight, capsule elevators & escalators across India.',
  keywords: [
    'premium elevators', 'elevator company India', 'luxury elevators',
    'passenger elevators', 'capsule elevators', 'elevator maintenance',
    'hospital elevators', 'freight elevators', 'escalators India',
    'elevator installation', 'modern elevators', 'Onward Elevators',
  ],
  authors: [{ name: 'Onward Elevators Pvt. Ltd.' }],
  creator: 'Onward Elevators',
  publisher: 'Onward Elevators Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://onwardelevators.com',
    siteName: 'Onward Elevators',
    title: 'Onward Elevators — Elevating Tomorrow',
    description: 'Premium elevator solutions for modern architecture. Precision engineering meets futuristic luxury in every vertical journey.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Onward Elevators — Elevating Tomorrow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onward Elevators — Elevating Tomorrow',
    description: 'Premium elevator solutions for modern architecture.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://onwardelevators.com' },
}

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable} ${inter.variable}`}>
      <body className="bg-black text-brand-white font-body antialiased overflow-x-hidden">
        <Providers>
         
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toast />
        </Providers>
      </body>
    </html>
  )
}
