import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

let isDarkMode = false;

function App() {

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    isDarkMode = !isDarkMode;
  }

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
