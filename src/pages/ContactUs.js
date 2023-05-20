import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="col-1">
          <p>Call me</p>
          <p>1-800-123-4567</p>
        </div>
        <div className="col-2">
          <iframe
            width="570"
            height="320"
            src="https://youtube.com/embed/xySfvsY2eiw"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
