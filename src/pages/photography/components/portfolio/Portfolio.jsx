import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio" className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div id="short-container" className="col-md-6 text-right">
          <p id="short-title">Portfolio</p>
          <p id="short-info">
            A collection of my work over the years. From the studio to across
            the states I've caputred moments that will never be forgotten.
          </p>
        </div>
        <div id="tiny-container" className="col-md-2 text-left ">
          <p id="tiny-title">
            My
            <br />
            Work
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 card">
          <img
            className="card-img-top img-fluid"
            src="assets/images/example-banner/wilmington-commercial.jpg"
            alt="Card Cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Commercial</h5>
          </div>
          <div className="card-text text-center">
            <a href="#portfolio-landscape" className="card-link">
              Commercial
              <br />
              Portfolio
            </a>
          </div>
        </div>
        <div className="col-md-2 card">
          <img
            className="card-img-top img-fluid"
            src="assets/images/example-banner/michael-event.jpg"
            alt="Card Cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Events</h5>
          </div>
          <div className="card-text text-center">
            <a href="#portfolio-events" className="card-link">
              Event
              <br />
              Portfolio
            </a>
          </div>
        </div>
        <div className="col-md-4 card">
          <img
            className="card-img-top img-fluid"
            src="assets/images/example-banner/sirina-portrait.jpg"
            alt="Card Cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Portraits</h5>
          </div>
          <div className="card-text text-center">
            <a href="#portfolio-portraits" className="card-link">
              Portrait
              <br />
              Portfolio
            </a>
          </div>
        </div>
        <div className="col-md-2 card">
          <img
            className="card-img-top img-fluid"
            src="assets/images/example-banner/tori-wedding.jpg"
            alt="Card Cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Weddings</h5>
          </div>
          <div className="card-text text-center">
            <a href="#portfolio-wedding" className="card-link">
              Couples
              <br />
              Portfolio
            </a>
          </div>
        </div>
        <div className="col-md-2 card">
          <img
            className="card-img-top img-fluid"
            src="assets/images/example-banner/jay-ps.jpg"
            alt="Card Cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Photoshop</h5>
          </div>
          <div className="card-text text-center">
            <a href="#photoshop" className="card-link">
              Photoshop
              <br />
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
