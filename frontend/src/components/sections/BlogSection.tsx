// src/components/sections/BlogSection.tsx
import Link from 'next/link'
import { Reveal } from '@/components/ui/RevealSection'
import { BLOG_POSTS } from '@/lib/data'

export function BlogSection() {
  const posts = BLOG_POSTS.slice(0, 3)
  return (
    <section className="py-36 bg-graphite">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <Reveal><p className="eyebrow mb-4">Insights</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-lg text-brand-white">
                Industry<br /><em className="italic-gold">Knowledge</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link href="/blog" className="btn-ghost flex-shrink-0">All Articles →</Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/7">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-graphite hover:bg-graphite-2 overflow-hidden cursor-none transition-colors duration-400"
              >
                {/* Thumbnail */}
                <div className="relative h-[200px] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} transition-transform duration-700 group-hover:scale-[1.08]`} />
                  <div className="absolute inset-0 opacity-40"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(59,130,246,0.1) 0px,rgba(59,130,246,0.1) 1px,transparent 1px,transparent 24px)' }}
                  />
                </div>

                {/* Body */}
                <div className="p-7">
                  <p className="font-ui text-[9px] font-bold tracking-[0.25em] uppercase text-blue-glow mb-3">{post.category}</p>
                  <h3 className="font-display text-[20px] font-light text-brand-white leading-snug mb-3 group-hover:text-silver-2 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-silver text-[12px] font-light leading-[1.7] mb-4">{post.excerpt}</p>
                  <div className="flex gap-3 text-silver text-[11px] font-light">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
