import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h4>What skills I have</h4>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML & CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind & Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NPM & Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>WordPress</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>REST API</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AWS S3 & Amplify</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__history">
          <h3>Career History</h3>

          <article className="experience__career">
            <div className="experience__timeline">
              <BsPatchCheckFill className="experience__career-icon" />
            </div>
            <div>
              <h4>Freelance Web Developer</h4>
              <small className="text-light">Aug 2022 - Present</small>
            </div>
          </article>

          <article className="experience__career">
            <div className="experience__timeline">
              <BsPatchCheckFill className="experience__career-icon" />
            </div>
            <div>
              <h4>Front End Developer</h4>
              <small className="text-light">Oct 2022 - Jan 2023</small>
            </div>
          </article>

          <article className="experience__career">
            <div className="experience__timeline">
              <BsPatchCheckFill className="experience__career-icon" />
            </div>
            <div>
              <h4>Educator</h4>
              <small className="text-light">Jun 2021 - Jun 2022</small>
            </div>
          </article>
          <article className="experience__career">
            <div className="experience__timeline">
              <BsPatchCheckFill className="experience__career-icon" />
            </div>
            <div>
              <h4>3D Printer Trainer</h4>
              <small className="text-light">Feb 2016 - May 2019</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
