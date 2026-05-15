'use client'
// src/app/contact/page.tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '@/hooks/redux'
import { showToast } from '@/store/slices/uiSlice'
import { Reveal } from '@/components/ui/RevealSection'
import { cn } from '@/lib/utils'

type QuoteForm = { name: string; company: string; email: string; phone: string; elevatorType: string; floors: string; quantity: string; location: string; buildingType: string; timeline: string; budget: string; notes: string }

const steps = ['Project Details', 'Requirements', 'Timeline & Budget']

export default function GetQuotePage() {
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(0)
  const { register, handleSubmit, reset, trigger, formState: { errors } } = useForm<QuoteForm>()

  const next = async () => {
    const fields: (keyof QuoteForm)[][] = [['name','email','phone'],['elevatorType','floors','quantity','buildingType'],['timeline']]
    const ok = await trigger(fields[step])
    if (ok) setStep(s => Math.min(s + 1, 2))
  }

  const submit = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    dispatch(showToast('Quote request submitted! Expect our response within 48 hours.'))
    reset(); setStep(0)
  }

  return (
    <>
      <section className="pt-44 pb-20 bg-graphite border-b border-white/7">
        <div className="section-container">
          <Reveal><p className="eyebrow mb-4">Free Consultation</p></Reveal>
          <Reveal delay={0.1}><h1 className="display-xl text-brand-white mb-6">Request a<br /><em className="italic-gold">Quote</em></h1></Reveal>
          <Reveal delay={0.2}><p className="text-silver text-[15px] font-light leading-[1.9] max-w-[480px]">Tell us about your project. Our engineering team will prepare a detailed, obligation-free quotation within 48 business hours.</p></Reveal>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="section-container">
          <div className="max-w-2xl">
            {/* Steps */}
            <Reveal className="flex items-center gap-0 mb-14">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center">
                  <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => i < step && setStep(i)}>
                    <div className={cn('w-8 h-8 border flex items-center justify-center font-ui text-[11px] font-bold transition-all duration-300',
                      i === step ? 'bg-blue border-blue-glow text-white' : i < step ? 'bg-blue/20 border-blue/50 text-blue-glow' : 'border-white/12 text-silver')}>
                      {i < step ? '✓' : i + 1}
                    </div>
                    <span className={cn('font-ui text-[9px] tracking-[0.15em] uppercase whitespace-nowrap', i === step ? 'text-blue-glow' : 'text-silver')}>{s}</span>
                  </div>
                  {i < steps.length - 1 && <div className={cn('h-px w-14 sm:w-24 mx-2 mb-5 transition-colors duration-500', i < step ? 'bg-blue-glow' : 'bg-white/7')} />}
                </div>
              ))}
            </Reveal>

            <form onSubmit={handleSubmit(submit)}>
              {step === 0 && (
                <Reveal className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="form-label-luxury">Full Name *</label><input {...register('name',{required:true})} placeholder="Your name" className={cn('form-input-luxury',errors.name&&'border-red-500/50')}/></div>
                    <div><label className="form-label-luxury">Company</label><input {...register('company')} placeholder="Your company" className="form-input-luxury"/></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="form-label-luxury">Email *</label><input {...register('email',{required:true})} type="email" placeholder="your@email.com" className={cn('form-input-luxury',errors.email&&'border-red-500/50')}/></div>
                    <div><label className="form-label-luxury">Phone *</label><input {...register('phone',{required:true})} type="tel" placeholder="+91 98000 00000" className={cn('form-input-luxury',errors.phone&&'border-red-500/50')}/></div>
                  </div>
                  <div><label className="form-label-luxury">Project Location</label><input {...register('location')} placeholder="City, State" className="form-input-luxury"/></div>
                  <button type="button" onClick={next} className="btn-primary w-full justify-center mt-2">Next: Requirements →</button>
                </Reveal>
              )}
              {step === 1 && (
                <Reveal className="flex flex-col gap-5">
                  <div><label className="form-label-luxury">Elevator Type *</label>
                    <select {...register('elevatorType',{required:true})} className={cn('form-input-luxury',errors.elevatorType&&'border-red-500/50')}>
                      <option value="">Select type</option>
                      <option>Passenger Elevator</option><option>Hospital / Medical Elevator</option>
                      <option>Freight / Goods Elevator</option><option>Capsule / Panoramic Elevator</option>
                      <option>Escalator</option><option>Multiple Types</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="form-label-luxury">No. of Floors *</label><input {...register('floors',{required:true})} type="number" placeholder="e.g. 10" className={cn('form-input-luxury',errors.floors&&'border-red-500/50')}/></div>
                    <div><label className="form-label-luxury">No. of Lifts *</label><input {...register('quantity',{required:true})} type="number" placeholder="e.g. 2" className={cn('form-input-luxury',errors.quantity&&'border-red-500/50')}/></div>
                  </div>
                  <div><label className="form-label-luxury">Building Type *</label>
                    <select {...register('buildingType',{required:true})} className={cn('form-input-luxury',errors.buildingType&&'border-red-500/50')}>
                      <option value="">Select type</option>
                      <option>Residential Apartment</option><option>Commercial / Office</option>
                      <option>Hotel / Hospitality</option><option>Hospital / Healthcare</option>
                      <option>Retail / Mall</option><option>Industrial / Warehouse</option><option>Other</option>
                    </select>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={()=>setStep(0)} className="btn-ghost flex-1 justify-center">← Back</button>
                    <button type="button" onClick={next} className="btn-primary flex-1 justify-center">Next: Timeline →</button>
                  </div>
                </Reveal>
              )}
              {step === 2 && (
                <Reveal className="flex flex-col gap-5">
                  <div><label className="form-label-luxury">Expected Timeline *</label>
                    <select {...register('timeline',{required:true})} className={cn('form-input-luxury',errors.timeline&&'border-red-500/50')}>
                      <option value="">Select timeline</option>
                      <option>Immediately (0–3 months)</option><option>Short-term (3–6 months)</option>
                      <option>Medium-term (6–12 months)</option><option>Planning stage (12+ months)</option>
                    </select>
                  </div>
                  <div><label className="form-label-luxury">Approximate Budget</label>
                    <select {...register('budget')} className="form-input-luxury">
                      <option value="">Prefer not to say</option>
                      <option>Under ₹10 Lakhs</option><option>₹10 – ₹25 Lakhs</option>
                      <option>₹25 – ₹50 Lakhs</option><option>₹50 Lakhs – ₹1 Crore</option>
                      <option>Above ₹1 Crore</option>
                    </select>
                  </div>
                  <div><label className="form-label-luxury">Additional Requirements</label>
                    <textarea {...register('notes')} rows={4} placeholder="Any specific requirements or questions..." className="form-input-luxury resize-y"/>
                  </div>
                  <p className="text-silver text-[11px] leading-[1.7]">By submitting you agree to our <a href="/privacy-policy" className="text-blue-glow no-underline hover:underline">Privacy Policy</a>.</p>
                  <div className="flex gap-3">
                    <button type="button" onClick={()=>setStep(1)} className="btn-ghost flex-1 justify-center">← Back</button>
                    <button type="button" onClick={handleSubmit(submit)} disabled={loading} className="btn-primary flex-1 justify-center disabled:opacity-60">
                      {loading ? <span className="flex items-center gap-2"><span className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin"/>Submitting…</span> : 'Submit Quote Request →'}
                    </button>
                  </div>
                </Reveal>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
