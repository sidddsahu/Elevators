// import type {
//   Service, Project, Testimonial, BlogPost,
//   Job, StatItem, ProcessStep, FAQItem,
//   TechFeature, MaintenancePlan, SafetyStandard, NavItem,
// } from '@/types'

// export const NAV_ITEMS: NavItem[] = [
//   { label: 'About', href: '/about' },
//   {
//     label: 'Services', href: '/services',
//     children: [
//       { label: 'Passenger Elevators', href: '/services#passenger' },
//       { label: 'Hospital Elevators', href: '/services#hospital' },
//       { label: 'Freight Elevators', href: '/services#freight' },
//       { label: 'Capsule Elevators', href: '/services#capsule' },
//       { label: 'Escalators', href: '/services#escalators' },
//     ],
//   },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Technology', href: '/technology' },
//   { label: 'Safety', href: '/safety' },
//   { label: 'Maintenance', href: '/maintenance' },
//   // { label: 'Blog', href: '/blog' },
//   // { label: 'Contact', href: '/contact' },
// ]

// export const STATS: StatItem[] = [
//   { value: 2400, suffix: '+', label: 'Installations Completed' },
//   { value: 18,   suffix: '+', label: 'Years of Excellence' },
//   { value: 98,   suffix: '%', label: 'Client Satisfaction Rate' },
//   { value: 32,   suffix: '+', label: 'Cities Served' },
// ]

// export const SERVICES: Service[] = [
//   {
//     id: 'passenger',
//     icon: '🏢',
//     name: 'Passenger Elevators',
//     shortDesc: 'High-speed, whisper-quiet passenger elevators engineered for comfort, efficiency, and architectural harmony in any building type.',
//     fullDesc: 'Our flagship passenger elevators combine German engineering with bespoke craftsmanship. Available in traction, hydraulic, and MRL configurations, they deliver whisper-quiet operation and architectural harmony across residential towers, corporate campuses, and mixed-use developments.',
//     specs: [
//       { label: 'Speed Range',     value: '0.5 m/s to 6.0 m/s' },
//       { label: 'Load Capacity',   value: '320 kg to 2,000 kg' },
//       { label: 'Travel Height',   value: 'Up to 450 m' },
//       { label: 'Cabin Finishes',  value: '100+ premium options' },
//       { label: 'Drive System',    value: 'VVVF AC Gearless' },
//       { label: 'Energy Class',    value: 'A+ / BEE 5-Star' },
//     ],
//     features: [
//       'Machine Room Less (MRL) option',
//       'Destination Dispatch System',
//       'Regenerative Drive Technology',
//       'Active Vibration Control below 0.02g',
//       'Emergency Auto Rescue Device',
//       'IoT Real-Time Monitoring',
//       'BMS and BAS Integration',
//       '10-Year Warranty Standard',
//     ],
//   },
//   {
//     id: 'hospital',
//     icon: '🏥',
//     name: 'Hospital Elevators',
//     shortDesc: 'Specialized medical-grade elevators built to the highest hygiene and reliability standards, ensuring critical care continuity.',
//     fullDesc: 'Purpose-engineered for healthcare environments. Extra-wide cabins accommodate hospital beds and medical equipment. Antimicrobial surfaces, hands-free controls, and priority evacuation modes are built in as standard across all hospital elevator models.',
//     specs: [
//       { label: 'Cabin Width',         value: 'Up to 2,400 mm' },
//       { label: 'Load Capacity',       value: '1,600 kg to 3,200 kg' },
//       { label: 'Door Width',          value: 'Up to 1,300 mm' },
//       { label: 'Surface Treatment',   value: 'Hospital-grade antimicrobial' },
//       { label: 'Fire Mode',           value: 'EN 81-73 compliant' },
//       { label: 'Backup Power',        value: 'ARD and UPS integrated' },
//     ],
//     features: [
//       'EN 81-73 Fire Emergency Mode',
//       'Automatic Rescue Device (ARD)',
//       'Priority Hospital Service Mode',
//       'Antimicrobial Stainless Surfaces',
//       'Hands-Free Voice Controls',
//       'Oversize Door Opening 1300mm',
//       'Stretcher and Bed Accommodation',
//       '24/7 Remote Monitoring',
//     ],
//   },
//   {
//     id: 'freight',
//     icon: '📦',
//     name: 'Freight Elevators',
//     shortDesc: 'Industrial-strength freight solutions with heavy-duty cabins, reinforced structures, and high-capacity load ratings.',
//     fullDesc: 'Heavy-duty industrial freight elevators engineered for warehouses, factories, logistics hubs, and industrial plants. Reinforced steel cabins, heavy-gauge flooring, and robust drive systems handle demanding load cycles without compromise.',
//     specs: [
//       { label: 'Load Capacity', value: '500 kg to 10,000 kg' },
//       { label: 'Cabin Size',    value: 'Up to 4m x 6m custom' },
//       { label: 'Door Type',     value: 'Bi-fold / collapsible gate' },
//       { label: 'Floor Finish',  value: '10mm chequer plate steel' },
//       { label: 'Drive System',  value: 'Hydraulic or Traction' },
//       { label: 'Duty Cycle',    value: 'Continuous industrial rated' },
//     ],
//     features: [
//       'Load capacities up to 10,000 kg',
//       'Custom cabin dimensions',
//       'Forklift-compatible floor rating',
//       'Industrial-grade door systems',
//       'ATEX-rated for hazardous zones',
//       'Anti-corrosion treatment',
//       'Overload protection system',
//       'Variable speed hydraulic drive',
//     ],
//   },
//   {
//     id: 'capsule',
//     icon: '💎',
//     name: 'Capsule Elevators',
//     shortDesc: 'Architectural statement elevators with panoramic glass cabins, transforming vertical movement into a visual experience.',
//     fullDesc: 'Panoramic glass cabins that transform vertical movement into a cinematic visual journey. Available in circular, rectangular, and fully custom geometries for hotel lobbies, atria, retail centres, and residential statement architecture.',
//     specs: [
//       { label: 'Visibility',    value: 'Full 360 degree panoramic glass' },
//       { label: 'Load Capacity', value: '320 kg to 1,000 kg' },
//       { label: 'Speed',         value: '0.5 m/s to 1.5 m/s' },
//       { label: 'Glass Type',    value: 'Laminated safety or tempered' },
//       { label: 'Cabin Shape',   value: 'Round, Square, or Custom' },
//       { label: 'Drive',         value: 'MRL Traction or Hydraulic' },
//     ],
//     features: [
//       'Full panoramic glass cabin',
//       'Architectural exterior design',
//       'LED ambient lighting system',
//       'Flush glass shaft option',
//       'Circular and custom geometries',
//       'Interior design customization',
//       'Silent belt drive option',
//       'Award-winning aesthetics',
//     ],
//   },
//   {
//     id: 'escalators',
//     icon: '🔄',
//     name: 'Escalators',
//     shortDesc: 'Continuous-flow escalator systems for high-traffic environments, combining durability with elegant aesthetics.',
//     fullDesc: 'High-capacity continuous-flow escalator systems for malls, airports, transit hubs, and public buildings. Variable-speed drives, energy-saving standby modes, and stainless-steel construction standard. Available in inclinations of 30 and 35 degrees.',
//     specs: [
//       { label: 'Inclination', value: '30 or 35 degrees' },
//       { label: 'Step Width',  value: '600mm / 800mm / 1000mm' },
//       { label: 'Capacity',    value: 'Up to 9,000 persons/hr' },
//       { label: 'Speed',       value: '0.4 / 0.5 / 0.65 m/s' },
//       { label: 'Rise Height', value: 'Up to 12 m' },
//       { label: 'Finish',      value: 'Brushed SS / custom' },
//     ],
//     features: [
//       'Variable speed drive system',
//       'Energy-saving standby mode',
//       'Stainless steel construction',
//       'Safety edge detection',
//       'Anti-reversal device',
//       'Step illumination LED',
//       'Low noise operation below 58dB',
//       'BMS integration ready',
//     ],
//   },
//   {
//     id: 'maintenance',
//     icon: '🔧',
//     name: 'AMC Maintenance',
//     shortDesc: '24/7 annual maintenance contracts with predictive diagnostics, emergency response, and guaranteed uptime SLAs.',
//     fullDesc: 'Comprehensive Annual Maintenance Contracts covering all elevator brands and models. Predictive diagnostics via IoT sensors, 24/7 remote monitoring, and guaranteed 45-minute emergency response anywhere in our service network.',
//     specs: [
//       { label: 'Response Time',   value: '45 minutes guaranteed' },
//       { label: 'Coverage',        value: '24/7 x 365 days' },
//       { label: 'Monitoring',      value: 'Real-time IoT dashboard' },
//       { label: 'Uptime SLA',      value: '99.9% guaranteed' },
//       { label: 'Brands Covered',  value: 'All major manufacturers' },
//       { label: 'Reporting',       value: 'Monthly performance report' },
//     ],
//     features: [
//       'Predictive AI diagnostics',
//       '24/7 remote IoT monitoring',
//       '45-minute emergency response',
//       'All parts and labour covered',
//       'Regulatory inspection support',
//       'Dedicated service engineer',
//       'Monthly performance reports',
//       'Multi-brand coverage',
//     ],
//   },
// ]

