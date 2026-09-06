/**
 * Portfolio Content — Single source of truth for all portfolio data.
 * Sourced from: resume.pdf, GitHub (auto-pulled), LinkedIn public profile.
 */

export const profile = {
  name: "Aryan Singh Nagar",
  handle: "SilverFox",
  tagline: "AI/ML & Systems Engineer · Agentic Architecture & Applied Systems",
  subTagline: "IIT Bombay EE '25 · JEE Adv AIR 413 · Ready to Contribute",
  location: "India (Open to Relocation)",
  email: "auricwings13@gmail.com",
  phone: "+91 782-775-6669",
  resumeUrl: "/assets/Aryan_Singh_Nagar_Resume.pdf",
  headshot: "/assets/headshot.jpg",
  linkedin: "https://www.linkedin.com/in/aryan-singh-nagar-414675263",
  github: "https://github.com/aryansinghnagar",
  summary:
    "IIT Bombay Electrical Engineering graduate (B.Tech, 2019–2025) engineering at the intersection of agentic LLM infrastructure, low-latency computer vision, and privacy-preserving distributed systems. Experienced in architecting real-time multimodal ML pipelines (35+ FPS, <40ms latency), high-throughput forecasting microservices (1,000+ QPS), syntax-aware AST review engines, and post-quantum hybrid cryptographic protocols. Driven by rapid experimentation, deep systems curiosity, and a commitment to delivering resilient software to production.",
  philosophy:
    "I thrive on exploring emerging technical paradigms and turning them into reliable systems that ship. From AST diff parsing and post-quantum lattices to bare-metal OS appliances, I combine a willingness to experiment with disciplined engineering—optimizing for latency, correctness, software ethics, and operational resilience.",
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
      "Tauri v2",
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
    category: "AI Systems & Agentic Infrastructure",
    items: [
      "AST Parsing & Diff Analysis",
      "Tree-sitter Grammars",
      "LLM ModelRouter",
      "Few-Shot RAG",
      "Semantic Caching",
      "Pydantic V2",
      "Patchright Automation",
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
      "AppArmor MAC Confinement",
      "LUKS2 Disk Encryption",
      "TUF Auto-Updates",
      "SQLite WAL Idempotency",
      "Zero-Knowledge Identity",
      "System Design",
      "Concurrency",
      "Data Structures & Algorithms",
      "REST APIs & Webhooks",
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

export const projects: Project[] = [
  {
    slug: "jobot",
    title: "JoBot",
    hook: "Autonomous Job Application Operating System — local-first agentic OS with multi-provider routing, durable state machines & verifiable grounding.",
    category: "Generative AI & Agents",
    year: "2026",
    tech: ["Python 3.11+", "Tauri v2", "React", "Pydantic V2", "SQLite WAL", "Fernet", "Patchright", "ModelRouter", "Prompt Guard"],
    metrics: [
      { label: "Tests Passed", value: "660+" },
      { label: "LLM Providers", value: "12+" },
      { label: "ATS Tiers", value: "4 Levels" },
    ],
    description:
      "JoBot is an autonomous application platform engineered around a strict local-first, privacy-preserving doctrine. It combines a multi-provider ModelRouter (12+ LLM backends), a Candidate Truth Store with factual grounding verification to prevent hallucinated qualifications, prompt injection defenses, and a durable SQLite WAL task engine with pre-reserved idempotency keys paired with a Tauri v2 desktop cockpit.",
    highlights: [
      "Durable SQLite WAL task engine with pre-reserved idempotency keys and verify-only state reconciliation",
      "Candidate Truth Store & Grounding Verifier ensuring AI-generated applications strictly match verified candidate facts",
      "Human Approval Inbox gating external network actions behind explicit human approval before execution",
      "Multi-tier submission engine: Direct HTTP API (Greenhouse, Lever) and stealth Patchright browser automation (Workday, LinkedIn, Naukri)",
      "Zero-telemetry local vault with Fernet encryption and OS keyring integration (0600 permissions)",
    ],
    roadmap: {
      challenge: "Dynamic anti-bot heuristics and continuous ATS form schema drift across enterprise job portals.",
      plan: "Implementing self-healing multi-modal vision-agent fallbacks and automated schema-drift adaptation to reliably handle unexpected form alterations without brittle selectors.",
    },
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/JoBot", primary: true },
    ],
    featured: true,
  },
  {
    slug: "previewbot",
    title: "PReviewBot",
    hook: "AST-Aware Automated PR Review Bot — syntax-informed code review service with bounded concurrency and strict schema validation.",
    category: "Generative AI & Agents",
    year: "2026",
    tech: ["Python 3.10+", "FastAPI", "Python AST", "Unified Diff Parser", "Asyncio Semaphore", "Pydantic V2", "GitHub REST Reviews API", "Docker"],
    metrics: [
      { label: "Parsing", value: "AST Scope" },
      { label: "Validation", value: "Pydantic V2" },
      { label: "Safety", value: "Zero 422s" },
    ],
    description:
      "PReviewBot is an asynchronous FastAPI service that receives GitHub webhook events, parses unified git diff hunks, and uses Python's standard library abstract syntax tree (ast) module to identify enclosing function and method boundaries. By analyzing semantic code scopes instead of raw isolated diff lines, it performs targeted LLM code reviews with bounded concurrency and posts batched inline comments.",
    highlights: [
      "Deterministic AST traversal extracting innermost function/method scopes for context-rich review prompts",
      "Cost-funnel pipeline filtering non-code files, lockfiles, and generated assets before triggering LLM calls",
      "Strict line-whitelisting mechanism preventing comment line hallucinations and eliminating GitHub 422 Unprocessable Entity errors",
      "Bounded concurrency architecture utilizing asyncio.Semaphore to respect LLM rate limits",
      "Dockerized microservice deployment with constant-time HMAC signature verification for secure webhook ingestion",
    ],
    roadmap: {
      challenge: "Polyglot language boundary extraction beyond Python and persistent review job state across ephemeral container lifecycles.",
      plan: "Integrating Tree-sitter for multi-language AST grammars alongside an asynchronous Redis/ARQ durable task queue for fault-tolerant background review execution.",
    },
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/PReviewBot", primary: true },
    ],
    featured: true,
  },
  {
    slug: "maestro",
    title: "Maestro",
    hook: "Cross-platform desktop hand-gesture controller — low-overhead computer vision interface operating with sub-15ms latency.",
    category: "ML / CV",
    year: "2025–2026",
    tech: ["Python 3.11+", "ONNX Runtime", "MediaPipe", "PyQt6", "CUDA", "TensorRT", "CoreML", "DirectML", "Vosk", "Pluggy", "TUF"],
    metrics: [
      { label: "GPU Latency", value: "<15ms" },
      { label: "Performance", value: "T0–T3" },
      { label: "Tracking", value: "21-point" },
    ],
    description:
      "Maestro is a privacy-first desktop controller that translates webcam-captured hand gestures into OS-level input events. Engineered with ONNX Runtime across multi-backend GPU acceleration (CUDA, CoreML, TensorRT, DirectML), it features an adaptive performance state machine (T0–T3), privilege-separated input injection, and offline speech recognition.",
    highlights: [
      "Adaptive Performance Tiers (T0–T3): dynamic scaling from Ultra (60 FPS, FP16) to Minimal (10 FPS, INT8) based on thermal and battery state",
      "Cross-platform native input injection: Windows (SendInput & SID token isolation), Linux (uinput/evdev), macOS (CGEvent/Quartz)",
      "Finite-State Machine (FSM) gesture recognizer with Dynamic Time Warping (DTW) and context-aware trigger conditions",
      "Privilege-separated input broker with Win32 process token SID authentication and rate-limited audit logs",
      "TUF-signed auto-updates and completely on-device edge processing with zero network egress or frame persistence",
    ],
    roadmap: {
      challenge: "Environmental lighting variability and keypoint jitter when operating within low-power edge CPU budgets.",
      plan: "Integrating temporal Kalman filtering and adaptive keypoint smoothing to maintain rock-solid gesture tracking under low-light or noisy webcam sensors.",
    },
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/Maestro", primary: true },
      { label: "Documentation", href: "https://aryansinghnagar.github.io/Maestro/" },
    ],
    featured: true,
  },
  {
    slug: "anonymus",
    title: "AnonyMus v3.0",
    hook: "Decentralized, post-quantum resilient, metadata-resistant private communications suite.",
    category: "Systems & Security",
    year: "2026",
    tech: ["Python 3.11+", "Rust (PyO3)", "FastAPI v3", "ML-KEM-768", "Double Ratchet", "Tor v3 Onion", "Tauri / Solid.js", "Argon2id", "AES-256-GCM"],
    metrics: [
      { label: "Post-Quantum", value: "FIPS 203" },
      { label: "Transport", value: "Tor v3 P2P" },
      { label: "Core Speed", value: "Rust PyO3" },
    ],
    description:
      "AnonyMus is an open-source communications suite designed to protect user identity and message content against traffic analysis and quantum cryptanalysis. It pairs NIST FIPS 203 ML-KEM-768 post-quantum key encapsulation with Signal-grade Double Ratchet forward secrecy over direct Tor v3 Onion P2P transports, backed by a high-performance Rust cryptographic core.",
    highlights: [
      "Post-quantum hybrid KEM: NIST FIPS 203 ML-KEM-768 (Kyber768) + X25519 combined via HKDF-SHA256",
      "Signal-grade Double Ratchet with per-message symmetric ratchets and break-in recovery",
      "Zero-central-server Tor v3 Onion P2P routing — cryptographic onion addresses serve as sovereign identities",
      "Multi-device LAN sync with 6-digit SAS PIN verification and replay-resistant sequence tracking",
      "SQLCipher at-rest storage with Argon2id derivation and duress PIN panic shredding",
    ],
    roadmap: {
      challenge: "Asynchronous offline message delivery and rendezvous discovery latency inherent to decentralized, peer-to-peer onion networks.",
      plan: "Exploring zero-knowledge blind relay mailboxes and ephemeral post-quantum rendezvous tokens to facilitate seamless asynchronous message delivery without centralized metadata leaks.",
    },
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/AnonyMus", primary: true },
    ],
    featured: true,
  },
  {
    slug: "ars-arcanum",
    title: "Ars Arcanum",
    hook: "The Writer's Forge — dedicated, distraction-free Linux workstation OS & tool suite for long-form worldbuilding and typesetting.",
    category: "Systems & Security",
    year: "2026",
    tech: ["Debian GNU/Linux 13", "live-build", "AppArmor MAC", "LUKS2 (Argon2id)", "nftables", "Python / POSIX", "Typst", "Pandoc", "Calamares", "XFCE / Labwc"],
    metrics: [
      { label: "Base OS", value: "Debian 13" },
      { label: "Security", value: "AppArmor MAC" },
      { label: "Typesetting", value: "Sub-Second" },
    ],
    description:
      "Ars Arcanum is a custom, purpose-built Linux workstation OS appliance engineered from Debian Minimal for deep creative prose composition and speculative worldbuilding. It eliminates distraction by construction at the package manifest level, while providing vault-grade data encryption, AppArmor process sandboxing, and an automated publishing compilation toolchain.",
    highlights: [
      "Live-build Debian 13 appliance with Calamares graphical installer and automated LUKS2 full-disk encryption",
      "Distraction elimination by construction: structural omission of web browsers and telemetry at the package level",
      "Hardened security posture: AppArmor MAC profiles (deny network, sandboxed paths), nftables firewall, and sysctl kernel hardening",
      "Modular Python & POSIX authoring suite (ars-*) including lore parsing, continuity linting, and automated git versioning",
      "Sub-second vector publication compilation pipelines powering print-ready PDF (Typst) and distribution EPUBs (Pandoc)",
    ],
    roadmap: {
      challenge: "Multi-architecture ISO build reproducibility and declarative sandbox profile portability across diverging upstream Linux kernel releases.",
      plan: "Transitioning root filesystem composition to reproducible OCI container layers paired with declarative Bubblewrap/AppArmor unified sandboxing abstractions.",
    },
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/Ars_Arcanum", primary: true },
    ],
    featured: true,
  },
  {
    slug: "scriptorium",
    title: "Scriptorium",
    hook: "Accessible Linux authoring environment & automated book publishing toolchain for novelists and worldbuilders.",
    category: "Systems & Security",
    year: "2026",
    tech: ["Linux Mint / Debian", "Bash Automation", "novelWriter", "Obsidian Vaults", "Typst", "Pandoc", "LeechBlock", "Déjà Dup", "LUKS"],
    metrics: [
      { label: "Data Format", value: "Open Markdown" },
      { label: "Compiles", value: "PDF & EPUB" },
      { label: "Safety", value: "3-2-1 Backups" },
    ],
    description:
      "Scriptorium is a low-effort, open-format writing ecosystem designed for authors on Linux Mint and Debian. It combines modular Obsidian lore bibles with novelWriter manuscript outlining and a single-click desktop publishing pipeline that compiles publication-grade vector PDFs (Typst) and digital EPUBs (Pandoc) with zero terminal friction.",
    highlights: [
      "Automated single-script provisioning installing full writing stack, literary typography fonts, and desktop launchers",
      "Single-click desktop compilation exporting print-ready PDFs with trade margins, alternating headers, and front matter",
      "Structured Obsidian World-Bible schema featuring Dataview relationship mapping for character, faction, and timeline tracking",
      "Distraction enforcement through configured browser focus schedules and OS notification muting",
      "3-2-1 data safety doctrine combining local Git snapshots, LUKS encryption, and automated password-protected off-site backups",
    ],
    roadmap: {
      challenge: "Bidirectional metadata synchronization and conflict resolution across disparate editor formats without semantic loss.",
      plan: "Architecting a lightweight semantic document-state linter to automatically harmonize cross-file character references and timeline chronology across chapters.",
    },
    links: [
      { label: "View Code", href: "https://github.com/aryansinghnagar/Scriptorium", primary: true },
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
    roadmap: {
      challenge: "Handling real-time orbital telemetry distribution shifts and sparse sensor readings in launch environments.",
      plan: "Incorporating streaming feature-drift detection and Bayesian uncertainty estimation to quantify prediction confidence on novel rocket configurations.",
    },
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
      "A supervised research exposition project developed in a collaborative research environment spanning multiple academic tiers at IIT Bombay. Built affordable, contactless biometric verification prototypes and conducted an in-depth feasibility study and benchmarking of emerging contactless biometric techniques.",
    highlights: [
      "Developed affordable contactless biometric verification prototypes suitable for low-resource deployments",
      "Conducted in-depth feasibility study benchmarking emerging contactless biometric techniques",
      "Findings informed downstream R&D direction and prototype iteration",
      "Collaborative research environment spanning multiple academic tiers at IIT Bombay",
    ],
    roadmap: {
      challenge: "Subject motion blur and off-axis perspective distortion on cost-constrained optical sensors.",
      plan: "Implementing edge-optimized super-resolution deblurring models and pose-invariant affine normalization transforms.",
    },
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
