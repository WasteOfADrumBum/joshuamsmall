import React from "react";
import ReactCompareImage from "react-compare-image";

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
        <div className="col-md-5">
          <ReactCompareImage
            leftImage="assets/images/photoshop/courtney-after.jpg"
            rightImage="assets/images/photoshop/courtney-b4.jpg"
          />
        </div>
        <div className="col-md-5">
          <ReactCompareImage
            leftImage="assets/images/photoshop/jay-after.jpg"
            rightImage="assets/images/photoshop/jay-b4.jpg"
          />
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  );
};

export default Photoshop;
