import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a href="#contactus">Contact</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2023 Lalit Jyotish</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
