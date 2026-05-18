// 'use client'
// // src/components/sections/ProjectsSection.tsx
// import Link from 'next/link'
// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Reveal } from '@/components/ui/RevealSection'
// import { PROJECTS } from '@/lib/data'
// import type { Project } from '@/types'
// import { cn } from '@/lib/utils'

// // const filters = ['all', 'residential', 'commercial', 'healthcare', 'hospitality']

// const gridClasses: Record<number, string> = {
//   0: 'col-span-12 md:col-span-7 row-span-2 h-[300px] md:h-[480px]',
//   1: 'col-span-12 md:col-span-5 h-[200px] md:h-[235px]',
//   2: 'col-span-12 md:col-span-5 h-[200px] md:h-[235px]',
//   3: 'col-span-12 md:col-span-4 h-[220px] md:h-[280px]',
//   4: 'col-span-12 md:col-span-4 h-[220px] md:h-[280px]',
//   5: 'col-span-12 md:col-span-4 h-[220px] md:h-[280px]',
// }

// function ProjectCard({ project, index }: { project: Project; index: number }) {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, scale: 0.97 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.97 }}
//       transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//       className={cn('group relative overflow-hidden cursor-none', gridClasses[index] ?? 'col-span-12 md:col-span-4 h-[280px]')}
//     >
//       {/* Pattern bg */}
//       <div className={cn('absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-[1.06]', project.gradient)} />

//       {/* Architectural line overlay */}
//       <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="xMidYMid slice">
//         {index === 0 && (
//           <>
//             <line x1="0" y1="33%" x2="100%" y2="33%" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
//             <line x1="0" y1="66%" x2="100%" y2="66%" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
//             <line x1="33%" y1="0" x2="33%" y2="100%" stroke="rgba(59,130,246,0.2)" strokeWidth="1"/>
//             <line x1="66%" y1="0" x2="66%" y2="100%" stroke="rgba(59,130,246,0.2)" strokeWidth="1"/>
//             <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="1"/>
//           </>
//         )}
//         <line x1="0" y1="25%" x2="100%" y2="25%" stroke="rgba(59,130,246,0.15)" strokeWidth="0.5"/>
//         <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5"/>
//         <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5"/>
//         <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5"/>
//       </svg>

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

//       {/* Content */}
//       <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-luxury">
//         <p className="font-ui text-[9px] font-bold tracking-[0.2em] uppercase text-blue-glow mb-2">{project.tag}</p>
//         <h3 className="font-display text-[clamp(16px,2.5vw,26px)] font-light text-brand-white mb-1">{project.name}</h3>
//         <p className="text-silver text-[12px] font-light">{project.detail}</p>
//       </div>

//       {/* Hover border */}
//       <div className="absolute inset-0 border border-blue-glow/0 group-hover:border-blue-glow/20 transition-all duration-400" />
//     </motion.div>
//   )
// }

// export function ProjectsSection() {
//   const [activeFilter, setActiveFilter] = useState('all')

//   const filtered = PROJECTS.filter(
//     (p) => activeFilter === 'all' || p.category === activeFilter
//   ).slice(0, 6)

//   return (
//     <section className="py-36 bg-graphite">
//       <div className="section-container">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
//           <div>
//             <Reveal><p className="eyebrow mb-4">Portfolio</p></Reveal>
//             <Reveal delay={0.1}>
//               <h2 className="display-lg text-brand-white">
//                 Featured<br />
//                 <em className="italic-gold">Projects</em>
//               </h2>
//             </Reveal>
//           </div>
//           <Reveal delay={0.2}>
//             <Link href="/projects" className="btn-ghost flex-shrink-0">All Projects →</Link>
//           </Reveal>
//         </div>



//         {/* Masonry Grid */}
//         <div className="grid grid-cols-12 gap-0.5 bg-white/7">
//           <AnimatePresence mode="popLayout">
//             {filtered.map((project, i) => (
//               <ProjectCard key={project.id} project={project} index={i} />
//             ))}
//           </AnimatePresence>
//         </div>

//       </div>
//     </section>
//   )
// }


'use client'

// src/components/sections/ProjectsSection.tsx

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Reveal } from '@/components/ui/RevealSection'
import { PROJECTS } from '@/lib/data'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'

const gridClasses: Record<number, string> = {
  0: 'col-span-12 md:col-span-7 row-span-2 h-[300px] md:h-[480px]',
  1: 'col-span-12 md:col-span-5 h-[200px] md:h-[235px]',
  2: 'col-span-12 md:col-span-5 h-[200px] md:h-[235px]',
  3: 'col-span-12 md:col-span-4 h-[220px] md:h-[280px]',
  4: 'col-span-12 md:col-span-4 h-[220px] md:h-[280px]',
  5: 'col-span-12 md:col-span-4 h-[220px] md:h-[280px]',
}

