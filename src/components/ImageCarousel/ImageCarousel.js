import React from "react";
import { Carousel } from "react-responsive-carousel";
import { map } from "lodash";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ImageCarousel.module.scss";
import { CardImg } from "reactstrap";

export function ImageCarousel(props) {
  const { images } = props;
  

  return (
    <Carousel  infiniteLoop={true} showThumbs={false} preventMovementUntilSwipeScrollTolerance={true}>
      {map(images, (image, index) => (
        <div className={styles.carousel}  key={index}>
          <CardImg  alt={`Slide ${index}`} src={ image.image_alterna} />
        </div>
      ))}
    </Carousel>
  );
}
