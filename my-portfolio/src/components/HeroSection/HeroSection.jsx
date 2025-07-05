import React from "react";
import styles from "./HeroSection.module.css";
import FloatingWord from "../FloatingWord/FloatingWord.jsx";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {" "}
      <div className={styles.logo}>
        <FloatingWord
          text="React"
          style={{ left: "20%", animationDuration: "18s" }}
        />
        <h1>Priscilla Mac-Gatus</h1>
        <p>Software Developer with a creative soul.</p>

        <FloatingWord
          text="UI/UX"
          style={{ left: "45%", animationDuration: "22s" }}
        />
        <FloatingWord
          text="TypeScript"
          style={{ left: "70%", animationDuration: "19s" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
