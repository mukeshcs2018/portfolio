// const currentYear = new Date().getFullYear();

// export const portfolioData = {
//   name: "Nova Chen",
//   role: "Full Stack Developer",
//   location: "Austin, TX",
//   nav: {
//     logo: "NC",
//     brand: "Nova Chen",
//     aria: {
//       open: "Open navigation menu",
//       close: "Close navigation menu",
//     },
//     links: [
//       { label: "Home", href: "#home" },
//       { label: "About", href: "#about" },
//       { label: "Skills", href: "#skills" },
//       { label: "Projects", href: "#projects" },
//       { label: "Experience", href: "#experience" },
//       { label: "Contact", href: "#contact" },
//     ],
//     cta: { label: "Hire Me", href: "#contact" },
//   },
//   hero: {
//     id: "home",
//     greeting: "Hello, I'm",
//     roleLabel: "Full Stack Developer",
//     typing: {
//       phrases: ["React + Node", "API + Cloud", "Design Systems"],
//       speed: 70,
//       deleteSpeed: 32,
//       pause: 1100,
//       cursor: "|",
//     },
//     headline: "Building high-performance products with clean, resilient code.",
//     description:
//       "I craft scalable web apps, pragmatic APIs, and delightful developer experiences for fast-moving teams.",
//     cta: [
//       { label: "Hire Me", href: "#contact", variant: "primary" },
//       { label: "View Projects", href: "#projects", variant: "ghost" },
//     ],
//     stats: [
//       { label: "Years Experience", value: "7+" },
//       { label: "Projects Shipped", value: "35+" },
//       { label: "Client Satisfaction", value: "100%" },
//     ],
//     highlight: {
//       badge: "Available",
//       title: "Open to new roles",
//       text: "Remote or Austin, TX",
//     },
//     image: {
//       src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
//       alt: "Portrait of Nova Chen",
//     },
//   },
//   about: {
//     id: "about",
//     title: "About",
//     subtitle: "Product-minded engineer with a systems mindset.",
//     bio: "I partner with teams to ship polished products from zero to scale. My focus is clean architecture, accessible UI, and performance that feels effortless.",
//     summaryTitle: "Core Strengths",
//     summary: [
//       "Front-end architecture and design systems",
//       "API design, performance, and reliability",
//       "Cloud-first delivery and automation",
//     ],
//     profileImage: {
//       src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=900&auto=format&fit=crop",
//       alt: "Nova Chen headshot",
//     },
//   },
//   skills: {
//     id: "skills",
//     title: "Skills",
//     subtitle: "Modern stacks built for speed, clarity, and scale.",
//     categories: [
//       {
//         title: "Frontend",
//         icon: "Layout",
//         items: [
//           { name: "React", level: 92, levelLabel: "Expert" },
//           { name: "TailwindCSS", level: 90, levelLabel: "Expert" },
//           { name: "TypeScript", level: 86, levelLabel: "Advanced" },
//           { name: "Framer Motion", level: 82, levelLabel: "Advanced" },
//         ],
//       },
//       {
//         title: "Backend",
//         icon: "Server",
//         items: [
//           { name: "Node.js", level: 90, levelLabel: "Expert" },
//           { name: "Express", level: 84, levelLabel: "Advanced" },
//           { name: "REST APIs", level: 88, levelLabel: "Advanced" },
//           { name: "GraphQL", level: 76, levelLabel: "Pro" },
//         ],
//       },
//       {
//         title: "Database",
//         icon: "Database",
//         items: [
//           { name: "PostgreSQL", level: 82, levelLabel: "Advanced" },
//           { name: "MongoDB", level: 78, levelLabel: "Pro" },
//           { name: "Redis", level: 72, levelLabel: "Pro" },
//           { name: "Prisma", level: 74, levelLabel: "Pro" },
//         ],
//       },
//       {
//         title: "Tools",
//         icon: "Wrench",
//         items: [
//           { name: "AWS", level: 80, levelLabel: "Advanced" },
//           { name: "Docker", level: 78, levelLabel: "Pro" },
//           { name: "GitHub Actions", level: 75, levelLabel: "Pro" },
//           { name: "Figma", level: 70, levelLabel: "Pro" },
//         ],
//       },
//     ],
//   },
//   projects: {
//     id: "projects",
//     title: "Projects",
//     subtitle: "Selected work focused on impact and craft.",
//     filterLabel: "Filter by tech",
//     filters: ["All", "React", "Node", "TypeScript", "AWS", "Postgres"],
//     linkLabels: {
//       github: "GitHub",
//       live: "Live Demo",
//     },
//     emptyState: "No projects match that filter yet.",
//     items: [
//       {
//         title: "Pulse Analytics",
//         description:
//           "Real-time product insights dashboard with custom charts, alerts, and multi-tenant access controls.",
//         image: {
//           src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
//           alt: "Analytics dashboard",
//         },
//         tech: ["React", "TypeScript", "Tailwind", "Node", "Postgres"],
//         links: {
//           github: "https://github.com/novachen/pulse-analytics",
//           live: "https://pulse-analytics.vercel.app",
//         },
//       },
//       {
//         title: "Atlas Commerce",
//         description:
//           "Composable storefront with headless CMS, lightning-fast search, and personalized recommendations.",
//         image: {
//           src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
//           alt: "Commerce platform",
//         },
//         tech: ["React", "Node", "AWS", "Redis"],
//         links: {
//           github: "https://github.com/novachen/atlas-commerce",
//           live: "https://atlas-commerce.vercel.app",
//         },
//       },
//       {
//         title: "Signal Ops",
//         description:
//           "Incident response hub with runbooks, status updates, and on-call automation for SaaS teams.",
//         image: {
//           src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
//           alt: "Operations workspace",
//         },
//         tech: ["React", "TypeScript", "Node", "Postgres"],
//         links: {
//           github: "https://github.com/novachen/signal-ops",
//           live: "https://signal-ops.vercel.app",
//         },
//       },
//     ],
//   },
//   experience: {
//     id: "experience",
//     title: "Experience",
//     subtitle: "Building platforms, products, and teams.",
//     timeline: [
//       {
//         role: "Senior Full Stack Engineer",
//         company: "Lumen Labs",
//         period: "2022 - Present",
//         location: "Austin, TX",
//         details: [
//           "Led the redesign of the core dashboard, improving activation by 28%.",
//           "Built a shared component library to speed up feature delivery across squads.",
//           "Scaled API throughput 3x while reducing infrastructure costs by 20%.",
//         ],
//       },
//       {
//         role: "Full Stack Engineer",
//         company: "Orbit Health",
//         period: "2019 - 2022",
//         location: "Remote",
//         details: [
//           "Shipped patient onboarding flows that cut drop-off rates by 35%.",
//           "Implemented analytics pipelines to track engagement and outcomes.",
//           "Collaborated with design to deliver accessible, WCAG-compliant UI.",
//         ],
//       },
//       {
//         role: "Frontend Engineer",
//         company: "Nova Studio",
//         period: "2017 - 2019",
//         location: "Seattle, WA",
//         details: [
//           "Delivered responsive marketing sites for tech startups and SaaS brands.",
//           "Optimized performance, reducing bundle size by 40%.",
//           "Mentored junior developers on modern front-end practices.",
//         ],
//       },
//     ],
//   },
//   contact: {
//     id: "contact",
//     title: "Contact",
//     subtitle: "Let's build something great together.",
//     email: "hello@novachen.dev",
//     methods: [
//       {
//         label: "Email",
//         value: "hello@novachen.dev",
//         href: "mailto:hello@novachen.dev",
//         icon: "Mail",
//       },
//       {
//         label: "LinkedIn",
//         value: "linkedin.com/in/novachen",
//         href: "https://linkedin.com/in/novachen",
//         icon: "Linkedin",
//       },
//       {
//         label: "GitHub",
//         value: "github.com/novachen",
//         href: "https://github.com/novachen",
//         icon: "Github",
//       },
//     ],
//     form: {
//       subject: "New portfolio inquiry",
//       submitLabel: "Send Message",
//       fields: [
//         {
//           name: "name",
//           label: "Name",
//           type: "text",
//           placeholder: "Your name",
//           required: true,
//         },
//         {
//           name: "email",
//           label: "Email",
//           type: "email",
//           placeholder: "you@email.com",
//           required: true,
//         },
//         {
//           name: "message",
//           label: "Message",
//           type: "textarea",
//           placeholder: "Tell me about your project",
//           required: true,
//         },
//       ],
//     },
//   },
//   socials: [
//     { label: "GitHub", href: "https://github.com/novachen", icon: "Github" },
//     { label: "LinkedIn", href: "https://linkedin.com/in/novachen", icon: "Linkedin" },
//     { label: "Email", href: "mailto:hello@novachen.dev", icon: "Mail" },
//   ],
//   footer: {
//     text: `(c) ${currentYear} Nova Chen. All rights reserved.`,
//     tagline: "Built with React, Vite, TailwindCSS, and Framer Motion.",
//   },
// };


