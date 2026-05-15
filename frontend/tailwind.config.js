/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-graphite','bg-graphite-2','bg-graphite-3',
    'text-silver','text-silver-2','text-brand-white','text-blue-glow','text-gold',
    'border-white/7','border-white/12',
    'bg-blue-dim','bg-blue-muted','italic-gold',
  ],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        graphite: {
          DEFAULT: '#111114',
          2: '#17171c',
          3: '#1e1e24',
          4: '#25252e',
        },
        silver: {
          DEFAULT: '#a8aab8',
          2: '#c8cadb',
        },
        blue: {
          DEFAULT: '#2563eb',
          glow: '#3b82f6',
          dim: 'rgba(37,99,235,0.15)',
          muted: 'rgba(37,99,235,0.08)',
        },
        gold: { DEFAULT: '#c9a96e' },
        brand: { white: '#f2f2f5' },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        ui: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
