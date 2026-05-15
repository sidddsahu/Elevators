// // src/lib/data.ts
// import type {
//   Service, Project, Testimonial, BlogPost,
//   Job, StatItem, ProcessStep, FAQItem,
//   TechFeature, MaintenancePlan, SafetyStandard, NavItem
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
//     ]
//   },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Technology', href: '/technology' },
//   { label: 'Safety', href: '/safety' },
//   { label: 'Maintenance', href: '/maintenance' },
//   { label: 'Blog', href: '/blog' },
//   { label: 'Contact', href: '/contact' },
// ]

// export const STATS: StatItem[] = [
//   { value: 2400, suffix: '+', label: 'Installations Completed' },
//   { value: 18, suffix: '+', label: 'Years of Excellence' },
//   { value: 98, suffix: '%', label: 'Client Satisfaction Rate' },
//   { value: 32, suffix: '+', label: 'Cities Served' },
// ]

// export const SERVICES: Service[] = [
//   {
//     id: 'passenger',
//     icon: '🏢',
//     name: 'Passenger Elevators',
//     shortDesc: 'High-speed, whisper-quiet passenger elevators engineered for comfort, efficiency, and architectural harmony in any building type.',
//     fullDesc: 'Our flagship passenger elevators combine German engineering with bespoke craftsmanship. Available in traction, hydraulic, and MRL configurations, they deliver whisper-quiet operation and architectural harmony across residential towers, corporate campuses, and mixed-use developments.',
//     specs: [
//       { label: 'Speed Range', value: '0.5 m/s — 6.0 m/s' },
//       { label: 'Load Capacity', value: '320 kg — 2,000 kg' },
//       { label: 'Travel Height', value: 'Up to 450 m' },
//       { label: 'Cabin Finishes', value: '100+ premium options' },
//       { label: 'Drive System', value: 'VVVF AC Gearless' },
//       { label: 'Energy Class', value: 'A+ / BEE 5-Star' },
//     ],
//     features: [
//       'Machine Room Less (MRL) option',
//       'Destination Dispatch System',
//       'Regenerative Drive Technology',
//       'Active Vibration Control < 0.02g',
//       'Emergency Auto Rescue Device',
//       'IoT Real-Time Monitoring',
//       'BMS / BAS Integration',
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
//       { label: 'Cabin Width', value: 'Up to 2,400 mm' },
//       { label: 'Load Capacity', value: '1,600 kg — 3,200 kg' },
//       { label: 'Door Width', value: 'Up to 1,300 mm' },
//       { label: 'Surface Treatment', value: 'Hospital-grade antimicrobial' },
//       { label: 'Fire Mode', value: 'EN 81-73 compliant' },
//       { label: 'Backup Power', value: 'ARD / UPS integrated' },
//     ],
//     features: [
//       'EN 81-73 Fire Emergency Mode',
//       'Automatic Rescue Device (ARD)',
//       'Priority Hospital Service Mode',
//       'Antimicrobial Stainless Surfaces',
//       'Hands-Free Voice Controls',
//       'Oversize Door Opening 1300mm',
//       'Stretcher / Bed Accommodation',
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
//       { label: 'Load Capacity', value: '500 kg — 10,000 kg' },
//       { label: 'Cabin Size', value: 'Up to 4m × 6m custom' },
//       { label: 'Door Type', value: 'Bi-fold / collapsible gate' },
//       { label: 'Floor Finish', value: '10mm chequer plate steel' },
//       { label: 'Drive System', value: 'Hydraulic / Traction' },
//       { label: 'Duty Cycle', value: 'Continuous industrial rated' },
//     ],
//     features: [
//       'Load capacities up to 10,000 kg',
//       'Custom cabin dimensions',
//       'Forklift-compatible floor rating',
//       'Industrial-grade door systems',
//       'ATEX-rated (hazardous zones)',
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
//       { label: 'Visibility', value: 'Full 360° panoramic glass' },
//       { label: 'Load Capacity', value: '320 kg — 1,000 kg' },
//       { label: 'Speed', value: '0.5 m/s — 1.5 m/s' },
//       { label: 'Glass Type', value: 'Laminated safety / tempered' },
//       { label: 'Cabin Shape', value: 'Round / Square / Custom' },
//       { label: 'Drive', value: 'MRL Traction or Hydraulic' },
//     ],
//     features: [
//       'Full panoramic glass cabin',
//       'Architectural exterior design',
//       'LED ambient lighting system',
//       'Flush glass shaft option',
//       'Circular / custom geometries',
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
//     fullDesc: 'High-capacity continuous-flow escalator systems for malls, airports, transit hubs, and public buildings. Variable-speed drives, energy-saving standby modes, and stainless-steel construction standard. Available in inclinations of 30° and 35°.',
//     specs: [
//       { label: 'Inclination', value: '30° / 35°' },
//       { label: 'Step Width', value: '600mm / 800mm / 1000mm' },
//       { label: 'Capacity', value: 'Up to 9,000 persons/hr' },
//       { label: 'Speed', value: '0.4 / 0.5 / 0.65 m/s' },
//       { label: 'Rise Height', value: 'Up to 12 m' },
//       { label: 'Finish', value: 'Brushed SS / custom' },
//     ],
//     features: [
//       'Variable speed drive system',
//       'Energy-saving standby mode',
//       'Stainless steel construction',
//       'Safety edge detection',
//       'Anti-reversal device',
//       'Step illumination LED',
//       'Low noise operation < 58dB',
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
//       { label: 'Response Time', value: '45 minutes guaranteed' },
//       { label: 'Coverage', value: '24/7 × 365 days' },
//       { label: 'Monitoring', value: 'Real-time IoT dashboard' },
//       { label: 'Uptime SLA', value: '99.9% guaranteed' },
//       { label: 'Brands Covered', value: 'All major manufacturers' },
//       { label: 'Reporting', value: 'Monthly performance report' },
//     ],
//     features: [
//       'Predictive AI diagnostics',
//       '24/7 remote IoT monitoring',
//       '45-minute emergency response',
//       'All parts & labour covered',
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
//     quote: 'Onward Elevators transformed our 40-story tower project. Their engineering precision and the sheer quality of the finished product exceeded every expectation. The team's professionalism from consultation to handover was exemplary.',
//     author: 'Rajesh Kumar', title: 'Project Director', company: 'Lodha Group',
//     initials: 'RK', rating: 5,
//   },
//   {
//     id: '2',
//     quote: 'For our 500-bed hospital, reliability is non-negotiable. Onward's hospital elevators have maintained 99.9% uptime over three years. Their service team responds within the hour, every single time. Absolute peace of mind.',
//     author: 'Dr. Sunita Arora', title: 'CEO', company: 'Medanta Healthcare',
//     initials: 'SA', rating: 5,
//   },
//   {
//     id: '3',
//     quote: 'The capsule elevator in our hotel lobby has become an attraction. Guests stop to photograph it. Onward delivered something truly architectural — the craftsmanship is stunning and it runs perfectly after two years.',
//     author: 'Priya Mehta', title: 'Owner & Managing Director', company: 'Solaris Grand Hotels',
//     initials: 'PM', rating: 5,
//   },
// ]

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     id: '1', title: 'The Future of Smart Elevators: IoT, AI & Predictive Maintenance',
//     category: 'Technology', date: 'May 2026', readTime: '6 min read',
//     slug: 'smart-elevators-iot-ai', gradient: 'from-[#060614] to-[#0d0d28]',
//     excerpt: 'How machine learning and real-time sensor data are eliminating elevator downtime before it happens.',
//   },
//   {
//     id: '2', title: 'Capsule Elevators as Architectural Centrepieces in Modern Hotels',
//     category: 'Design', date: 'April 2026', readTime: '4 min read',
//     slug: 'capsule-elevators-hotels', gradient: 'from-[#06140c] to-[#0d2818]',
//     excerpt: 'When vertical movement becomes a destination — the art of designing elevators that guests remember.',
//   },
//   {
//     id: '3', title: 'NBC 2025 Elevator Guidelines: What Every Builder Needs to Know',
//     category: 'Compliance', date: 'March 2026', readTime: '8 min read',
//     slug: 'nbc-2025-elevator-guidelines', gradient: 'from-[#14060c] to-[#280d18]',
//     excerpt: 'A comprehensive breakdown of the latest National Building Code requirements for lifts and escalators.',
//   },
//   {
//     id: '4', title: 'Regenerative Drive Technology: How Elevators Are Becoming Power Generators',
//     category: 'Engineering', date: 'February 2026', readTime: '5 min read',
//     slug: 'regenerative-drive-technology', gradient: 'from-[#0a140a] to-[#121812]',
//     excerpt: 'Understanding how modern VVVF drives convert braking energy back into usable electricity for the grid.',
//   },
//   {
//     id: '5', title: 'EN 81-20 Explained: The European Safety Standard That Changed Elevator Design',
//     category: 'Safety', date: 'January 2026', readTime: '7 min read',
//     slug: 'en-81-20-explained', gradient: 'from-[#14100a] to-[#281e08]',
//     excerpt: 'A technical deep-dive into what EN 81-20:2014 means for modern elevator design and installation.',
//   },
//   {
//     id: '6', title: 'India\'s Elevator Market 2026: Growth, Trends, and Opportunities',
//     category: 'Industry', date: 'December 2025', readTime: '9 min read',
//     slug: 'india-elevator-market-2026', gradient: 'from-[#0a0a14] to-[#080822]',
//     excerpt: 'With rapid urbanisation and Smart Cities Mission driving demand, the Indian elevator market is at an inflection point.',
//   },
// ]

