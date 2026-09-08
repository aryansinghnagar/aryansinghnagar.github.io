/**
 * Portfolio Content — Single source of truth for all portfolio data.
 * Sourced from: resume.pdf, GitHub (auto-pulled), LinkedIn public profile.
 */

export const profile = {
  name: "Aryan Singh Nagar",
  tagline: "AI/ML & Systems Engineer · IIT Bombay Electrical Engineering '25",
  subTagline: "B.Tech in Electrical Engineering, IIT Bombay · JEE Advanced AIR 413",
  location: "India (Open to Relocation)",
  email: "auricwings13@gmail.com",
  phone: "+91 782-775-6669",
  resumeUrl: "/assets/Aryan_Singh_Nagar_Resume.pdf",
  headshot: "/assets/headshot.jpg",
  linkedin: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
  github: "https://github.com/aryansinghnagar",
  summary:
    "Electrical Engineering graduate from the Indian Institute of Technology, Bombay (B.Tech, 2019–2025) with a strong foundation in computing systems, machine learning, and applied mathematics. Experienced in developing exploratory implementations across AI/ML pipelines, low-latency computing, and systems software. Demonstrates high analytical rigor, rapid technical comprehension, and a disciplined approach to building reliable, high-performance software.",
  philosophy:
    "I approach engineering challenges through first-principles analysis and disciplined implementation. Grounded in a strong mathematical and systems foundation, I focus on understanding core abstractions, optimizing efficiency, and writing clean, maintainable code.",
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
  { value: "AIR 413", label: "JEE Advanced 2019", context: "All India Rank · Top ~0.3% of 150,000 candidates" },
  { value: "AIR 262", label: "JEE Main 2019", context: "All India Rank · Top ~0.05% of 1.1M candidates" },
  { value: "IIT Bombay", label: "B.Tech, Electrical Engineering", context: "Class of 2025 · Rigorous coursework in systems & ML" },
  { value: "NTSE Scholar", label: "National Talent Search", context: "NCERT prestigious national merit fellowship" },
];

export const skills = [
  {
    category: "Programming Languages & Core Systems",
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
      "Linux (Debian/Ubuntu)",
      "Bash / POSIX Shell",
      "SQL",
      "Tailwind CSS",
    ],
  },
  {
    category: "Machine Learning & Computer Vision",
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
    category: "AI Systems & Data Engineering",
    items: [
      "LLM Integration & Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases (ChromaDB)",
      "Abstract Syntax Tree (AST) Parsing",
      "Data Pipelines & ETL",
      "Web Data Extraction",
      "Pydantic V2",
      "FastAPI Microservices",
      "RESTful APIs & Webhooks",
      "XGBoost",
    ],
  },
  {
    category: "Core Computer Science & Systems Security",
    items: [
      "Data Structures & Algorithms",
      "System Design Principles",
      "Concurrency & Multithreading",
      "Applied Cryptography",
      "Linux Systems Programming",
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
    degree: "Bachelor of Technology (B.Tech), Electrical Engineering",
    institution: "Indian Institute of Technology, Bombay",
    period: "2019 — 2025",
    details:
      "Core Coursework: Computer Programming, Data Science, Machine Learning, Web Development, Systems Security, Probability & Random Processes, Linear Algebra, Applied Cryptography, Neuromorphic Engineering, Technical Communication.",
  },
  {
    degree: "All India Senior School Certificate Examination (Class XII)",
    institution: "Modern Delhi Public School",
    period: "2019",
    score: "93.0%",
  },
  {
    degree: "Secondary School Examination (Class X)",
    institution: "Modern Delhi Public School",
    period: "2017",
    score: "CGPA 10.0 / 10.0",
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
    title: "Machine Learning / AI Specialization",
    issuer: "DeepLearning.AI",
    year: "2025",
    topics: [
      "Supervised Machine Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks",
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
      "Data Analysis & Visualization",
      "Data Wrangling",
      "Feature Engineering",
      "Predictive Analytics",
      "Machine Learning with Python",
      "RESTful APIs",
      "SQL & Relational Databases",
    ],
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
