/**
 * Portfolio Content — Single source of truth for all portfolio data.
 * Sourced from: resume.pdf, GitHub (auto-pulled), LinkedIn public profile.
 */

export const profile = {
  name: "Aryan Singh Nagar",
  handle: "SilverFox",
  tagline: "AI/ML & Systems Engineer · Full-Stack Developer",
  subTagline: "IIT Bombay EE '25 · JEE Adv AIR 413 · Immediate Joiner",
  location: "India (Open to Relocation)",
  email: "auricwings13@gmail.com",
  phone: "+91 782-775-6669",
  resumeUrl: "/assets/Aryan_Singh_Nagar_Resume.pdf",
  headshot: "/assets/headshot.jpg",
  linkedin: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
  github: "https://github.com/aryansinghnagar",
  summary:
    "IIT Bombay Electrical Engineering graduate (B.Tech, 2019–2025) specializing in low-latency computer vision, agentic LLM infrastructure, and privacy-preserving distributed systems. Architected real-time multimodal ML pipelines operating at 35+ FPS with sub-40ms latency, high-throughput forecasting microservices serving 1,000+ QPS, and post-quantum hybrid cryptographic systems.",
  philosophy:
    "I build AI & systems that ship — not demos. Optimizing for latency (ms), frame throughput (FPS), memory footprint (VRAM), and fault tolerance from bare-metal edge devices to distributed cloud backends.",
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
  { value: "35+ FPS", label: "Real-time Multimodal Vision", context: "<40ms per-frame latency at NimitAI" },
  { value: "60%", label: "LLM Token Cost Cut", context: "via semantic caching & compression" },
  { value: "1,000+ QPS", label: "Microservice Throughput", context: "<80ms P99 response time at HypeOn" },
  { value: "AIR 413", label: "JEE Advanced 2019", context: "Top ~0.3% of 150k candidates" },
];

