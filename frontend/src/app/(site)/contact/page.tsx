'use client'
// src/app/contact/page.tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '@/hooks/redux'
import { showToast } from '@/store/slices/uiSlice'
import { Reveal } from '@/components/ui/RevealSection'
import { cn } from '@/lib/utils'

type FormData = { name: string; email: string; phone: string; subject: string; message: string }

const contactInfo = [
  { icon: '📍', label: 'Head Office', value: 'C-40, Vidhyanagar,Narmadapuram Road, Bhopal, Madhya Pradesh', href: null },
  { icon: '📞', label: 'Sales & Enquiries', value: '+0755-4941509', href: 'tel: 0755-4941509' },
  { icon: '🚨', label: '24/7 Emergency', value: '+0755-4941509', href: 'tel: 0755-4941509' },
  { icon: '✉', label: 'Email', value: 'onwardelevators@gmail.com', href: 'mailto:onwardelevators@gmail.com' },
  { icon: '💬', label: 'WhatsApp Business', value: 'Chat with us instantly', href: 'https://wa.me/918001002345' },
  { icon: '🕐', label: 'Business Hours', value: 'Mon–Sat: 9 AM – 6 PM | Emergency: 24/7', href: null },
]

export default function ContactPage() {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    dispatch(showToast("Message sent! We'll respond within 24 hours."))
    reset()
  }

  return (
    <>
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Reach Us</p></Reveal>
          <Reveal delay={0.1}><h1 className="display-xl text-brand-white mb-6">Let&apos;s <em className="italic-gold">Connect</em></h1></Reveal>
          <Reveal delay={0.2}><p className="text-silver text-[15px] font-light leading-[1.9] max-w-[480px]">Whether you have a project in mind, need a quote, or just want to learn more — we would love to hear from you.</p></Reveal>
        </div>
      </section>
      <section className="py-24 bg-black">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <Reveal>
              <p className="eyebrow mb-8">Send a Message</p>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div>
                  <label className="form-label-luxury">Full Name *</label>
                  <input {...register('name', { required: true })} placeholder="Your full name" className={cn('form-input-luxury', errors.name && 'border-red-500/50')} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label-luxury">Email *</label>
                    <input {...register('email', { required: true })} type="email" placeholder="your@email.com" className={cn('form-input-luxury', errors.email && 'border-red-500/50')} />
                  </div>
                  <div>
                    <label className="form-label-luxury">Phone</label>
                    <input {...register('phone')} type="tel" placeholder="+91 98000 00000" className="form-input-luxury" />
                  </div>
                </div>
                <div>
                  <label className="form-label-luxury">Subject</label>
                  <input {...register('subject')} placeholder="How can we help?" className="form-input-luxury" />
                </div>
                <div>
                  <label className="form-label-luxury">Message *</label>
                  <textarea {...register('message', { required: true })} rows={5} placeholder="Tell us about your requirements..." className={cn('form-input-luxury resize-y', errors.message && 'border-red-500/50')} />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
                  {loading ? <span className="flex items-center gap-2"><span className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" />Sending…</span> : 'Send Message →'}
                </button>
              </form>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="eyebrow mb-8">Contact Information</p>
              <div className="flex flex-col gap-6">
                {contactInfo.map(info => (
                  <div key={info.label} className="group flex gap-4 items-start">
                    <div className="w-11 h-11 border border-white/7 flex items-center justify-center text-lg flex-shrink-0 group-hover:border-blue-glow/40 transition-colors duration-300">{info.icon}</div>
                    <div>
                      <p className="font-ui text-[10px] font-semibold tracking-[0.2em] uppercase text-blue-glow mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-display text-[15px] font-light text-brand-white no-underline hover:text-blue-glow transition-colors duration-300 cursor-none">{info.value}</a>
                      ) : (
                        <p className="font-display text-[15px] font-light text-brand-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 h-48 bg-graphite-2 border border-white/7 flex items-center justify-center relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                  {[0,1,2,3,4,5,6].map(i => <line key={i} x1="0" y1={i*33} x2="400" y2={i*33} stroke="rgba(59,130,246,0.4)" strokeWidth="0.5"/>)}
                  {[0,1,2,3,4,5,6,7,8,9,10].map(i => <line key={i} x1={i*40} y1="0" x2={i*40} y2="200" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5"/>)}
                  <circle cx="200" cy="100" r="8" fill="rgba(37,99,235,0.8)"/>
                  <circle cx="200" cy="100" r="16" fill="none" stroke="rgba(59,130,246,0.4)" strokeWidth="1">
                    <animate attributeName="r" values="8;24" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-silver relative z-10">📍 Bhopal, Madhya Pradesh</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
