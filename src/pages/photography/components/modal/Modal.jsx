import React from "react";

const Modal = () => {
  return (
    <div
      className="modal fade bd-example-modal-lg"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div id="contact" className="container-fluid bg-grey">
            <section className="my-7">
              <h6 className="text-center my-5">Let's Conect!</h6>
              <p
                id="contact-disclaimer-top"
                className="text-center w-responsive mx-auto"
              >
                I will{" "}
                <i>
                  <strong>always</strong>
                </i>{" "}
                respond within 24-48 hours from when you contact me!
              </p>
              <p
                id="contact-disclaimer-bottom"
                className=" text-center w-responsive mx-auto pb-5"
              >
                If you don’t receive a response, please resend your email to
                ensure it went through.
              </p>
              <div className="row">
                <div className="col-xl-1" />
                <div className="col-xl-10 mb-lg-0 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <form
                        id="photo-contact-form"
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
                          value="https://www.joshuamsmall.com/photography/photo-index.html"
                        />
                        <input
                          type="hidden"
                          name="error_url"
                          value="https://www.joshuamsmall.com/photography/photo-index.html"
                        />
                        <input
                          type="hidden"
                          name="bcc"
                          value="jmsmall89@gmail.com"
                        />
                        <div className="form-header bg-transparent text-center"></div>
                        <div className="md-form">
                          <label htmlFor="form-name">Your full name *</label>
                          <input
                            type="text"
                            id="form-name"
                            name="name"
                            placeholder="John & Jane Doe"
                            required
                          />
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-email">Email address *</label>
                          <input
                            type="text"
                            id="form-email"
                            name="email"
                            placeholder="human@email.com"
                            required
                          />
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-phone">Phone Number *</label>
                          <input
                            type="text"
                            id="form-phone"
                            name="phone"
                            placeholder="910.555.1234"
                            required
                          />
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-insta">Instagram Handle</label>
                          <input
                            type="text"
                            id="form-insta"
                            name="insta"
                            placeholder="@shibby_productions_photography"
                          />
                        </div>
                        <div
                          className="md-form datepicker date"
                          id="datepicker-input"
                        >
                          <label htmlFor="form-date">Date your looking for *</label>
                          <input
                            type="text"
                            id="form-date"
                            name="date"
                            placeholder="MM/DD/YY"
                          />
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-location">Location *</label>
                          <input
                            type="text"
                            id="form-location"
                            name="location"
                            placeholder="city/state/venue"
                            required
                          />
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-Subject">
                            What type of session are you interested in?
                          </label>
                          <select
                            type="text"
                            id="form-Subject"
                            name="subject"
                            className="
                                        form-control"
                            required
                          >
                            <option value="Other">Other</option>
                            <option value="Portrait">Portrait</option>
                            <option value="Engagement/Couples">
                              Engagement/Couples
                            </option>
                            <option value="Wedding">Wedding</option>
                            <option value="Elopement">Elopement</option>
                            <option value="Proposal">Proposal</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Maternity">Maternity</option>
                            <option value="Boudoir">Boudoir</option>
                            <option value="Menotrship">Menotrship</option>
                          </select>
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-budget">Estimated Budget</label>
                          <input
                            type="text"
                            id="form-budget"
                            name="budget"
                            placeholder="$0.00"
                          />
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-Subject">
                            How did you hear about me? *
                          </label>
                          <select
                            type="text"
                            id="form-Subject"
                            name="subject"
                            className="
                                        form-control"
                            required
                          >
                            <option value="Other">Other</option>
                            <option value="This Website">This Website</option>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Model Mayhem">Model Mayhem</option>
                            <option value="The Knot">The Knot</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Vendor Refferal">
                              Vendor Refferal
                            </option>
                            <option value="Client Refferal">
                              Client Refferal
                            </option>
                            <option value="Unknown">Unknown</option>
                          </select>
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-text-work">
                            What drew you to my work!? *
                          </label>
                          <textarea
                            id="form-text-work"
                            name="message-work"
                            placeholder=""
                            className="md-textarea"
                            rows="6"
                            required
                          />
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-text-want">
                            What are you looking to shoot!?
                          </label>
                          <textarea
                            id="form-text-want"
                            name="message-want"
                            placeholder="Tell me what ideas are floating around and lets bring them to life!"
                            className="md-textarea"
                            rows="6"
                          />
                        </div>
                        <div className="md-form">
                          <label htmlFor="form-text">
                            Have other questions for me?
                          </label>
                          <textarea
                            id="form-text"
                            name="message"
                            placeholder="What's on you mind!?"
                            className="md-textarea"
                            rows="6"
                          />
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-transparent"
                            aria-label="submit"
                          >
                            Submit
                          </button>
                          <button
                            type="reset"
                            className="btn btn-transparent"
                            aria-label="reset"
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            className="btn btn-transparent"
                            data-dismiss="modal"
                            aria-label="close"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer row text-center form-footer bg-transparent">
                      <div className="col-lg-4">
                        <span className="glyphicon logo-small">
                          <img
                            className="good-icon icon-mapmarker"
                            src="assets/images/icons/map-marker.png"
                            alt="map marker"
                          />
                        </span>
                        <p id="card-footer-p" className="mb-md-0">
                          Zebulon N.C.
                        </p>
                        <p id="card-footer-p" className="mb-md-0">
                          27597
                        </p>
                      </div>
                      <div className="col-lg-4">
                        <a href="tel:828-333-8983">
                          <span className="glyphicon logo-small">
                            <img
                              className="good-icon icon-phone"
                              src="assets/images/icons/phone.png"
                              alt="phone"
                            />
                          </span>
                          <p id="card-footer-p" className="mb-md-0">
                            828.333.8983
                          </p>
                          <p id="card-footer-p" className="mb-md-0">
                            Mon - Fri, 8:00-16:00
                          </p>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a href="mailto:jmsmall89@gmail.com">
                          <span className="glyphicon logo-small">
                            <img
                              className="good-icon icon-envelope"
                              src="assets/images/icons/envelope.png"
                              alt="envelope"
                            />
                          </span>
                          <p id="card-footer-p" className="mb-md-0">
                            JMSmall89@gmail.com
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-1" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
