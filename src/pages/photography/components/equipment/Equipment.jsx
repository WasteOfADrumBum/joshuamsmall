import React from "react";

const Equipment = () => {
  return (
    <div id="equipment" className="container-fluid">
      <div id="equipment-container" className="row first-row">
        <div className="col-md-1"></div>
        <div id="equipment-info" className="col-md-8 text-center">
          <p id="short-info">
            I shoot Nikon and have since the day I picked up a DSLR. I carry a
            few camera bodies in my bag, but I primarily shoot with my d300S. I
            have a range of maco, wide-angle, telephoto, and low aperture lenses
            to be able to capture every moment in any condition. However, when
            I'm in the studio my Alien Bee lighting helps bring pictures to
            life.
          </p>
        </div>
        <div className="col-md-3"></div>
        <div id="equipment-pic-container" className="row">
          <div className="col-md-4"></div>
          <div className="col-md-6">
            <img
              id="equipment-pic"
              className="img-fluid"
              src="assets/images/nova.jpg"
              alt="equipment"
            />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
