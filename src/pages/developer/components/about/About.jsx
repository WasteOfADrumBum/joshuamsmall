import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid" id="about">
        <div className="row">
          <div className="col-md-8">
            <h2>What I do?</h2>
            <br />
            <p>
              Creative Full Stack Web Developer leveraging business and artistic
              background to build a more intuitive user experience on the web.
              Dedicated to the construction and optimizing the performance
              designs for high impact websites. Recently earned a certificate in
              Full Stack Web Development from The University of North Carolina
              at Chapel Hill. Newly equipped with a diverse and promising set of
              skills in CSS, JavaScript, React.js, and responsive web design.
              Adept in leveraging technical, analytical, and problem-solving
              skills to create dynamic high-speed competitive website advantages
              in fast-paced remote environments. I&#x2019;ve worked
              independently and with teams of other developers to create a
              diverse portfolio that targets engagement with audiences for
              impactful user experiences using UX/UI. Continuously pursuing
              personal development and growth through practice, education, and
              experiences. I&#x2019;m excited to leverage my skills as part of a
              fast-paced, quality-driven team to build better experiences on the
              web.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <span className="glyphicon logo">
              <img
                id="pro-pic"
                src="../../assets/images/Toon Pro Pic.png"
                alt="My, Myself &amp; I"
              />
            </span>
          </div>
        </div>
      </div>
      <div id="about-personal" className="container-fluid bg-grey">
        <div className="row">
          <div className="col-md-4 text-center margin-auto">
            <span className="glyphicon logo-small">
              <span className="fa-stack">
                <i className="far fa-circle fa-stack-2x"></i>
                <i className="fas fa-ring fa-stack-1x"></i>
              </span>
              <span className="fa-stack">
                <i className="far fa-circle fa-stack-2x"></i>
                <i className="fas fa-baby fa-stack-1x"></i>
              </span>
              <span className="fa-stack">
                <i className="far fa-circle fa-stack-2x"></i>
                <i className="fas fa-paw fa-stack-1x"></i>
              </span>
            </span>
          </div>
          <div className="col-md-8">
            <h2>Who Am I?</h2>
            <br />
            <h4>
              <strong>A HUSBAND:</strong> I married the love of my life, Maggie,
              October 9th 2019. We purchased our first home a few months later
              and we're dedicated to always improving our relationship and
              growing together.
            </h4>
            <br />
            <h4>
              <strong>A FATHER:</strong> We are excited to be expecting our
              first child this December to add to our ever growing family.
            </h4>
            <br />
            <p>
              <strong>AN ANIMAL ENTHUSIAST:</strong> We have two dogs, Waylon
              and Willie, as well as our cat, Merle. They're all named after
              musicians! As clingy as they are, they always brighten up our home
              and our lives. Life just wouldn't be the same without them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
