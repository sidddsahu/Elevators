// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/data'

const BASE_URL = 'https://onwardelevators.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/projects`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/technology`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/safety`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/maintenance`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/careers`, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/terms-conditions`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
