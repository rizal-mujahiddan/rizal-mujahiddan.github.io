export default function AboutPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 max-w-4xl mx-auto">
      {/* <!-- Hero Section --> */}
      <div className="mb-16">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
          About Me
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-2 text-white">
          Rizal Mujahiddan
        </h1>
        <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
          I build high-performance backend systems with a defender’s mindset and
          a pentester’s curiosity. Blending secure system architecture,
          vulnerability research, and data science to craft reliable, resilient
          software.
        </p>
      </div>

      {/* <!-- Content Grid --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <!-- Bio Card --> */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white mb-3">
            Philosophy & Background
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Focused on crafting robust, scalable backend systems with .NET. I
            approach backend engineering through three lenses: building clean,
            maintainable APIs; auditing code with a pentester’s security
            mindset; and utilizing data science to analyze system behavior and
            drive performance optimization.
          </p>
        </div>

        {/* <!-- Tech Stack Card --> */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white mb-3">Core Stack</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              TypeScript
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              React
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              React Router
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              Tailwind
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
