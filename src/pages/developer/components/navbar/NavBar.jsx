import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      id="myNavbar"
      className="navbar navbar-expand-md navbar-light bg-secondary fixed-top main-nav"
    >
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#myNavbar1"
        alt="navbar toggler"
        aria-label="Menu"
      >
        ☰
      </button>
      <a className="navbar-brand" id="logo-mobile" href="#myPage" alt="home">
        JMS
      </a>
      <div className="navbar-collapse collapse" id="myNavbar1">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link active dropdown-toggle"
              data-toggle="dropdown"
              href="/#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ABOUT
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#about" alt="about">
                WHAT I DO
              </a>
              <a
                className="dropdown-item"
                href="#about-personal"
                alt="about-personal"
              >
                WHO AM I
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#hobbies" className="nav-link" alt="hobbies">
              HOBBIES
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link" alt="education">
              EDUCATION
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mx-auto" id="logo-desktop">
          <li className="nav-item">
            <a className="navbar-brand" href="#myPage" alt="page top">
              JMS
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              alt="portfolio"
            >
              PORTFOLIO
            </a>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                href="#portfolio"
                alt="team portfolio"
              >
                TEAM PROJECTS
              </a>
              <a
                className="dropdown-item"
                href="#portfolio-front"
                alt="frontend portfolio"
              >
                FRONT-END PROJECTS
              </a>
              <a
                className="dropdown-item"
                href="#portfolio-full"
                alt="fullstack portfolio"
              >
                BACK-END/FULL-STACK PROJECTS
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#portfolio-personal"
                alt="personal portfolio"
              >
                PERSONAL PROJECTS
              </a>
              <Link
                className="dropdown-item"
                to="./photography"
                alt="photography website"
              >
                PHOTOGRAPHY WEBSITE
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" alt="skills">
              SKILLS
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" alt="contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
