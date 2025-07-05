import React from "react";
import styles from "./Skills.module.css";
import Graph from "../Graph/Graph.jsx";
import CV from "../CV/CV.jsx";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>My Skills & CV</h2>

      <div className={styles.content}>
        <div className={styles.skillsAndGraph}>
          <div className={styles.softSkills}>
            <div className={styles.skillsGroup}>
              <h4 className={styles.groupTitle}>Organizational Skills</h4>
              <ul className={styles.softSkillsList}>
                <li>Problem-Solving</li>
                <li>Adaptability</li>
                <li>Creativity</li>
                <li>Attention to Detail</li>
                <li>Time Management</li>
                <li>Decision Making</li>
                <li>Stress Management</li>
                <li>Project Management</li>
                <li>Analytical Thinking</li>
                <li>Multitasking</li>
                <li>Organization</li>
              </ul>
            </div>
            <div className={styles.skillsGroup}>
              <h4 className={styles.groupTitle}>Interpersonal Skills</h4>
              <ul className={styles.softSkillsList}>
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Leadership</li>
                <li>Collaboration</li>
                <li>Emotional Intelligence</li>
                <li>Public Speaking</li>
              </ul>
            </div>
          </div>

          <div className={styles.graphContainer}>
            <Graph />
          </div>
        </div>
        <div className={styles.downloadCV}>
          <CV />
        </div>
      </div>
    </section>
  );
};

export default Skills;
