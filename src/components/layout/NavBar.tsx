import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

export default function NavBar() {
  const links = [
    { href: "/", label: "Home", isExternal: false },
    { href: "/project", label: "Project", isExternal: false },
    { href: "/skills", label: "Skills", isExternal: false },
    { href: "/about", label: "About", isExternal: false },
    { href: "/contact", label: "Contact", isExternal: false },
  ];

  return (
    <nav
      className="sticky top-0 z-50
        flex items-center justify-between
        px-8 py-4
        bg-background/80
        backdrop-blur-xl
        border-b border-border"
    >
      <section className="flex items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Rizal Mujahiddan Portofolio
        </Link>
      </section>
      <section className="flex gap-0 justify-between">
        {links.map(({ href, label, isExternal }) => {
          const className =
            "px-4 py-2 rounded-xl text-sm font-medium text-muted hover:text-foreground hover:bg-secondary transition inline-block";

          return isExternal ? (
            <motion.a
              key={href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={className}
              href={href}
            >
              {label}
            </motion.a>
          ) : (
            <motion.div
              key={href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link className={className} to={href}>
                {label}
              </Link>
            </motion.div>
          );
        })}
      </section>
    </nav>
  );
}
