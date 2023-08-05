import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Heading from "../Heading";

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

interface CardSliderProps {
  cards: CardData[];
}

const Slides: React.FC<CardSliderProps> = ({ cards }) => {
  const splideOptions = {
    type: "loop",
    autoplay: false,
    arrows: false,
    perMove: 1,
    pagination: false,
    gap: 20,
    breakpoints: {
      1536: {
        perPage: 4,
        drag: true,
      },
      1280: {
        perPage: 4,
        drag: true,
      },
      1024: {
        perPage: 4,
        drag: true,
      },
      768: {
        perPage: 3,
        peek: 30,
        drag: true,
        autoplay: true,
      },
      640: {
        perPage: 2,
        peek: 30,
        drag: true,
        autoplay: true,
      },
      419: {
        perPage: 1,
        peek: 30,
        padding: "1rem",
        drag: true,
        autoplay: true,
      },
    },
  };

  const truncateDescription = (desc: string, limit: number) => {
    if (desc.length > limit) {
      return desc.slice(0, limit) + "...";
    }
    return desc;
  };

  return (
    <div className="overflow-x-hidden">
      <div className="cursor-pointer xl:cursor-default">
        <Splide options={splideOptions}>
          {cards.map((card, index) => (
            <SplideSlide key={index}>
              <figure>
                <img
                  className="w-full h-[40vh] rounded-[10px] object-cover"
                  src={card.imageUrl}
                  alt={card.title}
                />
                <figcaption className="">
                  <Heading
                    title={card.title || <Skeleton />}
                    subtitle={
                      truncateDescription(card.description, 45) || <Skeleton count={5}/>
                    }
                  />
                </figcaption>
              </figure>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Slides;
