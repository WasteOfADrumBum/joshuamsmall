import React from "react";

const FrontEnd = () => {
  return (
    <div className="container-fluid text-center bg-grey" id="portfolio-front">
      <h2>Front-End Projects</h2>
      <div
        id="myCarousel-1"
        className="carousel slide text-center"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#myCarousel-1" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel-1" data-slide-to="1"></li>
          <li data-target="#myCarousel-1" data-slide-to="2"></li>
          <li data-target="#myCarousel-1" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner" role="listbox" aria-label="frontend">
          <div className="carousel-item active" aria-label="password-generator">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/password-generator.mp4"
                type="video/mp4"
                alt="password generator"
              />
            </video>
            <div className="carousel-caption d-md-block">
              <h4>
                <strong>Password Generator</strong>
                <br />
                <span>
                  An application that generates a random password based on
                  user-selected criteria.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used:
                  <i>HTML, CSS & JavaScript</i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://wasteofadrumbum.github.io/JavaScript-Password-Generator/"
                    target="_blank"
                    rel="noreferrer"
                    alt="password generator app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/JavaScript-Password-Generator"
                    target="_blank"
                    rel="noreferrer"
                    alt="password generator repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="coding-quiz">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/coding-quiz.mp4"
                type="video/mp4"
                alt="coding quiz"
              />
            </video>
            <div className="carousel-caption d-md-block">
              <h4>
                <strong>Code Quiz</strong>
                <br />
                <span>Coding Readieness Quiz</span>
              </h4>
              <p>
                <small>
                  Languages Used:
                  <i>Web APIs, HTML, CSS & JavaScript</i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://wasteofadrumbum.github.io/Web-APIs-Code-Quiz/"
                    target="_blank"
                    rel="noreferrer"
                    alt="coding quiz app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/Web-APIs-Code-Quiz"
                    target="_blank"
                    rel="noreferrer"
                    alt="coding quiz repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="workday-scheduler">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/workday-scheduler.mp4"
                type="video/mp4"
                alt="day planner"
              />
            </video>
            <div className="carousel-caption d-md-block">
              <h4>
                <strong>Day Planner</strong>
                <br />
                <span>
                  A simple calendar application that allows the user to save
                  events for each hour of the day.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used:
                  <i>HTML, CSS, JavaScript, jQuery & Moment.js</i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://wasteofadrumbum.github.io/Work-Day-Scheduler/"
                    target="_blank"
                    rel="noreferrer"
                    alt="day planner app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/Work-Day-Scheduler"
                    target="_blank"
                    rel="noreferrer"
                    alt="day planner repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="weather-dashboard">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/weatherdashboard.mp4"
                type="video/mp4"
                alt="weather dashboard"
              />
            </video>
            <div className="carousel-caption d-md-block">
              <h4>
                <strong>Weather Dashboard</strong>
                <br />
                <span>
                  This site was designed in an effort to use the Open Weather
                  server-side API.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used:
                  <i>
                    HTML, CSS, JavaScript, jQuery, Boostrap & Open Weather Map
                    API
                  </i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://wasteofadrumbum.github.io/Weather-Dashboard/"
                    target="_blank"
                    rel="noreferrer"
                    alt="weather dashboard app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/Weather-Dashboard"
                    target="_blank"
                    rel="noreferrer"
                    alt="weather dashboard repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
