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
          A backend engineer who builds software and is now learning how to
          break it — starting with application security and growing toward
          cybersecurity, while adapting to AI and data-driven problem solving.
        </p>
      </div>

      {/* <!-- Content Grid --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <!-- Bio Card --> */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white mb-3">
            Philosophy &amp; Background
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            I spent around two years building backend systems with C# / .NET —
            turning business requirements into APIs, database changes, and
            third-party integrations, and debugging when systems behaved
            differently than expected. That experience taught me how software
            works from the inside. Now I'm approaching security from the
            application layer first: learning how web applications can be
            attacked through hands-on labs, CTFs, and reconnaissance, with the
            goal of growing from a software engineer with security awareness
            into a security professional who understands both sides.
          </p>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            Outside of backend and security, I've explored machine learning
            through a national temperature-prediction competition and a thesis
            comparing forecasting models for ANTAM gold prices. Those projects
            taught me to experiment, compare approaches, and respect the domain
            behind the data — not just the model.
          </p>
        </div>

        {/* <!-- Tech Stack Card --> */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white mb-3">Core Stack</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              C# / .NET
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              REST APIs
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              Entity Framework
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              SQL
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              Python
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              Git
            </span>
            <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300">
              TryHackMe / HTB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}