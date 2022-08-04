import React from "react";
import "./Education.css";
import LOGO1 from "../../Assets/logo-udemy.svg";
import LOGO2 from "../../Assets/logo-niet.png";
import LOGO3 from "../../Assets/logo-usyd.svg";
import LOGO4 from "../../Assets/logo-reaa2.png";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    logo: LOGO1,
    name: "Certificate of Building Responsive Real-World Websites",
    institution: "Udemy",
  },
  {
    logo: LOGO1,
    name: "Certificate of the Complete JavaScript Course for 2022",
    institution: "Udemy",
  },
  {
    logo: LOGO1,
    name: "Certificate of the Complete 2022 Web Development Bootcamp",
    institution: "Udemy",
  },
  {
    logo: LOGO2,
    name: "Advanced Diploma of Leadership and Management",
    institution: "National Institute of Education and Technology",
  },
  {
    logo: LOGO3,
    name: "Bachelor of Commerce (Accounting)",
    institution: "The University of Sydney",
  },
  {
    logo: LOGO4,
    name: "Certificate IV in Finance & Mortgage Broking",
    institution: "Real Estate Academy Australia",
  },
];

const Education = () => {
  return (
    <section id="education">
      <h4>More about me</h4>
      <h2>Education</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        Navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="container education__container"
      >
        {data.map(({ logo, name, institution }, index) => {
          return (
            <SwiperSlide key={index} className="education">
              <div className="education__qualification">
                <img src={logo} alt="" />
              </div>
              <h4>{name}</h4>
              <small>{institution}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Education;
