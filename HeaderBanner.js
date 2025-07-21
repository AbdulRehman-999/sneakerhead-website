import React from "react";
import styles from "./HeaderBanner.module.css";

function HeaderBanner() {
  return (
    <header className={styles.header}>
      <img
        src="/header-img.png"
        alt="Sneakerhead Header"
        className={styles.headerImage}
      />
    </header>
  );
}

export default HeaderBanner;
