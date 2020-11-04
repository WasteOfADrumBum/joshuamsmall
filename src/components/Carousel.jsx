import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const PhotoCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data?.map((slide, i) => {
        return (
          <Carousel.Item key={i + "-slide"}>
            <img className="d-block w-100" src={slide.image} alt={slide.alt} />
            <Carousel.Caption>
              <h5>{slide.caption}</h5>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default PhotoCarousel;