import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and styled-components.",
    tech: ["React", "CSS", "HTML"],
    link: "#",
    github: "https://github.com/priscilla/portfolio",
    images: [
      "/images/portfolio1.png",
      "/images/portfolio2.png",
      "/images/portfolio3.png",
    ],
  },
  {
    title: "E-commerce Store",
    description:
      "An online store with a dynamic shopping cart and checkout system.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "https://github.com/priscilla/ecommerce-store",
    images: [
      "/images/ecommerce1.png",
      "/images/ecommerce2.png",
      "/images/ecommerce3.png",
    ],
  },
];

const Projects = () => {
  const [currentImages, setCurrentImages] = useState(projects.map(() => 0));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((curr, i) => (curr + 1) % projects[i].images.length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.projects} data-aos="fade-up" id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <div className={styles.carousel}>
              <img
                src={project.images[currentImages[index]]}
                alt={`${project.title} screenshot`}
                className={styles.image}
              />
            </div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((techItem, idx) => (
                <span className={styles.techBadge} key={idx}>
                  {techItem}
                </span>
              ))}
            </div>
            <div className={styles.links}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
