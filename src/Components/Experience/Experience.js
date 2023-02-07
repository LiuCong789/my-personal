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
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
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
                <h4>Docker</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Supabase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Beginner</small>
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
              <h4>Front End Developer</h4>
              <small className="text-light">2022 - 2023</small>
            </div>
          </article>
          <article className="experience__career">
            <div className="experience__timeline">
              <BsPatchCheckFill className="experience__career-icon" />
            </div>
            <div>
              <h4>Educator</h4>
              <small className="text-light">2021 - 2022</small>
            </div>
          </article>
          <article className="experience__career">
            <div className="experience__timeline">
              <BsPatchCheckFill className="experience__career-icon" />
            </div>
            <div>
              <h4>VC/PE Associate</h4>
              <small className="text-light">2017 - 2019</small>
            </div>
          </article>
          <article className="experience__career">
            <div className="experience__timeline">
              <BsPatchCheckFill className="experience__career-icon" />
            </div>
            <div>
              <h4>Executive Assistant</h4>
              <small className="text-light">2016 - 2017</small>
            </div>
          </article>
          <article className="experience__career">
            <div className="experience__timeline">
              <BsPatchCheckFill className="experience__career-icon" />
              <span></span>
            </div>
            <div>
              <h4>Assistant Accounts Receivable</h4>
              <small className="text-light">2015</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
