export default function NavBar() {
  return (
    <nav className="flex justify-between bg-cyan-700 p-5">
      <section>
        <h1 className="text-4xl">Rizal Mujahiddan Portofolio</h1>
      </section>
      <section className="flex gap-0 justify-between">
        <a className="p-4 cursor-pointer text-2xl" href="/">
          Home
        </a>
        <a className="p-4 cursor-pointer text-2xl" href="/project">
          Project
        </a>
        <a className="p-4 cursor-pointer text-2xl" href="#about">
          About
        </a>
        <a className="p-4 cursor-pointer text-2xl" href="#contact">
          Contact
        </a>
      </section>
    </nav>
  );
}
