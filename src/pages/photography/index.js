import React from "react";
import "../../assets/styles/photography.scss"

import NavBar from "./components/navbar/NavBar.jsx";
import Jumbotron from "./components/jumbotron/Jumbotron";
import About from "./components/about/About";
import Award from "./components/award/Award";
import Equipment from "./components/equipment/Equipment";
import Portfolio from "./components/portfolio/Portfolio";
import Portrait from "./components/portrait/Portrait";
import Landscape from "./components/landscape/Landscape";
import Event from "./components/event/Event";
import Wedding from "./components/wedding/Wedding";
import Photoshop from "./components/photoshop/Photoshop";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const PhotographyPage = () => {
  return (
    <div className="photography-page" id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
      <NavBar />
      <div data-spy="scroll" data-target="#myNavbar" data-offset="0">
        <Jumbotron />
        <About />
        <Award />
        <Equipment />
        <Portfolio />
        <Portrait />
        <Landscape />
        <Event />
        <Wedding />
        <Photoshop />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default PhotographyPage;
