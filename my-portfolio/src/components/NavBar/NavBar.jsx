import React from "react";
import styles from "./NavBar.module.css";

const NavBar = ({ onSelectSection, currentSection }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <a
          href="#hero"
          onClick={() => onSelectSection("hero")}
          className={`${styles.navLink} ${
            currentSection === "hero" ? styles.waveText : ""
          }`}
        >
          HOME
        </a>
        <a
          href="#about"
          onClick={() => onSelectSection("about")}
          className={`${styles.navLink} ${
            currentSection === "about" ? styles.waveText : ""
          }`}
        >
          ABOUT
        </a>
        <a
          href="#projects"
          onClick={() => onSelectSection("projects")}
          className={`${styles.navLink} ${
            currentSection === "projects" ? styles.waveText : ""
          }`}
        >
          PROJECTS
        </a>
      </div>

      <div className={styles.right}>
        <a
          href="#skills"
          onClick={() => onSelectSection("skills")}
          className={`${styles.navLink} ${
            currentSection === "skills" ? styles.waveText : ""
          }`}
        >
          SKILLS
        </a>
        <a
          href="https://github.com/Priscilla-MacGatus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/priscilla-mac-gatus-920b0229a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
