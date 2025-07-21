import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slideshow.module.css";

const fadeImages = [
  {
    url: "https://images.unsplash.com/photo-1718220095476-7916e897fc55?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Classic Sneakers",
  },
  {
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Sporty Style",
  },
  {
    url: "https://images.unsplash.com/photo-1610899146640-f77e17056248?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban Vibes",
  },
  {
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Limited Edition",
  },
];

const Slideshow = () => {
  return (
    <div className={styles.slideContainer}>
      <Fade duration={3000} transitionDuration={800} infinite indicators arrows>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className={styles.eachSlide}>
            <img
              src={fadeImage.url}
              alt={fadeImage.caption}
              className={styles.image}
            />
            <h3 className={styles.caption}>{fadeImage.caption}</h3>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
