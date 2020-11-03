import React from "react";

const Award = () => {
  return (
    <div id="award" className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <img
            id="award-pic"
            className="img-fluid"
            src="assets/images/photographers-forum-logo.png"
            alt="Award"
          />
        </div>
        <div className="col-md-4">
          <img
            id="award-winning-pic"
            className="img-fluid"
            src="assets/images/dusty.jpg"
            alt="Award Winning"
          />
        </div>
        <div id="short-container" className="col-md-4">
          <p id="short-title">34th College & High School Photography Contest</p>
          <p id="short-info">
            Published in Photographer's Forum Magazine June 2014 with a portrait
            of Dusty, a horse from Virginia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Award;
