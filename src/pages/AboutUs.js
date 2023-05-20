import React from "react";
import lalit from "../../src/images/Astro-lalit.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={lalit} alt="lalit Mahant" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>Lalit Jyotish will predict, guide you to a bright future !!</p>
          <p>Lalit Mahant is a Savant in the field of Astrology.</p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
