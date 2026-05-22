import FooterCustom from "@/components/layout/FooterCustom";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="flex bg-amber-800 rounded-2xl">
        <section className="grow-3">
          <Image
            src="/peopleExample.jpg"
            width={500}
            height={500}
            alt="File Foto Saya"
            loading="eager"
          />
        </section>
        <section className="grow-2 flex flex-col items-center justify-center">
          <div>
            <h2 className="text-3xl mb-3 mt">Rizal Mujahiddan</h2>
            <article>
              Seorang yang menyukai teknologi, bisnis dan finansial. dengan
              gigihnya, Belajar Beradaptasi karena distrupsi AI
            </article>
          </div>
        </section>
      </main>
      <FooterCustom></FooterCustom>
    </>
  );
}
