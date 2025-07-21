import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Slideshow from "../components/Slideshow";
import styles from "./Home.module.css";

const sneakerBrands = [
  "Nike Air Max",
  "Nike Air Jordan",
  "Adidas Yeezy",
  "Adidas Ultraboost",
  "Vans Old Skool",
  "Converse",
  "Reebok",
  "Puma",
];

const reasons = [
  "Authentic Sneakers",
  "Best Prices",
  "Exclusive Offers",
  "Worldwide Shipping",
];

const sneakerImages = [
  {
    src: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=600&auto=format&fit=crop",
    alt: "Sneaker 1",
  },
  {
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    alt: "Sneaker 2",
  },
  {
    src: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=600&auto=format&fit=crop",
    alt: "Sneaker 3",
  },
  {
    src: "https://images.unsplash.com/photo-1634624943287-6e1f2d103201?q=80&w=600&auto=format&fit=crop",
    alt: "Sneaker 4",
  },
  {
    src: "https://images.unsplash.com/photo-1724921195463-fd7a1a930241?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sneaker 5",
  },
  {
    src: "https://images.unsplash.com/photo-1667863034256-13526b9c44ac?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sneaker 6",
  },
  {
    src: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sneaker 7",
  },
  {
    src: "https://images.unsplash.com/photo-1704151680471-1ffab06afa7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sneaker 8",
  },
  {
    src: "https://images.unsplash.com/photo-1662037131482-8fb5d10aab9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sneaker 9",
  },
  {
    src: "https://images.unsplash.com/photo-1718220095476-7916e897fc55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWRpZGFzJTIwc2FtYmF8ZW58MHwwfDB8fHww",
    alt: "Sneaker 10",
  },
  {
    src: "https://images.unsplash.com/photo-1715003132895-b10a23d3c90f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sneaker 11",
  },
  {
    src: "https://images.unsplash.com/photo-1641745899178-021fafbb2317?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sneaker 12",
  },
];

function Home() {
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
      <h1 className={styles.title}>Welcome to Sneakerhead</h1>
      <p className={styles.description}>
        Discover the ultimate destination for sneaker enthusiasts and
        trendsetters alike. At Sneakerhead, we curate a diverse and exclusive
        collection of the latest and most sought-after sneakers from around the
        world. Our passion for sneakers drives us to bring you a carefully
        selected range that celebrates both iconic, trendy, and cutting-edge
        designs.
      </p>
      <h2>Your One-Stop Shop for Sneakers</h2>
      <hr />
      <section className={styles.gallery}>
        <h2>Sneakers Gallery</h2>
        <Slideshow />
      </section>

      <section className={styles.gallery}>
        <div className={styles.imageGrid}>
          {sneakerImages.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} loading="lazy" />
          ))}
        </div>
      </section>

      <hr />

      <section className={styles.section}>
        <h2>Our Collection</h2>
        <ul className={styles.collectionList}>
          {sneakerBrands.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>

        <h2>Why Choose Us?</h2>
        <ol className={styles.reasonList}>
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ol>
      </section>
      <hr />
      <section className={styles.videoSection}>
        <h2>Watch Sneakerhead in Action</h2>
        <a
          href="https://youtu.be/geFi-ZpN2ZM?si=5syWVQ2d3GLaXj2K"
          target="_blank"
          rel="noreferrer"
          className={styles.videoLink}
        >
          Click Here to watch the video
        </a>
      </section>
    </>
  );
}

export default Home;
