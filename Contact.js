import React, { useState } from "react";
import HeaderBanner from "../components/HeaderBanner";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <>
      <HeaderBanner />
      <div className={styles.logoContainer}>
        <img
          src="/logo.png.png"
          alt="Sneakerhead Logo"
          className={styles.logo}
        />
      </div>

      <h2>Contact Us</h2>

      {submitted ? (
        <p className={styles.thankYou}>
          Thank you for contacting us, {formData.name}!
        </p>
      ) : (
        <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      )}

      <section className={styles.otherContacts}>
        <h2>Other Contact Methods</h2>
        <p>
          Call Us on <u>+92 11223344</u>
        </p>
        <p>
          Chat with us on{" "}
          <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </p>
        <p>
          Follow us on{" "}
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>{" "}
          and{" "}
          <a href="https://www.x.com/" target="_blank" rel="noreferrer">
            Twitter
          </a>{" "}
          for more updates!
        </p>
      </section>
    </>
  );
}

export default Contact;
