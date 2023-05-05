import React from "react"; 
import ParallaxText from "./ParallaxText"; 
import { motion } from "framer-motion";
import skills from "../util/skills.json";


const SkillsVerticalanimation = () => {
    return (
        <section>
        <ParallaxText baseVelocity={-4}>Skills</ParallaxText>
        </section>
    );
};

const Skills = () => {
    return (
        <div className="h-screen flex flex-col text-white relative ">
            <div className="flex-1">
                <SkillsVerticalanimation />
            </div>
            {/* <div className="flex flex-row absolute h-screen w-full ">
                <div className=" flex flex-1 justify-center items-center">
                    <motion.img src={Skillsimage} alt="" className="h-screen"
                    initial={{ opacity: 0 , scale: 0.5 }}
                    whileInView={{ opacity: 0.9 , scale: 1 }}
                    transition={{ duration: 0.8 }}
                    animate = {{ type : "easeinout" }}
                    />
                </div>
            </div> */}
            <div className="flex flex-row h-screen w-full font-opensans">
                <motion.div className="flex flex-col flex-1 justify-center items-center "
                >
                    <div className="text-3xl sm:text-5xl text-skills font-medium mb-4">Skills</div>
                    {
                        skills && skills.map((skill) => { 
                            return (
                                <motion.div className="flex flex-row my-2" key={skill.id}
                                initial={{ opacity: 1 , x: -100 }}
                                whileInView={{ opacity: 1  , x: 0 }}
                                transition={{ duration: 0.5 }}
                                animate = {{ type : "easeinout" }}
                                >
                                    {
                                        skill.skills_items.map((item) => {
                                            return (
                                                <img src={item} alt="" className="w-16 h-16 md:w-28 md:h-28  rounded-full mx-2" key={skill.id}/>
                                            )
                                        },  [])
                                    }
                                </motion.div>
                            )
                        }, [])
                    }   
                </motion.div>
            </div>
            <motion.div className="flex-1 bottom-0 right-0 text-[100px] md:text-[200px] lg:text-[250px] absolute opacity-10 font-opensans">Skills</motion.div> 
        </div>
    )
}


export default Skills;