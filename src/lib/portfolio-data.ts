/**
 * Portfolio Content — Single source of truth for all portfolio data.
 * Sourced from: resume.pdf, GitHub (auto-pulled), LinkedIn public profile.
 */

export const profile = {
  name: "Aryan Singh Nagar",
  tagline: "AI-Native Developer · IIT Bombay Electrical Engineering '25",
  subTagline: "Building production AI agents and intelligent applications with low-level execution rigor.",
  location: "India (Open to Relocation)",
  email: "auricwings13@gmail.com",
  phone: "+91 782-775-6669",
  resumeUrl: "/assets/Aryan_Singh_Nagar_Resume.pdf",
  headshot: "/assets/headshot.jpg",
  linkedin: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
  github: "https://github.com/aryansinghnagar",
  summary:
    "Electrical Engineering graduate from IIT Bombay (B.Tech, 2019–2025) building intelligent, AI-native applications and robust software architectures. Pairs modern LLM orchestration and agentic workflows with deep intuition for runtime performance, memory constraints, and low-latency execution. Demonstrates high analytical rigor, rapid technical comprehension, and a disciplined first-principles approach to software engineering.",
  philosophy:
    "I build AI-native software from first principles—treating models not as black boxes, but as compute-intensive workloads that demand memory efficiency, predictable latency, and clean architectural abstractions.",
};

export const socials = [
  { name: "GitHub", href: "https://github.com/aryansinghnagar", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
    icon: "linkedin",
  },
  { name: "Email", href: "mailto:auricwings13@gmail.com", icon: "mail" },
];

export const stats = [
  { value: "AIR 413", label: "JEE Advanced 2019", context: "All India Rank · Top ~0.3% of 150,000 candidates" },
  { value: "AIR 262", label: "JEE Main 2019", context: "All India Rank · Top ~0.05% of 1.1M candidates" },
  { value: "IIT Bombay", label: "B.Tech, Electrical Engineering", context: "Class of 2025 · Rigorous coursework in systems & ML" },
  { value: "NTSE Scholar", label: "National Talent Search", context: "NCERT prestigious national merit fellowship" },
];

export const skills = [
  {
    category: "AI & Agentic Systems",
    items: [
      "LLM Orchestration & Multi-Agent Workflows",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases & Embeddings",
      "Model Fine-Tuning & Serving",
      "PyTorch",
      "Prompt Engineering & Evals",
    ],
  },
  {
    category: "Languages & Core Tooling",
    items: [
      "Python",
      "TypeScript",
      "C++",
      "Rust",
      "SQL",
      "Git",
    ],
  },
  {
    category: "Application & Product Stack",
    items: [
      "Next.js & React",
      "FastAPI",
      "Docker & Containerization",
      "Node.js",
      "RESTful APIs & Webhooks",
      "Tailwind CSS",
    ],
  },
  {
    category: "Systems & Performance Foundations",
    items: [
      "Concurrency & Async I/O",
      "Latency & Memory Optimization",
      "Inference Runtimes (ONNX / TensorRT)",
      "Linux Systems & POSIX",
      "Data Structures & Algorithms",
      "Distributed System Design",
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
}

export const experiences: Experience[] = [];

export interface ProjectRoadmap {
  challenge: string;
  plan: string;
}

export interface Project {
  slug: string;
  title: string;
  hook: string;
  category: "Generative AI & Agents" | "Systems & Security" | "ML / CV" | "Data Science";
  year: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
  description: string;
  highlights: string[];
  roadmap?: ProjectRoadmap;
  links: { label: string; href: string; primary?: boolean }[];
  featured: boolean;
}

export const projects: Project[] = [];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
  score?: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech), Electrical Engineering",
    institution: "Indian Institute of Technology, Bombay",
    period: "2019 — 2025",
    details:
      "Core Coursework: Machine Learning, Data Science, Systems Security, Algorithms, Linear Algebra, Applied Cryptography.",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  topics?: string[];
}

export const certifications: Certification[] = [
  {
    title: "Machine Learning / AI Specialization",
    issuer: "DeepLearning.AI",
    year: "2025",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    year: "2025",
  },
];

export const achievements = [
  {
    title: "All India Rank 413 — JEE Advanced 2019",
    context: "Top ~0.3% among approximately 150,000 qualified candidates nationwide",
  },
  {
    title: "All India Rank 262 — JEE Main 2019",
    context: "Top ~0.05% among approximately 1.1 million candidates nationwide",
  },
  {
    title: "National Talent Search (NTSE) Scholar — 2017",
    context: "National-level merit scholarship awarded by NCERT, Government of India",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
