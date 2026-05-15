// src/types/index.ts

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Service {
  id: string
  icon: string
  name: string
  shortDesc: string
  fullDesc: string
  specs: { label: string; value: string }[]
  features: string[]
}

export interface Project {
  id: string
  name: string
  location: string
  image: string
  // category: 'residential' | 'commercial' | 'healthcare' | 'hospitality' | 'retail' | 'industrial'
  tag: string
  detail: string
  year: string
  gradient: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  initials: string
  rating: number
}

export interface BlogPost {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  slug: string
  gradient: string
  excerpt: string
}

export interface Job {
  id: string
  title: string
  location: string
  type: string
  salary: string
  department: string
}

export interface StatItem {
  value: number
  suffix: string
  label: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TechFeature {
  icon: string
  title: string
  description: string
}

export interface MaintenancePlan {
  name: string
  price: string
  period: string
  color: string
  popular?: boolean
  features: string[]
  missing?: string[]
}

export interface SafetyStandard {
  badge: string
  title: string
  description: string
}

export interface UIState {
  mobileMenuOpen: boolean
  activePage: string
  scrollProgress: number
  toastMessage: string | null
  toastVisible: boolean
  activeFilter: string
}

export interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
}
