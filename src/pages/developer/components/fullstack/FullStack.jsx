import React from "react";

const FullStack = () => {
  return (
    <div className=" container-fluid text-center" id="portfolio-full">
      <h2>Back-End & Full-Stack Projects</h2>
      <div
        id="myCarousel-2"
        className="carousel slide text-center"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#myCarousel-2" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel-2" data-slide-to="1"></li>
          <li data-target="#myCarousel-2" data-slide-to="2"></li>
          <li data-target="#myCarousel-2" data-slide-to="3"></li>
          <li data-target="#myCarousel-2" data-slide-to="4"></li>
          <li data-target="#myCarousel-2" data-slide-to="5"></li>
          <li data-target="#myCarousel-2" data-slide-to="6"></li>
          <li data-target="#myCarousel-2" data-slide-to="7"></li>
          <li data-target="#myCarousel-2" data-slide-to="8"></li>
          <li data-target="#myCarousel-2" data-slide-to="9"></li>
        </ol>
        <div className="carousel-inner" role="listbox" aria-label="fullstack">
          <div className="carousel-item active" aria-label="readme-generator">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/readme-generator.mp4"
                type="video/mp4"
                alt="README.md Generator"
              />
            </video>
            <div className="carousel-caption d-md-block">
              <h4>
                <strong>READMD.md Generator</strong>
                <br />
                <span>
                  A command-line application that allows for quick and easy
                  generation of a project README file. This allows a project
                  creator to spend more time working on finishing the project
                  and less time creating a good README.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used: <i>Node.js & ES6+</i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/README-Generator"
                    target="_blank"
                    rel="noreferrer"
                    alt="README.md Generator repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="template-engine">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/template-engine.mp4"
                type="video/mp4"
                alt="team profile generator"
              />
            </video>
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Team Profile Generator</strong>
                <br />
                <span>
                  software engineering team generator command line application.
                  The application prompts the user for information about the
                  team manager and then information about the other team
                  members. When the user has completed building the team, the
                  application will create an HTML file that displays a formatted
                  team roster based on the information provided.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used:{" "}
                  <i>
                    HTML5, CSS3, JavaScript, ES6+, OOP, Terminal, Node.js &
                    Inquirer
                  </i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://wasteofadrumbum.github.io/Template-Engine-Employee-Summary/"
                    target="_blank"
                    rel="noreferrer"
                    alt="team profile generator app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/Template-Engine-Employee-Summary/"
                    target="_blank"
                    rel="noreferrer"
                    alt="team profile generator repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="note-taker">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/note-taker.mp4"
                type="video/mp4"
                alt="note taker"
              />
            </video>
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Note Taker</strong>
                <br />
                <span>
                  An application that can be used to write, save, and delete
                  notes. This application uses an express backend and save and
                  retrieve note data from a JSON file.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used: <i>Node.js, Express.js & Heroku</i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://serene-wave-63976.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    alt="note taker app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/Express-Note_Taker"
                    target="_blank"
                    rel="noreferrer"
                    alt="note taker repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="employee-tracker">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/employee-tracker.mp4"
                type="video/mp4"
                alt="employee managment system"
              />
            </video>
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Employee Managment System</strong>
                <br />
                <span>
                  App for business to be able to view and manage the
                  departments, roles, and employees in their company so that
                  they can organize and plan their business better.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used: <i>Node.js, MySQL, NPM, ES6 & JavaScript</i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/MySQL-Employee-Tracker"
                    target="_blank"
                    rel="noreferrer"
                    alt="employee managment system repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="eat-da-burger">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/eat-da-burger.mp4"
                type="video/mp4"
                alt="eat-da-burger"
              />
            </video>
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Eat-Da-Burger!</strong>
                <br />
                <span>
                  Eat-Da-Burger! is a restaurant app that lets users input the
                  names of burgers they'd like to eat.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used:{" "}
                  <i>
                    HTML5/CSS3, Node.js, Express.js, Handlebars.js, MySQL,
                    JawsDB, Heroku, Bootstrap 4 & JavaScript
                  </i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://infinite-shore-82564.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    alt="eat-da-burger app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/Node-Express-Handlebars"
                    target="_blank"
                    rel="noreferrer"
                    alt="eat-da-burger repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="reverse-engineering">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/reverse-engineering.mp4"
                type="video/mp4"
                alt="reverse engineering authentification"
              />
            </video>
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Reverse Engineering Authentication</strong>
                <br />
                <span>
                  This app allows users to create an account, log into the
                  account, and sign back out securely. All user data is stored
                  in a MySQL database.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used:{" "}
                  <i>
                    HTML5/CSS3, JavaScript, BCrypt.js, Express.js,
                    Express-Session, MySQL-2, Passport.js, Passport-Local &
                    Sequelize
                  </i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/Reverse-Engineering-Code"
                    target="_blank"
                    rel="noreferrer"
                    alt="reverse engineering authentification repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="fitness-tracker">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="img-fluid"
              width="992"
              height="662"
            >
              <source
                src="assets/video/fitness-tracker.mp4"
                type="video/mp4"
                alt="fitness tracker"
              />
            </video>
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Fitness Tracker</strong>
                <br />
                <span>
                  An application with a MongoDB database deployed on Heroku that
                  allows a user to add thier fitness exercises and then continue
                  to track their progress throughout the week.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used:{" "}
                  <i>
                    Express.js, Morgan Logger, Mongoose, Mongo DB Atlas, Heroku,
                    HTML5/CSS3, JavaScript & jQuery
                  </i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://jms-fitness-tracker.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    alt="fitness tracker app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/Fitness-Tracker"
                    target="_blank"
                    rel="noreferrer"
                    alt="fitness tracker repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="budget-tracker">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="img-fluid"
              width="992"
              height="662"
            >
              <source
                src="assets/video/budget-tracker.mp4"
                type="video/mp4"
                alt="progressive budget"
              />
            </video>
            <div className="carousel-caption d-md-block">
              <h4>
                <strong>Progressive Budget</strong>
                <br />
                <span>
                  Giving users a fast and easy way to track their money while
                  allowing them to access that information without an internet
                  connection and then input a withdrawal or deposit that will be
                  shown on the page, and added to their transaction history when
                  their connection is back online.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used:{" "}
                  <i>
                    Express.js, Morgan Logger, Mongoose, Compression, Mongo DB
                    Atlas, Heroku, HTML5/CSS3, JavaScript & jQuery{" "}
                  </i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://wasteofadrumbum.github.io/"
                    target="_blank"
                    rel="noreferrer"
                    alt="progressive budget app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/"
                    target="_blank"
                    rel="noreferrer"
                    alt="progressive budget repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="employee-directory">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="img-fluid"
              width="992"
              height="662"
            >
              <source
                src="assets/video/employee-directory.mp4"
                type="video/mp4"
                alt="employee directory"
              />
            </video>
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Employee Directory</strong>
                <br />
                <span>
                  An employee directory created with React. It allows a user to
                  view an entire employee directory at once so that they may
                  have quick access to view non-sensitive data about other
                  employees while allowing content to be filtered by an
                  employees name.
                </span>
              </h4>
              <p>
                <small>
                  Languages Used:{" "}
                  <i>React.js, HTML5/CSS3, JavaScript, JSX, PWA, Babel</i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://wasteofadrumbum.github.io/hw-19-employee-directory/"
                    target="_blank"
                    rel="noreferrer"
                    alt="employee directory app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/hw-19-employee-directory/"
                    target="_blank"
                    rel="noreferrer"
                    alt="employee directory repo"
                  >
                    <i className="fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="google-books-react-search">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="img-fluid"
              width="992"
              height="662"
            >
              <source
                src="assets/video/coming-soon.mp4"
                type="video/mp4"
                alt="google books react search"
              />
            </video>
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Google Books React Search</strong>
                <br />
                <span>Project Description</span>
              </h4>
              <p>
                <small>
                  Languages Used: <i>Programing Languages</i>
                </small>
              </p>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://wasteofadrumbum.github.io/"
                    target="_blank"
                    rel="noreferrer"
                    alt="google books react search app"
                  >
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum/"
                    target="_blank"
                    rel="noreferrer"
                    alt="google books react search repo"
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

export default FullStack;