// export const PROJECTS: Project[] = [
//   {
//     id: '1', name: 'Marina Pinnacle Tower', location: 'Dubai, UAE',
//     category: 'residential', tag: 'Residential · Dubai',
//     detail: '12 High-Speed Passenger Elevators', year: '2026',
//     gradient: 'from-[#060614] via-[#0d0d28] to-[#0d0d1e]',
//   },
//   {
//     id: '2', name: 'Apex Business Center', location: 'Mumbai, India',
//     category: 'commercial', tag: 'Corporate · Mumbai',
//     detail: '8 High-Speed Elevators', year: '2025',
//     gradient: 'from-[#06140c] via-[#081208] to-[#0a1a0a]',
//   },
//   {
//     id: '3', name: 'Solaris Grand Resort', location: 'Goa, India',
//     category: 'hospitality', tag: 'Hospitality · Goa',
//     detail: '4 Capsule + 2 Service Elevators', year: '2025',
//     gradient: 'from-[#1a0e0a] via-[#12080a] to-[#18060a]',
//   },
//   {
//     id: '4', name: 'Medanta Complex', location: 'New Delhi, India',
//     category: 'healthcare', tag: 'Healthcare · Delhi',
//     detail: '6 Hospital Elevators', year: '2024',
//     gradient: 'from-[#0e0e1a] via-[#080812] to-[#0a0a1a]',
//   },
//   {
//     id: '5', name: 'Nexus Mall', location: 'Bangalore, India',
//     category: 'retail', tag: 'Retail · Bangalore',
//     detail: '4 Escalators + 3 Elevators', year: '2024',
//     gradient: 'from-[#1a1a0a] via-[#12120a] to-[#181808]',
//   },
//   {
//     id: '6', name: 'Emerald Heights', location: 'Pune, India',
//     category: 'residential', tag: 'Residential · Pune',
//     detail: '6 Passenger Elevators', year: '2024',
//     gradient: 'from-[#0a1a1a] via-[#081212] to-[#0a1818]',
//   },
//   {
//     id: '7', name: 'Skyline Suites', location: 'Hyderabad, India',
//     category: 'residential', tag: 'Residential · Hyderabad',
//     detail: '8 Passenger Elevators', year: '2023',
//     gradient: 'from-[#14080a] via-[#180a0c] to-[#120608]',
//   },
//   {
//     id: '8', name: 'Global Trade Tower', location: 'Chennai, India',
//     category: 'commercial', tag: 'Commercial · Chennai',
//     detail: '10 High-Speed + 2 Freight Elevators', year: '2023',
//     gradient: 'from-[#081014] via-[#0a1218] to-[#081014]',
//   },
// ]

