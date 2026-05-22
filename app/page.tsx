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
          <Image src="/file.svg" width={500} height={500} alt="File" />
        </section>
        <section className="grow-2">
          <h2>Rizal Mujahiddan</h2>
          <div>People How to Learning and Struggle for Live, thanks alot</div>
        </section>
      </main>
      <FooterCustom></FooterCustom>
    </>
  );
}
