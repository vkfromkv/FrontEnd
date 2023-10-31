import React from "react";

function About() {
  return (
    <div className="container text-left">
      <div className="d-flex flex-column text-left mx-auto mt-5" style={{ maxWidth: "800px" }}>
        <h1>About Us</h1>
        <div className="mt-4">
          <p>
            Welcome to Note Nirvana, your go-to platform for chords, songs, and
            musical knowledge. We are passionate about helping musicians of all
            levels find the chords they need to create beautiful music.
          </p>
          <p>
            Our team of experienced musicians and music enthusiasts is dedicated
            to helping you explore the world of music. Whether you're a beginner
            or a seasoned musician, you'll find valuable resources and
            information here.
          </p>
          <p>
            Feel free to explore our extensive collection of chords, songs, and
            tutorials to enhance your musical journey. If you have any questions
            or feedback, don't hesitate to reach out to us. We're here to
            support you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
