import React from "react";

const Education = () => {
  return (
    <div className="container-fluid text-center bg-grey" id="education">
      <h2>Education</h2>
      <h4 id="title-quotes">
        &quot;Tell me and I forget. Teach me and I remember. Involve me and I
        learn.&quot; &#x2013;Benjamin Franklin
      </h4>
      <div className="row text-left">
        <div className="col-md-2 text-center">
          <img className="school-seal" src="assets/images/unc.png" alt="unc" />
        </div>
        <div className="col-md-10">
          <h3>The University of North Carolina at Chapel Hill &#40;UNC&#41;</h3>
          <p>
            Most recently I attended The University of North Carolina at Chapel
            Hill &#40;UNC&#41;. I completed UNC&apos;s accelerated Full-Stack
            Web Development Coding Boot Camp. It was 24-week vigorous program
            that covered a range of skills including HTML5, CSS3, JavaScript,
            jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory,
            MongoDB, MySQL, Git, C# and ASP.Net. I earned my professional
            certificate of completion in December 2020. Finishing with a 4.0
            GPA.
          </p>
        </div>
      </div>
      <div className="row text-left">
        <div className="col-md-2 text-center">
          <img
            className="school-seal"
            src="assets/images/uncg.png"
            alt="uncg"
          />
        </div>
        <div className="col-md-10">
          <h3>The University of North Carolina at Greensboro &#40;UNCG&#41;</h3>
          <p>
            I graduated from The University of North Carolina at Greensboro
            &#40;UNCG&#41; in 2013 earning a double major with a Bachelor of
            Science in Business Administration &#40;BSBA&#41; and
            Entrepreneurship with a minor in Information Systems Operations
            Management. While at UNCG I earned a place in the Sigma Alpha Lambda
            National Leadership &amp; Honors Organization. Also, I was a
            founding member of the UNCG Spartan Running Club which is now a
            university competitive cross-country team.
          </p>
        </div>
      </div>
      <div className="row text-left">
        <div className="col-md-2 text-center">
          <img
            className="school-seal"
            src="assets/images/recw.png"
            alt="recw"
          />
        </div>
        <div className="col-md-10">
          <h3>The Recording Workshop &#40;RECW&#41;</h3>
          <p>
            In the summer of 2011 while on break from UNCG I went to Ohio to
            attended an accelerated program earning certificates in Audio
            Engineering and Live Sound Music Production at The Recording
            Workshop &#40;RECW&#41; in Chillicothe. I met famous producers in
            the industry like Bob Johnston and recorded in replica studios of
            Jimmy Hendrix and Tom Morello. It was by far one of the best
            experiences of my life.
          </p>
        </div>
      </div>
      <div className="row text-left">
        <div className="col-md-2 text-center">
          <img
            className="school-seal"
            src="assets/images/gtcc.png"
            alt="gtcc"
          />
        </div>
        <div className="col-md-10">
          <h3>Guilford Technical Community College &#40;GTCC&#41;</h3>
          <p>
            Earning an Associates in Arts and Sciences with a concentration in
            both Photography and Biology, Guilford Technical Community College
            &#40;GTCC&#41; is where I began my formal college education. My
            creative design skills originated with my love of various forms of
            art and continues to this day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