// export const TESTIMONIALS: Testimonial[] = [
//   {
//     id: '1',
//     quote: 'Onward Elevators transformed our 40-story tower project. Their engineering precision and the sheer quality of the finished product exceeded every expectation. The professionalism from consultation to handover was exemplary.',
//     author: 'Rajesh Kumar',
//     title: 'Project Director',
//     company: 'Lodha Group',
//     initials: 'RK',
//     rating: 5,
//   },
//   {
//     id: '2',
//     quote: 'For our 500-bed hospital, reliability is non-negotiable. Onward hospital elevators have maintained 99.9% uptime over three years. Their service team responds within the hour, every single time. Absolute peace of mind.',
//     author: 'Dr. Sunita Arora',
//     title: 'CEO',
//     company: 'Medanta Healthcare',
//     initials: 'SA',
//     rating: 5,
//   },
//   {
//     id: '3',
//     quote: 'The capsule elevator in our hotel lobby has become an attraction. Guests stop to photograph it. Onward delivered something truly architectural — the craftsmanship is stunning and it runs perfectly after two years.',
//     author: 'Priya Mehta',
//     title: 'Owner and Managing Director',
//     company: 'Solaris Grand Hotels',
//     initials: 'PM',
//     rating: 5,
//   },
// ]




// export const PROCESS_STEPS: ProcessStep[] = [
//   { number: '01', title: 'Consultation', description: 'Site survey, architectural review, and requirement analysis by our senior engineers.' },
//   { number: '02', title: 'Design',       description: 'Custom elevator design aligned with your building aesthetic and structural specifications.' },
//   { number: '03', title: 'Engineering',  description: 'Precision manufacturing with ISO-certified quality control at every production stage.' },
//   { number: '04', title: 'Installation', description: 'Expert installation by certified technicians with minimal disruption to operations.' },
//   { number: '05', title: 'Handover',     description: 'Comprehensive testing, certification, and handover with full operator training included.' },
// ]

// export const FAQ_ITEMS: FAQItem[] = [
//   {
//     question: 'What is the typical lead time from order to installation?',
//     answer: 'Depending on the elevator type and complexity, our typical lead time ranges from 8 to 16 weeks from confirmed order. Passenger elevators average 10 to 12 weeks, while custom capsule or high-speed units may require 14 to 18 weeks. We provide a detailed project timeline during the consultation phase.',
//   },
//   {
//     question: 'Do you offer maintenance contracts for existing elevators?',
//     answer: 'Yes. Our Annual Maintenance Contracts (AMC) cover comprehensive preventive maintenance, 24/7 emergency callouts, and parts replacement. We also take over maintenance of elevators installed by other manufacturers after a thorough inspection and condition assessment.',
//   },
//   {
//     question: 'What are your payment terms for new installations?',
//     answer: 'We offer flexible payment structures typically structured as 30% advance, 40% on delivery, and 30% on commissioning. For large-scale projects with multiple units, we work with clients on customized milestone-based payment schedules.',
//   },
//   {
//     question: 'Can existing elevator shafts be retrofitted with modern units?',
//     answer: 'Absolutely. Modernization is one of our core competencies. Our engineers assess existing shaft dimensions and structural conditions, then design custom solutions that maximize performance within existing constraints — often with zero machine room requirement.',
//   },
//   {
//     question: 'Are your elevators compliant with Indian building codes?',
//     answer: 'All Onward Elevators are designed and tested to exceed National Building Code (NBC) requirements, BIS standards, and local municipal corporation specifications. We handle all inspection and approval documentation as part of the installation package.',
//   },
// ]

// export const TECH_FEATURES: TechFeature[] = [
//   {
//     icon: '⚡',
//     title: 'VVVF AC Gearless Drive',
//     description: 'Variable voltage, variable frequency drive eliminates gear friction, reducing energy consumption by up to 40% while delivering ultra-smooth acceleration and deceleration profiles across all speed ranges.',
//   },
//   {
//     icon: '🔮',
//     title: 'AI Predictive Maintenance',
//     description: 'Machine learning algorithms analyse 200+ sensor data points in real-time, predicting component wear before failure occurs — eliminating unplanned downtime and reducing maintenance costs by 35%.',
//   },
//   {
//     icon: '♻️',
//     title: 'Regenerative Braking',
//     description: 'Kinetic energy from descending cabins is converted back to electrical power and fed into the building grid. In high-rise applications, this can generate 30 to 40% of the elevator total energy consumption.',
//   },
//   {
//     icon: '📡',
//     title: 'IoT Remote Monitoring',
//     description: '24/7 cloud-based monitoring of all installed units. Building managers access real-time dashboards showing elevator status, usage statistics, energy consumption, and maintenance scheduling.',
//   },
//   {
//     icon: '🏢',
//     title: 'Smart Building Integration',
//     description: 'BMS and BAS integration, access control, destination dispatch, and occupancy-based traffic management. Systems communicate via BACnet, Modbus, and open APIs with all major building platforms.',
//   },
//   {
//     icon: '🛡️',
//     title: 'Active Vibration Control',
//     description: 'Hydraulic roller guide shoes with active vibration dampening maintain cabin vibration below 0.02g — imperceptible to occupants even at maximum speed, delivering the smoothest possible ride quality.',
//   },
// ]

// // export const MAINTENANCE_PLANS: MaintenancePlan[] = [
// //   {
// //     name: 'Essential',
// //     price: 'Rs. 18,000',
// //     period: '/year',
// //     color: 'border-white/10',
// //     features: ['Quarterly preventive visits', 'Lubrication and cleaning', 'Safety checks', 'Business-hours support'],
// //     missing: ['Emergency callouts', 'Parts replacement'],
// //   },
// //   {
// //     name: 'Premium',
// //     price: 'Rs. 36,000',
// //     period: '/year',
// //     color: 'border-blue-glow',
// //     popular: true,
// //     features: ['Monthly preventive visits', 'Full lubrication and alignment', '24/7 emergency callouts', '45-min response guarantee', 'Wear parts included'],
// //     missing: ['Major parts replacement'],
// //   },
// //   {
// //     name: 'Elite',
// //     price: 'Custom',
// //     period: '',
// //     color: 'border-gold',
// //     features: ['Fortnightly visits', 'Dedicated service engineer', '24/7 priority response', 'All parts covered', 'Real-time IoT dashboard', 'Guaranteed 99.9% uptime'],
// //   },
// // ]

