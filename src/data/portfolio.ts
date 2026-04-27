import type { Repo } from "@/components/RepoCard";

export const featuredRepos: Repo[] = [
  {
    name: "neural-canvas",
    description: "AI-powered design system that generates accessible UI components from natural language prompts. Built with React, GSAP and a fine-tuned LLM backend.",
    language: "TypeScript",
    languageColor: "bg-sky-400",
    stars: 1248,
    forks: 184,
  },
  {
    name: "flux-portfolio-engine",
    description: "Headless portfolio engine with smooth scroll, scroll-driven animations, and zero-config theming. Powering 200+ developer sites.",
    language: "React",
    languageColor: "bg-cyan-400",
    stars: 892,
    forks: 92,
  },
  {
    name: "vortex-ml-pipeline",
    description: "End-to-end ML pipeline for image classification with FastAPI inference, Docker deployment, and a real-time React dashboard.",
    language: "Python",
    languageColor: "bg-yellow-400",
    stars: 451,
    forks: 47,
  },
  {
    name: "obsidian-ui-kit",
    description: "Minimal dark-mode component library inspired by terminal aesthetics. Tree-shakeable, themeable, fully typed.",
    language: "TypeScript",
    languageColor: "bg-sky-400",
    stars: 328,
    forks: 31,
  },
];

export const allRepos: Repo[] = [
  ...featuredRepos,
  {
    name: "synapse-chat",
    description: "Real-time multiplayer chat with WebRTC voice rooms, end-to-end encryption, and presence indicators.",
    language: "Node.js",
    languageColor: "bg-emerald-500",
    stars: 214,
    forks: 22,
  },
  {
    name: "echo-cli",
    description: "Beautiful CLI scaffolding tool for full-stack TypeScript apps with built-in auth and database adapters.",
    language: "TypeScript",
    languageColor: "bg-sky-400",
    stars: 187,
    forks: 18,
  },
  {
    name: "prism-viz",
    description: "Interactive data visualization library built on D3 + React, optimized for dashboards with 100k+ data points.",
    language: "JavaScript",
    languageColor: "bg-yellow-300",
    stars: 142,
    forks: 14,
  },
  {
    name: "lumen-auth",
    description: "Drop-in authentication for Express and Fastify with passkeys, OAuth, magic links, and 2FA out of the box.",
    language: "Node.js",
    languageColor: "bg-emerald-500",
    stars: 96,
    forks: 9,
  },
  {
    name: "drift-state",
    description: "Atomic, signal-based state manager for React with sub-millisecond updates and devtools integration.",
    language: "TypeScript",
    languageColor: "bg-sky-400",
    stars: 64,
    forks: 6,
  },
  {
    name: "crater-css",
    description: "Utility-first CSS engine with type-safe tokens and zero runtime cost — pure compile-time magic.",
    language: "CSS",
    languageColor: "bg-purple-400",
    stars: 38,
    forks: 4,
  },
];
