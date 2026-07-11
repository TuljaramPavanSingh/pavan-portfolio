// All portfolio content lives here — edit this file to update the site, no component changes needed.

export const profile = {
  name: 'Pavan Singh',
  fullName: 'Tuljaram Pavan Singh',
  roles: [
    'Full-Stack MERN Developer',
    'React & TypeScript Specialist',
    'AI/ML Engineer',
  ],
  location: 'Hyderabad, Telangana, India',
  email: 'pawansingh22477@gmail.com',
  phone: '+91 9100694302',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  availability: 'Open to Full-Stack / React / AI-ML roles',
  resumeUrl: '/Pavan_Singh_Resume.pdf',
  summary:
    "I build production web applications with React, TypeScript, and Node — the kind that ship, hold up under load, and don't fall apart the first time a designer changes a breakpoint. Over the past year I've shipped 20+ components across gaming, 3D real-estate, and AI SaaS platforms, and I bring a second toolkit — Python, computer vision, and the OpenAI API — when a product needs intelligence baked in rather than bolted on.",
  quickFacts: [
    { label: 'Based in', value: 'Hyderabad, India' },
    { label: 'Focus', value: 'React · TypeScript · Node · AI' },
    { label: 'Previously worked', value: 'Full-Stack Dev Intern @ Ctruh' },
    { label: 'Open to', value: 'Full-time roles, 2026' },
  ],
}

export const stats = [
  { label: 'Years Building in Production', value: 1, suffix: '+' },
  { label: 'Components Shipped', value: 20, suffix: '+' },
  { label: 'Production Releases', value: 5, suffix: '+' },
  { label: 'Certifications Earned', value: 5, suffix: '' },
]

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'Redux', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 82 },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'Socket.IO', level: 70 },
      { name: 'JWT / OAuth', level: 78 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'MongoDB Atlas', level: 82 },
      { name: 'MySQL', level: 72 },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'OpenAI API', level: 85 },
      { name: 'Computer Vision', level: 74 },
      { name: 'TensorFlow', level: 68 },
      { name: 'OpenCV', level: 72 },
    ],
  },
  {
    category: 'Data Science',
    items: [
      { name: 'Python', level: 85 },
      { name: 'Pandas / NumPy', level: 75 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Vercel', level: 85 },
      { name: 'Figma', level: 75 },
      { name: 'Postman', level: 82 },
    ],
  },
]

export const experience = [
  {
    role: 'Full-Stack Developer Intern',
    company: 'Ctruh',
    location: 'Hyderabad (Remote)',
    duration: 'Jan 2025 — Dec 2025',
    points: [
      'Built and shipped 20+ reusable, modular React components with TypeScript across 5+ production platforms spanning gaming, 3D real-estate, and enterprise CMS — cutting feature delivery time by roughly 30%.',
      'Delivered pixel-perfect, responsive UIs with sub-2-second load times by pairing lazy loading, code splitting, and memoization.',
      'Connected frontend components to RESTful backend APIs and CMS workflows to keep data flowing reliably end to end.',
      'Added WCAG-compliant accessibility — voice-over support, semantic HTML, ARIA attributes — across platforms.',
      'Ran end-to-end testing, UI validation, and bug triage across 5+ production releases inside an Agile/Scrum team.',
      'Paired closely with UI/UX designers and backend engineers to turn Figma files into production code with high fidelity.',
    ],
  },
]

export const education = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'Vidya Jyothi Institute of Technology, Hyderabad',
    duration: '2020 — 2024',
    cgpa: 'CGPA: 6.7 / 10',
  },
]