// export const SAFETY_STANDARDS: SafetyStandard[] = [
//   { badge: 'EN 81-20:2014', title: ' Auto Rescue Device (ARD)',  description: 'In case of a mainpower supply grid failure, the system automatically takes control. The elevator safely moves to the nearest floor in the downwarddirection, opens the doors automatically, andensures passengers step out safely.' },
//   { badge: 'EN 81-50:2014', title: 'Design Rules and Calculations',  description: 'Design rules, calculations, examinations, and tests for lift components including ropes, sheaves, pulleys, drums, and all safety components.' },
//   { badge: 'NBC 2016',      title: 'National Building Code India',   description: 'All installations exceed the specifications of the National Building Code of India for lifts, escalators, and moving walks in all building categories.' },
//   { badge: 'IS 14665',      title: 'Indian Standard for Lifts',     description: 'Full compliance with BIS IS 14665 series covering electric traction elevators, hydraulic elevators, and escalators under Indian Standards.' },
//   { badge: 'EN 81-73',      title: 'Fire Emergency Behaviour',      description: 'Elevator behaviour during fire situations including firefighters service modes, emergency evacuation, and recall to designated floors.' },
//   { badge: 'ISO 25745',     title: 'Energy Performance',            description: 'Energy performance measurement and classification — all our systems achieve the highest energy efficiency classifications under this international standard.' },
// ]

// export const INDUSTRIES = [
//   'Residential Towers',
//   'Corporate Headquarters',
//   'Luxury Hotels',
//   'Healthcare Facilities',
//   'Shopping Malls',
//   'Industrial Plants',
//   'Airport Terminals',
//   'Heritage Buildings',
// ]

