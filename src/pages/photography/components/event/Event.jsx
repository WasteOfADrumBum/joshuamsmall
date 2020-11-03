import React from "react";
import PhotoCarousel from "../../../../components/Carousel";

const Event = () => {
  return (
    <div id="portfolio-events" className="container-fluid">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-6">
          <PhotoCarousel/>
        </div>
        <div className="col-md-4 border-left">
          <h3>Events</h3>
          <i className="fas fa-chevron-left" />
          <p id="short-title" className="tri-bl">
            Concerts, Parties, & Sports
          </p>
          <p id="short-info-sixteen">
            Event photography is where I started. I've shot high-speed sporting
            events, crazy concerts, car shows, and various gatherings. Effective
            communication is key to any event. Knowing who to shoot and how to
            work the crowd. It's all in the details. Have you ever looked back
            on one of your favorite memories and wish you had more pictures
            because you were to busy enjoying yourself or maybe all you have is
            some selfies on your phone, but all the photos look the same. I can
            capture every moment so you can live in the moment.
          </p>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  );
};

export default Event;