// export const JOBS: Job[] = [
//   { id: '1', title: 'Senior Elevator Engineer', location: 'Indore, MP', type: 'Full-time', salary: '₹ 12–18 LPA', department: 'Engineering' },
//   { id: '2', title: 'IoT / Embedded Systems Developer', location: 'Bangalore / Remote', type: 'Full-time', salary: '₹ 14–22 LPA', department: 'Technology' },
//   { id: '3', title: 'Interior Design Specialist — Elevator Cabins', location: 'Mumbai', type: 'Full-time', salary: '₹ 8–14 LPA', department: 'Design' },
//   { id: '4', title: 'Business Development Manager', location: 'Delhi / Mumbai', type: 'Full-time', salary: '₹ 10–16 LPA + Commission', department: 'Sales' },
//   { id: '5', title: 'Field Service Technician', location: 'Multiple Cities', type: 'Full-time', salary: '₹ 4–7 LPA', department: 'Operations' },
//   { id: '6', title: 'Project Manager — Large Scale Installations', location: 'Pan India', type: 'Full-time', salary: '₹ 15–24 LPA', department: 'Management' },
// ]

// export const PROCESS_STEPS: ProcessStep[] = [
//   { number: '01', title: 'Consultation', description: 'Site survey, architectural review, and requirement analysis by our senior engineers.' },
//   { number: '02', title: 'Design', description: 'Custom elevator design aligned with your building\'s aesthetic and structural specifications.' },
//   { number: '03', title: 'Engineering', description: 'Precision manufacturing with ISO-certified quality control at every production stage.' },
//   { number: '04', title: 'Installation', description: 'Expert installation by certified technicians with minimal disruption to operations.' },
//   { number: '05', title: 'Handover', description: 'Comprehensive testing, certification, and handover with full operator training included.' },
// ]

