import Intro from "./components/Intro";
import Cursor from "./components/Cursor";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-primarybg relative ">
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Cursor />
    </div>
  )
}