import React from "react";
import CV from "../../Assets/resume-frontend-cody.pdf";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
