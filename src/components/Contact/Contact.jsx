import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

/* ── Contact channels ── */
const CHANNELS = [
  {
    Icon: MdOutlineEmail,
    label: "Email",
    value: "mithunm7n@gmail.com",
    href: "mailto:mithunm7n@gmail.com",
    cta: "Send a message",
    color: "#4db5ff",
  },
  {
    Icon: BsWhatsapp,
    label: "WhatsApp",
    value: "+91 88388 61130",
    href: "https://api.whatsapp.com/send?phone=918838861130",
    cta: "Chat now",
    color: "#25d366",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/mithunk1",
    href: "https://www.linkedin.com/in/mithunk1",
    cta: "Connect with me",
    color: "#0a66c2",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    value: "github.com/mithun0773",
    href: "https://github.com/mithun0773",
    cta: "View my code",
    color: "#e2e8f0",
  },
];

const MAX_CHARS = 500;

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const [charCount, setCharCount] = useState(0);
  const [focused, setFocused] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_7k7nbwu",
        "template_fb90ulo",
        form.current,
        "40zEbbFtqsvpVHZSf",
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
          setCharCount(0);
          setTimeout(() => setStatus(null), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        },
      );
  };

  return (
    <section id="contact" className="contact">
      {/* Background */}
      <div className="ct__bg-orb ct__bg-orb--1" />
      <div className="ct__bg-orb ct__bg-orb--2" />
      <div className="ct__bg-dot" />

      <div className="ct__inner">
        {/* ── Header ── */}
        <div className="ct__header">
          <div className="ct__label">
            <span className="ct__label-line" />
            Contact
            <span className="ct__label-line ct__label-line--r" />
          </div>
          <h2 className="ct__title">
            Let's Start a <span className="ct__grad">Conversation</span>
          </h2>
          <p className="ct__sub">
            Have a project in mind, a role to fill, or just want to say hi? I'm
            always happy to hear from you.
          </p>
        </div>

        {/* ── Body grid ── */}
        <div className="ct__grid">
          {/* Left: channels */}
          <div className="ct__left">
            <p className="ct__left-intro">
              Pick any channel that works for you — I typically respond within
              24 hours.
            </p>

            <div className="ct__channels">
              {CHANNELS.map(({ Icon, label, value, href, cta, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="ct__channel"
                  style={{ "--ch-color": color }}
                >
                  <div className="ct__channel-ic">
                    <Icon />
                  </div>
                  <div className="ct__channel-body">
                    <span className="ct__channel-label">{label}</span>
                    <span className="ct__channel-val">{value}</span>
                  </div>
                  <span className="ct__channel-cta">
                    {cta}
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M4 10h12M11 5l5 5-5 5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="ct__avail">
              <span className="ct__avail-dot" />
              <span>
                Currently open to full-time &amp; freelance opportunities
              </span>
            </div>
          </div>

          {/* Right: form */}
          <div className="ct__right">
            <div className="ct__form-card">
              <div className="ct__form-card-top" />

              {/* Status toast */}
              {status === "success" && (
                <div className="ct__toast ct__toast--success">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Message sent! I'll get back to you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="ct__toast ct__toast--error">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Something went wrong. Please try again.
                </div>
              )}

              <form
                ref={form}
                onSubmit={sendEmail}
                className="ct__form"
                noValidate
              >
                {/* Name + Email row */}
                <div className="ct__form-row">
                  <div
                    className={`ct__field ${focused === "name" ? "ct__field--focused" : ""}`}
                  >
                    <label className="ct__field-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Mithun K"
                      className="ct__input"
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div
                    className={`ct__field ${focused === "email" ? "ct__field--focused" : ""}`}
                  >
                    <label className="ct__field-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      className="ct__input"
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div
                  className={`ct__field ${focused === "subject" ? "ct__field--focused" : ""}`}
                >
                  <label className="ct__field-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Job opportunity / Project collaboration / Just saying hi"
                    className="ct__input"
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Message */}
                <div
                  className={`ct__field ${focused === "message" ? "ct__field--focused" : ""}`}
                >
                  <label className="ct__field-label">
                    Message
                    <span className="ct__char-count">
                      {charCount}/{MAX_CHARS}
                    </span>
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    maxLength={MAX_CHARS}
                    placeholder="Tell me about your project, role, or idea..."
                    className="ct__input ct__textarea"
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setCharCount(e.target.value.length)}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`ct__submit ${status === "sending" ? "ct__submit--sending" : ""}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className="ct__spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
