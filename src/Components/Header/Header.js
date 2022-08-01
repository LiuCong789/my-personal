import React from "react";
import "./Header.css";
import CTA from "./CTA";
import hero from "../../Assets/hero-2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header style={{ height: "100vh", paddingTop: "7rem", overflow: "hidden" }}>
      <div className="container header__container">
        <h4>Hello, I'm</h4>
        <h1>Cody Liu</h1>
        <h4 className="text-light">Frontend Developer</h4>
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