export type Project = {
  slug: string
  title: string
  period: string
  tagline: string
  description: string
  stack: string[]
  features: string[]
  challenge: string
  architecture: string
  links: { github?: string; demo?: string }
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'journeybot-ai',
    title: 'JourneyBot.AI',
    period: 'Sep 2025 — Nov 2025',
    tagline: 'AI trip planner that turns a destination into a full itinerary',
    description:
      'A full-stack AI SaaS platform that generates personalized, multi-day travel itineraries with hotel recommendations. Built end to end — auth, rate limiting, mapping, and the AI itinerary engine.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB Atlas', 'OpenAI API', 'Mapbox', 'Clerk', 'Arcjet', 'Tailwind CSS'],
    features: [
      'OpenAI-driven itinerary generation tailored to trip length, budget, and interests',
      'Secure auth via Clerk with JWT sessions',
      'API rate-limiting with Arcjet to protect the AI endpoints from abuse',
      'Interactive geolocation maps with Mapbox GL JS',
      'Real-time place search via Google Places API',
    ],
    challenge:
      'Keeping AI responses structured and reliable enough to render as UI, while rate-limiting expensive OpenAI calls without hurting the experience for genuine users.',
    architecture:
      'Next.js front end talking to a Node/Express API layer, MongoDB Atlas for persistence, Clerk for auth, Arcjet middleware for rate limiting, deployed on Vercel.',
    links: { github: '#', demo: '#' },
    accent: 'from-blue-500 to-purple-500',
  },
  {
    slug: 'gaming-platform-ui',
    title: 'Gaming Platform UI',
    period: '2025',
    tagline: 'A 60fps animated homepage for a gaming product',
    description:
      'A visually rich, animated homepage with interactive components and complex responsive layouts, built to hold consistent performance across every device size.',
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Interactive, motion-heavy homepage sections',
      'Consistent 60fps animation across breakpoints',
      'Reduced Largest Contentful Paint through asset and lazy-loading optimization',
    ],
    challenge: 'Keeping animation-heavy UI smooth on mid-range devices without sacrificing visual density.',
    architecture: 'Component-driven React architecture with Framer Motion orchestration and aggressive code-splitting per route.',
    links: { github: '#', demo: '#' },
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    slug: '3d-real-estate',
    title: '3D Real-Estate Platform UI',
    period: '2025',
    tagline: 'Pixel-perfect UI for an interactive 3D property showcase',
    description:
      'Converted high-fidelity Figma designs into production-ready React components for a 3D interactive real-estate showcase platform.',
    stack: ['React.js', 'Tailwind CSS', 'Three.js'],
    features: [
      'Dynamic layouts with smooth scroll-based animation',
      'Pixel-perfect translation from Figma to production code',
      'Improved engagement and time-on-site through interaction design',
    ],
    challenge: 'Matching Figma fidelity exactly while keeping the 3D scene performant on lower-end hardware.',
    architecture: 'React component layer wrapping a Three.js scene, with scroll-linked camera and layout transitions.',
    links: { github: '#', demo: '#' },
    accent: 'from-purple-500 to-fuchsia-500',
  },
  {
    slug: 'virtual-jewellery-tryon',
    title: 'Virtual Jewellery Try-On Module',
    period: '2025',
    tagline: 'A reusable component system for AR jewellery try-on',
    description:
      'Designed a reusable component library — card layouts, image holders, multi-variant displays — for a virtual try-on product, keeping the UI consistent across the platform.',
    stack: ['React.js', 'Tailwind CSS', 'Component Design System'],
    features: [
      'Reusable card and image-holder primitives',
      'Multi-variant product displays',
      'UI layer integrated with the AR/try-on computer-vision pipeline',
    ],
    challenge: 'Building a component system flexible enough for many product variants without duplicating logic.',
    architecture: 'Design-system-first React components consumed across multiple try-on product surfaces, integrated with the CV pipeline via a shared UI contract.',
    links: { github: '#', demo: '#' },
    accent: 'from-pink-500 to-rose-400',
  },
  {
    slug: 'accident-detection',
    title: 'Deep Learning Accident Detection System',
    period: 'Jan 2024 — Mar 2024',
    tagline: 'Real-time road accident detection from video, with instant SMS alerts',
    description:
      'A real-time deep learning system that detects road accidents from video feeds with roughly 90% accuracy in controlled test environments, with automated SMS alerting.',
    stack: ['Python', 'OpenCV', 'TensorFlow', 'Streamlit', 'Twilio API'],
    features: [
      '~90% detection accuracy in controlled test environments',
      'Automated SMS alert notifications via Twilio API',
      'Interactive Streamlit demo for stakeholder presentations',
    ],
    challenge: 'Getting inference fast enough for near real-time detection on video streams while keeping false positives low.',
    architecture: 'OpenCV frame extraction feeding a TensorFlow classification model, with a Streamlit front end and Twilio for alerting.',
    links: { github: '#', demo: '#' },
    accent: 'from-amber-400 to-orange-500',
  },
]

export const aiExpertise = [
  { title: 'React + Node', desc: 'Full-stack apps where the frontend and API layer are designed together, not bolted on after the fact.' },
  { title: 'MongoDB', desc: 'Schema design and Atlas-hosted data layers built for the access patterns the product actually uses.' },
  { title: 'OpenAI API', desc: 'Structured prompt design and response parsing to make LLM output reliable enough to render as UI.' },
  { title: 'Computer Vision', desc: 'OpenCV and TensorFlow pipelines for real-time detection tasks, from frame extraction to alerting.' },
  { title: 'Next.js', desc: 'Server-rendered and edge-ready React apps where performance is part of the spec, not an afterthought.' },
  { title: 'REST APIs', desc: 'Clean, versioned API contracts with auth, rate-limiting, and error handling designed in from day one.' },
  { title: 'Performance', desc: 'Lazy loading, code-splitting, and memoization used deliberately — sub-2-second loads, not just Lighthouse theatre.' },
]

export const certifications = [
  {
    title: 'Crash Course on Python',
    org: 'Google (Coursera)',
    date: 'Nov 14, 2024',
    image: 'cert-google-python.png',
    verify: 'https://coursera.org/verify/V6TOPMIMGA2G',
  },
  {
    title: 'Databases and SQL for Data Science with Python',
    org: 'IBM (Coursera)',
    date: 'Aug 30, 2024',
    image: 'cert-ibm-sql.png',
    verify: 'https://coursera.org/verify/JM778OS266ZK',
  },
  {
    title: 'Python 101 for Data Science',
    org: 'IBM / Cognitive Class',
    date: 'Sep 10, 2023',
    image: 'cert-ibm-python101.png',
    verify: 'https://courses.cognitiveclass.ai',
  },
  {
    title: 'Java Certified Foundations Associate',
    org: 'Infosys Springboard',
    date: 'Aug 29, 2023',
    image: 'cert-infosys-java.png',
    verify: 'https://verify.onwingspan.com',
  },
  {
    title: 'Designing a Machine Learning Model using Python',
    org: 'Vidya Jyothi Institute of Technology · ACM Chapter',
    date: 'Nov 3–4, 2022',
    image: 'cert-vjit-ml-workshop.png',
    verify: '',
  },
]

// Placeholder testimonials — swap in real quotes from managers/collaborators when available.
export const testimonials = [
  {
    quote:
      'Turned our Figma files into production code faster than we could review them — and the accessibility work he did on his own initiative was the kind of thing senior engineers usually skip.',
    name: 'Engineering Lead',
    role: 'Ctruh',
  },
  {
    quote:
      'What stood out was how he thought about the AI layer — not just calling an API, but designing around its failure modes from the start.',
    name: 'Product Collaborator',
    role: 'JourneyBot.AI',
  },
  {
    quote:
      'Ships fast, communicates clearly, and leaves the codebase better organized than he found it.',
    name: 'Backend Engineer',
    role: 'Ctruh team',
  },
]

export const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
]
