import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/project", label: "Project" },
  { to: "/skills", label: "Skills" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-white font-semibold tracking-tight">
          Rizal<span className="text-cyan-400">.</span>
        </NavLink>

        <ul className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "text-cyan-400 bg-slate-900"
                      : "text-slate-400 hover:text-slate-200"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}