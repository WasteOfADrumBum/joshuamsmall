import React from "react";

const Personal = () => {
  return (
    <div
      className=" container-fluid text-center bg-grey"
      id="portfolio-personal"
    >
      <h2>PERSONAL PROJECTS</h2>
      <div
        id="myCarousel-3"
        className="carousel slide text-center"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel-3"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#myCarousel-3" data-slide-to="1" />
          <li data-target="#myCarousel-3" data-slide-to="2" />
          <li data-target="#myCarousel-3" data-slide-to="3" />
        </ol>
        <div className="carousel-inner" role="listbox" aria-label="personal">
          <div className="carousel-item active" aria-label="github">
            <img
              className="img-fluid text-center"
              src="assets\images\githubprofile.png"
              alt="GitHub"
            />
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>GitHub</strong>
                <br />
                <span>
                  A collections of various coding projects and repositories that
                  are published on my GitHub profile.
                </span>
              </h4>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://github.com/WasteOfADrumBum"
                    target="_blank"
                    rel="noreferrer"
                    alt="github"
                  >
                    <i className=" fab fa-github" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="object-grind">
            <video autoPlay loop muted playsInline className="img-fluid">
              <source
                src="assets/video/object-grind.mp4"
                type="video/mp4"
                alt="object grind"
              />
            </video>
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Object Grind</strong>
                <br />
                <span>A blog about my journey into the IT industry.</span>
              </h4>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://object-grind.blogspot.com/"
                    target="_blank"
                    rel="noreferrer"
                    alt="object grind blog"
                  >
                    <i className="fab fa-blogger" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="photography">
            <img
              className="img-fluid "
              src="assets\images\shibbyproductions.jpg"
              alt="Shibby Productions Photography"
            />
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Photography</strong>
                <br />
                <span>
                  A portfolio consisting of my years of freelance experience as
                  a photographer and a photoshop wizard.
                </span>
              </h4>
              <p>
                <span className="glyphicon logo-small">
                  <a href="photography/photo-index.html">
                    <i className="fa fa-desktop" />
                  </a>
                </span>
                <span className="glyphicon logo-small">
                  <a
                    href="https://www.facebook.com/ShibbyProductionsPhotography"
                    target="_blank"
                    rel="noreferrer"
                    alt="photography"
                  >
                    <i className="fab fa-facebook-square" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="carousel-item" aria-label="audio-engineering">
            <img
              className="img-fluid "
              src="assets\images\shibbystudios.jpg"
              alt="Shibby Productions Studios"
            />
            <div className="carousel-caption  d-md-block">
              <h4>
                <strong>Audio Engineering</strong>
                <br />
                <span>
                  Various bounced recordings of bands I've been in, music I've
                  recorded, audio I've produced and mastered I've mixes
                </span>
              </h4>
              <p>
                <span className="glyphicon logo-small">
                  <a
                    href="https://soundcloud.com/wasteofadrumbum"
                    target="_blank"
                    rel="noreferrer"
                    alt="audio engineering"
                  >
                    <i className="fab fa-soundcloud" />
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

export default Personal;
