// src/app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* 404 number */}
      <div className="relative mb-8">
        <span
          className="font-display font-light leading-none select-none pointer-events-none block"
          style={{
            fontSize: 'clamp(100px, 20vw, 200px)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(59,130,246,0.2)',
          }}
        >
          404
        </span>
        <span
          className="font-display font-light leading-none absolute inset-0 flex items-center justify-center"
          style={{
            fontSize: 'clamp(100px, 20vw, 200px)',
            color: 'rgba(37,99,235,0.04)',
            WebkitTextStroke: '0',
          }}
        >
          404
        </span>
      </div>

      {/* Content */}
      <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-blue-glow mb-4">Floor Not Found</p>
      <h1 className="font-display text-[clamp(24px,4vw,48px)] font-light text-brand-white mb-4">
        This floor doesn't exist
      </h1>
      <p className="text-silver text-[14px] font-light leading-[1.85] max-w-[400px] mb-12">
        Looks like you've taken the elevator to a floor that doesn't exist in our building. Let us take you back to ground level.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/" className="btn-primary">Return to Ground Floor</Link>
        <Link href="/contact" className="btn-ghost">Contact Us</Link>
      </div>

      {/* Animated elevator indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-blue-glow to-transparent" />
        <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-silver">G</span>
      </div>
    </div>
  )
}
