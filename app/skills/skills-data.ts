import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Code2,
  Database,
  Layers3,
  MessageCircle,
  Sparkles,
  Target,
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
          name: "JavaScript & TypeScript",
          category: "Programming",
          level: 90,
          summary:
            "Building interactive, typed web experiences with modern JavaScript.",
          evidence: [
            "Next.js and React applications",
            "Reusable component systems",
            "Typed API integrations",
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
          name: "Python & Data Analysis",
          category: "Data Science",
          level: 75,
          summary:
            "Exploring, cleaning, and communicating insights from structured data.",
          evidence: [
            "Python, NumPy, and Pandas",
            "Exploratory data analysis",
            "Charts and insight summaries",
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
          level: 70,
          summary:
            "Designing practical data models and querying application data.",
          evidence: [
            "SQL fundamentals",
            "Relational data modeling",
            "API data fetching",
          ],
          icon: Database,
        },
        {
          name: "Git, Figma & Deployment",
          category: "Tools",
          level: 85,
          summary:
            "Moving ideas from design to versioned, deployable products.",
          evidence: [
            "Git and GitHub workflows",
            "Figma handoff",
            "Deployment workflows",
          ],
          icon: Layers3,
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
          level: 88,
          summary: "Explaining complex ideas clearly for different audiences.",
          evidence: [
            "Clear technical writing",
            "Presenting with purpose",
            "Active listening",
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
          level: 86,
          summary:
            "Working openly with others to solve problems and ship better work.",
          evidence: [
            "Pair problem solving",
            "Useful feedback",
            "Remote collaboration",
          ],
          icon: Users,
        },
        {
          name: "Leadership",
          category: "Leadership",
          level: 72,
          summary:
            "Taking ownership, setting direction, and helping others grow.",
          evidence: [
            "Setting direction",
            "Mentoring teammates",
            "Thoughtful decisions",
          ],
          icon: Target,
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
          level: 90,
          summary: "Turning ambiguity and feedback into better outcomes.",
          evidence: [
            "Learning new tools quickly",
            "Breaking down ambiguity",
            "Reflecting and improving",
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
  level >= 85 ? "Strong" : level >= 70 ? "Working knowledge" : "Growing";
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
