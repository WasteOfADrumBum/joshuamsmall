import React from "react";
import "../../assets/styles/developer.scss"

import NavBar from "./components/navbar/NavBar";
import Jumbotron from "./components/jumbotron/Jumbotron";
import About from "./components/about/About";
import Hobbies from "./components/hobbies/Hobbies";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import FrontEnd from "./components/frontend/FrontEnd";
import FullStack from "./components/fullstack/FullStack";
import Personal from "./components/personal/Personal";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const DeveloperPage = () => {
  return (
    <>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sketchy/bootstrap.min.css" />
      <div className="developer-page" id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
        <NavBar />
        <Jumbotron />
        <div data-spy="scroll" data-target="#myNavbar" data-offset="0">
          <About />
          <Hobbies />
          <Education />
          <Portfolio />
          <FrontEnd />
          <FullStack />
          <Personal />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DeveloperPage;