export const skills = [
  {
    category: "Languages & Core Systems",
    items: [
      "Python",
      "Rust",
      "C++",
      "TypeScript",
      "FastAPI",
      "Tauri",
      "React",
      "Next.js",
      "Node.js",
      "Docker",
      "Git",
      "Linux",
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
      "MediaPipe",
      "CUDA",
      "TensorRT",
      "CoreML",
      "DirectML",
      "OpenCV",
      "Scikit-learn",
    ],
  },
  {
    category: "AI Systems & Data Engineering",
    items: [
      "LLM Routing",
      "Few-Shot RAG",
      "Semantic Caching",
      "Pydantic V2",
      "Patchright",
      "ChromaDB / Vector DBs",
      "Prompt Injection Guard",
      "Candidate Truth Verification",
      "ETL Pipelines",
      "Web Scraping",
      "Pandas",
      "NumPy",
      "XGBoost",
      "Microsoft Azure",
    ],
  },
  {
    category: "Foundations & Security",
    items: [
      "Post-Quantum Cryptography (ML-KEM-768)",
      "Double Ratchet",
      "Tor v3 Onion P2P",
      "TUF Auto-Updates",
      "SQLite WAL Leases",
      "Zero-Knowledge Identity",
      "System Design",
      "Concurrency",
      "Data Structures & Algorithms",
      "REST APIs",
      "Microservices",
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
    role: "Lead AI Engineer",
    company: "HypeOn",
    period: "Mar 2026 — May 2026",
    location: "India",
    bullets: [
      "Architected a cross-market time-series forecasting engine on Azure using gradient-boosted trees (XGBoost) and Transformer models, predicting ad keyword velocity across 4 geographies with <12% Mean Absolute Percentage Error (MAPE).",
      "Engineered distributed web scraping and ETL data pipelines on Azure App Services, aggregating 50GB+ of daily telemetry to drive automated daily model retraining.",
      "Designed low-latency RESTful microservices for real-time creative performance scoring, serving 1,000+ QPS with sub-80ms P99 response times.",
      "Automated cross-platform ad bidding and audience segmentation pipelines, decreasing manual adjustment cycles by 90% and delivering a 30% lift in client Return on Ad Spend (ROAS).",
    ],
    stack: ["Python", "Azure", "XGBoost", "FastAPI", "ETL Pipelines", "REST APIs"],
  },
  {
    role: "AI / ML Engineer",
    company: "NimitAI",
    period: "Dec 2025 — Mar 2026",
    location: "India",
    bullets: [
      "Architected a real-time multimodal engagement model fusing 21-point facial landmark tracking (MediaPipe), acoustic sentiment extraction, and text embeddings at 35+ FPS with <40ms per-frame processing latency.",
      "Reduced LLM operational token expenditure by 60% while maintaining output quality by engineering a hybrid prompt-optimization pipeline featuring semantic embedding caching, structural payload compression, and dynamic routing.",
      "Quantized PyTorch/TensorFlow vision-language sub-models into INT8/FP16 ONNX runtimes, slashing GPU VRAM allocation by 45% and enabling real-time edge execution.",
      "Designed asynchronous, event-driven inference pipelines using Python (asyncio and FastAPI) to process concurrent video streams without packet drops.",
    ],
    stack: ["Python", "TensorFlow", "PyTorch", "ONNX Runtime", "MediaPipe", "Multimodal ML", "FastAPI"],
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
    hook: "Autonomous Job Application Operating System — local-first agentic OS with multi-provider routing & verifiable grounding.",
    category: "Generative AI",
    year: "2026",
    tech: ["Python 3.11+", "Tauri v2", "React", "Pydantic V2", "SQLite WAL", "Fernet", "Patchright", "ModelRouter", "Prompt Guard"],
    metrics: [
      { label: "Tests Passed", value: "660+" },
      { label: "LLM Providers", value: "12+" },
      { label: "ATS Tiers", value: "4 Levels" },
    ],
    description:
      "JoBot is an agentic job application platform built under a strict local-first, privacy-preserving doctrine. It features a multi-provider ModelRouter (12+ LLM backends), a candidate truth store with hallucination verification, SSRF and prompt injection defenses, and a durable SQLite WAL task engine paired with a Tauri v2 desktop cockpit.",
    highlights: [
      "Durable SQLite WAL task engine with pre-reserved idempotency keys and verify-only reconciliation",
      "Candidate Truth Store & Grounding Verifier ensuring AI-generated applications strictly match verified candidate facts",
      "Multi-tier submission engine: Direct HTTP API (Greenhouse, Lever) and stealth Patchright browser automation (Workday, LinkedIn, Naukri)",
      "Prompt injection defense (prompt_guard) and SSRF protection (url_guard) with zero external telemetry",
      "Tauri v2 + React desktop cockpit communicating via high-speed JSON-RPC 2.0 sidecar with human approval gates",
    ],
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/JoBot", primary: true },
    ],
    featured: true,
  },
  {
    slug: "maestro",
    title: "Maestro",
    hook: "Cross-platform desktop hand-gesture controller — control your computer via webcam with sub-15ms latency.",
    category: "ML / CV",
    year: "2025–2026",
    tech: ["Python 3.11+", "ONNX Runtime", "MediaPipe", "PyQt6", "CUDA", "TensorRT", "CoreML", "DirectML", "Vosk", "Pluggy", "TUF"],
    metrics: [
      { label: "GPU Latency", value: "<15ms" },
      { label: "Performance", value: "T0–T3" },
      { label: "Tracking", value: "21-point" },
    ],
    description:
      "Maestro is a privacy-first desktop controller that translates webcam-captured hand gestures into OS-level input events. Powered by ONNX Runtime with multi-backend GPU acceleration (CUDA / CoreML / TensorRT / DirectML), PyQt6 GUI, offline Vosk voice control, and a pluggy-based plugin architecture.",
    highlights: [
      "Adaptive Performance Tiers (T0–T3): zero-config dynamic scaling from Ultra (60 FPS, FP16) to Minimal (10 FPS, INT8) based on thermal & battery state",
      "Cross-platform native input injection: Windows (SendInput & SID token isolation), Linux (uinput/evdev), macOS (CGEvent/Quartz)",
      "FSM gesture recognizer with Dynamic Time Warping (DTW) and context-aware trigger conditions DSL",
      "Privilege-separated input broker with Win32 process token SID auth and rate-limited audit logs",
      "TUF-signed auto-updates (threshold=3) and completely on-device offline processing with zero network egress",
    ],
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/Maestro", primary: true },
      { label: "Documentation", href: "https://aryansinghnagar.github.io/Maestro/" },
    ],
    featured: true,
  },
  {
    slug: "anonymus",
    title: "AnonyMus",
    hook: "Decentralized, post-quantum resilient, metadata-resistant instant messaging suite.",
    category: "Security",
    year: "2026",
    tech: ["Python 3.11+", "Rust (PyO3)", "FastAPI v3", "ML-KEM-768", "Double Ratchet", "Tor v3 Onion", "Tauri / Solid.js", "Argon2id", "AES-256-GCM"],
    metrics: [
      { label: "Post-Quantum", value: "FIPS 203" },
      { label: "Transport", value: "Tor v3 P2P" },
      { label: "Core Speed", value: "Rust PyO3" },
    ],
    description:
      "AnonyMus v3.0 is a privacy-first communications platform combining NIST FIPS 203 ML-KEM-768 post-quantum key encapsulation with Signal-grade Double Ratchet encryption. It runs over direct Tor v3 Onion P2P transports with a high-performance Rust cryptographic core, FastAPI v3 ASGI backend, and Solid.js/Tauri desktop interface.",
    highlights: [
      "Post-quantum hybrid KEM: NIST FIPS 203 ML-KEM-768 (Kyber768) + X25519 combined via HKDF-SHA256",
      "Signal-grade Double Ratchet with per-message symmetric ratchets and break-in recovery",
      "Zero-central-server Tor v3 Onion P2P routing — cryptographic onion addresses serve as sovereign identities",
      "Multi-device LAN sync with 6-digit SAS PIN verification and replay-resistant sequence tracking",
      "Bounded Encrypted File Transfer (XFTP) with 10MB chunking and duress PIN database shredding",
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
    metrics: [
      { label: "Data Source", value: "SpaceX API" },
      { label: "Model", value: "Scikit-learn" },
      { label: "Task", value: "Classification" },
    ],
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
    metrics: [
      { label: "Focus", value: "Contactless" },
      { label: "Domain", value: "Biometrics" },
      { label: "Setting", value: "IIT Bombay" },
    ],
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
