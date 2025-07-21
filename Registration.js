import React, { useState } from "react";
import HeaderBanner from "../components/HeaderBanner";
import styles from "./Registration.module.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    brand: "",
    size: "",
    interests: [],
    message: "",
    photo: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      let newInterests = [...formData.interests];
      if (checked) {
        newInterests.push(value);
      } else {
        newInterests = newInterests.filter((interest) => interest !== value);
      }
      setFormData((prev) => ({ ...prev, interests: newInterests }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form validation or send data to backend
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

      <h2>Register with Sneakerhead</h2>

      {submitted ? (
        <p className={styles.thankYou}>
          Thank you for registering, {formData.name}! Welcome to Sneakerhead.
        </p>
      ) : (
        <form
          className={styles.registrationForm}
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="name">
            <b>Full Name:</b>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">
            <b>Email Address:</b>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. abd@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">
            <b>Password:</b>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>
            <b>Gender:</b>
          </label>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleChange}
              />
              Other
            </label>
          </div>

          <label htmlFor="age">
            <b>Age:</b>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            min="10"
            max="80"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label htmlFor="brand">
            <b>Favorite Sneaker Brand:</b>
          </label>
          <select
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          >
            <option value="">--Select a Brand--</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="puma">Puma</option>
            <option value="reebok">Reebok</option>
            <option value="vans">Vans</option>
            <option value="converse">Converse</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="size">
            <b>Shoe Size:</b>
          </label>
          <input
            type="number"
            id="size"
            name="size"
            step="0.5"
            placeholder="e.g. 8.5"
            value={formData.size}
            onChange={handleChange}
            required
          />

          <label>
            <b>Interests:</b>
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="streetwear"
                checked={formData.interests.includes("streetwear")}
                onChange={handleChange}
              />
              Streetwear
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="basketball"
                checked={formData.interests.includes("basketball")}
                onChange={handleChange}
              />
              Basketball Sneakers
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="limited"
                checked={formData.interests.includes("limited")}
                onChange={handleChange}
              />
              Limited Edition
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="running"
                checked={formData.interests.includes("running")}
                onChange={handleChange}
              />
              Running Shoes
            </label>
          </div>

          <label htmlFor="photo">
            <b>Upload Profile Picture:</b>
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />

          <label htmlFor="message">
            <b>Tell us what you love about sneakers:</b>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="40"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className={styles.submitBtn}>
            Register Now
          </button>
        </form>
      )}
    </>
  );
}

export default Registration;
