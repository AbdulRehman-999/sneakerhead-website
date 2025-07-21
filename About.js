import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import styles from "./About.module.css";

function About() {
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

      <h1>About Us</h1>
      <p>
        <b>Sneakerhead</b> brings you the latest and trendiest sneakers from top
        brands with unbeatable offers.
      </p>
      <p>
        We offer <i>premium quality</i> sneakers at the best prices.
      </p>
      <p>
        Browse our{" "}
        <span className={styles.highlight}>
          <u>latest collection</u>
        </span>{" "}
        and bless yourself with your favorite sneakers today!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        quibusdam, cum, accusamus ea eum vitae officia ab dicta at repellendus
        magni quis. Quia minima iure doloribus ratione, dolorem eos rem.
      </p>

      <div className={styles.exploreMore}>
        <h2>Explore More</h2>
        <a href="https://www.nike.com" target="_blank" rel="noreferrer">
          Nike
        </a>{" "}
        |{" "}
        <a href="https://www.adidas.com" target="_blank" rel="noreferrer">
          Adidas
        </a>{" "}
        |{" "}
        <a href="https://www.puma.com" target="_blank" rel="noreferrer">
          Puma
        </a>
      </div>
    </>
  );
}

export default About;
