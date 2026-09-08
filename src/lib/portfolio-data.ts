/**
 * Portfolio Content — Single source of truth for all portfolio data.
 * Sourced from: resume.pdf, GitHub (auto-pulled), LinkedIn public profile.
 */

export const profile = {
  name: "Aryan Singh Nagar",
  handle: "SilverFox",
  tagline: "AI/ML & Systems Engineer · IIT Bombay EE '25 · Driven by First-Principles & Applied Systems",
  subTagline: "IIT Bombay EE '25 · JEE Adv AIR 413 · Ready to Contribute",
  location: "India (Open to Relocation)",
  email: "auricwings13@gmail.com",
  phone: "+91 782-775-6669",
  resumeUrl: "/assets/Aryan_Singh_Nagar_Resume.pdf",
  headshot: "/assets/headshot.jpg",
  linkedin: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
  github: "https://github.com/aryansinghnagar",
  summary:
    "IIT Bombay Electrical Engineering graduate (B.Tech, 2019–2025) with strong foundations in computing systems, machine learning, and applied mathematics. Passionate about exploring complex engineering problems from first principles—diving deep into AI/ML pipelines, low-latency systems, and privacy-preserving architectures through hands-on exploratory prototyping. Driven by curiosity, rapid learning velocity, and a disciplined commitment to building resilient software.",
  philosophy:
    "I believe high-impact engineering begins with deep foundational curiosity. Whether experimenting with emerging ML architectures, exploring systems internals, or dissecting distributed protocols, I approach technical problems from first principles—optimizing for correctness, clarity, and continuous learning.",
};

export const socials = [
  { name: "GitHub", href: "https://github.com/aryansinghnagar", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
    icon: "linkedin",
  },
  { name: "Email", href: "mailto:auricwings13@gmail.com", icon: "mail" },
  { name: "Resume", href: "/assets/Aryan_Singh_Nagar_Resume.pdf", icon: "file" },
];

export const stats = [
  { value: "AIR 413", label: "JEE Advanced 2019", context: "Top ~0.3% of 150k candidates nationwide" },
  { value: "AIR 262", label: "JEE Mains 2019", context: "Top ~0.05% of candidates nationwide" },
  { value: "IIT Bombay", label: "Electrical Engineering '25", context: "B.Tech with rigorous systems & ML coursework" },
  { value: "NTSE Scholar", label: "National Talent Search", context: "NCERT national merit fellowship" },
];

export const skills = [
  {
    category: "Languages & Core Systems",
    items: [
      "Python",
      "C++",
      "Rust",
      "TypeScript",
      "C",
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
      "Docker",
      "Git",
      "Linux (Debian/Mint)",
      "Bash / POSIX Shell",
      "SQL",
      "Tailwind CSS",
    ],
  },
  {
    category: "ML & Computer Vision",
    items: [
      "PyTorch",
      "TensorFlow",
      "ONNX Runtime",
      "OpenCV",
      "MediaPipe",
      "CUDA",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "TensorRT",
    ],
  },
  {
    category: "AI Systems & Infrastructure",
    items: [
      "LLM Workflows & Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases (ChromaDB)",
      "AST Parsing & Tree-sitter",
      "Data Pipelines & ETL",
      "Web Scraping",
      "Pydantic V2",
      "FastAPI Microservices",
      "REST APIs & Webhooks",
      "XGBoost",
    ],
  },
  {
    category: "Foundations & Security",
    items: [
      "Data Structures & Algorithms",
      "System Design Principles",
      "Concurrency & Multithreading",
      "Applied Cryptography",
      "Linux Systems & Shell Internals",
      "Object-Oriented Design",
      "Computer Networks",
      "Post-Quantum Cryptography Primitives",
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
    degree: "B.Tech, Electrical Engineering",
    institution: "Indian Institute of Technology, Bombay",
    period: "2019 — 2025",
    details:
      "Core Coursework: Programming, Data Science, Machine Learning, Web Development, System Security, Probability, Statistics, Cryptography, Neuromorphic Engineering, Technical Communication.",
  },
  {
    degree: "AISSCE — Class XII",
    institution: "Modern Delhi Public School",
    period: "2019",
    score: "93%",
  },
  {
    degree: "AISSE — Class X",
    institution: "Modern Delhi Public School",
    period: "2017",
    score: "CGPA 10 / 10",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  topics: string[];
}

export const certifications: Certification[] = [
  {
    title: "ML / AI Specialization",
    issuer: "DeepLearning.AI",
    year: "2025",
    topics: [
      "Supervised ML",
      "Unsupervised ML",
      "Deep Learning",
      "Computer Vision",
      "CNN",
      "RNN",
      "Recommender Systems",
      "Collaborative Filtering",
      "Anomaly Detection",
    ],
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    year: "2025",
    topics: [
      "Web Scraping",
      "Data Wrangling",
      "Feature Engineering",
      "Interactive Visualization",
      "Predictive Analytics",
      "AI-assisted Data Science",
      "REST APIs",
    ],
  },
];

export const achievements = [
  { title: "AIR 413 — JEE Advanced 2019", context: "Top ~0.3% of ~150,000 candidates" },
  { title: "AIR 262 — JEE Mains 2019", context: "Top ~0.05% of candidates nationwide" },
  { title: "NTSE Scholar — 2017", context: "National Talent Search Examination, NCERT" },
  {
    title: "Rank 1 — Aryabhatta Inter-School Mathematics Competition",
    context: "National Capital Region, 2015",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