import profileImage from "./profile.jpg";

const currentYear = new Date().getFullYear();

export const portfolioData = {
  // ===== FROM RESUME =====
  name: "Mukesh Kamat",
  role: "Full Stack Java Developer",
  location: "Gurgaon, India",

  nav: {
    logo: "MK",
    brand: "Mukesh Kamat",
    aria: {
      open: "Open navigation menu",
      close: "Close navigation menu",
    },
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Hire Me", href: "#contact" },
  },

  hero: {
    id: "home",
    greeting: "Hello, I'm",
    roleLabel: "Full Stack Java Developer",

    // tech from resume
    typing: {
      phrases: [
        "Java + Spring Boot",
        "React + Tailwind",
        "Microservices + REST APIs",
        "Docker + AWS",
      ],
      speed: 70,
      deleteSpeed: 32,
      pause: 1100,
      cursor: "|",
    },

    headline:
      "Building scalable backend systems and clean modern frontends.",
    description:
      "Full Stack Developer experienced in Spring Boot, REST APIs, MySQL, and React applications with production-ready architecture.",

    cta: [
      { label: "Hire Me", href: "#contact", variant: "primary" },
      { label: "View Projects", href: "#projects", variant: "ghost" },
    ],

    stats: [
      { label: "Experience", value: "1+ Year" },
      { label: "Projects Built", value: "10+" },
      { label: "Tech Stack", value: "Java • Spring • React" },
    ],

    highlight: {
      badge: "Available",
      title: "Open to new roles",
      text: "Gurgaon / Remote",
    },

    // dummy image (resume me nahi tha)
    image: {
      src: profileImage,
      alt: "Developer portrait",
    },
  },

  about: {
    id: "about",
    title: "About",
    subtitle: "Backend-focused engineer with full-stack capabilities.",

    bio:
      "Junior Software Developer with hands-on experience building REST APIs using Spring Boot and MySQL, along with responsive frontends using React and Tailwind CSS. Passionate about scalable systems and clean code.",

    summaryTitle: "Core Strengths",
    summary: [
      "Spring Boot REST API development",
      "Microservices architecture",
      "React + Tailwind UI",
      "Database optimization",
    ],

    // dummy
    profileImage: {
      src: profileImage,
      alt: "Profile",
    },
  },

  skills: {
    id: "skills",
    title: "Skills",
    subtitle: "Technologies I use regularly.",

    // ===== EXACTLY FROM RESUME =====
    categories: [
      {
        title: "Languages",
        icon: "Layout",
        items: [
          { name: "Java", level: 90, levelLabel: "Expert" },
          { name: "JavaScript", level: 85, levelLabel: "Advanced" },
          { name: "Python", level: 70, levelLabel: "Intermediate" },
          { name: "C++", level: 65, levelLabel: "Intermediate" },
        ],
      },
      {
        title: "Backend",
        icon: "Server",
        items: [
          { name: "Spring Boot", level: 90, levelLabel: "Expert" },
          { name: "REST APIs", level: 88, levelLabel: "Advanced" },
          { name: "Microservices", level: 85, levelLabel: "Advanced" },
          { name: "Spring Cloud", level: 75, levelLabel: "Pro" },
        ],
      },
      {
        title: "Database",
        icon: "Database",
        items: [
          { name: "MySQL", level: 88, levelLabel: "Advanced" },
          { name: "MongoDB", level: 75, levelLabel: "Pro" },
          { name: "Redis", level: 70, levelLabel: "Pro" },
          { name: "SQL", level: 90, levelLabel: "Expert" },
        ],
      },
      {
        title: "Tools",
        icon: "Wrench",
        items: [
          { name: "React.js", level: 85, levelLabel: "Advanced" },
          { name: "Tailwind CSS", level: 85, levelLabel: "Advanced" },
          { name: "Docker", level: 75, levelLabel: "Pro" },
          { name: "AWS (S3, EC2, Lambda)", level: 70, levelLabel: "Pro" },
          { name: "Git", level: 90, levelLabel: "Expert" },
        ],
      },
    ],
  },

  projects: {
    id: "projects",
    title: "Projects",
    subtitle: "Projects from my professional work.",

    filterLabel: "Filter by tech",
    filters: ["All", "Spring Boot", "React", "MySQL", "Microservices"],

    linkLabels: {
      github: "GitHub",
      live: "Live Demo",
    },

    emptyState: "No projects match that filter yet.",

    items: [
      {
        title: "Sagacious Internal Portal",
        description:
          "Developed and maintained enterprise portal features. Built REST APIs, fixed UI issues, optimized MySQL queries and improved performance.",
        image: {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
          alt: "Portal dashboard",
        },
        tech: ["React", "PHP", "MySQL", "REST API"],
        links: { github: "#", live: "#" },
      },
      {
        title: "ShopiSphere E-commerce Backend",
        description:
          "Microservices-based e-commerce backend using Spring Boot, Redis caching, MongoDB, and MySQL with API Gateway and Spring Security.",
        image: {
          src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
          alt: "Ecommerce backend",
        },
        tech: ["Spring Boot", "Microservices", "Redis", "MongoDB", "MySQL"],
        links: { github: "#", live: "#" },
      },
    ],
  },

  experience: {
    id: "experience",
    title: "Experience",
    subtitle: "Professional journey.",

    timeline: [
      {
        role: "Junior Software Developer",
        company: "Sagacious Elevate",
        period: "Sep 2024 – Present",
        location: "Gurgaon, India",
        details: [
          "Developed REST APIs using Spring Boot and MySQL",
          "Improved backend stability and performance",
          "Enhanced UI with React and Tailwind",
        ],
      },
      {
        role: "Software Developer Trainee",
        company: "Sagacious IP",
        period: "Sep 2024 – Nov 2024",
        location: "Gurgaon, India",
        details: [
          "Improved UI responsiveness",
          "Debugged PHP backend modules",
          "Built AJAX-based interfaces",
        ],
      },
    ],
  },

  // ⚠️ STRUCTURE SAME RAKHA (IMPORTANT)
  contact: {
    id: "contact",
    title: "Contact",
    subtitle: "Let's build something great together.",

    email: "mukeshkamat2408@gmail.com",

    methods: [
      {
        label: "Email",
        value: "mukeshkamat2408@gmail.com",
        href: "mailto:mukeshkamat2408@gmail.com",
        icon: "Mail",
      },
      {
        label: "Phone",
        value: "+91 7979064767",
        href: "tel:+917979064767",
        icon: "Phone",
      },
    ],

    // 🚨 DO NOT REMOVE (form + fields)
    form: {
      subject: "New portfolio inquiry",
      submitLabel: "Send Message",
      fields: [
        { name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
        { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
        { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project", required: true },
      ],
    },
  },

  socials: [
    { label: "Email", href: "mailto:mukeshkamat2408@gmail.com", icon: "Mail" },
  ],

  footer: {
    text: `(c) ${currentYear} Mukesh Kamat. All rights reserved.`,
    tagline: "Built with React + Tailwind + Spring Boot mindset 🚀",
  },
};
