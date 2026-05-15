// src/app/terms-conditions/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Onward Elevators Terms and Conditions — governing use of our website and services.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using the Onward Elevators website (onwardelevators.com) and associated services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you must immediately discontinue use of our website.',
  },
  {
    title: '2. Services',
    content: 'Onward Elevators Pvt. Ltd. provides elevator design, manufacturing, installation, modernisation, and maintenance services. All formal service agreements, quotations, and contracts are subject to separate written agreements. Content published on this website does not constitute a binding offer, guarantee, or contract unless expressly stated.',
  },
  {
    title: '3. Intellectual Property',
    content: 'All content on this website — including text, graphics, logos, images, technical drawings, animations, and software code — is the exclusive property of Onward Elevators Pvt. Ltd. and is protected by applicable intellectual property laws. Reproduction, redistribution, or commercial use without prior written consent is strictly prohibited.',
  },
  {
    title: '4. Accuracy of Information',
    content: 'While we strive to maintain accurate and up-to-date information on our website, we make no warranties or representations as to the completeness, accuracy, or currency of any content. Specifications, prices, and availability are subject to change without notice. Always confirm current specifications with our sales team.',
  },
  {
    title: '5. Limitation of Liability',
    content: 'Onward Elevators shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this website or our services. Our maximum aggregate liability for any claim arising in connection with a specific service engagement is limited to the total fees paid for that engagement.',
  },
  {
    title: '6. Quotations & Pricing',
    content: 'Quotations issued by Onward Elevators are valid for 30 days from the date of issue unless otherwise specified. Prices are subject to applicable taxes, site conditions, and project-specific requirements. A formal purchase order and signed agreement are required to initiate any project.',
  },
  {
    title: '7. Warranties',
    content: 'All Onward Elevators installations are covered by our standard 10-year warranty on structural and drive components, and a 2-year warranty on electrical and electronic components, subject to the terms of the warranty certificate issued at project handover. Warranty is void if the elevator is modified, misused, or maintained by unauthorised personnel.',
  },
  {
    title: '8. Governing Law',
    content: 'These Terms and Conditions are governed by the laws of the Republic of India. Any disputes arising from or relating to these terms or our services shall be subject to the exclusive jurisdiction of the competent courts in Indore, Madhya Pradesh, India. All disputes shall first be attempted to be resolved through good-faith negotiation.',
  },
  {
    title: '9. Force Majeure',
    content: 'Onward Elevators shall not be liable for any delay or failure in performance arising from circumstances beyond our reasonable control, including but not limited to natural disasters, strikes, government regulations, pandemics, or supply chain disruptions.',
  },
  {
    title: '10. Amendments',
    content: 'We reserve the right to modify these Terms and Conditions at any time without prior notice. Continued use of this website following notification or publication of changes constitutes acceptance of the revised Terms. We recommend reviewing this page periodically.',
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black pt-36 pb-24">
      <div className="max-w-[760px] mx-auto px-6 lg:px-0">
        <div className="mb-12">
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-blue-glow mb-4">Legal</p>
          <h1 className="font-display text-[clamp(36px,6vw,64px)] font-light text-brand-white mb-3">Terms & Conditions</h1>
          <p className="text-silver text-[12px] italic">Effective Date: 1 January 2026</p>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2 className="font-ui text-[13px] font-bold tracking-[0.1em] uppercase text-blue-glow mb-3">{sec.title}</h2>
              <p className="text-silver text-[14px] font-light leading-[1.95]">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-white/7">
          <a href="/" className="btn-ghost cursor-none">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
