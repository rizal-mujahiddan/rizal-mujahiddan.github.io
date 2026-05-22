import FooterCustom from "@/components/layout/FooterCustom";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="flex bg-amber-800 rounded-2xl">
        <section className="grow-3"></section>
        <section className="grow-2 flex flex-col items-center justify-center">
          <div>
            <h2 className="text-3xl mb-3 mt">Siapa Aja Boleh</h2>
            <article>SiapaKe</article>
          </div>
        </section>
      </main>
      <FooterCustom></FooterCustom>
    </>
  );
}
