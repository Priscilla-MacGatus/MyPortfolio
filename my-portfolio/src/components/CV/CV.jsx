import React from "react";
import styles from "./CV.module.css";

const CV = () => {
  return (
    <section className={styles.cv}>
      <p>Click below to view or download my full CV:</p>
      <a href="./Priscilla-CV.pdf" download className={styles.cvLink}>
        Download CV
      </a>
    </section>
  );
};

export default CV;
