/**
 * Central Portfolio Configuration for Mukesh Kaushal
 * All personal information, projects, links, and text are customizable here.
 */

export const personalInfo = {
  name: "Mukesh Kaushal",
  monogram: "MK",
  role: "Aspiring Software Engineer & Frontend Developer",
  status: "Open to Internships & Junior Roles",
  location: "India",
  email: "mukeshkaushal.tech@gmai.com", // Edit with your preferred contact email
  social: {
    github: "https://github.com/the-mukeshkaushal", // Edit with your GitHub URL
    linkedin: "https://www.linkedin.com/in/mukesh-kaushal-2a4012329/", // Edit with your LinkedIn URL
    twitter: "https://x.com/Sheetij09", // Optional, edit or remove
  },
  resumeUrl: "/resume.pdf", // Place your updated resume file in public/resume.pdf
  hero: {
    badge: "ASPIRING SOFTWARE ENGINEER",
    headline: "Building digital experiences that feel different.",
    bio: "I'm Mukesh Kaushal, a frontend developer who enjoys building responsive, interactive, and user-focused web applications with React and modern web technologies.",
    primaryCta: "Explore My Work",
    secondaryCta: "Download Resume",
  },
  techTicker: [
    { name: "React", category: "Library" },
    { name: "JavaScript", category: "Language" },
    { name: "Redux", category: "State Management" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Git", category: "Version Control" },
    { name: "Vite", category: "Build Tool" },
  ],
};

export const aboutData = {
  title: "A little about me.",
  paragraphs: [
    "I am an aspiring Full Stack developer and software engineering student with a strong passion for turning creative ideas into functional, intuitive, and performant web applications.",
    "My focus centers on frontend engineering with React, developing structured, reusable UI components, and managing predictable application state using Redux. I craft layouts with Tailwind CSS, aiming for clean code and seamless responsive behavior across devices.",
    "Beyond frontend development, I am continuously deepening my computer science fundamentals in Data Structures & Algorithms with Java and C++, while actively exploring backend technologies and API design to evolve into a versatile full-stack engineer.",
  ],
  facts: [
    { label: "Core Focus", value: "Frontend Engineering & Component Design" },
    { label: "Primary Framework", value: "React.js & Modern Ecosystem" },
    { label: "Current Focus", value: "Full-Stack Fundamentals & Backend APIs" },
    { label: "Languages", value: "JavaScript, Java, C++, HTML5, CSS3" },
    { label: "Availability", value: "Internships & Software Engineer Roles" },
    { label: "Work Ethic", value: "Clean Code, Attention to UX, Continuous Learner" },
  ],
};

export const skillsData = [
  {
    category: "Frontend",
    description: "Building responsive, modern, and accessible user interfaces",
    skills: [
      { name: "HTML5", level: "Semantic Markup" },
      { name: "CSS3", level: "Modern Layouts & Animations" },
      { name: "JavaScript (ES6+)", level: "Core Logic & Async APIs" },
      { name: "React.js", level: "Hooks, Components & State" },
      { name: "Tailwind CSS", level: "Utility-First Design" },
    ],
  },
  {
    category: "State Management & Tools",
    description: "Application architecture, tooling, and developer workflows",
    skills: [
      { name: "Redux / Redux Toolkit", level: "Global State Management" },
      { name: "React Router", level: "Client-Side Routing" },
      { name: "Vite", level: "Modern Build Tooling" },
      { name: "Git", level: "Version Control & Branching" },
      { name: "GitHub", level: "Collaboration & Repositories" },
      { name: "npm", level: "Package Ecosystem" },
    ],
  },
  {
    category: "Programming",
    description: "Strong computer science foundations and algorithmic problem solving",
    skills: [
      { name: "Java", level: " DSA & Object-Oriented Programming" },
      // { name: "C++", level: "Data Structures & Core Algorithms" },
    ],
  },
];

export const projectsData = [
  {
    id: "audioverse",
    number: "01",
    title: "AudioVerse",
    category: "Web Application",
    featured: true,
    description:
      "A responsive audiobook streaming platform designed for effortless listening. Features catalog discovery, real-time category filtering, dynamic book detail pages, authentication views, and interactive audio playback controls.",
    tags: ["React", "Vite", "Tailwind CSS", "React Router", "Audio API"],
    liveUrl: "https://audio-verse-seven.vercel.app/", // Replace with your live deployment URL
    githubUrl: "https://github.com/the-mukeshkaushal/AudioVerse", // Replace with your repository URL
    highlights: [
      "Custom audio player state with play, pause, progress tracking, and volume adjustment",
      "Dynamic book browsing and responsive category filter navigation",
      "Modular component architecture structured for clean state flow",
    ],
    previewType: "audiobook",
  },

   {
  id: "gym-website",
  number: "02",
  title: "Aura Fitness",
  category: "Fitness Website & UI",
  featured: true,
  description:
    "A modern, responsive fitness website built to deliver a premium gym experience with interactive components, smooth animations, and a polished user interface. Features fitness programs, membership plans, and a light/dark theme toggle.",
  tags: [
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX"
  ],
  liveUrl: "https://aura-fitness-website.vercel.app/?_vercel_share=T5LXv04eEUL8EaeIcTYd22ZWZM5eXimK",
  githubUrl: "https://github.com/the-mukeshkaushal/aura-fitness-website",
  highlights: [
    "Modern fitness landing page with premium visual design and clear calls to action",
    "Responsive layouts with interactive hover effects and smooth animations",
    "Light/dark theme toggle and reusable React components"
  ],
  previewType: "fitness",
},
  {
    id: "fake-identity-screening",
    number: "03",
    title: "Fake Identity Screening",
    category: "Web Prototype",
    featured: true,
    description:
      "A web application prototype focused on identity verification workflows, input validation mechanisms, and presenting screening verification outcomes through an intuitive and structured user interface.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "Form Validation"],
    liveUrl: "https://fake-identity-screening.vercel.app/",
    // githubUrl: "https://github.com/mukeshkaushal/fake-identity-screening", // Replace with your repository URL
    highlights: [
      "Real-time validation for screening inputs and identity attributes",
      "Structured status dashboard with visual verification indicators",
      "Responsive interface engineered for seamless mobile and desktop reviewing",
    ],
    previewType: "screening",
  },

];

export const learningTimeline = [
  {
    phase: "Currently Exploring",
    status: "Active Focus",
    title: "Backend Engineering & RESTful APIs",
    description:
      "Learning Node.js, Express, and database fundamentals (SQL & MongoDB) to connect robust server-side logic with React frontends.",
    topics: ["Node.js & Express", "RESTful Architecture", "Relational Database Design", "JWT Authentication"],
    date: "Current Focus",
  },
  {
    phase: "Algorithmic Foundations",
    status: "Ongoing Practice",
    title: "Data Structures & Algorithms",
    description:
      "Strengthening core problem-solving competencies in Java and C++, solving problems on arrays, strings, recursion, linked lists, and tree structures.",
    topics: ["Java", "C++", "Time & Space Complexity", "Problem Solving Patterns"],
    date: "Continuous",
  },
  {
    phase: "Frontend Mastery",
    status: "Solid Foundation",
    title: "Advanced React & Component Design",
    description:
      "Building production-grade client applications with custom hooks, scalable state management via Redux, and high-performance UI patterns.",
    topics: ["React 19 / 18", "State Architecture", "Performance Optimization", "Clean Code Principles"],
    date: "Foundation",
  },
];

export const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];
