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
                                <div className="flex flex-col justify-center items-center snap-center mx-96" key={project.id}> 
                                    <motion.img 
                                    src={project.img} 
                                    alt={project.altname} 
                                    className="w-60 h-44 sm:w-72 sm:h-60 lg:w-[450px] lg:h-[300px]"
                                    initial={{ y: -300, opacity: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5 }}
                                    viewport={{ once: true }}
                                    animate = {{ type : "easeinout" }}
                                    />
                                    <div className="flex">
                                        <div className="text-xl mb-3 sm:text-2xl lg:text-4xl font-sans font-semibold text-intro">{project.name}</div>
                                        <a href={project.url} className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 ml-5 mt-1 text-skillhead" target="_blank">
                                            <svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="flex my-3 gap-4">
                                        {
                                            project.technologies.map((technology) => {
                                                return (
                                                    <img src={technology} alt=""
                                                    className="h-7 w-7 sm:h-6 sm:w-6 lg:h-10 lg:w-10" key={project.id} />
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

