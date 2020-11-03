import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid text-center">
      <div className="col-x1-12">
        <a
          href="https://www.facebook.com/ShibbyProductionsPhotography"
          target="_blank"
          rel="noreferrer"
          className="btn-floating btn-lg btn-facebook"
          type="button"
          role="button"
          aria-label="facebook"
        >
          <img
            className="good-icon icon-facebook"
            src=" assets/images/icons/facebook.png"
            alt="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/shibby_productions_photography/"
          target="_blank"
          rel="noreferrer"
          className="btn-floating btn-lg btn-instagram"
          type="button"
          role="button"
          aria-label="instagram"
        >
          <img
            className="good-icon icon-instagram"
            src=" assets/images/icons/instagram.png"
            alt="instagram"
          />
        </a>
        <a
          href="https://www.snapchat.com/add/wasteofadrumbum"
          target="_blank"
          rel="noreferrer"
          className="btn-floating btn-lg btn-snapchat"
          type="button"
          role="button"
          aria-label="snapchat"
        >
          <img
            className="good-icon icon-snapchat"
            src=" assets/images/icons/snap-chat.png"
            alt="snapchat"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/joshuamsmall/"
          target="_blank"
          rel="noreferrer"
          className="btn-floating btn-lg btn-linkedin"
          type="button"
          role="button"
          aria-label="linkedin"
        >
          <img
            className="good-icon icon-linkedin"
            src="assets/images/icons/linked-in.png"
            alt="linkedin"
          />
        </a>
      </div>
      <br />
      <p id="copyright">Copyright &#xA9; 2020 Joshua M. Small</p>
    </footer>
  );
};

export default Footer;
