// src/components/About.jsx
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <img
        src="./profileimg.jpeg"
        alt="profile image"
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Designing the Future with Code and Creativity
        </h2>
        <p className={styles.text}>
          I am a dedicated developer and designer with a strong focus on
          creating applications that are both functional and visually engaging.
          I take pride in crafting digital experiences that are intuitive,
          efficient, and user-centric.
        </p>
        <p className={styles.text}>
          Beyond my technical work, I am deeply passionate about the arts,
          continuous learning, and promoting diversity and inclusion within the
          tech industry. I'm always excited to collaborate on innovative and
          meaningful projects.
        </p>
      </div>
    </section>
  );
};

export default About;
