import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9c2fl9j",
        "template_g6oajb7",
        form.current,
        "1EGZJTGn915xFKjIJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h4>Get in touch</h4>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>codyliu881@gmail.com</h5>
            <a href="mailto: cody.liu007@gmail.com" className="">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineMessage className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>(+61) 450 150 881</h5>
            <a
              href="sms://+61450150881?&body=I%27m%20interested%20in%20your%20product.%20Please%20contact%20me."
              target="_blank"
            >
              Send a SMS
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name=""
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
