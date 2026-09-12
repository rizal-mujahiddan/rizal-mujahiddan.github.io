import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 max-w-7xl mx-auto px-6 md:px-8 py-20">
      <div
        className="
          flex flex-col-reverse md:flex-row
          items-center
          justify-between
          gap-12 md:gap-16
          bg-slate-900/40
          border
          border-slate-800/80
          backdrop-blur-sm
          rounded-3xl
          px-8 md:px-16
          py-14 md:py-20
        "
      >
        <section className="flex-1">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
              Backend Engineer → Application Security
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6 text-white">
              Rizal Mujahiddan
            </h1>
            <p className="text-lg text-slate-400 leading-8">
              From building applications to understanding how they break, I’m a
              backend engineer moving into application security and
              cybersecurity while adapting to AI/ML and data.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                to="/project"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-medium hover:bg-cyan-400 transition-colors"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
              >
                See Skills
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
              >
                Resume <Download className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" /> Get in touch
              </Link>
            </div>
          </div>
        </section>

        <section className="flex-1 flex justify-center">
          <img
            src="/AuthorWebsiteSquare.jpeg"
            alt="Portrait of Rizal Mujahiddan"
            loading="eager"
            width={420}
            height={420}
            className="
              rounded-3xl
              object-cover
              shadow-lg
              border border-slate-800/80
              w-64 h-64 md:w-[420px] md:h-[420px]
            "
          />
        </section>
      </div>
    </div>
  );
}