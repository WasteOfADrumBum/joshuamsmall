import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron text-center">
      <img
        src="assets/images/tk-top-banner.jpg"
        className="img-fluid"
        alt="Top-Banner"
      />
      <div id="font-overlay">
        <h1>Joshua M. Small</h1>
        <p>Photographer & Photoshop Wizard</p>
      </div>
    </div>
  );
};

export default Jumbotron;