import type {
  Service, Project, Testimonial,
   StatItem, ProcessStep, FAQItem,
  TechFeature,  SafetyStandard, NavItem,
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Passenger Lift', href: '/services#passenger' },
      { label: 'Home Lift', href: '/services#homelift' },
      { label: 'Goods Lift', href: '/services#goods' },
      { label: 'Hospital Lift', href: '/services#hospital' },
      { label: 'Hydraulic Elevator', href: '/services#hydraulic' },
      { label: 'Dumbwaiter', href: '/services#dumbwaiter' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Technology', href: '/technology' },
  { label: 'Safety', href: '/safety' },
  { label: 'Maintenance', href: '/maintenance' },
  // { label: 'Blog', href: '/blog' },
  // { label: 'Contact', href: '/contact' },
]

// ─── HERO / HOME ────────────────────────────────────────────────────────────

export const HERO = {
  heading: 'Step Forward Smoothly, Safely',
  subheading:
    'Premium, secure, and innovative vertical mobility solutions across Bhopal and Madhya Pradesh. Engineering absolute reliability for residential, commercial, and industrial landmarks.',
  cta: {
    primary: 'Explore Our Products',
    secondary: 'Get a Free Quote',
  },
}

// ─── ABOUT INTRO (Short summary shown on homepage) ──────────────────────────

export const ABOUT_INTRO = `Welcome to Onward Elevators, a dynamic enterprise promoted by seasoned industry professionals with extensive experience in leading Multi-National Corporation (MNC) elevator brands. Operating actively across Bhopal and Madhya Pradesh, we provide exceptional vertical transportation solutions that perfectly combine technological advancement with elegant aesthetics. From iconic government infrastructures to premium residential spaces, we elevate mobility with an uncompromising focus on safety, continuous innovation, and prompt service.`

// ─── CORE HIGHLIGHTS (Why Choose Us) ────────────────────────────────────────

export const CORE_HIGHLIGHTS = [
  {
    title: 'MNC Corporate Expertise',
    description:
      'Driven by a core team with deep-rooted technical experience in global elevator standards.',
  },
  {
    title: 'Proven Track Record',
    description:
      'Trusted by top-class builders and elite state government departments.',
  },
  {
    title: 'Advanced Engineering',
    description:
      'Equipped with energy-efficient Gearless Motors and cutting-edge Machine Room Less (MRL) technology.',
  },
  {
    title: '24/7 Prompt Support',
    description:
      'Dependable customer service backed by rigid preventive maintenance protocols.',
  },
]

// ─── STATS ───────────────────────────────────────────────────────────────────

export const STATS: StatItem[] = [
  // { value: 2400, suffix: '+', label: 'Installations Completed' },
  { value: 18,   suffix: '+', label: 'Years of Excellence' },
  { value: 98,   suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 32,   suffix: '+', label: 'Cities Served' },
]

// ─── ABOUT US (Full Company Profile) ────────────────────────────────────────

export const ABOUT_COMPANY = {
  heading: 'Company Profile',
  body: `Onward Elevators is a newly formed enterprise in the segment of Lifts & Elevators, promoted by professionals who bring immense experience from world-class MNC elevator brands. We have established a powerful operational footprint across Bhopal and the wider Madhya Pradesh (M.P.) region by rendering unparalleled installation, modernization, and maintenance services to both private sectors and prestigious government organizations.

The journey of our promoters started with a clear vision: to fulfill the vertical transit aspirations of modern architectural spaces by adapting top-tier safety, absolute design flexibility, continuous innovation, and prompt services. Rapid urbanization demands smart, efficient, and robust technological prowess — and our comprehensive product lineup has been specifically engineered to cater to these exact dynamics, bringing vertical transportation to a completely new and different level.`,
  prestigiousClients: {
    heading: 'Our Prestigious Projects & Institutional Clients',
    intro:
      'Our technical excellence is validated by our regular association with elite civic bodies and premium developers, including:',
    clients: [
      'M.P. Mantralaya, Bhopal',
      'M.P. Vidhan Sabha',
      'Police Housing Department',
      'Renowned Residential Realty Projects & Top-Class Builders in Bhopal',
    ],
  },
}

// ─── SERVICES ────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: 'passenger',
    icon: '🏢',
    name: 'Passenger Lift',
    shortDesc:
      'Engineered to blend architectural aesthetics with premium ride comfort. Ideal for residential societies and corporate commercial towers seeking optimized traffic management.',
    fullDesc:
      'Our passenger lifts are engineered to blend architectural aesthetics with premium ride comfort. Available in traction, hydraulic, and MRL configurations, they are ideal for residential societies and corporate commercial towers seeking optimized traffic management, delivering smooth, quiet operation with cutting-edge VVVF gearless drive technology.',
    specs: [
      { label: 'Speed Range',    value: '0.5 m/s to 6.0 m/s' },
      { label: 'Load Capacity',  value: '320 kg to 2,000 kg' },
      { label: 'Travel Height',  value: 'Up to 450 m' },
      { label: 'Cabin Finishes', value: '100+ premium options' },
      { label: 'Drive System',   value: 'VVVF AC Gearless' },
      { label: 'Energy Class',   value: 'A+ / BEE 5-Star' },
    ],
    features: [
      'Machine Room Less (MRL) option',
      'Destination Dispatch System',
      'Regenerative Drive Technology',
      'Active Vibration Control below 0.02g',
      'Emergency Auto Rescue Device',
      'IoT Real-Time Monitoring',
      'BMS and BAS Integration',
      '10-Year Warranty Standard',
    ],
  },
  {
    id: 'homelift',
    icon: '🏠',
    name: 'Home Lift',
    shortDesc:
      'Tailored specifically for luxury private residences, villas, and duplex apartments with a compact footprint and quiet operation.',
    fullDesc:
      'Tailored specifically for luxury private residences, villas, and duplex apartments. Features a compact structural footprint, low power consumption, quiet operation, and designs that harmonize seamlessly with home interiors, bringing convenience and elegance to your private living space.',
    specs: [
      { label: 'Load Capacity',  value: '150 kg to 400 kg' },
      { label: 'Speed',          value: '0.15 m/s to 0.5 m/s' },
      { label: 'Drive System',   value: 'MRL Traction or Hydraulic' },
      { label: 'Cabin Finish',   value: 'Custom interior harmonized' },
      { label: 'Power',          value: 'Low consumption design' },
      { label: 'Noise Level',    value: 'Ultra-quiet operation' },
    ],
    features: [
      'Compact structural footprint',
      'Low power consumption',
      'Quiet operation',
      'Interior design harmonized cabins',
      'Machine Room Less (MRL) option',
      'Emergency Auto Rescue Device',
      'Safety infrared light curtain',
      'Smooth VVVF drive',
    ],
  },
  {
    id: 'goods',
    icon: '📦',
    name: 'Goods Lift (Freight Elevators)',
    shortDesc:
      'Built for heavy-duty industrial lifting with high-strength structural materials and rugged platforms to withstand heavy cargo transit.',
    fullDesc:
      'Built for heavy-duty industrial lifting. Constructed with high-strength structural materials and rugged platforms to withstand heavy cargo transit inside warehouses, factories, and commercial hubs. Engineered for continuous duty cycles with maximum reliability and minimal downtime.',
    specs: [
      { label: 'Load Capacity', value: '500 kg to 10,000 kg' },
      { label: 'Cabin Size',    value: 'Up to 4m x 6m custom' },
      { label: 'Door Type',     value: 'Bi-fold / collapsible gate' },
      { label: 'Floor Finish',  value: '10mm chequer plate steel' },
      { label: 'Drive System',  value: 'Hydraulic or Traction' },
      { label: 'Duty Cycle',    value: 'Continuous industrial rated' },
    ],
    features: [
      'Load capacities up to 10,000 kg',
      'Custom cabin dimensions',
      'Forklift-compatible floor rating',
      'Industrial-grade door systems',
      'Anti-corrosion treatment',
      'Overload protection system',
      'Variable speed hydraulic drive',
      'High-strength structural materials',
    ],
  },
  {
    id: 'hospital',
    icon: '🏥',
    name: 'Hospital Lift',
    shortDesc:
      'Specially sized and smooth-controlled elevators engineered to transport stretchers, hospital beds, and medical equipment without jerks.',
    fullDesc:
      'Specially sized and smooth-controlled elevators engineered to transport stretchers, hospital beds, and medical equipment seamlessly without jerks, prioritizing maximum patient comfort and precise floor-leveling. Purpose-built for healthcare environments with priority modes and antimicrobial surfaces as standard.',
    specs: [
      { label: 'Cabin Width',       value: 'Up to 2,400 mm' },
      { label: 'Load Capacity',     value: '1,600 kg to 3,200 kg' },
      { label: 'Door Width',        value: 'Up to 1,300 mm' },
      { label: 'Surface Treatment', value: 'Hospital-grade antimicrobial' },
      { label: 'Fire Mode',         value: 'EN 81-73 compliant' },
      { label: 'Backup Power',      value: 'ARD and UPS integrated' },
    ],
    features: [
      'EN 81-73 Fire Emergency Mode',
      'Automatic Rescue Device (ARD)',
      'Priority Hospital Service Mode',
      'Antimicrobial Stainless Surfaces',
      'Hands-Free Voice Controls',
      'Oversize Door Opening 1300mm',
      'Stretcher and Bed Accommodation',
      '24/7 Remote Monitoring',
    ],
  },
  {
    id: 'hydraulic',
    icon: '⚙️',
    name: 'Hydraulic Elevator',
    shortDesc:
      'Distinct engineering advantages over traditional traction lifts — flexible machine room positioning, wide load range, and zero electricity during downward travel.',
    fullDesc:
      'Compared with traditional traction lifts, our hydraulic range offers distinct engineering advantages including flexible machine room positioning, wide loading capacity up to 2 Tons, space-saving design with no counterweight, and zero electricity consumption during downward motion — making it highly cost-effective and energy-efficient.',
    specs: [
      { label: 'Max Carrying Weight', value: 'Up to 2 Tons' },
      { label: 'Machine Room',        value: 'Flexible — within 10m of shaft' },
      { label: 'Counterweight',       value: 'Eliminated — space saving' },
      { label: 'Downward Motion',     value: 'Zero electricity consumed' },
      { label: 'Safety Devices',      value: 'Safety valves + speed-limit valves' },
      { label: 'Fault Rate',          value: 'Exceptionally low' },
    ],
    features: [
      'Flexible machine room positioning within 10m',
      'Wide load range up to 2 Tons',
      'No counterweight — maximized hoistway use',
      'Zero electricity during downward travel',
      'Advanced hydraulic circuit protection',
      'Safety valves and limited-speed disconnecting valves',
      'Compact structure with low fault rates',
      'Easy daily maintenance',
    ],
  },
  {
    id: 'dumbwaiter',
    icon: '🍽️',
    name: 'Dumbwaiter',
    shortDesc:
      'Compact, rapid utility lifts for the clean and quick transfer of small cargo, food trays, documents, or kitchenware across multiple floors.',
    fullDesc:
      'Compact, rapid utility lifts designed exclusively for the clean and quick transfer of small cargo, food trays, documents, or kitchenware across multiple floors in hotels, commercial restaurants, and hospitals. Reliable, quiet, and easy to operate.',
    specs: [
      { label: 'Load Capacity', value: 'Up to 100 kg' },
      { label: 'Cabin Size',    value: 'Compact — custom sizes' },
      { label: 'Speed',         value: '0.4 m/s standard' },
      { label: 'Door Type',     value: 'Manual or automatic' },
      { label: 'Application',   value: 'Hotels, restaurants, hospitals' },
      { label: 'Operation',     value: 'Simple push-button control' },
    ],
    features: [
      'Compact and space-efficient design',
      'Quick floor-to-floor transfer',
      'Quiet, smooth operation',
      'Food-grade interior finish option',
      'Simple push-button controls',
      'Low maintenance requirement',
      'Custom cabin dimensions available',
      'Ideal for hotels, restaurants, hospitals',
    ],
  },
  {
    id: 'maintenance',
    icon: '🔧',
    name: 'AMC Maintenance',
    shortDesc:
      '24/7 annual maintenance contracts with preventive diagnostics, emergency response, and guaranteed uptime SLAs.',
    fullDesc:
      'Comprehensive Annual Maintenance Contracts covering all elevator brands and models. Scheduled preventive maintenance cycles, 24/7 emergency callouts, and qualified certified technicians ensure maximum uptime and long equipment life across Bhopal and Madhya Pradesh.',
    specs: [
      { label: 'Response Time',  value: 'Prompt emergency response' },
      { label: 'Coverage',       value: '24/7 x 365 days' },
      { label: 'Technicians',    value: 'Fully certified and verified' },
      { label: 'Uptime SLA',     value: 'Maximum uptime guaranteed' },
      { label: 'Brands Covered', value: 'All major manufacturers' },
      { label: 'Reporting',      value: 'Regular performance updates' },
    ],
    features: [
      'Scheduled preventive maintenance cycles',
      '24/7 emergency callout coverage',
      'Fully qualified certified technicians only',
      'All parts and labour covered',
      'Regulatory inspection support',
      'Transparent real-time service updates',
      'Multi-brand elevator coverage',
      'Customer education on correct usage',
    ],
  },
]

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: '1', name: 'M.P. Mantralaya', location: 'Bhopal, Madhya Pradesh',
   tag: 'Government · Bhopal',
    detail: 'Passenger & Service Elevators', year: '2024',
    gradient: 'from-[#060614] via-[#0d0d28] to-[#0d0d1e]',
  },
  {
    id: '2', name: 'M.P. Vidhan Sabha', location: 'Bhopal, Madhya Pradesh',
    tag: 'Government · Bhopal',
    detail: 'Passenger Elevators', year: '2024',
    gradient: 'from-[#06140c] via-[#081208] to-[#0a1a0a]',
  },
  {
    id: '3', name: 'Police Housing Department', location: 'Madhya Pradesh',
     tag: 'Government · M.P.',
    detail: 'Residential Elevators', year: '2023',
    gradient: 'from-[#1a0e0a] via-[#12080a] to-[#18060a]',
  },
  {
    id: '4', name: 'Premium Residential Project', location: 'Bhopal, Madhya Pradesh',
 tag: 'Residential · Bhopal',
    detail: 'Passenger Elevators', year: '2024',
    gradient: 'from-[#0e0e1a] via-[#080812] to-[#0a0a1a]',
  },
  {
    id: '5', name: 'Commercial Tower', location: 'Bhopal, Madhya Pradesh',
   tag: 'Commercial · Bhopal',
    detail: 'High-Speed Passenger Elevators', year: '2023',
    gradient: 'from-[#1a1a0a] via-[#12120a] to-[#181808]',
  },
  {
    id: '6', name: 'Healthcare Facility', location: 'Madhya Pradesh',
   tag: 'Healthcare · M.P.',
    detail: 'Hospital Elevators', year: '2023',
    gradient: 'from-[#0a1a1a] via-[#081212] to-[#0a1818]',
  },
  {
    id: '7', name: 'Luxury Residential Complex', location: 'Bhopal, Madhya Pradesh',
    tag: 'Residential · Bhopal',
    detail: 'Passenger & Home Lifts', year: '2022',
    gradient: 'from-[#14080a] via-[#180a0c] to-[#120608]',
  },
  {
    id: '8', name: 'Industrial & Warehouse Facility', location: 'Madhya Pradesh',
     tag: 'Industrial · M.P.',
    detail: 'Goods Lifts & Freight Elevators', year: '2022',
    gradient: 'from-[#081014] via-[#0a1218] to-[#081014]',
  },
]

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'Onward Elevators delivered an exceptional installation at our residential project. Their engineering precision and professionalism from consultation to handover was exemplary. The quality of the finished product exceeded every expectation.',
    author: 'Rajesh Sharma',
    title: 'Project Director',
    company: 'Top-Class Builder, Bhopal',
    initials: 'RS',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'For our hospital, reliability is non-negotiable. Onward hospital lifts have maintained outstanding uptime since installation. Their service team responds promptly every single time. Absolute peace of mind for our operations.',
    author: 'Dr. Anita Verma',
    title: 'Administrator',
    company: 'Healthcare Facility, Madhya Pradesh',
    initials: 'AV',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'The team at Onward Elevators understood our government building requirements perfectly. Their compliance with all statutory standards and their prompt maintenance support has made them our preferred elevator partner in M.P.',
    author: 'S.K. Mishra',
    title: 'Chief Engineer',
    company: 'Government Department, Bhopal',
    initials: 'SM',
    rating: 5,
  },
]

