import FooterCustom from "@/components/layout/FooterCustom";
import NavBar from "@/components/layout/NavBar";
import Carousel from "@/components/ui/Carousel";
import CarouselItem from "@/components/ui/CarouselItem";

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="max-w-screen-2xl mx-auto px-8 py-12">
        <main
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
            <h2 className="text-3xl">Skills</h2>
          </section>
          <section className="w-7xl">
            <Carousel>
              <CarouselItem>Slide 1</CarouselItem>
              <CarouselItem>Slide 3</CarouselItem>
              <CarouselItem>Slide 2</CarouselItem>
              <CarouselItem>Slide 3</CarouselItem>
            </Carousel>
          </section>
        </main>
      </div>
      <FooterCustom />
    </div>
  );
}
