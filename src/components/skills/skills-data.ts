import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Code2,
  Database,
  Layers3,
  MessageCircle,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

export type SkillType = "hard" | "soft";
export type Skill = {
  name: string;
  category: string;
  level: number;
  summary: string;
  evidence: string[];
  icon: LucideIcon;
};
export type SkillGroup = {
  label: string;
  description: string;
  skills: Skill[];
};

export const skillGroups: Record<SkillType, SkillGroup[]> = {
  hard: [
    {
      label: "Programming",
      description:
        "Languages and frameworks I use to build reliable digital products.",
      skills: [
        {
          name: "Backend Engineering (.NET / C#)",
          category: "Programming",
          level: 70,
          summary:
            "Building and maintaining APIs, database-backed features, and third-party integrations in a production team.",
          evidence: [
            "2 years backend development with C# / .NET",
            "REST API development and debugging",
            "Database changes (tables, columns) and Refit-based integrations",
          ],
          icon: Code2,
        },
        {
          name: "JavaScript & TypeScript (React)",
          category: "Programming",
          level: 40,
          summary:
            "Working knowledge on the frontend to support backend and full-stack tasks when needed.",
          evidence: [
            "React basics for supporting features",
            "TypeScript fundamentals",
            "Occasional frontend work outside primary backend role",
          ],
          icon: Code2,
        },
      ],
    },
    {
      label: "Data Science",
      description: "Turning datasets into clear patterns and useful decisions.",
      skills: [
        {
          name: "Python, Data & Machine Learning",
          category: "Data Science",
          level: 65,
          summary:
            "Comparing forecasting models and handling the data preparation behind them.",
          evidence: [
            "Forecasting with STL, Prophet, and XGBoost via PyCaret",
            "Feature engineering: imputation, drift checks, cross-validation, Granger causality selection",
            "National temperature-prediction competition & ANTAM gold price thesis",
          ],
          icon: BarChart3,
        },
      ],
    },
    {
      label: "Databases & Tools",
      description: "Working with the systems and tools behind production work.",
      skills: [
        {
          name: "SQL & Databases",
          category: "Databases",
          level: 60,
          summary:
            "Designing practical schema changes and querying application data through EF.",
          evidence: [
            "Adding tables and columns to existing schemas",
            "Complex queries via Entity Framework",
            "Query optimization with AI assistance",
          ],
          icon: Database,
        },
        {
          name: "Git & Version Control",
          category: "Tools",
          level: 60,
          summary:
            "Confident day-to-day Git workflow: branching, stashing, and history management.",
          evidence: [
            "Branch, checkout, pull, push, stash, reset",
            "Feature branching in a team workflow",
            "Comfortable resolving common Git scenarios",
          ],
          icon: Layers3,
        },
      ],
    },
    {
      label: "Security",
      description:
        "Learning how to find, understand, and fix application weaknesses.",
      skills: [
        {
          name: "Application Security & Cybersecurity",
          category: "Security",
          level: 45,
          summary:
            "Building on backend experience to understand how applications are attacked and secured.",
          evidence: [
            "TryHackMe and Hack The Box beginner labs",
            "OverTheWire Natas progress (~level 11)",
            "Recon and web exploitation practice with Nuclei",
          ],
          icon: Shield,
        },
      ],
    },
  ],
  soft: [
    {
      label: "Communication",
      description:
        "Making ideas clear through writing, listening, and presenting.",
      skills: [
        {
          name: "Technical Communication",
          category: "Communication",
          level: 50,
          summary:
            "Explaining technical work clearly while still growing in English and public writing.",
          evidence: [
            "Explaining bugs and system behavior to teammates",
            "Documenting and clarifying requirements",
            "Active listening in team discussions",
          ],
          icon: MessageCircle,
        },
      ],
    },
    {
      label: "Collaboration",
      description: "Creating trust, momentum, and shared ownership with teams.",
      skills: [
        {
          name: "Teamwork",
          category: "Collaboration",
          level: 60,
          summary:
            "Working as a dependable team member on shared goals and problems.",
          evidence: [
            "Collaborating in a backend team",
            "Pair problem-solving and code discussion",
            "Cross-team work with QA and DevOps",
          ],
          icon: Users,
        },
      ],
    },
    {
      label: "Adaptability",
      description: "Staying curious and resilient when requirements change.",
      skills: [
        {
          name: "Adaptability",
          category: "Adaptability",
          level: 45,
          summary:
            "Learning new tools and domains quickly as the role and tech change.",
          evidence: [
            "Moved from backend into ML/data work",
            "Now learning AppSec and security fundamentals",
            "Adapting to AI-assisted workflows",
          ],
          icon: Sparkles,
        },
      ],
    },
  ],
};

export const skills: Record<SkillType, Skill[]> = {
  hard: skillGroups.hard.flatMap((group) => group.skills),
  soft: skillGroups.soft.flatMap((group) => group.skills),
};

export const levelLabel = (level: number) =>
  level >= 80 ? "Strong" : level >= 60 ? "Working knowledge" : "Growing";

export const categoryLabels = (type: SkillType) =>
  skills[type]
    .map((skill) => skill.category)
    .filter((value, index, values) => values.indexOf(value) === index);

export const categoryDescription = (type: SkillType, category: string) => {
  const group = skillGroups[type].find((group) =>
    group.skills.some((skill) => skill.category === category),
  );
  return group?.description ?? `Skills related to ${category}.`;
};

export function filterSkills(type: SkillType, query: string, category: string) {
  const normalized = query.trim().toLowerCase();
  return skills[type].filter(
    (skill) =>
      (category === "All" || skill.category === category) &&
      `${skill.name} ${skill.category} ${skill.summary} ${skill.evidence.join(" ")}`
        .toLowerCase()
        .includes(normalized),
  );
}