// ─── PROCESS STEPS ────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Consultation',  description: 'Site survey, architectural review, and requirement analysis by our senior engineers.' },
  { number: '02', title: 'Design',        description: 'Custom elevator design aligned with your building aesthetic and structural specifications.' },
  { number: '03', title: 'Engineering',   description: 'Precision manufacturing with quality control at every production stage.' },
  { number: '04', title: 'Installation',  description: 'Expert installation by certified and verified technicians with minimal disruption to operations.' },
  { number: '05', title: 'Handover',      description: 'Comprehensive testing, certification, and handover with full operator training and usage guidelines.' },
]

// ─── FAQ ITEMS ────────────────────────────────────────────────────────────

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is the typical lead time from order to installation?',
    answer:
      'Depending on the elevator type and complexity, our typical lead time ranges from 8 to 16 weeks from confirmed order. Passenger and home lifts average 10 to 12 weeks, while custom hydraulic or hospital units may require 14 to 18 weeks. We provide a detailed project timeline during the consultation phase.',
  },
  {
    question: 'Do you offer maintenance contracts for existing elevators?',
    answer:
      'Yes. Our Annual Maintenance Contracts (AMC) cover comprehensive preventive maintenance, 24/7 emergency callouts, and parts replacement. We also take over maintenance of elevators installed by other manufacturers after a thorough inspection and condition assessment. Only fully qualified, certified technicians perform all structural maintenance and repairs.',
  },
  {
    question: 'What are your payment terms for new installations?',
    answer:
      'We offer flexible payment structures typically structured as 30% advance, 40% on delivery, and 30% on commissioning. For large-scale projects with multiple units, we work with clients on customized milestone-based payment schedules.',
  },
  {
    question: 'Can existing elevator shafts be retrofitted with modern units?',
    answer:
      'Absolutely. Modernization is one of our core competencies. Our engineers assess existing shaft dimensions and structural conditions, then design custom solutions that maximize performance within existing constraints — often with zero machine room requirement using our MRL technology.',
  },
  {
    question: 'Are your elevators compliant with Indian building codes?',
    answer:
      'All Onward Elevators are designed and tested to meet National Building Code (NBC) 2016 requirements, BIS IS 14665 standards, and local municipal corporation specifications. We obtain and maintain all necessary operational licenses and technical certifications required by relevant statutory authorities, and handle all inspection and approval documentation as part of the installation package.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'We operate actively across Bhopal and the wider Madhya Pradesh region, serving both private sector clients and prestigious government organizations including M.P. Mantralaya, M.P. Vidhan Sabha, and top-class builders and residential developers across the state.',
  },
]

