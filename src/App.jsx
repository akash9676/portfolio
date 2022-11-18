import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Verticalanimation from "./components/Verticalanimation";

export default function App() {
  return (
    <div className="bg-primarybg relative ">
      <Intro />
      <Cursor />
      <Verticalanimation />
      <div className="h-screen"></div>
    </div>
  )
}