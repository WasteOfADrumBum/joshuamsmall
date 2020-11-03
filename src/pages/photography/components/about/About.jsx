import React from "react";

const About = () => {
  return (
    <div id="about" className="container-fluid">
      <div className="row">
        <div id="tiny-container" className="col-md-5 text-right">
          <p id="tiny-title">
            Trailing
            <br />
            The
            <br />
            Lens
          </p>
        </div>
        <div id="short-container" className="col-md-6">
          <p id="short-title">Freelance Photographer</p>
          <p id="short-info">
            An award winning published photographer based in North Carolina.
            Specializes in portrait, event & commerical photography.{" "}
          </p>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div id="profile-container" className="row">
        <div id="photo-profile-pic-container" className="col-md-5 text-center">
          <img
            id="photo-profile-pic"
            className="img-fluid"
            src="assets/images/me.jpg"
            alt="Me"
          />
        </div>
        <div id="about-info" className="col-md-7">
          <p>
            I'm a freelance photographer, husband, soon to be father, and animal
            enthusiast. I've been shooting photography professionally since 2010
            and find myself continually inspired by the world around me and all
            the things in it.
          </p>
          <p>
            When I'm not behind the lens of a camera or sitting at my computer
            editing photos you can find my indulging myself in a slew of
            hobbies. I'm a full-stack web developer. Writing code isn't just a
            career for me. It's something that I love to do. I spend my time
            honing my skill set and developing my knowledge daily. I love
            playing, recording, and producing music. I've experienced the world
            as a traveling musician and met some extraordinary people along the
            way, but growing up on the water it's the place I feel most at home.
            When I'm not carrying all my equipment around you can find me riding
            an Indian Scout Bobber around town. As Burt Munro put it "You live
            more in five minutes on a bike like this going flat out than some
            people live in a lifetime."
          </p>
          <p>
            I love to have fun during a shoot. Whether it be getting creative
            during a portrait session or capturing those candid moments while at
            events. If your game for creating something amazing or adding to the
            memories in your photobook then reach out and lets connect!
          </p>
          <br />
          <p>
            <a href="#contact">Contact me!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