// ─── TECHNOLOGY FEATURES ──────────────────────────────────────────────────

export const TECH_FEATURES: TechFeature[] = [
  {
    icon: '🏗️',
    title: 'MRL Machine (Machine Room Less)',
    description:
      'A revolutionary engineering concept that brings absolute freedom to architects and structural designers by entirely eliminating the need for a traditional concrete overhead machine room. Core values: Less Space | Less Energy | More Flexibility.',
  },
  {
    icon: '⚡',
    title: 'Gearless Motor Technology',
    description:
      'Eco-friendly gearless motors deliver green environmental protection, space saving through compact layout, high operational efficiency with minimal power waste, and ultra-quiet operation with minimal structural vibration.',
  },
  {
    icon: '🔮',
    title: 'Intelligent Elevator Controller',
    description:
      'Intelligent control systems including dedicated Standard Panels and integrated ARD (Auto Rescue Device) Panels for complete automated control — enabling smart building integration and real-time operational oversight.',
  },
  {
    icon: '♻️',
    title: 'Hydraulic Circuit Protection',
    description:
      'Advanced multi-layer hydraulic circuit protection integrating safety valves and limited-speed disconnecting valves. Highly compact structure with exceptionally low fault rates and straightforward daily maintenance.',
  },
  // {
  //   icon: '📡',
  //   title: 'IoT Remote Monitoring',
  //   description:
  //     '24/7 monitoring and real-time service updates for all installed units. Building managers and clients receive transparent communication including live status updates on service requests and estimated resolution times.',
  // },
  {
    icon: '🛡️',
    title: 'Multi-Layered Safety Protocols',
    description:
      'Multi-layered safety protocols built natively into every design — including ARD, infrared light curtains, overload sensors, over-travel protection, overspeed governor, and emergency alarm systems as standard.',
  },
]

// ─── CORPORATE POLICIES ───────────────────────────────────────────────────

