import { useState } from 'react';
import Contact from './components/Contact';
import Experience from "./components/Experience";
import Footer from './components/Footer';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

// let isDarkMode = false;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setIsDarkMode(darkmode => !darkmode)
  }

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      <Hero />
      <Experience />
      <Projects isDarkMode={isDarkMode}/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
