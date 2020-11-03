import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      id="myNavbar"
      className="navbar fixed-top navbar-expand-lg navbar-light"
    >
      <div className="container">
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#myNavbar"
          aria-label="Menu"
        >
          &#x2630;
        </button>
        <a className="navbar-brand" id="logo-mobile" href="#myPage">
          <img id="sp-logo-mobile" src="assets\images\sp-logo.png" alt="logo" />
        </a>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="nav-link dropdown" />
            <li className="nav-link">
              <a href="#about" className="nav-link">
                ABOUT
              </a>
            </li>
            <li className="nav-link">
              <a href="#equipment" className="nav-link">
                EQUIPMENT
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav mx-auto" id="logo-desktop">
            <li className="nav-link">
              <a className="navbar-brand" href="#myPage">
                <img id="sp-logo" src="assets\images\sp-logo.png" alt="logo" />
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-link dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                MY WORK
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#portfolio-portraits">
                  PORTRAITS
                </a>
                <a className="dropdown-item" href="#portfolio-landscape">
                  COMMERCIAL
                </a>
                <a className="dropdown-item" href="#portfolio-events">
                  EVENTS
                </a>
                <a className="dropdown-item" href="#portfolio-wedding">
                  WEDDINGS/COUPLES
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#photoshop">
                  PHOTOSHOP
                </a>
                <div className="dropdown-divider" />
                <Link
                  className="dropdown-item"
                  to="./developer"
                  alt="Web Developer Website"
                >
                  WEB DEV WEBSITE
                </Link>
              </div>
            </li>
            <li className="nav-link">
              <a href="#contact" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
