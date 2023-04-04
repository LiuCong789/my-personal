import React from "react";
import "./Header.css";
import CTA from "./CTA";
import hero from "../../Assets/profile-cody-transparent.png";
import HeaderSocials from "./HeaderSocials";
import mp3 from "../../Assets/summer.mp3";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <audio controls autoplay>
          <source src={mp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="container header__container">
        <h4>Hello, I'm</h4>
        <h1>Cong Liu</h1>
        <h4 className="text-light">Frontend (React) Developer</h4>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={hero} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
