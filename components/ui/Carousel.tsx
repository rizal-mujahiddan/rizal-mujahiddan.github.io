"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_95%] min-w-0 pl-4">
            <div
              className="
                h-96
                rounded-3xl
                bg-primary
                text-white
                flex
                items-center
                justify-center
                text-3xl
                font-bold
              "
            >
              Slide 1
            </div>
          </div>

          <div className="flex-[0_0_95%] min-w-0 pl-4">
            <div
              className="
                h-96
                rounded-3xl
                bg-secondary
                text-foreground
                flex
                items-center
                justify-center
                text-3xl
                font-bold
              "
            >
              Slide 2
            </div>
          </div>

          <div className="flex-[0_0_95%] min-w-0 pl-4">
            <div
              className="
                h-96
                rounded-3xl
                bg-card
                border
                border-border
                flex
                items-center
                justify-center
                text-3xl
                font-bold
              "
            >
              Slide 3
            </div>
          </div>
        </div>
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
