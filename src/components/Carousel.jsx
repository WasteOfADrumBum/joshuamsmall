import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// ? Where do you store arrays?
// ? Where do you import the array?

const horizontalData = [
  {
    image: "assets/images/portraits/horizontal/casey-1.jpg",
    alt: "casey-1",
    caption: "Casey Francess",
    description: "Greensboro N.C.",
  },
  {
    image: "assets/images/portraits/horizontal/sirina-2.jpg",
    alt: "sirina-2",
    caption: "Sirina Gibson",
    description: "Greensboro N.C.",
  },
  {
    image: "assets/images/portraits/horizontal/misha-1.jpg",
    alt: "misha-1",
    caption: "Misha Cordon",
    description: "@ My Stuido",
  },
  {
    image: "assets/images/portraits/horizontal/sirina-5.jpg",
    alt: "sirina-5",
    caption: "Sirina Gibson",
    description: "Greensboro N.C.",
  },
  {
    image: "assets/images/portraits/horizontal/owen-1.jpg",
    alt: "owen-1",
    caption: "Owen Townson",
    description: "@ My Stuido",
  },
  {
    image: "assets/images/portraits/horizontal/steretype-1.jpg",
    alt: "steretype-1",
    caption: "Stereotype",
    description: "@ My Stuido",
  },
  {
    image: "assets/images/portraits/horizontal/sirina-6.jpg",
    alt: "sirina-6",
    caption: "Sirina Gibson",
    description: "Greensboro N.C.",
  },
  {
    image: "assets/images/portraits/horizontal/pilot-1.jpg",
    alt: "pilot-1",
    caption: "Pilot In Command Bryan Small",
    description: "U.S. Air Space",
  },
  {
    image: "assets/images/portraits/horizontal/casey-2.jpg",
    alt: "casey-2",
    caption: "Casey Francess",
    description: "Greensboro N.C.",
  },
  {
    image: "assets/images/portraits/horizontal/owen-2.jpg",
    alt: "owen-2",
    caption: "Owen Townson",
    description: "@ My Studio",
  },
  {
    image: "assets/images/portraits/horizontal/amber-1.jpg",
    alt: "amber-1",
    caption: "Amber",
    description: "@ My Studio",
  },
  {
    image: "assets/images/portraits/horizontal/sirina-4.jpg",
    alt: "sirina-4",
    caption: "Sirina Gibson",
    description: "Greensboro N.C.",
  },
];

const verticalData = [
  {
    image: "assets/images/portraits/vertical/brittany-1.jpg",
    alt: "brittany-1",
    caption: "Brittany Boitnott",
    description: "@ My Studio",
  },
  {
    image: "assets/images/portraits/vertical/jay-2.jpg",
    alt: "jay-2",
    caption: "Jaby B.",
    description: "@ My Studio",
  },
  {
    image: "assets/images/portraits/vertical/caey-3.jpg",
    alt: "casey-3",
    caption: "Casey Francess",
    description: "Greensboro N.C.",
  },
  {
    image: "assets/images/portraits/vertical/jay-4.jpg",
    alt: "jay-4",
    caption: "Jay B.",
    description: "@ My Studio",
  },
  {
    image: "assets/images/portraits/vertical/amber-2.jpg",
    alt: "amber-2",
    caption: "Amber",
    description: "@ My Studio",
  },
  {
    image: "assets/images/portraits/vertical/brittany-2.jpg",
    alt: "brittany-2",
    caption: "Brittany Boitnott",
    description: "@ My Studio",
  },
  {
    image: "assets/images/portraits/vertical/sirina-7.jpg",
    alt: "sirina-7",
    caption: "Sirina Gibson",
    description: "Greensboro N.C.",
  },
  {
    image: "assets/images/portraits/vertical/jay-3.jpg",
    alt: "jay-3",
    caption: "Jay B.",
    description: "@ My Studio",
  },
  {
    image: "assets/images/portraits/vertical/tk-3.jpg",
    alt: "tk-3",
    caption: "Terrance & Kaitlyn",
    description: "@ My Studio",
  },
  {
    image: "assets/images/portraits/vertical/hannah-1.jpg",
    alt: "hannah-1",
    caption: "Hannah",
    description: "@ My Studio",
  },
];

const commercialData = [
  {
    image: "assets/images/landscapes/dc.jpg",
    alt: "Capital Building",
    caption: "Capital Building",
    description: "Washington D.C.",
  },
  {
    image: "assets/images/landscapes/olg.jpg",
    alt: "Our Landy of Grace",
    caption: "Our Landy of Grace",
    description: "Greensboro N.C.",
  },
  {
    image: "assets/images/landscapes/kure-beach.jpg",
    alt: "Kure Beach",
    caption: "Kure Beach",
    description: "Wilmington N.C.",
  },
  {
    image: "assets/images/landscapes/jmp.jpg",
    alt: "Johnnie Mercers Fishing Pier",
    caption: "Johnnie Mercers Fishing Pier",
    description: "Wilmington N.C.",
  },
  {
    image: "assets/images/landscapes/boat.jpg",
    alt: "Lake Boat",
    caption: "Lake Boat",
    description: "Martinsville V.A.",
  },
];

const eventData = [
  {
    image: "assets/images/events/chevelle-1.jpg",
    alt: "'67 Chevelle",
    caption: "'67 Chevelle",
    description: "Greensboro N.C. @ GAA",
  },
  {
    image: "assets/images/events/pb-1.jpg",
    alt: "Paintball Tournament",
    caption: "Paintball Tournament",
    description: "Gibsonville N.C. @ PBC",
  },
  {
    image: "assets/images/events//olg-1.jpg",
    alt: "Our Lady of Grace Fall Festival",
    caption: "Our Lady of Grace Fall Festival",
    description: "Greensboro N.C. @ OLG",
  },
  {
    image: "assets/images/events/pb-2.jpg",
    alt: "Paintball Tournament",
    caption: "Paintball Tournament",
    description: "Gibsonville N.C. @ PBC",
  },
];

const weddingtData = [
  {
    image: "assets/images/wedding/nelson-rings.jpg",
    alt: "Nelson's Wedding",
    caption: "Nelson's Wedding",
    description: "Martinsville V.A.",
  },
  {
    image: "assets/images/wedding/tk-1.jpg",
    alt: "Terrance & Kaitlyn",
    caption: "Terrance & Kaitlyn",
    description: "@ My Stuido",
  },
  {
    image: "assets/images/wedding/tori-1.jpg",
    alt: "Tori's Wedding",
    caption: "Tori's Wedding",
    description: "Wilmington N.C.",
  },
  {
    image: "assets/images/wedding/tk-2.jpg",
    alt: "Terrance & Kaitlyn",
    caption: "Terrance & Kaitlyn",
    description: "Greensboro N.C.",
  },
];


const PhotoCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // TODO: Modify data.map to take a requested array of data

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {horizontalData.map((slide, i) => {
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

// TODO: Use <PhotoCarousel data={"ArrayName"} /> to call a carousel with given data set
