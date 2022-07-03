import { useContext, FC, useState, useEffect } from "react";
import { DataContext, FetchDataType } from "../App";
import CardsInfo from "./CardsInfo";
import CardsPoster from "./CardsPoster";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    slidesToSlide: 5, // optional, default to 1.
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    slidesToSlide: 5, // optional, default to 1.
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    slidesToSlide: 3, // optional, default to 1.
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Card: FC = () => {
  const { data, isPending, error }: FetchDataType = useContext(DataContext);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <Carousel responsive={responsive} containerClass="carousel-container">
          {data.map((movie: any, index: number) => {
            return (
              <div key={`card-${index}`}>
                <CardsPoster key={`cardsPoster-${index}`} data={movie} />
                <CardsInfo key={`cardsInfo-${index}`} data={movie} />
              </div>
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default Card;
