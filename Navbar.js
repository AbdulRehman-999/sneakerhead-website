import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            src="/logo.png.png"
            alt="Sneakerhead Logo"
            className={styles.logo}
          />
        </Link>
      </div>

      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            target="blank"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            onClick={() => setMenuOpen(false)}
            target="blank"
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            target="blank"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
