import {SkillsTutorial} from "@/components/skills/SkillsTutorial";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 max-w-5xl mx-auto">
      <header className="mb-12">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
          Skills
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 text-white">
          What I build with
        </h1>
        <p className="mt-4 text-slate-400 max-w-2xl">
          A snapshot of my technical and soft skills — honest levels, real
          evidence, and growing areas.
        </p>
      </header>
      <SkillsTutorial />
    </main>
  );
}