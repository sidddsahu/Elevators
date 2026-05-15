// src/app/blog/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'
import { BLOG_POSTS } from '@/lib/data'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Elevator technology, design trends, safety compliance, and industry insights from the Onward Elevators engineering team.',
}

export default function BlogPage() {
  return (
    <>
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Insights</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl text-brand-white mb-6">Industry<br /><em className="italic-gold">Knowledge</em></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-silver text-[15px] font-light leading-[1.9] max-w-[480px]">
              Engineering insights, design trends, safety standards, and industry analysis from our team of elevator specialists.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="section-container">
          {/* Featured first post */}
          <Reveal className="mb-px">
            <Link href={`/blog/${BLOG_POSTS[0].slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-graphite hover:bg-graphite-2 transition-colors duration-400 cursor-none overflow-hidden">
              <div className={`relative h-[300px] lg:h-auto bg-gradient-to-br ${BLOG_POSTS[0].gradient} overflow-hidden`}>
                <div className="absolute inset-0 opacity-30"
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(59,130,246,0.1) 0px,rgba(59,130,246,0.1) 1px,transparent 1px,transparent 24px)' }} />
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-gradient-to-br from-blue-muted to-transparent" />
              </div>
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <span className="tag-blue mb-5">{BLOG_POSTS[0].category} · Featured</span>
                <h2 className="font-display text-[clamp(22px,3vw,36px)] font-light text-brand-white leading-snug mb-4 group-hover:text-silver-2 transition-colors duration-300">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-silver text-[13px] font-light leading-[1.8] mb-6">{BLOG_POSTS[0].excerpt}</p>
                <div className="flex gap-3 text-silver text-[11px] font-light">
                  <span>{BLOG_POSTS[0].date}</span><span>·</span><span>{BLOG_POSTS[0].readTime}</span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/7 mt-px">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <Reveal key={post.id} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`}
                  className="group block bg-black hover:bg-graphite-2 overflow-hidden cursor-none transition-colors duration-400">
                  <div className={`relative h-[180px] bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-30"
                      style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(59,130,246,0.1) 0px,rgba(59,130,246,0.1) 1px,transparent 1px,transparent 24px)' }}/>
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-gradient-to-br from-blue-muted to-transparent" />
                  </div>
                  <div className="p-7">
                    <p className="font-ui text-[9px] font-bold tracking-[0.25em] uppercase text-blue-glow mb-3">{post.category}</p>
                    <h3 className="font-display text-[19px] font-light text-brand-white leading-snug mb-2 group-hover:text-silver-2 transition-colors duration-300">{post.title}</h3>
                    <p className="text-silver text-[12px] font-light leading-[1.7] mb-4">{post.excerpt}</p>
                    <div className="flex gap-3 text-silver text-[11px] font-light">
                      <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
