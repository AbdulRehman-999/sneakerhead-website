import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.column}>
          <h3>About Footwear</h3>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Customer Care</h3>
          <ul>
            <li>Contact</li>
            <li>Returns/Exchange</li>
            <li>Gift Voucher</li>
            <li>Wishlist</li>
            <li>Special</li>
            <li>Customer Services</li>
            <li>Site maps</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Information</h3>
          <ul>
            <li>About us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Support</li>
            <li>Order Tracking</li>
            <li>News</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Exhibitions</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contact Information</h3>
          <address>
            DHA RAYA Phase-06,
            <br />
            Plaza 3 shop#27, Lahore
            <br />
            <a href="tel:+1235235598">+92 300 000 6969</a>
            <br />
            <a href="sneakerhead@gmail.com">sneakerhead@gmail.com</a>
            <br />
            <a
              href="https://www.sneakerhead.com"
              target="_blank"
              rel="noreferrer"
            >
              www.sneakerhead.com
            </a>
          </address>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.footerBottom}>
        <p>Elevate Your Shoe game with Sneakerhead</p>
        <p>
          Follow us:{" "}
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>{" "}
          |{" "}
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>{" "}
          |{" "}
          <a href="https://www.x.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
