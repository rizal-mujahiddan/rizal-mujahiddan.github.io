import type { Project, ProjectStatus } from "../../data/projects-data";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const statusStyles: Record<ProjectStatus, string> = {
  shipped: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "in-progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  research: "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

const statusLabel: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  "in-progress": "In Progress",
  research: "Research",
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article className="flex flex-col p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
            <Icon className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              {project.year} · {project.role}
            </p>
          </div>
        </div>
        <span
          className={`shrink-0 px-2.5 py-1 text-[10px] uppercase tracking-wider font-mono rounded-md border ${statusStyles[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-4">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800 text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 text-sm">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Live <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" /> Repo
          </a>
        )}
        {!project.link && !project.repo && (
          <span className="text-xs text-slate-600 font-mono">
            Proprietary / no public link
          </span>
        )}
      </div>
    </article>
  );
}