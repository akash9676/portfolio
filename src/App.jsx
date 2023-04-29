import Intro from "./components/Intro";
import Cursor from "./components/Cursor";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-primarybg relative h-screen overflow-y-scroll overflow-x-hidden z-0 snap-y snap-mandatory scrollbar-hide">
      <div className="snap-center">
        <Intro />
      </div>
      <div className="snap-center">
        <About />
      </div>
      <div className="snap-center">
        <Skills />
      </div>
      <div className="snap-center">
        <Experience  />
      </div>
      <div className="snap-center">
        <Projects />
      </div>
      <div className="snap-center">
        <Contact />
      </div>
      <Cursor />
    </div>
  )
}