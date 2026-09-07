import * as motion from "motion/react-client";

export default function NavBar() {
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
        <h1 className="text-2xl font-bold tracking-tight">
          Rizal Mujahiddan Portofolio
        </h1>
      </section>
      <section className="flex gap-0 justify-between">
        {[
          { href: "/", label: "Home" },
          { href: "/project", label: "Project" },
          { href: "/skills", label: "Skills" },
          { href: "#about", label: "About" },
          { href: "#contact", label: "Contact" },
        ].map(({ href, label }) => (
          <motion.a
            key={href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-4
              py-2
              rounded-xl
              text-sm
              font-medium
              text-muted
              hover:text-foreground
              hover:bg-secondary
              transition
            "
            href={href}
          >
            {label}
          </motion.a>
        ))}
      </section>
    </nav>
  );
}
