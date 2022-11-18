import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
export default function App() {
  return (
    <div className="bg-primarybg relative ">
      <Navbar />
      <Intro />
      <Cursor />
    </div>
  )
}