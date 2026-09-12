import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import { featuredProjects } from "../../data/projects-data";

export default function ProjectCarousel() {
  return (
    <Carousel>
      {featuredProjects.map((project) => {
        const url = project.link ?? project.repo;
        return (
          <CarouselItem
            key={project.slug}
            className="relative overflow-hidden cursor-pointer"
            onClick={() => {
              if (url) window.open(url, "_blank");
            }}
          >
            {project.image && (
              <div
                className="absolute inset-0 bg-cover bg-center blur-xs scale-100"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
            )}
            <div className="relative z-10">{project.title}</div>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}