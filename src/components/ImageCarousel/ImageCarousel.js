import React from "react";
import { Carousel } from "react-responsive-carousel";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "./ImageCarousel.module.scss";
import { CardImg } from "reactstrap";

export function ImageCarousel(props) {
  const { images } = props;
  

  return (
    <Carousel  infiniteLoop={true} showThumbs={false} preventMovementUntilSwipeScrollTolerance={true}>
      {map(images, (image, index) => (
        <div key={index}>
          <CardImg alt={`Slide ${index}`} src={ image.image_alterna} />
        </div>
      ))}
    </Carousel>
  );
}
