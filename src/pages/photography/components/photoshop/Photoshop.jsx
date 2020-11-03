import React from "react";

const Photoshop = () => {
  return (
    <div id="photoshop" className="container-fluid">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8 text-center">
          <h3>Photoshop</h3>
          <p id="short-title" className="diamond">
            Retouch, Enhance & Create
          </p>
          <p id="short-info-sixteen">
            Photoshop as become the ultimate tool for photographers everywhere.
            From emotional effects, retouching, enhancing old photos, or even
            creating sci-fi effects it's a skill that can create some amazing
            results. If you can imagine it I'll bring it to life for you!
          </p>
          <br />
        </div>
        <div className="col-md-2" />
      </div>
      <div className="row">
        <div className="col-md-1" />
        <div className="ba-slider col-md-5">
          <img
            src="assets/images/photoshop/courtney-after.jpg"
            alt="courtney-after"
          />
          <div className="resize">
            <img
              src="assets/images/photoshop/courtney-b4.jpg"
              alt="courtney-b4"
            />
          </div>
          <span className="handle" />
        </div>
        <div className="ba-slider col-md-5">
          <img src="assets/images/photoshop/jay-after.jpg" alt="jay-after" />
          <div className="resize">
            <img src="assets/images/photoshop/jay-b4.jpg" alt="jay-b4" />
          </div>
          <span className="handle" />
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  );
};

export default Photoshop;
