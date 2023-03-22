import React from "react"; 
import ParallaxText from "./ParallaxText"; 
import { motion } from "framer-motion";
import { SiOpenbadges } from "react-icons/si";

const ExperienceVerticalanimation = () => {
    return (
        <section>
        <ParallaxText baseVelocity={-4}>Experience</ParallaxText>
        </section>
    );
};

const Experience = () => {
    return (
        <div className="h-screen flex flex-col text-white relative">
            <div className="flex-1">
                <ExperienceVerticalanimation />
            </div>
            <div className=" flex items-center justify-center absolute h-screen w-full opacity-85 rounded-md">
                <ol class="relative border-l border-dashed border-white max-w-sm md:max-w-2xl lg:max-w-4xl ">                  
                    <motion.li class="mb-10 ml-8">            
                        <span class="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-skillhead">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <motion.div className="leading-relaxed"
                        initial={{ opacity: 0 , scale: 0.9 , x: -100 }}
                        whileInView={{ opacity: 1 , scale: 1 , x: 0 }}
                        transition={{ duration: 0.5 }}
                        animate = {{ type : "easeinout" }}
                        >
                            <h3 class="flex items-center mb-1 pb-1 text-4xl font-semibold text-intro">Google Developer Student Clubs</h3>
                            <time class="block mb-2 text-base font-normal leading-none text-white">September, 2022</time>
                            <p class="mb-4 text-lg font-opensans text-white">
                                Selected as Content and Design lead & Web dev Co-lead for
                                Google Developer Student Clubs - Guru Nanak Institute of
                                Technical Campus.Proficiency in HTML, CSS and JavaScript.
                                Experience with front-end frameworks "React".
                                A keen eye for detail and design.
                            </p>
                        </motion.div>
                    </motion.li>
                    <motion.li class="mb-10 ml-8">
                        <span class="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-skillhead">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <motion.div className="leading-relaxed"
                        initial={{ opacity: 0 , scale: 0.9 , x: -100 }}
                        whileInView={{ opacity: 1 , scale: 1 , x: 0 }}
                        transition={{ duration: 0.5 }}
                        animate = {{ type : "easeinout" , animationDelay : 1 }}
                        >
                            <h3 class="mb-1 pb-1 text-4xl font-semibold text-intro">Hacktoberfest</h3>
                            <time class="block mb-2 text-base font-normal leading-none text-white">October, 2022</time>
                            <p class="text-lg font-opensans text-white">
                                Successfully completed HacktoberFest-2022 (OPEN SOURCE CONTRIBUTION) contest.
                            </p>
                            <a href="https://www.holopin.io/@akashgundapuneni#badges" className="inline-flex items-center mt-2 px-4 py-1 text-sm font-medium text-gray-900 bg-skills  rounded-lg "> Badges <span className="px-1"> <SiOpenbadges/> </span></a>
                        </motion.div>
                    </motion.li>
                    
                </ol>
            </div>
            <motion.div className="flex-1 bottom-0 right-0 text-[40px] md:text-[150px] lg:text-[200px] absolute opacity-10 font-opensans">Experience</motion.div> 
        </div>
    )
}


export default Experience;