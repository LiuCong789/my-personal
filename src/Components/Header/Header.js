import React, { useState, useEffect } from "react";
import "./Header.css";
import CTA from "./CTA";
import hero from "../../Assets/profile-cody-transparent.png";
import HeaderSocials from "./HeaderSocials";
import mp3 from "../../Assets/summer.mp3";
import TypingEffect from "./TypyingEffect";

// const words = ["CONG LIU", "Front-End Engineer"];

const Header = () => {
  const messages = ["CONG LIU", "Front-End Engineer"];

  return (
    <header className="header">
      <div className="header__top">
        <audio controls autoplay>
          <source src={mp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="container header__container">
        <div className="me">
          <img src={hero} alt="me" />
        </div>

        <h4>Hello, I'm</h4>
        <TypingEffect messages={messages} />
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