function BlueprintOverlay({ index }: { index: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Main featured card graphics */}
      {index === 0 && (
        <>
          <line
            x1="0"
            y1="33%"
            x2="100%"
            y2="33%"
            stroke="rgba(59,130,246,0.35)"
            strokeWidth="1"
          />

          <line
            x1="0"
            y1="66%"
            x2="100%"
            y2="66%"
            stroke="rgba(59,130,246,0.25)"
            strokeWidth="1"
          />

          <line
            x1="33%"
            y1="0"
            x2="33%"
            y2="100%"
            stroke="rgba(59,130,246,0.18)"
            strokeWidth="1"
          />

          <line
            x1="66%"
            y1="0"
            x2="66%"
            y2="100%"
            stroke="rgba(59,130,246,0.18)"
            strokeWidth="1"
          />

          <circle
            cx="50%"
            cy="50%"
            r="28%"
            fill="none"
            stroke="rgba(59,130,246,0.12)"
            strokeWidth="1"
          />
        </>
      )}

      {/* Global grid */}
      <line
        x1="0"
        y1="25%"
        x2="100%"
        y2="25%"
        stroke="rgba(59,130,246,0.12)"
        strokeWidth="0.5"
      />

      <line
        x1="0"
        y1="75%"
        x2="100%"
        y2="75%"
        stroke="rgba(59,130,246,0.08)"
        strokeWidth="0.5"
      />

      <line
        x1="25%"
        y1="0"
        x2="25%"
        y2="100%"
        stroke="rgba(59,130,246,0.08)"
        strokeWidth="0.5"
      />

      <line
        x1="75%"
        y1="0"
        x2="75%"
        y2="100%"
        stroke="rgba(59,130,246,0.08)"
        strokeWidth="0.5"
      />
    </svg>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        'group relative overflow-hidden bg-black cursor-none',
        gridClasses[index] ??
          'col-span-12 md:col-span-4 h-[280px]'
      )}
    >
      {/* ========================= */}
      {/* Background Image */}
      {/* ========================= */}

      <div className="absolute inset-0 overflow-hidden">
        {/* <Image
          src={project.image}
          alt={project.name}
          fill
          priority={index === 0}
          className="
            object-cover
            transition-transform
            duration-[1400ms]
            ease-out
            group-hover:scale-[1.08]
          "
        /> */}
      </div>

      {/* ========================= */}
      {/* Dark Luxury Overlay */}
      {/* ========================= */}

      <div className="absolute inset-0 bg-black/45" />

      {/* ========================= */}
      {/* Blueprint Glow */}
      {/* ========================= */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]
        "
      />

      {/* ========================= */}
      {/* Blueprint Lines */}
      {/* ========================= */}

      <BlueprintOverlay index={index} />

      {/* ========================= */}
      {/* Premium Gradient */}
      {/* ========================= */}

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
        "
      />

      {/* ========================= */}
      {/* Hover Shine */}
      {/* ========================= */}

      <div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
          bg-gradient-to-r
          from-transparent
          via-white/[0.04]
          to-transparent
        "
      />

      {/* ========================= */}
      {/* Content */}
      {/* ========================= */}

      <div
        className="
          absolute bottom-0 left-0 right-0
          p-6 md:p-8
          translate-y-2
          group-hover:translate-y-0
          transition-transform
          duration-500
        "
      >
        {/* Tag */}
        <p
          className="
            text-[10px]
            font-semibold
            tracking-[0.25em]
            uppercase
            text-blue-400
            mb-3
          "
        >
          {project.tag}
        </p>

        {/* Title */}
        <h3
          className="
            text-white
            font-light
            leading-tight
            tracking-tight
            text-[clamp(22px,2.6vw,42px)]
            mb-2
          "
        >
          {project.name}
        </h3>

        {/* Detail */}
        <p
          className="
            text-white/70
            text-sm
            md:text-base
            font-light
          "
        >
          {project.detail}
        </p>
      </div>

      {/* ========================= */}
      {/* Hover Border */}
      {/* ========================= */}

      <div
        className="
          absolute inset-0
          border border-blue-400/0
          group-hover:border-blue-400/20
          transition-all
          duration-500
        "
      />

      {/* ========================= */}
      {/* Bottom Glow */}
      {/* ========================= */}

      <div
        className="
          absolute bottom-0 left-0 right-0
          h-[1px]
          bg-blue-400/0
          group-hover:bg-blue-400/50
          transition-all
          duration-500
        "
      />
    </motion.div>
  )
}

export function ProjectsSection() {
  const [activeFilter] = useState('all')

const filtered = PROJECTS.slice(0, 6)

  return (
    <section className="relative py-36 bg-[#050816] overflow-hidden">
      {/* ================================= */}
      {/* Section Background Graphics */}
      {/* ================================= */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Blue Glow */}
        <div
          className="
            absolute top-0 left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            rounded-full
            bg-blue-500/10
            blur-[160px]
          "
        />
      </div>

      <div className="section-container relative z-10">
        {/* ================================= */}
        {/* Header */}
        {/* ================================= */}

        <div
          className="
            flex flex-col
            md:flex-row
            justify-between
            items-start md:items-end
            gap-8
            mb-16
          "
        >
          <div>
            <Reveal>
              <p className="eyebrow mb-4 text-blue-400">
                Portfolio
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display-lg text-white leading-none">
                Featured
                <br />

                <span className="italic text-white/70">
                  Projects
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Link
              href="/projects"
              className="
                inline-flex
                items-center
                gap-2
                border border-white/10
                px-6 py-3
                text-sm
                text-white/80
                hover:text-white
                hover:border-blue-400/30
                transition-all
                duration-300
                backdrop-blur-md
              "
            >
              All Projects →
            </Link>
          </Reveal>
        </div>

        {/* ================================= */}
        {/* Masonry Grid */}
        {/* ================================= */}

        <div
          className="
            grid grid-cols-12
            gap-[1px]
            bg-white/5
            border border-white/5
          "
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}