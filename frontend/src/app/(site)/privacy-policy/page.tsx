// src/app/privacy-policy/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Onward Elevators Privacy Policy — how we collect, use, and protect your personal information.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: 'Onward Elevators Pvt. Ltd. ("we", "our", "Onward") collects information you provide when you submit enquiry forms, request quotes, or contact us. This includes your name, email address, phone number, company details, and project information necessary to provide our services. We may also collect technical data such as IP addresses, browser type, and pages visited when you use our website.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use collected information to respond to your enquiries, prepare quotations, deliver contracted services, and send relevant industry communications with your explicit consent. We do not sell, rent, or share your personal information with third parties for marketing purposes. Aggregate, anonymised data may be used to improve our services and website experience.',
  },
  {
    title: '3. Data Security',
    content: 'We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. All data transmission via our website is encrypted using industry-standard TLS protocols. Our internal systems are access-controlled and subject to regular security audits.',
  },
  {
    title: '4. Cookies & Tracking',
    content: 'Our website uses essential cookies necessary for operation and analytical cookies (via privacy-respecting tools) to understand how visitors interact with our site. You may control cookie preferences through your browser settings. Disabling essential cookies may affect certain website functionality. We do not use advertising or cross-site tracking cookies.',
  },
  {
    title: '5. Data Retention',
    content: 'We retain personal data for as long as necessary to provide our services or as required by applicable law. Enquiry data is retained for three years from last contact unless a service contract exists. You may request deletion of your data at any time, subject to legal retention obligations.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to access, correct, or delete your personal data held by us. You may also request portability of your data or object to specific processing activities. To exercise these rights, contact us at privacy@onwardelevators.com. We will respond to all legitimate requests within 30 days.',
  },
  {
    title: '7. Third-Party Links',
    content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.',
  },
  {
    title: '8. Changes to This Policy',
    content: 'We reserve the right to update this Privacy Policy at any time. We will notify you of significant changes by posting a prominent notice on our website. Continued use of the site following notification constitutes acceptance of the updated policy.',
  },
  {
    title: '9. Contact',
    content: 'For privacy-related queries or to exercise your rights, contact our Data Protection Officer at privacy@onwardelevators.com or write to: Onward Elevators Pvt. Ltd., 45 Vijay Nagar Square, Indore, Madhya Pradesh 452010, India.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black pt-36 pb-24">
      <div className="max-w-[760px] mx-auto px-6 lg:px-0">
        <div className="mb-12">
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-blue-glow mb-4">Legal</p>
          <h1 className="font-display text-[clamp(36px,6vw,64px)] font-light text-brand-white mb-3">Privacy Policy</h1>
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
