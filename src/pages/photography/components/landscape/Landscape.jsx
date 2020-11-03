import React from "react";
import PhotoCarousel from "../../../../components/Carousel";

const Landscape = () => {
  return (
    <div id="portfolio-landscape" className="container-fluid">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-4 text-right border-right">
          <h3>Commercial</h3>
          <i className="fas fa-chevron-right" />
          <p id="short-title" className="tri-br">
            Advertising, Architectural, Corporate, Real Estate & Food
          </p>
          <p id="short-info-sixteen">
            Do you need headshots for your LinkedIn profile and your business
            cards? Maybe your in real estate and need to get that house sold.
            The photos you post online are often your first impression for many
            consumers. I can help you catch the eye of your next client.
          </p>
        </div>
        <div className="col-md-6">
          <PhotoCarousel />
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  );
};

export default Landscape;
