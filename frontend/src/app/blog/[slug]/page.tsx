// src/app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/data'
import { Reveal } from '@/components/ui/RevealSection'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  }
}

// Dummy article body paragraphs
const articleBody = [
  'The elevator industry is undergoing a profound transformation. What was once a purely mechanical system — pulleys, cables, and counterweights — is now a sophisticated network of sensors, machine learning algorithms, and cloud-connected diagnostics that communicate in real time with building management platforms across the world.',
  'At the heart of this shift is the convergence of the Internet of Things (IoT) with artificial intelligence. Modern elevator systems — like those installed by Onward Elevators — are equipped with hundreds of sensors monitoring everything from motor temperature and door timing to vibration signatures and brake pad wear.',
  'These sensors generate enormous volumes of data continuously. In legacy systems, this data was either ignored or required an engineer to physically inspect the unit. Today, machine learning models trained on millions of operational hours can identify the early signatures of a failing bearing weeks before the bearing actually fails.',
  'The practical implications of this are significant. A single unplanned elevator outage in a hospital can compromise patient care. In a residential tower, a trapped passenger is not only a safety concern but a regulatory and reputational liability for the developer. Predictive maintenance eliminates these scenarios by converting reactive repair into proactive replacement.',
  'Onward Elevators\' proprietary remote monitoring platform — OnwardConnect — currently monitors over 1,800 live installations across India in real time. The platform aggregates sensor data at 250ms intervals, applies anomaly detection models, and automatically dispatches service engineers when risk scores exceed threshold values.',
  'The energy dimension of smart elevators is equally compelling. Variable voltage, variable frequency (VVVF) drives — now standard across all Onward passenger elevator installations — adjust motor speed precisely to load requirements, eliminating the enormous waste of fixed-speed drive systems. Combined with regenerative braking — which captures kinetic energy from descending cabins and returns it to the building\'s electrical grid — a modern high-rise elevator can offset 35–40% of its own energy consumption.',
  'Looking forward, the next frontier is destination dispatch intelligence. Rather than passengers selecting floors individually, AI systems analyse building occupancy patterns, time of day, access control data, and even calendar integrations to predict elevator demand and position cars optimally — reducing average wait times by up to 30% in high-traffic buildings.',
  'The future of vertical mobility is not just faster, quieter, or more efficient — it is fundamentally smarter. And at Onward Elevators, we are committed to ensuring every building we serve is ready for that future.',
]

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className={`pt-44 pb-20 bg-gradient-to-br ${post.gradient} border-b border-white/7 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(59,130,246,0.1) 0px,rgba(59,130,246,0.1) 1px,transparent 1px,transparent 24px)' }} />
        <div className="section-container relative">
          <Reveal>
            <Link href="/blog" className="font-ui text-[10px] tracking-[0.2em] uppercase text-silver hover:text-blue-glow transition-colors duration-300 no-underline cursor-none mb-6 inline-flex items-center gap-2">
              ← All Articles
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="tag-blue mb-6">{post.category}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-lg text-brand-white mb-6 max-w-3xl">{post.title}</h1>
          </Reveal>
          <Reveal delay={0.15} className="flex gap-4 text-silver text-[13px] font-light">
            <span>By Onward Elevators Team</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </Reveal>
        </div>
      </section>

      {/* Article content */}
      <section className="py-24 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">

            {/* Body */}
            <article>
              <Reveal>
                <p className="font-display text-[20px] font-light italic text-silver-2 leading-[1.8] mb-10 pb-10 border-b border-white/7">
                  {post.excerpt}
                </p>
              </Reveal>
              {articleBody.map((para, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <p className="text-silver text-[15px] font-light leading-[1.95] mb-6">{para}</p>
                </Reveal>
              ))}

              {/* Share */}
              <Reveal className="mt-14 pt-10 border-t border-white/7 flex items-center gap-4 flex-wrap">
                <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-silver">Share</span>
                {['LinkedIn', 'Twitter / X', 'WhatsApp'].map((platform) => (
                  <button key={platform}
                    className="font-ui text-[10px] tracking-[0.12em] uppercase text-silver border border-white/7 px-4 py-2
                      hover:border-blue-glow/40 hover:text-blue-glow transition-all duration-300 cursor-none">
                    {platform}
                  </button>
                ))}
              </Reveal>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-8">
              <Reveal delay={0.2}>
                <div className="border border-white/7 bg-graphite-2 p-6">
                  <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-blue-glow mb-4">Table of Contents</p>
                  <ul className="flex flex-col gap-3">
                    {['Introduction', 'IoT & Sensor Networks', 'AI Predictive Models', 'Energy Efficiency', 'Destination Dispatch', 'Future Outlook'].map((item) => (
                      <li key={item}>
                        <span className="text-silver text-[12px] font-light leading-snug hover:text-blue-glow transition-colors duration-300 cursor-none block">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="border border-white/7 bg-graphite-2 p-6">
                  <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-blue-glow mb-3">Get a Quote</p>
                  <p className="text-silver text-[12px] font-light leading-[1.7] mb-4">
                    Interested in smart elevator solutions for your project?
                  </p>
                  <Link href="/contact" className="btn-primary text-[10px] py-2.5 w-full justify-center">
                    Request a Quote
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-20 bg-graphite border-t border-white/7">
        <div className="section-container">
          <Reveal><h2 className="display-sm text-brand-white mb-10">Related <em className="italic-gold">Articles</em></h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/7">
            {related.map((rp, i) => (
              <Reveal key={rp.id} delay={i * 0.08}>
                <Link href={`/blog/${rp.slug}`}
                  className="group block bg-graphite hover:bg-graphite-2 overflow-hidden cursor-none transition-colors duration-400">
                  <div className={`h-[140px] bg-gradient-to-br ${rp.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-blue-muted" />
                  </div>
                  <div className="p-6">
                    <p className="font-ui text-[9px] font-bold tracking-[0.25em] uppercase text-blue-glow mb-2">{rp.category}</p>
                    <h3 className="font-display text-[17px] font-light text-brand-white leading-snug">{rp.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
