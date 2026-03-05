import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_7k7nbwu",
        "template_fb90ulo",
        form.current,
        "40zEbbFtqsvpVHZSf",
      )
      .then(
        () => {
          alert("Message sent successfully! 🚀");
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          alert("Failed to send. Please check your connection.");
          setIsSending(false);
        },
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__head">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact__container">
        {/* Left Side: Contact Cards */}
        <div className="contact__options">
          <article className="contact__card">
            <MdOutlineEmail className="contact__card-icon" />
            <h4>Email</h4>
            <p>mithunm7n@gmail.com</p>
            <a
              href="mailto:mithunm7n@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__card">
            <RiMessengerLine className="contact__card-icon" />
            <h4>Messenger</h4>
            <p>Mithun K</p>
            <a
              href="https://m.me/your.profile"
              target="_blank"
              rel="noreferrer"
            >
              Chat now
            </a>
          </article>

          <article className="contact__card">
            <BsWhatsapp className="contact__card-icon" />
            <h4>WhatsApp</h4>
            <p>+91 88388 61130</p>
            <a
              href="https://api.whatsapp.com/send?phone=918838861130"
              target="_blank"
              rel="noreferrer"
            >
              Message Me
            </a>
          </article>
        </div>

        {/* Right Side: Professional Form */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__group">
            <input type="text" name="name" required placeholder=" " />
            <label>Your Full Name</label>
          </div>

          <div className="form__group">
            <input type="email" name="email" required placeholder=" " />
            <label>Your Email Address</label>
          </div>

          <div className="form__group">
            <textarea
              name="message"
              rows="7"
              required
              placeholder=" "
            ></textarea>
            <label>How can I help you?</label>
          </div>

          <button type="submit" className="contact__btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
