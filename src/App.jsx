import Nav from "./ui/Nav";
import AboutMe from "./sections/AboutMe";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Skills />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
