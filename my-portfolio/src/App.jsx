import { useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Skills from "./components/Skills/Skills.jsx";
import "./App.css";

function App() {
  const [currentSection, setCurrentSection] = useState("hero");

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <>
      <header>
        <NavBar
          onSelectSection={handleNavClick}
          currentSection={currentSection}
        />
      </header>
      <main className="section-container">{renderSection()}</main>
    </>
  );
}

export default App;