// export const FAQ_ITEMS: FAQItem[] = [
//   {
//     question: 'What is the typical lead time from order to installation?',
//     answer: 'Depending on the elevator type and complexity, our typical lead time ranges from 8 to 16 weeks from confirmed order. Passenger elevators average 10–12 weeks, while custom capsule or high-speed units may require 14–18 weeks. We provide a detailed project timeline during the consultation phase.',
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
//   { icon: '⚡', title: 'VVVF AC Gearless Drive', description: 'Variable voltage, variable frequency drive eliminates gear friction, reducing energy consumption by up to 40% while delivering ultra-smooth acceleration and deceleration profiles across all speed ranges.' },
//   { icon: '🔮', title: 'AI Predictive Maintenance', description: 'Machine learning algorithms analyse 200+ sensor data points in real-time, predicting component wear before failure occurs — eliminating unplanned downtime and reducing maintenance costs by 35%.' },
//   { icon: '♻️', title: 'Regenerative Braking', description: 'Kinetic energy from descending cabins is converted back to electrical power and fed into the building grid. In high-rise applications, this can generate 30–40% of the elevator\'s total energy consumption.' },
//   { icon: '📡', title: 'IoT Remote Monitoring', description: '24/7 cloud-based monitoring of all installed units. Building managers access real-time dashboards showing elevator status, usage statistics, energy consumption, and maintenance scheduling.' },
//   { icon: '🏢', title: 'Smart Building Integration', description: 'BMS/BAS integration, access control, destination dispatch, and occupancy-based traffic management. Systems communicate via BACnet, Modbus, and open APIs with all major building platforms.' },
//   { icon: '🛡️', title: 'Active Vibration Control', description: 'Hydraulic roller guide shoes with active vibration dampening maintain cabin vibration below 0.02g — imperceptible to occupants even at maximum speed, delivering the smoothest possible ride quality.' },
// ]

