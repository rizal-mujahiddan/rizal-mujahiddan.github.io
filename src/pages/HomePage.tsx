export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div
        className="
          flex
          items-center
          justify-between
          gap-16
          bg-card
          border
          border-border
          rounded-3xl
          px-16
          py-20
          shadow-sm
        "
      >
        <section className="flex-1 flex justify-center">
          <img
            src="/AuthorWebsiteSquare.jpeg"
            alt="File Foto Saya"
            loading="eager"
            width={500}
            height={500}
            className="
              rounded-3xl
              object-cover
              shadow-lg
            "
          />
        </section>
        <section className="flex-1">
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold tracking-tight mb-6">
              Rizal Mujahiddan
            </h2>
            <article className="text-lg text-muted leading-8">
              From building applications to understanding how they break, I’m a
              backend engineer moving into application security and
              cybersecurity while adapting to AI/ML and data.
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
