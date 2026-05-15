'use client'
// src/components/sections/FAQSection.tsx
import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '@/components/ui/RevealSection'
import { FAQ_ITEMS } from '@/lib/data'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/7">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 gap-4 cursor-none text-left bg-transparent border-none"
      >
        <span className="font-ui text-[14px] font-semibold text-brand-white leading-snug">{question}</span>
        <span
          className={`w-6 h-6 border flex-shrink-0 flex items-center justify-center text-[16px] transition-all duration-300
            ${open ? 'border-blue-glow text-blue-glow rotate-45' : 'border-white/12 text-silver'}`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-silver text-[13px] font-light leading-[1.85]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="py-36">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* Left */}
          <div>
            <Reveal><p className="eyebrow mb-4">FAQ</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-md text-brand-white mb-6">
                Frequently<br /><em className="italic-gold">Asked</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-silver text-[14px] font-light leading-[1.85] mb-8">
                Can't find your answer? Our team is always available to address your specific requirements.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/contact" className="btn-ghost">Contact Us →</Link>
            </Reveal>
          </div>

          {/* Right — FAQ list */}
          <Reveal delay={0.15} className="flex flex-col">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
