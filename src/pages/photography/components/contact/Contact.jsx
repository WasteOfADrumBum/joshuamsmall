import React from "react";
import Modal from "../modal/Modal";

const Contact = () => {
  return (
    <>
      <div id="contact" className="container-fluid text-center">
        <button
          type="button"
          className="btn btn-transparent"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
          aria-label="Contact Form"
        >
          <h6 id="modal-link-text" className="text-center my-5">
            Let's Conect!
          </h6>
        </button>
        <div className="row text-center bg-transparent">
          <div className="col-lg-3"></div>
          <div className="col-lg-2">
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
          <div className="col-lg-2">
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
          <div className="col-lg-2">
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
          <div className="col-lg-3" />
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Contact;
