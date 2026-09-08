/**
 * Portfolio Content — Single source of truth for all portfolio data.
 * Sourced from: resume.pdf, GitHub (auto-pulled), LinkedIn public profile.
 */

export const profile = {
  name: "Aryan Singh Nagar",
  tagline: "AI-Native Developer · IIT Bombay Electrical Engineering '25",
  subTagline: "Specializing in AI-native development, machine learning, deep learning, and data science powered by Python, SQL, and DSA.",
  location: "India (Open to Relocation)",
  email: "auricwings13@gmail.com",
  phone: "+91 782-775-6669",
  resumeUrl: "/assets/Aryan_Singh_Nagar_Resume.pdf",
  headshot: "/assets/headshot.jpg",
  linkedin: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
  github: "https://github.com/aryansinghnagar",
  summary:
    "Electrical Engineering graduate from IIT Bombay (B.Tech, 2019–2025) specializing in AI-native development, machine learning, deep learning, and data science. Combines rigorous computer science fundamentals—data structures & algorithms, mathematical modeling, and statistical rigor—with clean, production-grade Python, SQL, and disciplined Git workflows.",
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
  { value: "IIT Bombay", label: "B.Tech, Electrical Engineering", context: "Class of 2025 · Rigorous coursework in ML, DL & DSA" },
  { value: "NTSE Scholar", label: "National Talent Search", context: "NCERT prestigious national merit fellowship" },
];

export const skills = [
  {
    category: "AI-Native Development",
    items: [
      "AI-Native Development",
      "LLM Orchestration & Agents",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering & Fine-Tuning",
    ],
  },
  {
    category: "Machine Learning & Deep Learning",
    items: [
      "Machine Learning (ML)",
      "Deep Learning (DL)",
      "Neural Network Architectures",
      "Model Training & Evaluation",
    ],
  },
  {
    category: "Data Science & SQL",
    items: [
      "Data Science",
      "SQL & Relational Databases",
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering & Data Pipelines",
    ],
  },
  {
    category: "Core Foundations & Tooling",
    items: [
      "Python",
      "Data Structures & Algorithms (DSA)",
      "Git & Version Control",
      "Algorithmic Problem Solving",
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
      "Core Coursework: Machine Learning, Deep Learning, Data Science, Data Structures & Algorithms, Linear Algebra, Probability & Statistics.",
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
