import React from "react";
import ProgressBar from "../progressbar/ProgressBar";

const Skills = () => {
  return (
    <div id="skills" className="container-fluid">
      <div className="text-center">
        <h2>Skills</h2>
        <h4>
          You can find out all about my other skillsets and employment history
          thus far by visiting my&nbsp;
          <a
            href="https://www.linkedin.com/in/joshuamsmall/"
            target="_blank"
            rel="noreferrer"
            className="btn-floating btn-lg btn-linkedin"
            type="button"
            role="button"
            alt="linkedin"
          >
            <i className="fab fa-linkedin-square" /> LinkedIn
          </a>
          &nbsp;profile.
          <br />
          Don&apos;t forget to send me a message and follow me!
        </h4>
      </div>
      {
        // TODO: Condense progress bars into props
      }
      <div className="row">
        <div id="skill-container" className="col-md-4">
          <div className="card text-center">
            <div className="card-header">
              <h1>Core</h1>
            </div>
            <div className="card-body">
              <div className="progress-container">
                <h2>HTML5</h2>
                <ProgressBar value={100} width="100%" />
              </div>
              <div className="progress-container">
                <h2>CSS3</h2>
                <ProgressBar value={98} width="98%" />
              </div>
              <div className="progress-container">
                <h2>C#</h2>
                <ProgressBar />
              </div>
              <div className="progress-container">
                <h2>JavaScript</h2>
                <ProgressBar value={87} width="87%" />
              </div>
              <div className="progress-container">
                <h2>ES6</h2>
                <ProgressBar value={80} width="80%" />
              </div>
              <div className="progress-container">
                <h2>Git</h2>
                <ProgressBar value={75} width="75%" />
              </div>
              <div className="progress-container">
                <h2>GitHub</h2>
                <ProgressBar value={90} width="90%" />
              </div>
              <div className="progress-container">
                <h2>GitBash</h2>
                <ProgressBar value={60} width="60%" />
              </div>
            </div>
            <div className="card-footer">
              <h3>
                <span className="glyphicon logo-small">
                  <i className="fab fa-html5" />
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div id="skill-container" className="col-md-4">
          <div className="card text-center">
            <div className="card-header">
              <h1>Advanced</h1>
            </div>
            <div className="card-body">
              <div className="progress-container">
                <h2>Foundation</h2>
                <ProgressBar value={75} width="75%" />
              </div>
              <div className="progress-container">
                <h2>BootStrap</h2>
                <ProgressBar value={95} width="95%" />
              </div>
              <div className="progress-container">
                <h2>jQuery</h2>
                <ProgressBar value={75} width="75%" />
              </div>
              <div className="progress-container">
                <h2>Express.js</h2>
                <ProgressBar value={75} width="75%" />
              </div>
              <div className="progress-container">
                <h2>Moment.js</h2>
                <ProgressBar value={75} width="75%" />
              </div>
              <div className="progress-container">
                <h2>React.js</h2>
                <ProgressBar value={70} width="70%" />
              </div>
              <div className="progress-container">
                <h2>Node.js</h2>
                <ProgressBar value={80} width="80%" />
              </div>
              <div className="progress-container">
                <h2>Angular.js</h2>
                <ProgressBar />
              </div>
            </div>
            <div className="card-footer">
              <h3>
                <span className="glyphicon logo-small">
                  <i className="fab fa-node-js" />
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div id="skill-container" className="col-md-4">
          <div className="card text-center">
            <div className="card-header">
              <h1>Other</h1>
            </div>
            <div className="card-body">
              <div className="progress-container">
                <h2>Database Theroy</h2>
                <ProgressBar value={70} width="70%" />
              </div>
              <div className="progress-container">
                <h2>MongoDB</h2>
                <ProgressBar value={70} width="70%" />
              </div>
              <div className="progress-container">
                <h2>MySQL</h2>
                <ProgressBar value={90} width="90%" />
              </div>
              <div className="progress-container">
                <h2>PHP</h2>
                <ProgressBar value={15} width="15%" />
              </div>
              <div className="progress-container">
                <h2>APIs</h2>
                <ProgressBar value={85} width="85%" />
              </div>
              <div className="progress-container">
                <h2>ASP.Net</h2>
                <ProgressBar />
              </div>
              <div className="progress-container">
                <h2>Python</h2>
                <ProgressBar />
              </div>
              <div className="progress-container">
                <h2>Java</h2>
                <ProgressBar />
              </div>
            </div>
            <div className="card-footer">
              <h3>
                <span className="glyphicon logo-small">
                  <i className="fab fa-java" />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4 m-auto">
          <h2>BEFORE</h2>
          <img
            className="img-fluid lighthouse-before pb-4"
            src="assets/images/lighthouse-before.png"
            alt="lighthouse-before"
          />
        </div>
        <div className="col-md-4 m-auto">
          <img
            className="img-fluid lighthouse-logo pb-4"
            src="assets/images/lighthouse-logo.png"
            alt="lighthouse-logo"
          />
          <h2>Lighthouse 6.0</h2>
          <p>
            Lighthouse is an automated website auditing tool that helps
            developers with opportunities and diagnostics to improve the user
            experience of their sites. It's available in Chrome DevTools, npm
            (as a Node module and a CLI), or as a browser extension (in Chrome
            and Firefox). It powers many Google services, including
            web.dev/measure and PageSpeed Insights.
          </p>
        </div>
        <div className="col-md-4 m-auto">
          <h2>AFTER</h2>
          <img
            className="img-fluid lighthouse-after pb-4"
            src="assets/images/lighthouse-after.png"
            alt="lighthouse-after"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
