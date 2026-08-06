/**
 * Portfolio Content — Single source of truth for all portfolio data.
 * Sourced from: resume.pdf, GitHub (auto-pulled), LinkedIn public profile.
 */

export const profile = {
  name: "Aryan Singh Nagar",
  handle: "SilverFox",
  tagline: "Generative AI Engineer · ML Engineer · Full-Stack Developer",
  subTagline: "IIT Bombay EE '25 · JEE Adv AIR 413 · Immediate Joiner",
  location: "India (Open to Relocation)",
  email: "asn.dyrnwyn@gmail.com",
  phone: "+91 782-775-6669",
  resumeUrl: "/assets/Aryan_Singh_Nagar_Resume.pdf",
  headshot: "/assets/headshot.jpg",
  linkedin: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
  github: "https://github.com/aryansinghnagar",
  summary:
    "IIT Bombay EE graduate (B.Tech, 2019–2025) with hands-on AI/ML engineering experience across multimodal ML, AI-assisted development workflows, and data-driven marketing intelligence tools. Shipped production ML systems, cut token costs by up to 60%, and reduced development timelines by 85% via AI-augmented methodologies.",
  philosophy:
    "I build AI systems that ship — not demos. From agentic LLM operating systems to multimodal engagement classifiers, my work lives at the intersection of research depth and production pragmatism.",
};

export const socials = [
  { name: "GitHub", href: "https://github.com/aryansinghnagar", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
    icon: "linkedin",
  },
  { name: "Email", href: "mailto:asn.dyrnwyn@gmail.com", icon: "mail" },
  { name: "Resume", href: "/assets/Aryan_Singh_Nagar_Resume.pdf", icon: "file" },
];

export const stats = [
  { value: "60%", label: "Token Cost Reduction", context: "via AI-assisted dev at NimitAI" },
  { value: "85%", label: "Faster Dev Timelines", context: "AI-augmented workflows" },
  { value: "30%", label: "ROAS Lift", context: "HypeOn cross-market AI forecasting" },
  { value: "AIR 413", label: "JEE Advanced 2019", context: "Top ~0.3% of 150k candidates" },
];

