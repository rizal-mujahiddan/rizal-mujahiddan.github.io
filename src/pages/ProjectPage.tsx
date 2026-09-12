import { useState } from "react";
import { projects, type ProjectStatus } from "../data/projects-data";
import ProjectCard from "../components/ui/ProjectCard";

const filters: Array<{ label: string; value: ProjectStatus | "all" }> = [
  { label: "All", value: "all" },
  { label: "Shipped", value: "shipped" },
  { label: "Research", value: "research" },
  { label: "In Progress", value: "in-progress" },
];

export default function ProjectPage() {
  const [active, setActive] = useState<ProjectStatus | "all">("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.status === active);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 max-w-5xl mx-auto">
      <header className="mb-10">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
          Projects
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 text-white">
          Things I've built, broken, and learned from
        </h1>
        <p className="mt-4 text-slate-400 max-w-2xl">
          A mix of backend engineering, data work, and an ongoing security
          learning journey. Some are proprietary work, some are research, and
          some are still in progress.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`px-3.5 py-1.5 text-sm rounded-lg border transition-colors ${
              active === f.value
                ? "bg-cyan-500 text-slate-950 border-cyan-500"
                : "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-slate-500 text-sm">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </main>
  );
}