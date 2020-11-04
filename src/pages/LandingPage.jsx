import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/landing-page.scss";

const LandingPage = () => {
  return (
    <div className="container-fluid text-center bg" id="landing-page">
      <div className="container-fluid" id="font-overlay">
        <div className="row">
          <div className="col-md-12">
            <h1>Joshua M. Small</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"/>
          <div className="col-md-5">
            <h2>
              <Link className="effect4" to="/developer">Web Developer</Link>
            </h2>
          </div>
          <div className="col-md-5">
            <h2>
            <Link className="effect4" to="/photography">Photographer</Link>
            </h2>
          </div>
          <div className="col-md-1"/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
