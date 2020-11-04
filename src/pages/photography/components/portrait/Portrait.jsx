import React from "react";
import PhotoCarousel from "../../../../components/Carousel";
import horizontalData from '../../../../data/horizontalData.json';
import verticalData from '../../../../data/verticalData.json';

const Portrait = () => {
 return (
    <div id="portrait-container">
      <div id="portfolio-portraits" className="container-fluid">
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-6">
            <PhotoCarousel data={horizontalData} />
          </div>
          <div className="col-md-4 border-left">
            <p id="short-title" className="tri-bl">
              In The Studio
            </p>
            <p id="short-info-sixteen">
              I have a home studio that gives complete control of anything you
              can imagine. I have an entire pile of items to utilize from
              backdrops to props. More control often means better portraits,
              fewer distractions, and lower risk for rescheduling due to
              external events... like the weather.
            </p>
          </div>
          <div className="col-md-1" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-2 text-center">
          <i className="fas fa-chevron-up" />
        </div>
        <div className="col-md-2 text-center">
          <h3>Portraits</h3>
        </div>
        <div className="col-md-2 text-center">
          <i className="fas fa-chevron-down" />
        </div>
        <div className="col-md-3" />
      </div>
      <div id="portfolio-portraits-2" className="container-fluid">
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-6 text-right border-right">
            <p id="short-title" className="tri-br">
              On Location
            </p>
            <p id="short-info-sixteen">
              Finding inspirational locations or even a place that means the
              world to you, shooting on location can be a lot of fun. When
              shooting out in the world you're limited on what you can drag
              along so the world around you becomes everything. That being said
              it always helps to limit what you carry so having an idea of where
              you want to take pictures and the time of day you're looking to
              take them changes what we need to bring along. Let's go
              gallivanting!
            </p>
          </div>
          <div className="col-md-4">
            <PhotoCarousel data={verticalData}/>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    </div>
  );
};

export default Portrait;
