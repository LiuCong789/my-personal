import React from "react";
import "./Portfolio.css";
import IMG1 from "../../Assets/portfolio-image-1.jpg";
import IMG2 from "../../Assets/portfolio-image-2.jpg";
import IMG3 from "../../Assets/portfolio-image-3.jpg";
import IMG4 from "../../Assets/portfolio-image-4.jpg";
import IMG5 from "../../Assets/portfolio-image-5.jpg";
import IMG6 from "../../Assets/portfolio-image-6.jpg";
import IMG7 from "../../Assets/portfolio-image-7.jpg";
import IMG8 from "../../Assets/portfolio-image-8.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "TasBulk (WordPress)",
    host: "https://tasbulk.com.au/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Accounting Firm",
    host: "http://www.accotaxadvisory.com.au/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Omnifood",
    host: "https://food-congliu.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Today I learned",
    host: "https://todayilearned-cody.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Natours",
    host: "https://natours-congliu.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Drum Kit",
    host: "https://drum-congliu.netlify.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Guess My Number",
    host: "https://guess-congliu.netlify.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "My Own Website",
    host: "https://liucong789.github.io/my-personal/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My recent work</h4>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, host }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={host} className="btn" target="_blank">
                See the website
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
