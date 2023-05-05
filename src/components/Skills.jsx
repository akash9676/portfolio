import React from "react"; 
import ParallaxText from "./ParallaxText"; 
import { motion } from "framer-motion";
import { Chart,initTE } from "tw-elements";
import Skillsimage  from "../assets/Skills.png";

initTE({ Chart });

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
                <motion.div className=" flex flex-col flex-1 justify-center items-center"
                initial={{ opacity: 0 , x: -50 ,scale: 0.5 }}
                whileInView={{ opacity: 0.9 , x: 0,scale: 1 }}
                transition={{duration:0.8}}
                animate = {{ type : "easeinout" }}
                >
                    <div className="">
                        <div className="text-3xl md:text-6xl py-3 font-semibold text-intro">
                            Coder
                        </div>
                        <div className="text-xl md:text-4xl py-3 font-medium text-skills">
                            Front-end 
                        </div>
                        <div className="text-base md:text-xl py-1">
                            HTML / CSS / TailwindCSS
                        </div>
                        <div className="text-base md:text-xl py-1">
                            Javascript / React
                        </div>
                        <div className="text-xl md:text-4xl py-3 font-medium text-skills">
                            Back-end 
                        </div>
                        <div className="text-base md:text-xl py-1">
                            Nodejs / MongoDB / Express
                        </div>
                        <div className="text-xl md:text-4xl py-3 font-medium text-skills">
                            Familiar With
                        </div>
                        <div className="text-base md:text-xl py-1">
                            Bootstrap / netlify / vercel 
                        </div>
                    </div>
                </motion.div>
                <div className=" flex  ">
                </div>
                <motion.div className=" flex flex-col flex-1 justify-center items-center"
                initial={{ opacity: 0 , x: -50,scale: 0.5 }}
                whileInView={{ opacity: 0.9 , x: 0,scale: 1 }}
                transition={{duration:0.8}}
                animate = {{ type : "easeinout" }}
                >
                    <div className="">
                        <div className="text-3xl md:text-6xl py-3 font-semibold text-intro">
                            Designer
                        </div>
                        <div className="text-xl md:text-4xl py-3 font-medium text-skills">
                            UI-UX design
                        </div>
                        <div className="text-base md:text-xl py-1">
                            Figma / Adobe XD / Canva
                        </div>
                        <div className="text-base md:text-xl py-1">
                            Responsive design
                        </div>
                        <div className="text-xl md:text-4xl py-3 font-medium text-skills">
                            Tools
                        </div>
                        <div className="text-base md:text-xl py-1">
                            Adobe PhotoShop / Adobe Illustrator
                        </div>
                        <div className="text-base md:text-xl py-1">
                            Adobe Premier Pro
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div className="flex-1 bottom-0 right-0 text-[100px] md:text-[200px] lg:text-[250px] absolute opacity-10 font-opensans">Skills</motion.div> 
        </div>
    )
}


export default Skills;