import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Navbar from './sections/Navbar/Navbar';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
