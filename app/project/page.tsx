"use client";

import FooterCustom from "@/components/layout/FooterCustom";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import Carousel from "@/components/ui/Carousel";
import CarouselItem from "@/components/ui/CarouselItem";
import { useRouter } from "next/navigation";

export default function Project() {
  const router = useRouter();

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
            <h2 className="text-3xl">Projects</h2>
          </section>
          <section className="w-7xl">
            <Carousel>
              <CarouselItem
                className="relative overflow-hidden cursor-pointer"
                onClick={() =>
                  router.push(
                    "https://huggingface.co/spaces/rizalm69/TelcoCustomerChurnModel",
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
          </section>
        </main>
      </div>
      <FooterCustom />
    </div>
  );
}
