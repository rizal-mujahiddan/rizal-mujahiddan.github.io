"use client";

import { useMemo, useState } from "react";
import { Chip, LinearProgress, Tab, Tabs, Tooltip } from "@mui/material";
import { Check, Search } from "lucide-react";
import {
  categoryDescription,
  categoryLabels,
  filterSkills,
  levelLabel,
  type SkillType,
} from "./skills-data";

export function SkillsTutorial() {
  const [type, setType] = useState<SkillType>("hard");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = categoryLabels(type);
  const visibleSkills = useMemo(
    () => filterSkills(type, query, category),
    [type, query, category],
  );
  const selectedDescription =
    category === "All"
      ? `Showing the ${type === "hard" ? "technical" : "human"} strengths I bring to projects.`
      : categoryDescription(type, category);

  function changeType(nextType: SkillType) {
    setType(nextType);
    setCategory("All");
    setQuery("");
  }

  return (
    <section
      id="skills"
      className="relative z-10 border-y border-white/10 bg-[#0a1728] px-6 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              What I bring
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Skills I use to make things happen.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              A snapshot of my technical capabilities and the people skills
              behind the work. Choose a type to explore the strengths I have for
              a portfolio project.
            </p>
          </div>
          <label className="relative w-full lg:max-w-xs">
            <span className="sr-only">Search my skills</span>
            <Search
              className="absolute left-3 top-3 text-slate-500"
              size={18}
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search my skills..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
            />
          </label>
        </div>
        <BoxTabs type={type} onChange={changeType} />
        <div
          className="mt-7 flex flex-wrap gap-2"
          aria-label="Filter my skills by category"
        >
          <CategoryButton
            active={category === "All"}
            onClick={() => setCategory("All")}
            label="All skills"
          />
          {categories.map((item) => (
            <CategoryButton
              key={item}
              active={category === item}
              onClick={() => setCategory(item)}
              label={item}
            />
          ))}
        </div>
        <p className="mt-5 text-sm text-slate-500">{selectedDescription}</p>
        {visibleSkills.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {visibleSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-white/15 p-10 text-center text-slate-400">
            No matching skills found. Try another keyword.
          </div>
        )}
      </div>
    </section>
  );
}

function BoxTabs({
  type,
  onChange,
}: {
  type: SkillType;
  onChange: (value: SkillType) => void;
}) {
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
      <Tabs
        value={type}
        onChange={(_, value: SkillType) => onChange(value)}
        aria-label="Choose the type of skills to show"
        sx={{
          "& .MuiTabs-indicator": { display: "none" },
          "& .MuiTab-root": {
            color: "#94a3b8",
            fontWeight: 700,
            textTransform: "none",
            minHeight: 46,
            borderRadius: "12px",
            transition: "all .2s",
          },
          "& .Mui-selected": {
            color: "#07111f !important",
            backgroundColor: "#8be9f5",
          },
        }}
      >
        <Tab value="hard" label="Hard Skills · Technical" />
        <Tab value="soft" label="Soft Skills · Human" />
      </Tabs>
    </div>
  );
}

function CategoryButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-100" : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white"}`}
    >
      {label}
    </button>
  );
}

function SkillCard({
  skill,
}: {
  skill: ReturnType<typeof filterSkills>[number];
}) {
  const Icon = skill.icon;
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-300">
          <Icon size={21} />
        </div>
        <Tooltip title={`${skill.level}% proficiency`}>
          <Chip
            label={skill.category}
            size="small"
            sx={{
              color: "#a5f3fc",
              borderColor: "rgba(103,232,249,.25)",
              backgroundColor: "rgba(103,232,249,.08)",
            }}
            variant="outlined"
          />
        </Tooltip>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{skill.name}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">
        {skill.summary}
      </p>
      <div className="mt-5 flex items-center justify-between text-xs">
        <span className="font-medium text-slate-300">
          {levelLabel(skill.level)}
        </span>
        <span className="text-cyan-300">{skill.level}%</span>
      </div>
      <LinearProgress
        variant="determinate"
        value={skill.level}
        aria-label={`${skill.name} proficiency`}
        sx={{
          mt: 1,
          height: 6,
          borderRadius: 6,
          backgroundColor: "rgba(255,255,255,.1)",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#8be9f5",
            borderRadius: 6,
          },
        }}
      />
      <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
        {skill.evidence.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-slate-400"
          >
            <Check size={15} className="text-cyan-300" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
