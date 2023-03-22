import React from "react"; 
import ParallaxText from "./ParallaxText"; 
import { motion } from "framer-motion";

const ProjectsVerticalanimation = () => {
    return (
        <section>
        <ParallaxText baseVelocity={-4}>Projects</ParallaxText>
        </section>
    );
};

const Projects = () => {
    return (
        <div className="h-screen flex flex-col text-white relative">
            <div className="flex-1">
                <ProjectsVerticalanimation />
            </div>
            <div className=" flex items-center justify-center absolute h-screen w-full rounded-md">
                
            </div>
            <motion.div className="flex-1 bottom-0 right-0 text-[40px] md:text-[150px] lg:text-[200px] absolute opacity-10 font-opensans">Projects</motion.div> 
        </div>
    )
}


export default Projects;



// import "./styles.css";
// import { useState } from "react";
// import { AnimatePresence, motion} from "framer-motion";



// export default function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div className="example">
//       <div className="controls">
//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           onHoverStart={() => {
//             setShow(!show);
//           }}
//           onHoverEnd={() => {
//             setShow();
//           }}
//         >
//           {show ? "Hide" : "Show"}
//         </motion.button>
//       </div>

//       <AnimatePresence>{show ? <div className="box" /> : null}</AnimatePresence>
//     </div>
//   );
// }