// export const MAINTENANCE_PLANS: MaintenancePlan[] = [
//   {
//     name: 'Essential', price: '₹ 18,000', period: '/year', color: 'border-white/10',
//     features: ['Quarterly preventive visits', 'Lubrication & cleaning', 'Safety checks', 'Business-hours support'],
//     missing: ['Emergency callouts', 'Parts replacement'],
//   },
//   {
//     name: 'Premium', price: '₹ 36,000', period: '/year', color: 'border-blue-glow', popular: true,
//     features: ['Monthly preventive visits', 'Full lubrication & alignment', '24/7 emergency callouts', '45-min response guarantee', 'Wear parts included'],
//     missing: ['Major parts replacement'],
//   },
//   {
//     name: 'Elite', price: 'Custom', period: '', color: 'border-gold',
//     features: ['Fortnightly visits', 'Dedicated service engineer', '24/7 priority response', 'All parts covered', 'Real-time IoT dashboard', 'Guaranteed 99.9% uptime'],
//   },
// ]

// export const SAFETY_STANDARDS: SafetyStandard[] = [
//   { badge: 'EN 81-20:2014', title: 'Safety Rules for Construction', description: 'Full compliance with European EN 81-20 safety rules governing the construction and installation of new electric lifts, including all safety components and systems.' },
//   { badge: 'EN 81-50:2014', title: 'Design Rules & Calculations', description: 'Design rules, calculations, examinations, and tests for lift components including ropes, sheaves, pulleys, drums, and all safety components.' },
//   { badge: 'NBC 2016', title: 'National Building Code India', description: 'All installations exceed the specifications of the National Building Code of India for lifts, escalators, and moving walks in all building categories.' },
//   { badge: 'IS 14665', title: 'Indian Standard for Lifts', description: 'Full compliance with BIS IS 14665 series covering electric traction elevators, hydraulic elevators, and escalators under Indian Standards.' },
//   { badge: 'EN 81-73', title: 'Fire Emergency Behaviour', description: 'Elevator behaviour during fire situations including firefighters\' service modes, emergency evacuation, and recall to designated floors.' },
//   { badge: 'ISO 25745', title: 'Energy Performance', description: 'Energy performance measurement and classification — all our systems achieve the highest energy efficiency classifications under this international standard.' },
// ]

// export const INDUSTRIES = [
//   'Residential Towers', 'Corporate Headquarters', 'Luxury Hotels', 'Healthcare Facilities',
//   'Shopping Malls', 'Industrial Plants', 'Airport Terminals', 'Heritage Buildings',
// ]


