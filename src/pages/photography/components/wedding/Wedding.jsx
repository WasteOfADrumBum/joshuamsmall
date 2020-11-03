import React from "react";
import PhotoCarousel from "../../../../components/Carousel";

const Wedding = () => {
  return (
    <div id="portfolio-wedding" className="container-fluid">
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-4 text-right border-right">
          <h3>Weddings & Couples</h3>
          <i className="fas fa-chevron-right" />
          <p id="short-title" className="tri-br">
            Proposals, Engagements, Wedding & Couples
          </p>
          <p id="short-info-sixteen">
            Nothing means more than a keepsake of you and the one you love.
            These once in a lifetime special days can be nerve-racking enough,
            let me offer you peace of mind by letting me worry about capturing
            the moment.
          </p>
        </div>
        <div className="col-md-6">
          <PhotoCarousel/>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  );
};

export default Wedding;