export const skills = [
  {
    category: "Languages & Tools",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Bun",
      "Docker",
      "Git",
      "Cursor",
      "Claude",
      "Gemini",
      "Microsoft Azure",
    ],
  },
  {
    category: "ML & AI",
    items: [
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "MediaPipe",
      "Neural Networks",
      "CNN",
      "RNN",
      "XGBoost",
      "Random Forest",
      "SVM",
      "PCA",
      "Reinforcement Learning",
      "Hyperparameter Tuning",
    ],
  },
  {
    category: "Data Science",
    items: [
      "Web Scraping",
      "EDA",
      "Feature Engineering",
      "NLP",
      "Data Visualization",
      "Predictive Analytics",
      "User Segmentation",
      "Data Storytelling",
    ],
  },
  {
    category: "Foundations",
    items: [
      "Data Structures & Algorithms",
      "System Design",
      "AI-assisted Development",
      "Technical Communication",
      "Creative Problem Solving",
      "Professional Ethics",
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

export const experiences: Experience[] = [
  {
    role: "Head of IT",
    company: "HypeOn",
    period: "Mar 2026 — May 2026",
    location: "India",
    bullets: [
      "Architected a cross-market AI forecasting tool that pinpoints trending keywords and creative assets, enabling data-informed marketing strategies across multiple geographies.",
      "Delivered a 30% increase in ROAS across a diverse client portfolio via strategic campaign optimization, audience segmentation, and data-driven targeting.",
    ],
    stack: ["Python", "Azure", "AI Forecasting", "Marketing Analytics", "REST APIs"],
  },
  {
    role: "AI / ML Engineer",
    company: "NimitAI",
    period: "Dec 2025 — Mar 2026",
    location: "India",
    bullets: [
      "Engineered multimodal machine learning models to assess client engagement levels by fusing facial expressions, speech cues, and acoustic features into a unified engagement signal.",
      "Developed cost-efficient AI solutions via AI-assisted development, cutting token expenditure by up to 60% without compromising model quality.",
      "Leveraged AI-augmented development workflows to reduce production timelines by 85% vs traditional engineering methodologies.",
    ],
    stack: ["Python", "TensorFlow", "Multimodal ML", "Computer Vision", "NLP", "AI-assisted Dev"],
  },
];

export interface Project {
  slug: string;
  title: string;
  hook: string;
  category: "Generative AI" | "ML / CV" | "Security" | "Data Science";
  year: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
  description: string;
  highlights: string[];
  links: { label: string; href: string; primary?: boolean }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "jobot",
    title: "JoBot",
    hook: "Autonomous Job Application Operating System — an agentic LLM OS with multi-provider routing.",
    category: "Generative AI",
    year: "2026",
    tech: ["Python 3.11+", "Async", "SQLite WAL", "Fernet", "ModelRouter", "Patchright", "typer", "rich"],
    description:
      "JoBot is an agentic operating system designed to automate job application workflows. It routes across LLM providers (Gemini, OpenAI, Anthropic, Ollama) with intelligent fallbacks, manages stealth browser automation via Patchright, and encrypts all sensitive data at rest with Fernet + OS Keyring.",
    highlights: [
      "Provider-neutral ModelRouter with automatic fallback across Gemini, OpenAI, Anthropic, and Ollama",
      "Stealth browser automation via Patchright (hardened Playwright fork) for resilient scraping",
      "SQLite WAL control plane with Fernet encryption + OS Keyring for credential security",
      "Async execution fabric + task graph engine for parallelizable job workflows",
      "Currently undergoing active refactor from stub skeleton to release-ready production engine",
    ],
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/JoBot", primary: true },
    ],
    featured: true,
  },
  {
    slug: "maestro",
    title: "Maestro",
    hook: "Cross-platform desktop hand-gesture controller — control your computer via webcam.",
    category: "ML / CV",
    year: "2025",
    tech: ["Python", "ONNX Runtime", "CUDA", "CoreML", "TensorRT", "DirectML", "DTW", "uinput", "CGEvent"],
    metrics: [
      { label: "Tiers", value: "4 (T0–T3)" },
      { label: "FPS Range", value: "10–60" },
      { label: "Landmarks", value: "21-point" },
    ],
    description:
      "Maestro is a privacy-first desktop controller that turns hand gestures captured by a webcam into OS-level input events. It uses ONNX Runtime with multi-backend GPU acceleration (CUDA / CoreML / TensorRT / DirectML) for 21-point hand landmark tracking, and an FSM-based gesture recognizer with custom gestures via Dynamic Time Warping.",
    highlights: [
      "Adaptive Performance Tiers (T0–T3): automatic zero-config scaling from Ultra (60 FPS, FP16) to Minimal (10 FPS, INT8) based on hardware, CPU, and battery state",
      "Cross-platform OS input: Linux (uinput/X11/Wayland), macOS (CGEvent), Windows (SendInput)",
      "FSM-based gesture recognition with custom gesture authoring via DTW",
      "On-device processing — zero data leaves the user's computer (privacy by design)",
      "Plugin system with pluggy-based hooks, process isolation, and accessibility features (tremor compensation)",
    ],
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/Maestro", primary: true },
    ],
    featured: true,
  },
  {
    slug: "anonymus",
    title: "AnonyMus",
    hook: "Metadata-resistant, post-quantum encrypted instant messenger.",
    category: "Security",
    year: "2025",
    tech: ["Python", "ML-KEM-768", "Double Ratchet", "Socket.IO", "Onion Routing", "E2EE"],
    description:
      "AnonyMus is a privacy-focused instant messenger operating over a dual-mode centralized relay or P2P Onion-routed transport. It implements state-of-the-art cryptographic primitives including double-ratcheted end-to-end encryption, ML-KEM-768 post-quantum key encapsulation, and client-side contact blocklists.",
    highlights: [
      "Post-quantum key encapsulation via ML-KEM-768 (NIST FIPS 203)",
      "Double-ratcheted forward-secret end-to-end encryption (Signal protocol)",
      "Dual-mode transport: centralized relay OR P2P Onion routing for metadata resistance",
      "Reproducible builds — verified byte-for-byte identical across machines",
      "Agent.md project OS doctrine with ADRs, RFCs, and structured testing matrix",
    ],
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/AnonyMus", primary: true },
    ],
    featured: true,
  },
  {
    slug: "falcon9",
    title: "Falcon-9 Launch Success Prediction",
    hook: "Automated data acquisition + ML pipeline for orbital launch forecasting.",
    category: "Data Science",
    year: "2025",
    tech: ["Python", "SpaceX API", "Web Scraping", "Scikit-learn", "Feature Engineering"],
    description:
      "An end-to-end data science pipeline that automates data acquisition via the SpaceX API and web scraping to build an optimized training dataset, then trains and refines predictive ML models to forecast orbital launch success probabilities.",
    highlights: [
      "Automated data acquisition system combining the SpaceX API with targeted web scraping",
      "High-dimensional feature engineering to drive data-informed launch forecasting",
      "Iterative model refinement pipeline with cross-validation and probability calibration",
      "End-to-end reproducible workflow from raw data to forecasted probabilities",
    ],
    links: [],
    featured: true,
  },
  {
    slug: "biometric",
    title: "Contactless Biometric Verification",
    hook: "Affordable biometric verification prototypes + feasibility study.",
    category: "ML / CV",
    year: "2023",
    tech: ["Python", "Computer Vision", "Biometrics", "Research"],
    description:
      "A supervised research exposition project developed in a collaborative research environment spanning multiple academic tiers. Built affordable, contactless biometric verification prototypes and conducted an in-depth feasibility study and benchmarking of emerging contactless biometric techniques.",
    highlights: [
      "Developed affordable contactless biometric verification prototypes suitable for low-resource deployments",
      "Conducted in-depth feasibility study benchmarking emerging contactless biometric techniques",
      "Findings informed downstream R&D direction and prototype iteration",
      "Collaborative research environment spanning multiple academic tiers at IIT Bombay",
    ],
    links: [],
    featured: true,
  },
];

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
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
