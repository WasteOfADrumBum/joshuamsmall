import React from "react";

const Portfolio = () => {
  return (
    <div className="container-fluid text-center" id="portfolio">
      <h2>Portfolio</h2>
      <h4 id="title-quotes">
        &quot;Make stuff people want.&quot; &#x2013;Paul Graham
      </h4>
      <br />
      <h4>TEAM PROJECTS</h4>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="thumbnail">
            <video
              autoPlay
              loop
              muted
              playsInline
              width="400"
              height="300"
              className="img-fluid"
            >
              <source
                src="assets/video/gallivant.mp4"
                type="video/mp4"
                alt="Gallivant"
              />
            </video>
            <h4>
              <strong>Gallivant</strong>
            </h4>
            <p>
              A comprehensive trip planner that provides optimal flight,
              weather, and popular points of interest details all in one place
              to help successfully plan for adventures.
            </p>
            <p>
              <small>
                Languages Used:{" "}
                <i>HTML, CSS, JavaScript, API&apos;s, ES6, jQuery</i>
              </small>
            </p>
            <p>
              <span className="glyphicon logo-small">
                <a
                  href="https://wasteofadrumbum.github.io/Gallivant/"
                  target="_blank"
                  rel="noreferrer"
                  alt="Gallivant App"
                >
                  <i className="fa fa-desktop" />
                </a>
              </span>
              <span className="glyphicon logo-small">
                <a
                  href="https://github.com/WasteOfADrumBum/Gallivant"
                  target="_blank"
                  rel="noreferrer"
                  alt="Gallivant Repo"
                >
                  <i className="fab fa-github" />
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <video
              autoPlay
              loop
              muted
              playsInline
              width="400"
              height="300"
              className="img-fluid"
            >
              <source
                src="assets/video/palate-prowler.mp4"
                type="video/mp4"
                alt="palate prowler"
              />
            </video>
            <h4>
              <strong>Palate Prowler</strong>
            </h4>
            <p>
              Palate Prowler is an aplication which allows users to find and
              create food truck events using a custom profile. Once logged in
              the user will be able to create new events that will then be added
              to thier events list and can later be removed. Users who are
              logged in to the application can select events they will be
              attending and those events will automatically be added to thier
              attending events list on thier profile. Palate Prowler is a user
              friendly application that brings people and mobile food together.
            </p>
            <p>
              <small>
                Languages Used:{" "}
                <i>
                  HTML, CSS, JavaScript, API&apos;s, ES6, jQuery, Heroku, MySQL,
                  Sequelize, Express.js, Handlebars, Node.js
                </i>
              </small>
            </p>
            <p>
              <span className="glyphicon logo-small">
                <a
                  href="https://team-project-ii.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  alt="palate prowler app"
                >
                  <i className="fa fa-desktop" />
                </a>
              </span>
              <span className="glyphicon logo-small">
                <a
                  href="https://github.com/WasteOfADrumBum/Team-Project-II"
                  target="_blank"
                  rel="noreferrer"
                  alt="palate prowler repo"
                >
                  <i className="fab fa-github" />
                </a>
              </span>
            </p>
            <p>
              <small>
                Login: <i>adam@gates.com</i> Password: <i>test1!</i>
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <video
              autoPlay
              loop
              muted
              playsInline
              width="400"
              height="300"
              className="img-fluid"
            >
              <source
                src="assets/video/coming-soon.mp4"
                type="video/mp4"
                alt="tba"
              />
            </video>
            <h4>
              <strong>Team Project 3</strong>
            </h4>
            <p>Project Description</p>
            <p>
              <small>
                Languages Used: <i>Unknown</i>
              </small>
            </p>
            <p>
              <span className="glyphicon logo-small">
                <a
                  href="https://github.com/WasteOfADrumBum"
                  target="_blank"
                  rel="noreferrer"
                  alt="tba app"
                >
                  <i className="fa fa-desktop" />
                </a>
              </span>
              <span className="glyphicon logo-small">
                <a
                  href="https://github.com/WasteOfADrumBum/"
                  target="_blank"
                  rel="noreferrer"
                  alt="tba repo"
                >
                  <i className="fab fa-github" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
