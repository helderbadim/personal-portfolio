export interface Experience {
  company: string;
  date: string;
  description: string;
  stage: string;
  title: string;
}

export interface Project {
  built: readonly string[];
  description: string;
  learned: readonly string[];
  liveUrl?: string;
  previewUrl: string;
  mobilePreviewUrl: string;
  previewFit?: 'contain' | 'cover';
  sourceUrl?: string;
  technologies: readonly string[];
  title: string;
}

export const PROJECTS: readonly Project[] = [
  {
    title: 'Investment Calculator',
    description:
      'An Angular calculator that projects compound investment growth and presents a clear year-by-year breakdown of returns.',
    built: [
      'A calculator for initial capital, annual contributions, expected return, and investment duration.',
      'A year-by-year results table showing invested capital, annual interest, total interest, and portfolio value.',
    ],
    learned: [
      'How to share reactive calculation state through an Angular service, signals, and computed values.',
      'How to model compound-growth calculations and connect template-driven forms to reusable components.',
    ],
    technologies: ['Angular', 'TypeScript', 'Signals', 'CSS'],
    liveUrl: 'https://helderbadim.github.io/investment_calculator/',
    previewUrl: 'project-investment-calculator.png',
    mobilePreviewUrl: 'project-investment-calculator-mobile.png',
    previewFit: 'cover',
    sourceUrl: 'https://github.com/helderbadim/investment_calculator',
  },
  {
    title: 'Easy Task Management',
    description:
      'An Angular task-management dashboard for organising work by user, creating tasks, and keeping progress available between visits.',
    built: [
      'A user-focused dashboard that filters tasks by assignee and supports creating and completing work.',
      'Reusable standalone Angular components with forms, modern control flow, and localStorage persistence.',
    ],
    learned: [
      'How to organise feature state and shared behaviour through Angular services and component composition.',
      'How Angular Forms, TypeScript, and browser storage work together to keep an interactive workflow reliable.',
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'CSS'],
    liveUrl: 'https://helderbadim.github.io/Easy-Task-Management/',
    previewUrl: 'project-easy-task.png',
    mobilePreviewUrl: 'project-easy-task-mobile.png',
    previewFit: 'cover',
    sourceUrl: 'https://github.com/helderbadim/Easy-Task-Management',
  },
  {
    title: 'Bankist Webpage',
    description:
      'A responsive banking landing page that explores layout, motion, and interactive browser behaviour.',
    built: [
      'Interactive UI components including a modal, tabs, slider, and sticky navigation.',
      'Scroll-based behaviour with Intersection Observer, section reveals, and lazy-loaded images.',
    ],
    learned: [
      'How event delegation and reusable functions keep vanilla JavaScript maintainable.',
      'How to handle keyboard and mouse interactions without relying on a framework.',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://helderbadim.github.io/Bankist-Webpage/',
    previewUrl: 'project-bankist.png',
    mobilePreviewUrl: 'project-bankist-mobile.png',
    sourceUrl: 'https://github.com/helderbadim/Bankist-Webpage',
  },
  {
    title: 'Atlas Travel Agency',
    description:
      'A travel-agency interface focused on destination discovery, clear search interactions, and a polished visual experience.',
    built: [
      'A multi-page travel experience with a custom logo, visual identity, and responsive layouts.',
      'Destination, travel-pack, story, and checkout pages with a Bootstrap checkout component.',
    ],
    learned: [
      'How wireframes and a shared colour system create a consistent interface.',
      'How to collaborate through GitHub branches in a three-person team.',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    liveUrl: 'https://helderbadim.github.io/Atlas_TravelAgency_Website/',
    previewUrl: 'project-atlas.png',
    mobilePreviewUrl: 'project-atlas-mobile.png',
    sourceUrl: 'https://github.com/helderbadim/Atlas_TravelAgency_Website',
  },
  {
    title: 'Mapty',
    description:
      'A workout-tracking app that combines geolocation, interactive maps, and local browser storage.',
    built: [
      "A map-driven workflow for logging running and cycling workouts from the user's location.",
      'A persistent workout model using Leaflet, browser geolocation, and localStorage.',
    ],
    learned: [
      'How to connect browser APIs with a clear object-oriented JavaScript data model.',
      'How to calculate derived workout values and restore state after a page reload.',
    ],
    technologies: ['JavaScript', 'Leaflet', 'HTML', 'CSS'],
    liveUrl: 'https://helderbadim.github.io/Mapty/',
    previewUrl: 'project-mapty.png',
    mobilePreviewUrl: 'project-mapty-mobile.png',
    sourceUrl: 'https://github.com/helderbadim/Mapty',
  },
  {
    title: 'Swipe Project',
    description:
      'A responsive front-end project focused on a clear visual system and polished page interactions.',
    built: [
      'A responsive recreation of a modern payments landing page using HTML, CSS, and JavaScript.',
      'A cohesive visual system with structured layouts, imagery, and interactive page elements.',
    ],
    learned: [
      'How to break down a detailed reference into reusable layout and styling decisions.',
      'How small details in spacing, hierarchy, and motion shape a polished interface.',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://helderbadim.github.io/Swipe-Project/',
    previewUrl: 'project-swipe.png',
    mobilePreviewUrl: 'project-swipe-mobile.png',
    sourceUrl: 'https://github.com/helderbadim/Swipe-Project',
  },
];

export const EXPERIENCE: readonly Experience[] = [
  {
    date: 'NOV 2025 - PRESENT',
    title: 'Software Engineer',
    company: 'Agentifai',
    description:
      'Building software for a conversational AI platform used across banking and healthcare\u2014helping teams configure workflows, integrate services, manage real-time interactions, and deliver reliable systems.',
    stage: 'Software',
  },
  {
    date: 'APR - OCT 2025',
    title: 'Junior Developer Intern',
    company: 'New Knowledge Advice',
    description:
      'Customized SuiteCRM with PHP, Angular, and SQL while supporting Docker, Nginx, and email-delivery environments.',
    stage: 'Transition',
  },
  {
    date: '2019 - 2024',
    title: 'Doctoral Researcher',
    company: 'University of Minho',
    description:
      'Led biotechnology research through experimental design, quantitative analysis, and clear communication of complex findings.',
    stage: 'Research',
  },
];

export const SKILL_GROUPS = [
  {
    title: 'Core',
    description: 'The languages, frameworks, and patterns I use to build maintainable software.',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'SCSS',
      'RxJS',
      'NgRx',
      'Angular Signals',
      'Angular Material / CDK',
      'Nx',
    ],
  },
  {
    title: 'Systems',
    description: 'The technologies and integrations behind connected, production-ready systems.',
    skills: [
      'PHP',
      'SQL',
      'Nginx',
      'Microfrontends',
      'REST APIs',
      'Socket.IO',
      'Role-based access control',
      'Event-driven workflows',
      'Accessibility',
      'Internationalization',
    ],
  },
  {
    title: 'Quality',
    description: 'The tools and practices I use to test, automate, and deliver with confidence.',
    skills: [
      'Git',
      'Docker',
      'Bitbucket Pipelines',
      'pnpm',
      'Husky',
      'ESLint',
      'Prettier',
      'Jasmine',
      'Jest',
      'Vitest',
    ],
  },
] as const;