import type {
  Service, Project, Testimonial, BlogPost,
  Job, StatItem, ProcessStep, FAQItem,
  TechFeature, MaintenancePlan, SafetyStandard, NavItem,
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Passenger Elevators', href: '/services#passenger' },
      { label: 'Hospital Elevators', href: '/services#hospital' },
      { label: 'Freight Elevators', href: '/services#freight' },
      { label: 'Capsule Elevators', href: '/services#capsule' },
      { label: 'Escalators', href: '/services#escalators' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Technology', href: '/technology' },
  { label: 'Safety', href: '/safety' },
  { label: 'Maintenance', href: '/maintenance' },
  // { label: 'Blog', href: '/blog' },
  // { label: 'Contact', href: '/contact' },
]

export const STATS: StatItem[] = [
  { value: 2400, suffix: '+', label: 'Installations Completed' },
  { value: 18,   suffix: '+', label: 'Years of Excellence' },
  { value: 98,   suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 32,   suffix: '+', label: 'Cities Served' },
]

export const SERVICES: Service[] = [
  {
    id: 'passenger',
    icon: '🏢',
    name: 'Passenger Elevators',
    shortDesc: 'High-speed, whisper-quiet passenger elevators engineered for comfort, efficiency, and architectural harmony in any building type.',
    fullDesc: 'Our flagship passenger elevators combine German engineering with bespoke craftsmanship. Available in traction, hydraulic, and MRL configurations, they deliver whisper-quiet operation and architectural harmony across residential towers, corporate campuses, and mixed-use developments.',
    specs: [
      { label: 'Speed Range',     value: '0.5 m/s to 6.0 m/s' },
      { label: 'Load Capacity',   value: '320 kg to 2,000 kg' },
      { label: 'Travel Height',   value: 'Up to 450 m' },
      { label: 'Cabin Finishes',  value: '100+ premium options' },
      { label: 'Drive System',    value: 'VVVF AC Gearless' },
      { label: 'Energy Class',    value: 'A+ / BEE 5-Star' },
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
    id: 'hospital',
    icon: '🏥',
    name: 'Hospital Elevators',
    shortDesc: 'Specialized medical-grade elevators built to the highest hygiene and reliability standards, ensuring critical care continuity.',
    fullDesc: 'Purpose-engineered for healthcare environments. Extra-wide cabins accommodate hospital beds and medical equipment. Antimicrobial surfaces, hands-free controls, and priority evacuation modes are built in as standard across all hospital elevator models.',
    specs: [
      { label: 'Cabin Width',         value: 'Up to 2,400 mm' },
      { label: 'Load Capacity',       value: '1,600 kg to 3,200 kg' },
      { label: 'Door Width',          value: 'Up to 1,300 mm' },
      { label: 'Surface Treatment',   value: 'Hospital-grade antimicrobial' },
      { label: 'Fire Mode',           value: 'EN 81-73 compliant' },
      { label: 'Backup Power',        value: 'ARD and UPS integrated' },
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
    id: 'freight',
    icon: '📦',
    name: 'Freight Elevators',
    shortDesc: 'Industrial-strength freight solutions with heavy-duty cabins, reinforced structures, and high-capacity load ratings.',
    fullDesc: 'Heavy-duty industrial freight elevators engineered for warehouses, factories, logistics hubs, and industrial plants. Reinforced steel cabins, heavy-gauge flooring, and robust drive systems handle demanding load cycles without compromise.',
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
      'ATEX-rated for hazardous zones',
      'Anti-corrosion treatment',
      'Overload protection system',
      'Variable speed hydraulic drive',
    ],
  },
  {
    id: 'capsule',
    icon: '💎',
    name: 'Capsule Elevators',
    shortDesc: 'Architectural statement elevators with panoramic glass cabins, transforming vertical movement into a visual experience.',
    fullDesc: 'Panoramic glass cabins that transform vertical movement into a cinematic visual journey. Available in circular, rectangular, and fully custom geometries for hotel lobbies, atria, retail centres, and residential statement architecture.',
    specs: [
      { label: 'Visibility',    value: 'Full 360 degree panoramic glass' },
      { label: 'Load Capacity', value: '320 kg to 1,000 kg' },
      { label: 'Speed',         value: '0.5 m/s to 1.5 m/s' },
      { label: 'Glass Type',    value: 'Laminated safety or tempered' },
      { label: 'Cabin Shape',   value: 'Round, Square, or Custom' },
      { label: 'Drive',         value: 'MRL Traction or Hydraulic' },
    ],
    features: [
      'Full panoramic glass cabin',
      'Architectural exterior design',
      'LED ambient lighting system',
      'Flush glass shaft option',
      'Circular and custom geometries',
      'Interior design customization',
      'Silent belt drive option',
      'Award-winning aesthetics',
    ],
  },
  {
    id: 'escalators',
    icon: '🔄',
    name: 'Escalators',
    shortDesc: 'Continuous-flow escalator systems for high-traffic environments, combining durability with elegant aesthetics.',
    fullDesc: 'High-capacity continuous-flow escalator systems for malls, airports, transit hubs, and public buildings. Variable-speed drives, energy-saving standby modes, and stainless-steel construction standard. Available in inclinations of 30 and 35 degrees.',
    specs: [
      { label: 'Inclination', value: '30 or 35 degrees' },
      { label: 'Step Width',  value: '600mm / 800mm / 1000mm' },
      { label: 'Capacity',    value: 'Up to 9,000 persons/hr' },
      { label: 'Speed',       value: '0.4 / 0.5 / 0.65 m/s' },
      { label: 'Rise Height', value: 'Up to 12 m' },
      { label: 'Finish',      value: 'Brushed SS / custom' },
    ],
    features: [
      'Variable speed drive system',
      'Energy-saving standby mode',
      'Stainless steel construction',
      'Safety edge detection',
      'Anti-reversal device',
      'Step illumination LED',
      'Low noise operation below 58dB',
      'BMS integration ready',
    ],
  },
  {
    id: 'maintenance',
    icon: '🔧',
    name: 'AMC Maintenance',
    shortDesc: '24/7 annual maintenance contracts with predictive diagnostics, emergency response, and guaranteed uptime SLAs.',
    fullDesc: 'Comprehensive Annual Maintenance Contracts covering all elevator brands and models. Predictive diagnostics via IoT sensors, 24/7 remote monitoring, and guaranteed 45-minute emergency response anywhere in our service network.',
    specs: [
      { label: 'Response Time',   value: '45 minutes guaranteed' },
      { label: 'Coverage',        value: '24/7 x 365 days' },
      { label: 'Monitoring',      value: 'Real-time IoT dashboard' },
      { label: 'Uptime SLA',      value: '99.9% guaranteed' },
      { label: 'Brands Covered',  value: 'All major manufacturers' },
      { label: 'Reporting',       value: 'Monthly performance report' },
    ],
    features: [
      'Predictive AI diagnostics',
      '24/7 remote IoT monitoring',
      '45-minute emergency response',
      'All parts and labour covered',
      'Regulatory inspection support',
      'Dedicated service engineer',
      'Monthly performance reports',
      'Multi-brand coverage',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: '1', name: 'Marina Pinnacle Tower', location: 'Dubai, UAE',
    category: 'residential', tag: 'Residential · Dubai',
    detail: '12 High-Speed Passenger Elevators', year: '2026',
    gradient: 'from-[#060614] via-[#0d0d28] to-[#0d0d1e]',
  },
  {
    id: '2', name: 'Apex Business Center', location: 'Mumbai, India',
    category: 'commercial', tag: 'Corporate · Mumbai',
    detail: '8 High-Speed Elevators', year: '2025',
    gradient: 'from-[#06140c] via-[#081208] to-[#0a1a0a]',
  },
  {
    id: '3', name: 'Solaris Grand Resort', location: 'Goa, India',
    category: 'hospitality', tag: 'Hospitality · Goa',
    detail: '4 Capsule + 2 Service Elevators', year: '2025',
    gradient: 'from-[#1a0e0a] via-[#12080a] to-[#18060a]',
  },
  {
    id: '4', name: 'Medanta Complex', location: 'New Delhi, India',
    category: 'healthcare', tag: 'Healthcare · Delhi',
    detail: '6 Hospital Elevators', year: '2024',
    gradient: 'from-[#0e0e1a] via-[#080812] to-[#0a0a1a]',
  },
  {
    id: '5', name: 'Nexus Mall', location: 'Bangalore, India',
    category: 'retail', tag: 'Retail · Bangalore',
    detail: '4 Escalators + 3 Elevators', year: '2024',
    gradient: 'from-[#1a1a0a] via-[#12120a] to-[#181808]',
  },
  {
    id: '6', name: 'Emerald Heights', location: 'Pune, India',
    category: 'residential', tag: 'Residential · Pune',
    detail: '6 Passenger Elevators', year: '2024',
    gradient: 'from-[#0a1a1a] via-[#081212] to-[#0a1818]',
  },
  {
    id: '7', name: 'Skyline Suites', location: 'Hyderabad, India',
    category: 'residential', tag: 'Residential · Hyderabad',
    detail: '8 Passenger Elevators', year: '2023',
    gradient: 'from-[#14080a] via-[#180a0c] to-[#120608]',
  },
  {
    id: '8', name: 'Global Trade Tower', location: 'Chennai, India',
    category: 'commercial', tag: 'Commercial · Chennai',
    detail: '10 High-Speed + 2 Freight Elevators', year: '2023',
    gradient: 'from-[#081014] via-[#0a1218] to-[#081014]',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Onward Elevators transformed our 40-story tower project. Their engineering precision and the sheer quality of the finished product exceeded every expectation. The professionalism from consultation to handover was exemplary.',
    author: 'Rajesh Kumar',
    title: 'Project Director',
    company: 'Lodha Group',
    initials: 'RK',
    rating: 5,
  },
  {
    id: '2',
    quote: 'For our 500-bed hospital, reliability is non-negotiable. Onward hospital elevators have maintained 99.9% uptime over three years. Their service team responds within the hour, every single time. Absolute peace of mind.',
    author: 'Dr. Sunita Arora',
    title: 'CEO',
    company: 'Medanta Healthcare',
    initials: 'SA',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The capsule elevator in our hotel lobby has become an attraction. Guests stop to photograph it. Onward delivered something truly architectural — the craftsmanship is stunning and it runs perfectly after two years.',
    author: 'Priya Mehta',
    title: 'Owner and Managing Director',
    company: 'Solaris Grand Hotels',
    initials: 'PM',
    rating: 5,
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Smart Elevators: IoT, AI and Predictive Maintenance',
    category: 'Technology',
    date: 'May 2026',
    readTime: '6 min read',
    slug: 'smart-elevators-iot-ai',
    gradient: 'from-[#060614] to-[#0d0d28]',
    excerpt: 'How machine learning and real-time sensor data are eliminating elevator downtime before it happens.',
  },
  {
    id: '2',
    title: 'Capsule Elevators as Architectural Centrepieces in Modern Hotels',
    category: 'Design',
    date: 'April 2026',
    readTime: '4 min read',
    slug: 'capsule-elevators-hotels',
    gradient: 'from-[#06140c] to-[#0d2818]',
    excerpt: 'When vertical movement becomes a destination — the art of designing elevators that guests remember.',
  },
  {
    id: '3',
    title: 'NBC 2025 Elevator Guidelines: What Every Builder Needs to Know',
    category: 'Compliance',
    date: 'March 2026',
    readTime: '8 min read',
    slug: 'nbc-2025-elevator-guidelines',
    gradient: 'from-[#14060c] to-[#280d18]',
    excerpt: 'A comprehensive breakdown of the latest National Building Code requirements for lifts and escalators.',
  },
  {
    id: '4',
    title: 'Regenerative Drive Technology: How Elevators Are Becoming Power Generators',
    category: 'Engineering',
    date: 'February 2026',
    readTime: '5 min read',
    slug: 'regenerative-drive-technology',
    gradient: 'from-[#0a140a] to-[#121812]',
    excerpt: 'Understanding how modern VVVF drives convert braking energy back into usable electricity for the grid.',
  },
  {
    id: '5',
    title: 'EN 81-20 Explained: The European Safety Standard That Changed Elevator Design',
    category: 'Safety',
    date: 'January 2026',
    readTime: '7 min read',
    slug: 'en-81-20-explained',
    gradient: 'from-[#14100a] to-[#281e08]',
    excerpt: 'A technical deep-dive into what EN 81-20:2014 means for modern elevator design and installation.',
  },
  {
    id: '6',
    title: 'India Elevator Market 2026: Growth, Trends, and Opportunities',
    category: 'Industry',
    date: 'December 2025',
    readTime: '9 min read',
    slug: 'india-elevator-market-2026',
    gradient: 'from-[#0a0a14] to-[#080822]',
    excerpt: 'With rapid urbanisation and Smart Cities Mission driving demand, the Indian elevator market is at an inflection point.',
  },
]

export const JOBS: Job[] = [
  { id: '1', title: 'Senior Elevator Engineer',                    location: 'Indore, MP',          type: 'Full-time', salary: '12 to 18 LPA',        department: 'Engineering' },
  { id: '2', title: 'IoT and Embedded Systems Developer',          location: 'Bangalore / Remote',  type: 'Full-time', salary: '14 to 22 LPA',        department: 'Technology' },
  { id: '3', title: 'Interior Design Specialist — Elevator Cabins', location: 'Mumbai',             type: 'Full-time', salary: '8 to 14 LPA',         department: 'Design' },
  { id: '4', title: 'Business Development Manager',                location: 'Delhi / Mumbai',      type: 'Full-time', salary: '10 to 16 LPA + Comm', department: 'Sales' },
  { id: '5', title: 'Field Service Technician',                    location: 'Multiple Cities',     type: 'Full-time', salary: '4 to 7 LPA',          department: 'Operations' },
  { id: '6', title: 'Project Manager — Large Scale Installations', location: 'Pan India',           type: 'Full-time', salary: '15 to 24 LPA',        department: 'Management' },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Consultation', description: 'Site survey, architectural review, and requirement analysis by our senior engineers.' },
  { number: '02', title: 'Design',       description: 'Custom elevator design aligned with your building aesthetic and structural specifications.' },
  { number: '03', title: 'Engineering',  description: 'Precision manufacturing with ISO-certified quality control at every production stage.' },
  { number: '04', title: 'Installation', description: 'Expert installation by certified technicians with minimal disruption to operations.' },
  { number: '05', title: 'Handover',     description: 'Comprehensive testing, certification, and handover with full operator training included.' },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is the typical lead time from order to installation?',
    answer: 'Depending on the elevator type and complexity, our typical lead time ranges from 8 to 16 weeks from confirmed order. Passenger elevators average 10 to 12 weeks, while custom capsule or high-speed units may require 14 to 18 weeks. We provide a detailed project timeline during the consultation phase.',
  },
  {
    question: 'Do you offer maintenance contracts for existing elevators?',
    answer: 'Yes. Our Annual Maintenance Contracts (AMC) cover comprehensive preventive maintenance, 24/7 emergency callouts, and parts replacement. We also take over maintenance of elevators installed by other manufacturers after a thorough inspection and condition assessment.',
  },
  {
    question: 'What are your payment terms for new installations?',
    answer: 'We offer flexible payment structures typically structured as 30% advance, 40% on delivery, and 30% on commissioning. For large-scale projects with multiple units, we work with clients on customized milestone-based payment schedules.',
  },
  {
    question: 'Can existing elevator shafts be retrofitted with modern units?',
    answer: 'Absolutely. Modernization is one of our core competencies. Our engineers assess existing shaft dimensions and structural conditions, then design custom solutions that maximize performance within existing constraints — often with zero machine room requirement.',
  },
  {
    question: 'Are your elevators compliant with Indian building codes?',
    answer: 'All Onward Elevators are designed and tested to exceed National Building Code (NBC) requirements, BIS standards, and local municipal corporation specifications. We handle all inspection and approval documentation as part of the installation package.',
  },
]

export const TECH_FEATURES: TechFeature[] = [
  {
    icon: '⚡',
    title: 'VVVF AC Gearless Drive',
    description: 'Variable voltage, variable frequency drive eliminates gear friction, reducing energy consumption by up to 40% while delivering ultra-smooth acceleration and deceleration profiles across all speed ranges.',
  },
  {
    icon: '🔮',
    title: 'AI Predictive Maintenance',
    description: 'Machine learning algorithms analyse 200+ sensor data points in real-time, predicting component wear before failure occurs — eliminating unplanned downtime and reducing maintenance costs by 35%.',
  },
  {
    icon: '♻️',
    title: 'Regenerative Braking',
    description: 'Kinetic energy from descending cabins is converted back to electrical power and fed into the building grid. In high-rise applications, this can generate 30 to 40% of the elevator total energy consumption.',
  },
  {
    icon: '📡',
    title: 'IoT Remote Monitoring',
    description: '24/7 cloud-based monitoring of all installed units. Building managers access real-time dashboards showing elevator status, usage statistics, energy consumption, and maintenance scheduling.',
  },
  {
    icon: '🏢',
    title: 'Smart Building Integration',
    description: 'BMS and BAS integration, access control, destination dispatch, and occupancy-based traffic management. Systems communicate via BACnet, Modbus, and open APIs with all major building platforms.',
  },
  {
    icon: '🛡️',
    title: 'Active Vibration Control',
    description: 'Hydraulic roller guide shoes with active vibration dampening maintain cabin vibration below 0.02g — imperceptible to occupants even at maximum speed, delivering the smoothest possible ride quality.',
  },
]

export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    name: 'Essential',
    price: 'Rs. 18,000',
    period: '/year',
    color: 'border-white/10',
    features: ['Quarterly preventive visits', 'Lubrication and cleaning', 'Safety checks', 'Business-hours support'],
    missing: ['Emergency callouts', 'Parts replacement'],
  },
  {
    name: 'Premium',
    price: 'Rs. 36,000',
    period: '/year',
    color: 'border-blue-glow',
    popular: true,
    features: ['Monthly preventive visits', 'Full lubrication and alignment', '24/7 emergency callouts', '45-min response guarantee', 'Wear parts included'],
    missing: ['Major parts replacement'],
  },
  {
    name: 'Elite',
    price: 'Custom',
    period: '',
    color: 'border-gold',
    features: ['Fortnightly visits', 'Dedicated service engineer', '24/7 priority response', 'All parts covered', 'Real-time IoT dashboard', 'Guaranteed 99.9% uptime'],
  },
]

