import {ListDorama} from "~/types/doram";
import {Carousel, CarouselContent, CarouselItem} from "../ui/carousel";
import {DoramaType} from "~/types/dorama";
import {Link} from "@remix-run/react";
import {CONFIG} from "~/constants/main";
import PosterCard from "./PosterCard";

interface Props {
  data: DoramaType[];
}

function Slider({data}: Props) {
  return (
    <Carousel>
      <CarouselContent className="relative">
        {data?.map((item, i) => (
          <CarouselItem
            className="basis-1/2 sm:basis-1/3 md:basis-1/5"
            key={i}
          >
            <PosterCard
              item={item}
              type="Serie"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Slider;
