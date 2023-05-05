import React from "react"; 
import ParallaxText from "./ParallaxText"; 
import { motion } from "framer-motion";
import projectsdata from "../util/projects_data.json";

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
            <div className="h-screen flex flex-row overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-skills scrollbar-thin"> 
                    {
                        projectsdata.map((project) => {
                            return (
                                <div className=" flex flex-col justify-center items-center snap-center mx-96">
                                    <motion.img 
                                    src={project.img} 
                                    alt={project.altname} 
                                    className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px]"
                                    initial={{ y: -300, opacity: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5 }}
                                    viewport={{ once: true }}
                                    animate = {{ type : "easeinout" }}/>
                                    <div className="text-xl mb-3 sm:text-2xl lg:text-4xl font-sans font-semibold text-intro">{project.name}</div>
                                    <div className="flex my-3 gap-4">
                                        {
                                            project.technologies.map((technology) => {
                                                return (
                                                    <img src={technology} alt=""
                                                    className="h-7 w-7 sm:h-6 sm:w-6 lg:h-10 lg:w-10" />
                                                )
                                            },[])
                                        }
                                    </div>
                                    <div className="text-lg text-center h-40 w-[300px] lg:w-[1000px] md:w-[700px] sm:h-auto p-3">{project.content}</div>
                                </div>
                            )
                        }
                    )}  
            </div>
            <motion.div className="flex-1 bottom-0 right-0 text-[40px] md:text-[150px] lg:text-[200px] absolute opacity-10 font-opensans">Projects</motion.div> 
        </div>
    )
}


export default Projects;

