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
        <motion.a
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
          href="/"
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            px-4
            py-2
            rounded-xl
            text-sm
            font-medium
            text-muted
            hover:text-foreground
            hover:bg-secondary
            transition
          "
          href="/project"
        >
          Project
        </motion.a>
        <motion.a
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
          href="/skills"
        >
          Skills
        </motion.a>
        <motion.a
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
          href="#about"
        >
          About
        </motion.a>
        <motion.a
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
          href="#contact"
        >
          Contact
        </motion.a>
      </section>
    </nav>
  );
}
