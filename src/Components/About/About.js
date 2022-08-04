import "./About.css";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BiMoviePlay } from "react-icons/bi";
import about from "../../Assets/about.jpg";

function About() {
  return (
    <section id="about" className="section__about">
      <h4>Get to know</h4>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>1 year as freelancer</small>
            </article>
            <article className="about__card">
              <GiSkills className="about__icon" />
              <h4>Skills</h4>
              <small>JavaScript, React</small>
            </article>
            <article className="about__card">
              <BiMoviePlay className="about__icon" />
              <h4>Hobbies</h4>
              <small>Esports, piano, movie </small>
            </article>
          </div>

          <p>
            Thrilled to establish a long term career in software development, I
            am a challenge seeker and active leaner with good understanding of
            web development. The hands-on experience in a wide variety of
            industries also makes me capable and flexible in a fast-pacing
            environment.
          </p>

          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