export const SAFETY_STANDARDS: SafetyStandard[] = [
  { badge: 'EN 81-20:2014', title: 'Safety Rules for Construction',  description: 'Full compliance with European EN 81-20 safety rules governing the construction and installation of new electric lifts, including all safety components and systems.' },
  { badge: 'EN 81-50:2014', title: 'Design Rules and Calculations',  description: 'Design rules, calculations, examinations, and tests for lift components including ropes, sheaves, pulleys, drums, and all safety components.' },
  { badge: 'NBC 2016',      title: 'National Building Code India',   description: 'All installations exceed the specifications of the National Building Code of India for lifts, escalators, and moving walks in all building categories.' },
  { badge: 'IS 14665',      title: 'Indian Standard for Lifts',     description: 'Full compliance with BIS IS 14665 series covering electric traction elevators, hydraulic elevators, and escalators under Indian Standards.' },
  { badge: 'EN 81-73',      title: 'Fire Emergency Behaviour',      description: 'Elevator behaviour during fire situations including firefighters service modes, emergency evacuation, and recall to designated floors.' },
  { badge: 'ISO 25745',     title: 'Energy Performance',            description: 'Energy performance measurement and classification — all our systems achieve the highest energy efficiency classifications under this international standard.' },
]

export const INDUSTRIES = [
  'Residential Towers',
  'Corporate Headquarters',
  'Luxury Hotels',
  'Healthcare Facilities',
  'Shopping Malls',
  'Industrial Plants',
  'Airport Terminals',
  'Heritage Buildings',
]
