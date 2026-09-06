"use client";

import useEmblaCarousel from "embla-carousel-react";
import CarouselItem from "./CarouselItem";
import { ReactElement, Children } from "react";

type carouselitemChildren = {
  children:
    ReactElement<typeof CarouselItem> | ReactElement<typeof CarouselItem>[];
};

export default function Carousel({ children }: carouselitemChildren) {
  const childing = Children.toArray(children);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{childing}</div>
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        <button
          onClick={scrollPrev}
          className="
            px-4 py-2
            rounded-xl
            bg-secondary
            hover:bg-secondary/80
            transition
          "
        >
          Prev
        </button>

        <button
          onClick={scrollNext}
          className="
            px-4 py-2
            rounded-xl
            bg-primary
            text-primary-foreground
            hover:opacity-90
            transition
          "
        >
          Next
        </button>
      </div>
    </div>
  );
}
