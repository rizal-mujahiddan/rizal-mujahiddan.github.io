import ProjectCarousel from "../components/ui/ProjectCarousel";

export default function ProjectPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-16
          bg-card
          border
          border-border
          rounded-3xl
          px-16
          py-8
          shadow-sm
        "
      >
        <section>
          <h2 className="text-3xl font-bold">Projects</h2>
        </section>
        <section className="w-full">
          <ProjectCarousel />
        </section>
      </div>
    </div>
  );
}