export const CORPORATE_POLICIES = [
  {
    title: 'Safety Policy',
    points: [
      {
        label: 'Compliance',
        text: 'We are fully committed to complying with all local, state, and federal regulations related to elevator installation, maintenance, and operation.',
      },
      {
        label: 'Rigorous Training',
        text: 'All employees receive comprehensive safety training, including rigorous emergency procedures, before being allowed to work on live elevator setups.',
      },
      {
        label: 'Regular Inspections',
        text: 'Periodic, deep-dive inspections are conducted to ensure the absolute safety and flawless functioning of all elevators. Any operational anomaly discovered is addressed and rectified promptly.',
      },
      {
        label: 'Emergency Response',
        text: 'We maintain a well-defined emergency response plan, including strict procedures for safely evacuating passengers in the rare event of an elevator malfunction or power failure.',
      },
    ],
  },
  {
    title: 'Maintenance Policy',
    points: [
      {
        label: 'Preventive Maintenance',
        text: 'Scheduled, proactive preventive maintenance cycles are established for all elevators to minimize mechanical breakdown ratios and maximize the operational life of the equipment.',
      },
      {
        label: 'Qualified Technicians',
        text: 'Only fully qualified, verified, and certified technicians are authorized to perform structural maintenance and precise repairs on our systems.',
      },
    ],
  },
  {
    title: 'Customer Service Policy',
    points: [
      {
        label: 'Timely Response',
        text: 'We prioritize client peace of mind by responding promptly to all customer inquiries, technical concerns, and immediate service requests.',
      },
      {
        label: 'Transparent Communication',
        text: 'Clear and transparent interaction with our customers is a strict priority, including providing real-time updates on service requests and estimated repair times.',
      },
      {
        label: 'Customer Education',
        text: 'We actively provide structural owners and building managers with proper guidelines regarding correct elevator usage to minimize routine wear and tear.',
      },
    ],
  },
  {
    title: 'Quality Control & Regulatory Compliance',
    points: [
      {
        label: 'Quality Assurance',
        text: 'We maintain rigorous multi-tier quality control measures to ensure that every installed elevator meets global safety benchmarks and performance standards.',
      },
      {
        label: 'Continuous Improvement',
        text: 'We are strictly committed to ongoing technical evaluation and continuous improvement of our internal services and engineering products.',
      },
      {
        label: 'Licensing',
        text: 'We obtain and maintain all necessary operational licenses and technical certifications required by relevant statutory authorities.',
      },
    ],
  },
]

// ─── SAFETY STANDARDS ─────────────────────────────────────────────────────

export const SAFETY_STANDARDS: SafetyStandard[] = [
  {
    badge: 'EN 81-20:2014',
    title: 'Auto Rescue Device (ARD)',
    description:
      'In case of a main power supply grid failure, the system automatically takes control. The elevator safely moves to the nearest floor in the downward direction, opens the doors automatically, and ensures passengers step out safely.',
  },
  {
    badge: 'EN 81-50:2014',
    title: 'Design Rules and Calculations',
    description:
      'Design rules, calculations, examinations, and tests for lift components including ropes, sheaves, pulleys, drums, and all safety components.',
  },
  {
    badge: 'NBC 2016',
    title: 'National Building Code India',
    description:
      'All installations exceed the specifications of the National Building Code of India 2016 for lifts, escalators, and moving walks in all building categories.',
  },
  {
    badge: 'IS 14665',
    title: 'Indian Standard for Lifts',
    description:
      'Full compliance with BIS IS 14665 series covering electric traction elevators, hydraulic elevators, and escalators under Indian Standards.',
  },
  {
    badge: 'EN 81-73',
    title: 'Fire Emergency Behaviour',
    description:
      'Elevator behaviour during fire situations including firefighters service modes, emergency evacuation, and recall to designated floors.',
  },
  {
    badge: 'ISO 25745',
    title: 'Energy Performance',
    description:
      'Energy performance measurement and classification — all our systems achieve the highest energy efficiency classifications under this international standard.',
  },
]

// ─── SAFETY FEATURES (Detailed) ───────────────────────────────────────────

export const SAFETY_FEATURES = [
  {
    title: 'Auto Rescue Device (ARD)',
    description:
      'In case of a main power supply grid failure, the system automatically takes control. The elevator safely moves to the nearest floor in the downward direction, opens the doors automatically, and ensures passengers step out safely.',
  },
  {
    title: 'Infrared Light Curtain',
    description:
      'A full-height infrared curtain emitting multiple cross-crossing light beams. It detects even the smallest obstruction instantly in the door entry path, preventing the doors from closing on objects or passengers.',
  },
  {
    title: 'Overload Sensor with Audio-Visual Indication',
    description:
      'On overloading the lift, a sharp audio-visual indication is instantly triggered, and the elevator doors are kept firmly open until the excess load is safely removed.',
  },
  {
    title: 'Car Emergency Light & Fan',
    description:
      'The cabin emergency lighting is always illuminated under normal conditions and automatically switches to an independent battery backup system during power failures. The fan also continues to operate for a minimum of 20 minutes post-power loss.',
  },
  {
    title: 'Emergency Alarm & Push to Talk',
    description:
      'In case of any technical emergency, immediate communication can be established with the security lobby or main desk through this battery-operated, self-charging audio terminal.',
  },
  {
    title: 'Safety in Case of Over Travel',
    description:
      'A robust three-phase electrical isolation mechanism completely disconnects power from the control panel and motor the exact moment the elevator car attempts to move beyond the top or bottom terminal floor limits, triggering immediate mechanical braking.',
  },
  {
    title: 'Safety in Case of Rope Breakage',
    description:
      'If an unexpected mechanical cable breakage occurs and the elevator speed exceeds rated parameters in the downward direction due to gravitational acceleration, an over-speed governor instantly activates a heavy clutch mechanism, securely jamming and locking the elevator car safely onto the structural guide rails.',
  },
  {
    title: 'Car Fan Automatic Sleep Mode',
    description:
      'A smart power-saving mechanism that automatically turns off the cabin fan when there are no registered floor calls inside the system, saving structural power and significantly enhancing the lifespan of the components.',
  },
  {
    title: 'Voice Annunciator with Music',
    description:
      'This system delivers natural electronic voice synthesized updates regarding the next floor arrivals, directional movements, door opening/closing alerts, and scheduled operations, seamlessly paired with pleasant, relaxing background music.',
  },
]

// ─── INDUSTRIES SERVED ────────────────────────────────────────────────────

export const INDUSTRIES = [
  'Residential Towers',
  'Corporate Headquarters',
  'Government Buildings',
  'Healthcare Facilities',
  'Hotels & Hospitality',
  'Industrial & Warehouses',
  'Commercial Complexes',
  'Heritage Buildings',
]

// ─── CONTACT / FOOTER ─────────────────────────────────────────────────────

export const CONTACT = {
  company: 'Onward Elevators',
  address: 'C-40, Vidhyanagar, Narmadapuram Road, Bhopal, Madhya Pradesh',
  phone: '0755-4941509',
  email: 'onwardelevators@gmail.com',
  website: 'www.onwardelevators.com',
}