import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

export default function ProjectCarousel() {
  return (
    <Carousel>
      <CarouselItem
        className="relative overflow-hidden cursor-pointer"
        onClick={() =>
          window.open(
            "https://huggingface.co/spaces/rizalm69/TelcoCustomerChurnModel",
            "_blank",
          )
        }
      >
        <div
          className="
            absolute inset-0
            bg-[url('/TelcoCustomerChurnModelaHuggingFaceSpacebyRizalm69.png')]
            bg-cover bg-center
            blur-xs scale-100
          "
        />
        <div className="relative z-10">
          Telco Customer Churn Model (Data Science)
        </div>
      </CarouselItem>
      <CarouselItem>Slide 2</CarouselItem>
      <CarouselItem>Slide 3</CarouselItem>
    </Carousel>
  );
}
