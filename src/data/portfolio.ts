import type { Repo } from "@/components/RepoCard";

export interface Achievement {
  title: string;
  year: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const featuredRepos: Repo[] = [
  {
    name: "AidLink",
    description:
      "Built an AI-driven platform to recommend government welfare schemes. Integrated NLP chatbot for accessibility and multilingual interaction. Implemented eligibility-checking algorithms for personalized results.",
    techStack: ["React", "Python", "NLP", "Gemini AI"],
    github: "https://github.com/kanishkhaa/govt-scheme",
  },
  {
    name: "TrackNGo",
    description:
      "Developed a real-time bus tracking and alert system for Tier-2/3 cities. Focused on safety and accessibility features for diverse users.",
    techStack: ["React Native", "GPS Tracking","Authentication"],
    github: "https://github.com/kanishkhaa/TrackAndGo",
  },
  {
    name: "SmartRx",
    description:
      "Built a system for prescription analysis, medication tracking, and reminders. Added drug interaction detection and emergency QR-based health access.",
    techStack: ["Reactjs", "AI/ML", "Location API", "Gemini", "Python"],
    github: "https://github.com/kanishkhaa/smartrx",
    liveDemo: "https://smartrx.vercel.app/",
  },
  {
    name: "WellCare",
    description:
      "Designed a platform with AI diet recommendations and health tracking. Included gamified learning and chatbot support.",
    techStack: ["React", "Nodejs", "Expressjs", "Firebase"],
    github: "https://github.com/mithra0612/women-app",
    liveDemo: "https://wellcare-app.vercel.app/",
  },
];

export const allRepos: Repo[] = [
  ...featuredRepos,
  {
    name: "Spark Learn",
    description:
      "Built a full-stack platform with flashcards, quizzes, and gamified progress. Included admin dashboard and community features.",
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    github: "https://github.com/kanishkhaa/spark-learn",
  },
  {
    name: "AI-Powered Knowledge Assistant",
    description:
      "Developed an AI assistant using retrieval-augmented generation. Focused on intelligent information retrieval and contextual responses.",
    techStack: ["RAG", "MCP", "AI/ML", "Python"],
    github: "https://github.com/kanishkhaa/AI_Agent",
  },
];

export const internships = [
  {
    role: "Junior Web Developer",
    company: "iGraph Technologies (SimTestLab), Coimbatore",
    period: "May 2025 - June 2025",
    points: [
      "Developed an interactive drag-and-drop workflow builder using Next.js and React Flow, improving workflow efficiency by 40%",
      "Built a dynamic tree builder enabling users to create, rename, and connect nodes and edges, enhancing usability by 30%",
      "Contributed to a production-scale, multi-branch codebase with clean Git practices",
      "Wrote Vite-based tests, reducing post-merge UI issues by 20% and ensuring stable deployments",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Top 15,000 in Google Big Code",
    year: "2026",
  },
  {
    title: "Ranked Top 50 in VibeCode Arena - Beat the AI Challenge (HackerEarth)",
    year: "2025",
  },
  {
    title: "Secured Top 6 position nationwide in Smart India Hackathon",
    year: "2025",
  },
  {
    title: "Finalist at Hacksagon 2025 (ABV-IIITM Gwalior)",
    year: "2025",
  },
  {
    title: "Top 50 in HackHerVerse - 1",
    year: "2025",
  },
  {
    title: "Won Best UI Award at CodHer'25 (ACM CEG Anna University)",
    year: "2025",
  },
  {
    title: "Top 50 in TANCAM Women Hackathon",
    year: "2025",
  },
];

export const certifications: Certification[] = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2026",
  },
  {
    title: "Operating System Basics",
    issuer: "Cisco Networking Academy",
    year: "2026",
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2026",
  },
  {
    title: "Designing UI/UX",
    issuer: "Coursera",
    year: "2023",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2025",
  },
  {
    title: "Introduction to Data Concepts",
    issuer: "IBM",
    year: "2025",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Databricks",
    year: "2025",
  },
  {
    title: "JavaScript (Basics)",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "Software Engineer Intern Certification",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    year: "2025",
  },
  {
    title: "Problem Solving Through Programming in C",
    issuer: "NPTEL",
    year: "2024",
  },
];
