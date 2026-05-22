import * as motion from "motion/react-client";

export default function NavBar() {
  return (
    <nav className="flex justify-between bg-cyan-700">
      <section className="flex items-center">
        <h1 className="text-4xl">Rizal Mujahiddan Portofolio</h1>
      </section>
      <section className="flex gap-0 justify-between">
        <motion.a
          whileHover={{ backgroundColor: "#3ca4fa" }}
          className="p-4 cursor-pointer text-2xl"
          href="/"
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{ backgroundColor: "#3ca4fa" }}
          className="p-4 cursor-pointer text-2xl"
          href="/project"
        >
          Project
        </motion.a>
        <motion.a
          whileHover={{ backgroundColor: "#3ca4fa" }}
          className="p-4 cursor-pointer text-2xl"
          href="#about"
        >
          About
        </motion.a>
        <motion.a
          whileHover={{ backgroundColor: "#3ca4fa" }}
          className="p-4 cursor-pointer text-2xl"
          href="#contact"
        >
          Contact
        </motion.a>
      </section>
    </nav>
  );
}
