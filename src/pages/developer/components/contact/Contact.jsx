import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid bg-grey" id="contact">
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contact
        </h2>
        <h4 className="text-center w-responsive mx-auto pb-5">
          I'm always available to not only discussing career opportunities but
          I'm also open to talking about hobbies with like-minded individuals.
          Feel free to reach out to me anytime!
        </h4>
        <div className="row">
          <div className="col-xl-5 mb-lg-0 mb-4">
            <div className="card">
              <div className="card-body">
                <form
                  method="post"
                  action="https://www1.domain.com/scripts/formemail.html"
                >
                  <input
                    type="hidden"
                    name="my_email"
                    value="contact@joshuamsmall.com"
                  />
                  <input
                    type="hidden"
                    name="thankyou_url"
                    value="https://www.joshuamsmall.com"
                  />
                  <input
                    type="hidden"
                    name="error_url"
                    value="https://www.joshuamsmall.com"
                  />
                  <input type="hidden" name="bcc" value="jmsmall89@gmail.com" />
                  <div className="form-header bg-secondary">
                    <h3 className="mt-2">
                      <i className="fa fa-envelope" /> Let's Conect:
                    </h3>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-user-circle prefix grey-text" />
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <label for="form-name" />
                  </div>
                  <div className="md-form">
                    <i className="fa fa-envelope prefix grey-text" />
                    <input
                      type="text"
                      id="form-email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <label for="form-email" />
                  </div>
                  <div className="md-form">
                    <i className="fa fa-tag prefix grey-text" />
                    <select
                      type="text"
                      id="form-Subject"
                      name="subject"
                      required
                    >
                      <option value="Carrer Opportunity">
                        Carrer Opportunity
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Photography">Photography</option>
                      <option value="Audio Enginnering">
                        Audio Enginnering
                      </option>
                      <option value="Chat About Hobbies">
                        Chat About Hobbies
                      </option>
                    </select>
                    <label for="form-Subject" />
                  </div>
                  <div className="md-form">
                    <i className="fas fa-pencil-alt prefix grey-text" />
                    <textarea
                      id="form-text"
                      name="message"
                      placeholder="What would you like to talk about!?"
                      className="md-textarea"
                      rows="6"
                      required
                    ></textarea>
                    <label for="form-text" />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      alt="submit"
                      aria-label="Submit"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-secondary"
                      alt="reset"
                      aria-label="Reset"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
              {
                // TODO: Make Componenet with Props for Social Icon Links
              }
              <div className="card-footer text-center form-footer">
                <a
                  href="https://www.facebook.com/WasteOfADrumBum/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-floating btn-lg btn-facebook"
                  type="button"
                  role="button"
                  alt="facebook"
                  aria-label="facebook"
                >
                  <i className="fab fa-facebook-f " />
                </a>
                <a
                  href="https://www.instagram.com/lost.between.thoughts/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-floating btn-lg btn-instagram"
                  type="button"
                  role="button"
                  alt="instagram"
                  aria-label="instagram"
                >
                  <i className="fab fa-instagram " />
                </a>
                <a
                  href="https://www.snapchat.com/add/wasteofadrumbum"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-floating btn-lg btn-snapchat"
                  type="button"
                  role="button"
                  alt="snapchat"
                  aria-label="snapchat"
                >
                  <i className="fab fa-snapchat-ghost " />
                </a>
                <a
                  href="https://steamcommunity.com/id/wasteofadrumbum/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-floating btn-lg btn-steam"
                  type="button"
                  role="button"
                  alt="steam"
                  aria-label="steam"
                >
                  <i className="fab fa-steam " />
                </a>
                <a
                  href="https://soundcloud.com/wasteofadrumbum"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-floating btn-lg btn-soundcloud"
                  type="button"
                  role="button"
                  alt="soundcloud"
                  aria-label="soundcloud"
                >
                  <i className="fab fa-soundcloud " />
                </a>
                <a
                  href="https://www.linkedin.com/in/joshuamsmall/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-floating btn-lg btn-linkedin"
                  type="button"
                  role="button"
                  alt="linkedin"
                  aria-label="linkedin"
                >
                  <i className="fab fa-linkedin " />
                </a>
                <a
                  href="https://stackoverflow.com/users/13681415/wasteofadrumbum"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-floating btn-lg btn-stack-overflow"
                  type="button"
                  role="button"
                  alt="stackoverflow"
                  aria-label="stackoverflow"
                >
                  <i className="fab fa-stack-overflow" />
                </a>
                <a
                  href="https://github.com/WasteOfADrumBum"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-floating btn-lg btn-github"
                  type="button"
                  role="button"
                  alt="github"
                  aria-label="github"
                >
                  <i className="fab fa-github " />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div
              id="map-container-section"
              className="z-depth-1-half map-container-section mb-4"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Zebulon&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen
                title="Map Location"
              ></iframe>
            </div>
            <div className="row text-center">
              <div className="col-lg-4">
                <span className="glyphicon logo-small">
                  <i className="fas fa-map-pin" />
                </span>
                <p>Zebulon N.C.</p>
                <p className="mb-md-0">27597</p>
              </div>
              <div className="col-lg-4">
                <a href="tel:828-333-8983">
                  <span className="glyphicon logo-small">
                    <i className="fas fa-mobile-alt" />
                  </span>
                  <p>828.333.8983</p>
                  <p className="mb-md-0">Mon - Fri, 8:00-16:00</p>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="mailto:jmsmall89@gmail.com">
                  <span className="glyphicon logo-small">
                    <i className="fas fa-envelope" />
                  </span>
                  <p>JMSmall89@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
