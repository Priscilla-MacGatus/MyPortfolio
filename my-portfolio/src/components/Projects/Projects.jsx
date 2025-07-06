import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "SmartCV pathfolio",
    description:
      "A dynamic, AI-powered portfolio application that helps users generate personalized CV content. Integrates Google Gemini API to suggest tailored resume sections based on user input, with inline editing capabilities for real-time customization. Built with modular React components and deployed using Netlify’s serverless infrastructure for scalability and performance.",
    tech: ["React", "CSS Modules", "Netlify Sevrerless"],
    link: "https://deploy-preview-103--smart-cv-migracode.netlify.app/",
    github: "https://github.com/SyedArslanHaider/smart-cv-builder/",
    images: ["/photos/smc1.png", "/photos/smc2.png", "/photos/smc3.png"],
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that fetches and displays real-time weather data using a third-party Weather API. Built with React and styled using CSS Modules, the app leverages Vercel serverless functions for efficient API handling and seamless deployment.",
    tech: ["React", "CSS Modules", "Weather API", "Vercel Serverless"],
    link: "https://weather-app-by-pris.vercel.app/",
    github: "https://github.com/Priscilla-MacGatus/WEATHER-APP",
    images: [
      "/photos/weather1.png",
      "/photos/weather2.png",
      "/photos/weather3.png",
    ],
  },

  {
    title: "Calculator App",
    description:
      "A user-friendly, responsive web application designed to perform basic arithmetic calculations (addition, subtraction, multiplication, division) efficiently across all devices. The app features an intuitive interface with clear buttons and input fields that adapt seamlessly to different screen sizes ",
    tech: ["React", "CSS Modules", "Vercel "],
    link: "https://calcbypriscilla.vercel.app/",
    github: "https://github.com/Priscilla-MacGatus/Calculator",
    images: ["/photos/calc1.png", "/photos/calc2.png", "/photos/calc1.png"],
  },
  {
    title: "Dockify",
    description:
      "Designed with a sleek macOS inspired interface, Dockify hosts and showcases the small but meaningful projects I have built. With its clean layout, dock style navigation, and windowed project views, it recreates the look and feel of a MacBook desktop, turning a simple portfolio into an interactive and immersive experience.",
    tech: ["React", "CSS Modules", "Netlify "],
    link: "https://dockifybypriscilla.netlify.app/",
    github: "https://github.com/Priscilla-MacGatus/Dockify",
    images: [
      "/photos/dockify1.png",
      "/photos/dockify2.png",
      "/photos/dockify3.png",
    ],
  },

  {
    title: "CurrenSync",
    description:
      "A modern, reliable currency converter that provides real-time exchange rates with an intuitive interface. Seamlessly convert between multiple currencies for travel, business, or personal finance.",
    tech: ["React", "CSS Modules", "Exhangerate API", "Vercel Serverless"],
    link: "https://currensyncbycilla.vercel.app/",
    github: "https://github.com/Priscilla-MacGatus/CurrenSync",
    images: [
      "/photos/currensync1.png",
      "/photos/currensync1.png",
      "/photos/currensync1.png",
    ],
  },

  {
    title: "RubyCycle",
    description:
      "RubyCycle is a menstrual cycle tracking app that allows users to log their periods, visualize cycle phases, and predict upcoming dates with an intuitive calendar and circular phase tracker.",
    tech: ["React", "CSS Modules", "Vercel Serverless"],
    link: "https://rubycycle.vercel.app/",
    github: "https://github.com/Priscilla-MacGatus/RubyCycle",
    images: ["/photos/ruby1.png", "/photos/ruby1.png", "/photos/ruby1.png"],
  },

  {
    title: "FlipCardMaster",
    description:
      " Flip Card Master is a simple and engaging memory game built with React. Test your memory, sharpen your concentration, and have fun flipping cards to find all the matching pairs!",
    tech: ["React", "CSS Modules", "Vercel Serverless"],
    link: "https://flipcardsbycilla.vercel.app/",
    github: "https://github.com/Priscilla-MacGatus/FlipCard-Master",
    images: [
      "/photos/flipmaster1.png",
      "/photos/flipmaster4.png",
      "/photos/flipmaster1.png",
    ],
  },
];

const Projects = () => {
  const [currentImages, setCurrentImages] = useState(projects.map(() => 0));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
