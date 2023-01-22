import React from "react";
import "./Portfolio.css";
import IMG0 from "../../Assets/portfolio0.png";
import IMG1 from "../../Assets/portfolio1.png";
import IMG2 from "../../Assets/portfolio2.png";
import IMG3 from "../../Assets/portfolio3.png";
import IMG4 from "../../Assets/portfolio4.png";
import IMG5 from "../../Assets/portfolio5.png";
import IMG6 from "../../Assets/portfolio6.png";
import IMG7 from "../../Assets/portfolio7.png";

const data = [
  {
    id: 0,
    image: IMG0,
    title: "Tasbulk",
    host: "https://tasbulk.dev.ionata.com/",
  },
  {
    id: 1,
    image: IMG1,
    title: "Omnifood",
    host: "https://food-congliu.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Bankist",
    host: "https://bank-congliu.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "An Accounting Firm",
    host: "http://www.accotaxadvisory.com.au/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Nature Tours",
    host: "https://natours-congliu.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Expense Tracker (React)",
    host: "https://etracker-congliu.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Guess The Number Game",
    host: "https://guess-congliu.netlify.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Drum Kit For Fun",
    host: "https://drum-congliu.netlify.app/",
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
