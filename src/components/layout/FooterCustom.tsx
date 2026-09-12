import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  { icon: FaGithub, href: "https://github.com/rizal-mujahiddan", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/YOUR_HANDLE", label: "LinkedIn" },
  { icon: MdEmail, href: "mailto:rizal.mujahiddan@gmail.com", label: "Email" },
];

export default function FooterCustom() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-slate-400">
            Rizal Mujahiddan — Backend Engineer → Application Security
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} · Built with React + Tailwind
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}