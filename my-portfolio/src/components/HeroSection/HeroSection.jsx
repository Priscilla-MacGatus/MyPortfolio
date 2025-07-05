import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.logo}>
        <img src="/perfil1.png" alt="" />
        <h1>Priscilla Mac-Gatus</h1>
        <p>Software Developer with a creative soul.</p>
      </div>
    </section>
  );
};

export default HeroSection;
