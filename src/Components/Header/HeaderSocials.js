import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/cong-liu-71355b242/"
        target="_blank"
        className=""
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/LiuCong789" target="_blank" className="">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_blank" className="">
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
