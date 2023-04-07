import React from "react";
import CV from "../../Assets/CV - Cong Liu - IT.pdf";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Hire Me
      </a>
    </div>
  );
};

export default CTA;
