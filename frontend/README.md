# 🏢 Onward Elevators — Premium Next.js Website

> **"Elevating Tomorrow"** — Award-worthy, Awwwards-level elevator company website built with Next.js 14, Redux Toolkit, Framer Motion, GSAP, Lenis smooth scroll, Three.js, and Tailwind CSS.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Full-stack React framework, SSR/SSG, routing |
| **TypeScript** | Type safety throughout |
| **Redux Toolkit** | Global state (UI, toast, filters, mobile menu) |
| **Framer Motion** | Page transitions, stagger reveals, AnimatePresence |
| **GSAP + ScrollTrigger** | Spec bar animations, timeline connector, scroll effects |
| **Lenis** | Buttery smooth inertial scrolling |
| **Three.js / R3F** | 3D elevator visualization in hero section |
| **Tailwind CSS** | Utility-first styling with full custom design system |
| **React Hook Form** | Form validation (contact, quote) |
| **next/font** | Optimized Google Fonts (Cormorant Garamond, Syne, Inter) |

---

## 📁 Folder Structure

```
onward-elevators-nextjs/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (fonts, providers, SEO)
│   │   ├── page.tsx                  # Home page
│   │   ├── not-found.tsx             # 404 Premium page
│   │   ├── sitemap.ts                # Auto-generated sitemap
│   │   ├── robots.ts                 # robots.txt
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── technology/page.tsx
│   │   ├── safety/page.tsx
│   │   ├── maintenance/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog listing
│   │   │   └── [slug]/page.tsx       # Dynamic blog post
│   │   ├── careers/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── get-quote/page.tsx        # Multi-step quote form
│   │   ├── privacy-policy/page.tsx
│   │   └── terms-conditions/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Sticky nav + mega dropdown + mobile menu
│   │   │   ├── Footer.tsx            # Luxury footer with newsletter
│   │   │   ├── Providers.tsx         # Redux Provider wrapper
│   │   │   └── SmoothScroll.tsx      # Lenis initializer
│   │   │
│   │   ├── sections/                 # All page sections
│   │   │   ├── HeroSection.tsx       # 3D elevator + particles + GSAP text
│   │   │   ├── IndustriesStrip.tsx   # Marquee scrolling strip
│   │   │   ├── StatsSection.tsx      # Animated counters
│   │   │   ├── BrandIntroSection.tsx # SVG elevator animation card
│   │   │   ├── ServicesSection.tsx   # 6 service cards with hover
│   │   │   ├── ProjectsSection.tsx   # Masonry grid + filter (Framer)
│   │   │   ├── WhyUsSection.tsx      # 5 features + sticky cert panel
│   │   │   ├── TechnologySection.tsx # GSAP spec bars + ring system
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── ProcessSection.tsx    # GSAP ScrollTrigger timeline
│   │   │   ├── FAQSection.tsx        # Framer AnimatePresence accordion
│   │   │   ├── CTASection.tsx        # Glow CTA with floating badges
│   │   │   └── BlogSection.tsx       # 3-post preview grid
│   │   │
│   │   ├── three/
│   │   │   └── ElevatorScene.tsx     # React Three Fiber 3D scene
│   │   │
│   │   └── ui/
│   │       ├── CustomCursor.tsx      # Magnetic custom cursor
│   │       ├── ScrollProgress.tsx    # Top progress bar
│   │       ├── Toast.tsx             # Redux-driven toast notification
│   │       ├── RevealSection.tsx     # IntersectionObserver scroll reveal
│   │       └── AnimatedCounter.tsx   # Number counter animation
│   │
│   ├── hooks/
│   │   ├── redux.ts                  # Typed useAppDispatch / useAppSelector
│   │   ├── useLenis.ts               # Lenis smooth scroll hook
│   │   └── useScrollProgress.ts     # Scroll %, nav scrolled state
│   │
│   ├── store/
│   │   ├── index.ts                  # Redux store config
│   │   └── slices/uiSlice.ts         # UI state slice
│   │
│   ├── lib/
│   │   ├── data.ts                   # All site content / data
│   │   └── utils.ts                  # cn(), lerp(), clamp(), mapRange()
│   │
│   ├── types/index.ts                # All TypeScript interfaces
│   └── styles/globals.css            # Design tokens, animations, base styles
│
├── public/                           # Static assets
├── next.config.js                    # Next.js config (image optimization, headers)
├── tailwind.config.js                # Full custom design system
├── tsconfig.json
├── postcss.config.js
├── .eslintrc.json
├── .env.example
└── package.json
```

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `--black` | `#080808` | Page background |
| `--graphite` | `#111114` | Section backgrounds |
| `--blue` | `#2563eb` | Primary action |
| `--blue-glow` | `#3b82f6` | Accents, glows |
| `--gold` | `#c9a96e` | Italic highlights |
| `--silver` | `#a8aab8` | Body text |

### Typography
| Font | Variable | Usage |
|---|---|---|
| Cormorant Garamond | `--font-cormorant` | Display headings, italic accents |
| Syne | `--font-syne` | UI labels, buttons, nav |
| Inter | `--font-inter` | Body text, paragraphs |

### Component Classes
```css
.btn-primary     /* Blue filled CTA button */
.btn-ghost       /* Outlined CTA button */
.eyebrow         /* Section label with line prefix */
.display-xl/lg/md/sm  /* Responsive display headings */
.form-input-luxury    /* Dark themed form inputs */
.form-label-luxury    /* Uppercase form labels */
.tag-blue        /* Blue pill badge */
.glass-card      /* Glassmorphism card */
.section-container   /* Max-width centered container */
.reveal          /* Scroll reveal (adds is-visible class) */
```

---

## 📄 Pages

| Route | Page | Features |
|---|---|---|
| `/` | Home | Hero 3D, stats, services, projects, why us, tech, testimonials, process, FAQ, CTA, blog |
| `/about` | About | Story, stats, values, team, careers CTA |
| `/services` | Services | All 6 services with specs, features, alternating layout |
| `/projects` | Projects | Masonry grid with animated filter |
| `/technology` | Technology | GSAP spec bars, 3D rings, 6 tech cards |
| `/safety` | Safety | 6 standards + commitment section |
| `/maintenance` | AMC | Benefits, 3-tier pricing cards |
| `/industries` | Industries | 8 sector cards |
| `/blog` | Blog | Featured + grid listing |
| `/blog/[slug]` | Blog Post | Article, ToC sidebar, related posts |
| `/careers` | Careers | Perks, job listings with apply links |
| `/contact` | Contact | React Hook Form + contact info |
| `/contact` | Contact | 3-step multi-stage form |
| `/privacy-policy` | Privacy | Full legal content |
| `/terms-conditions` | Terms | Full legal content |
| `*` | 404 | Premium animated 404 |

---

## 🔧 Customisation

### Update content
All site data lives in `src/lib/data.ts` — edit services, projects, testimonials, jobs, blog posts, and more without touching any component files.

### Add a new page
1. Create `src/app/your-page/page.tsx`
2. Add to `NAV_ITEMS` in `src/lib/data.ts`
3. Add to sitemap in `src/app/sitemap.ts`

### Change brand colors
Edit CSS variables in `src/styles/globals.css` and Tailwind tokens in `tailwind.config.js`.

---

## 🚀 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📞 Support

**Onward Elevators** · info@onwardelevators.com · +91 800 100 2345

Built with ❤️ by the Onward Digital Team · © 2026
