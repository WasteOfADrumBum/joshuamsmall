import React from "react";

const Hobbies = () => {
  return (
    <div className="container-fluid text-center" id="hobbies">
      <h2>Hobbies</h2>
      <h4 id="title-quotes">
        &quot;Persistence. Perfection. Patience. Power. Prioritize your passion.
        It keeps you sane.&quot; &#x2013; Criss Jami, Killosophy
      </h4>
      <br />
      <div className="row ">
        <div className="col-md-4">
          <span className="glyphicon logo-small">
            <i className="fa fa-code" />
          </span>
          <h4>Coding</h4>
          <p>
            Writing code isn't just a career for me. It's something that I love
            to do. I spend my time honing my skill set and developing my
            knowledge daily.
          </p>
        </div>
        <div className="col-md-4">
          <span className="glyphicon logo-small">
            <i className="fas fa-microphone-alt" />
          </span>
          <h4>Music</h4>
          <p>
            I love playing, recording, and producing music. I've experienced the
            world as a traveling musician and met some extraordinary people
            along the way.
          </p>
        </div>
        <div className=" col-md-4">
          <span className="glyphicon logo-small">
            <i className="fas fa-fish" />
          </span>
          <h4>Yak-Fishing</h4>
          <p>
            Growing up on the water it's the place I feel most at home. I
            fishing both freshwater and saltwater on an Eddyline Caribbean 14
            kayak decked to the nine! The best things in life come with a little
            bit of patience.
          </p>
        </div>
      </div>

      <br />
      <br />

      <div className="row ">
        <div className="col-md-4">
          <span className="glyphicon logo-small">
            <i className="fa fa-motorcycle" />
          </span>
          <h4>Motorcycles</h4>
          <p>
            I love my 2019 69-cubic-inch, 100-horsepower V-Twin Indian Scout
            Bobber. As Burt Munro put it &quot;You live more in five minutes on
            a bike like this going flat out than some people live in a
            lifetime.&quot;
          </p>
        </div>
        <div className="col-md-4">
          <span className="glyphicon logo-small">
            <i className="fa fa-gamepad" />
          </span>
          <h4>Video Games</h4>
          <p>
            From side scrollers on retro consols to FPS on Xbox and RPG's on
            Playsation I'm all about some gaming. If you're up for the
            challenge, add me on{" "}
            <a
              href="https://account.xbox.com/Profile?Gamertag=Kidd%20Kaos%2069"
              alt="Kidd Kaos 69"
              id="xbl-color"
            >
              <i className="fab fa-xbox"></i>
              <strong> Xbox Live</strong>
            </a>
            and let's go a few rounds
          </p>
        </div>
        <div className="col-md-4">
          <span className="glyphicon logo-small">
            <i className="fas fa-heartbeat" />
          </span>
          <h4>Fitness</h4>
          <p>
            Fitness is a lifestyle that I've invested in my whole life. I'm been
            a top competitor in inline speed skating, the first-place finisher
            in 5k's, and have competed in mud runs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
