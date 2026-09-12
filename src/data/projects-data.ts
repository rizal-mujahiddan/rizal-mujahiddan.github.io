import type { LucideIcon } from "lucide-react";
import { BarChart3, Code2, Music, Shield } from "lucide-react";

export type ProjectStatus = "shipped" | "in-progress" | "research";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  image?: string; // for CarouselItem background
  link?: string;
  repo?: string;
  icon: LucideIcon;
  status: ProjectStatus;
  featured?: boolean;
};

export const projects: Project[] = [
  // ─────────────────────────────────────────────────────────────
  // EXISTING PROJECTS (from your original ProjectCarousel)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "telco-churn-model",
    title: "Telco Customer Churn Model",
    summary:
      "Machine learning model predicting customer churn for a telecom dataset, deployed as an interactive HuggingFace Space.",
    description:
      "End-to-end data science project: exploratory analysis, feature preparation, model training and evaluation, then deployment as an interactive demo. Focused on making the model understandable and usable, not just accurate.",
    tags: ["Python", "Data Science", "ML", "HuggingFace"],
    year: "2024",
    role: "Data Scientist",
    image: "/TelcoCustomerChurnModelaHuggingFaceSpacebyRizalm69.png",
    link: "https://huggingface.co/spaces/rizalm69/TelcoCustomerChurnModel",
    icon: BarChart3,
    status: "shipped",
    featured: true,
  },
  {
    slug: "learning-music-tunes",
    title: "Library Tunes for Music",
    summary:
      "A music library project built while learning Rust — focused on ownership, borrowing, and safe systems programming.",
    description:
      "Built in Rust as a way to learn the language's ownership model and type system while producing something usable. Explores data structures, error handling, and the discipline of systems-level thinking.",
    tags: ["Rust", "Systems", "CLI"],
    year: "2024",
    role: "Solo Project",
    repo: "https://github.com/rizal-mujahiddan/learning-Music-Tunes",
    icon: Music,
    status: "shipped",
    featured: true,
  },

  // ─────────────────────────────────────────────────────────────
  // BACKEND WORK (real, proprietary — no public repo)
  // ─────────────────────────────────────────────────────────────
  {
    slug: "backend-api-integrations",
    title: "Backend API & Integration Work",
    summary:
      "Two years building REST APIs, database changes, and third-party integrations with C# / .NET.",
    description:
      "Production backend development in a team environment: implementing business requirements as APIs, extending database schemas (tables and columns), integrating external services with Refit, and debugging system behavior when results diverged from expectations. Security testing was handled by a dedicated pentest team — which later motivated me to learn the attacker's side myself.",
    tags: ["C#", ".NET", "REST API", "Entity Framework", "SQL", "Refit", "Git"],
    year: "2023–2025",
    role: "Backend Developer",
    icon: Code2,
    status: "shipped",
  },

  // ─────────────────────────────────────────────────────────────
  // RESEARCH
  // ─────────────────────────────────────────────────────────────
  {
    slug: "antam-gold-forecast",
    title: "ANTAM Gold Price Forecasting",
    summary:
      "Comparative study of time-series and gradient-boosting models for forecasting ANTAM gold prices.",
    description:
      "Thesis project comparing STL decomposition, Prophet, and XGBoost (via PyCaret) for gold price forecasting. Focused on data preprocessing, imputation, drift checks, cross-validation, and feature selection using Granger causality to identify the most predictive input variables.",
    tags: ["Python", "PyCaret", "XGBoost", "Prophet", "STL", "Time Series", "Granger Causality"],
    year: "2024",
    role: "Researcher & Developer",
    icon: BarChart3,
    status: "research",
  },
  {
    slug: "sorghum-temperature-prediction",
    title: "Sorghum Season Temperature Prediction",
    summary:
      "National competition entry predicting seasonal temperatures to support sorghum crop planning.",
    description:
      "Collaborated with a teammate to build a temperature forecasting pipeline. Combined coding work with domain research — gathering reference documents on sorghum growing conditions to inform modeling decisions.",
    tags: ["Python", "Data Analysis", "Forecasting", "Domain Research"],
    year: "2024",
    role: "Data & Code Contributor",
    icon: BarChart3,
    status: "shipped",
  },

  // ─────────────────────────────────────────────────────────────
  // SECURITY JOURNEY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "appsec-learning-journey",
    title: "Application Security Learning Journey",
    summary:
      "Hands-on practice in web security, reconnaissance, and exploitation fundamentals.",
    description:
      "Working through TryHackMe and Hack The Box labs, OverTheWire Natas, and CTF challenges. Practicing reconnaissance and web exploitation with tools like Nuclei. Approach: build on backend experience to understand how applications can be attacked — the goal is to become a security professional who understands both building and breaking.",
    tags: ["OWASP Top 10", "TryHackMe", "HTB", "OverTheWire", "Nuclei", "Recon", "CTF"],
    year: "2025–now",
    role: "Self-directed",
    icon: Shield,
    status: "in-progress",
    
  },

  // ─────────────────────────────────────────────────────────────
  // TEMPLATE — copy when a new project is ready (JWT Auth Lab, etc.)
  // ─────────────────────────────────────────────────────────────
  // {
  //   slug: "jwt-auth-lab",
  //   title: "JWT Auth Lab — Vulnerable by Design",
  //   summary:
  //     "A .NET API with intentional JWT vulnerabilities, each paired with an exploit and a fix.",
  //   description:
  //     "Built a deliberately insecure authentication API to practice identifying and fixing real-world auth flaws.",
  //   tags: ["C#", ".NET", "JWT", "AppSec", "OWASP"],
  //   year: "2025",
  //   role: "Solo Project",
  //   repo: "https://github.com/rizal-mujahiddan/jwt-auth-lab",
  //   icon: Shield,
  //   status: "in-progress",
  //   featured: true,
  // },
];

export const featuredProjects = projects.filter((p) => p.featured);