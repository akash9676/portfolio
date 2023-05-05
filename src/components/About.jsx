import React from "react"; 
import ParallaxText from "./ParallaxText"; 
import { motion } from "framer-motion";
import  profile from "../assets/profile_pic.jpg"

const AboutVerticalanimation = () => {
    return (
        <section>
        <ParallaxText baseVelocity={-4}>About</ParallaxText>
        </section>
    );
};

const About = () => {
    return (
        <div className="h-screen flex flex-col text-white relative">
            <div className="flex-1">
                <AboutVerticalanimation />
            </div>
            <div className=" flex items-center justify-center absolute h-screen w-full opacity-85 rounded-md">
                <motion.div className="flex flex-col max-w-xs md:flex-row md:max-w-3xl lg:max-w-5xl rounded-lg"
                initial={{ opacity: 0 , scale: 0.9 }}
                whileInView={{ opacity: 0.9 , scale: 1 }}
                transition={{ duration: 0.5 }}
                animate = {{ type : "easeinout" }}
                    >
                    <motion.img class="w-52 h-52 rounded-full max-sm:mb-4 self-center md:h-[300px] object-cover md:w-max lg:rounded-tl-md lg:rounded-bl-md md:rounded-none" src={profile} alt="" 
                    initial={{ opacity: 0 , x: -25,scale: 0.8 }}
                    whileInView={{ opacity: 0.9 , x: 0,scale: 1 }}
                    transition={{duration:0.5}}
                    animate = {{ type : "easeinout" }}
                    />
                    <motion.div class="px-6 py-5 flex flex-col justify-center bg-about max-sm:rounded-md sm:rounded-tr-md sm:rounded-br-md"
                    initial={{ opacity: 0 , x: 25,scale: 0.8 }}
                    whileInView={{ opacity: 0.9 , x: 0,scale: 1 }}
                    transition={{duration:0.5}}
                    animate = {{ type : "easeinout" }}
                    >
                        <motion.div class="text-intro text-2xl md:text-4xl font-medium lg:mb-3"
                        initial={{ opacity: 0 , y: 20 }}
                        whileInView={{ opacity: 1 , y: 0 }}
                        transition={{duration:0.5}}
                        animate = {{ type : "easeinout" }}
                        >About me</motion.div>
                        <p class="text-gray-600 text-base md:text-lg">
                        I'm Akash, a self-taught web developer and UI/UX designer with strong skills in HTML, CSS, JavaScript, and React. I have basic knowledge of C++ and Python. 
                        I have experience in content and design, mentoring through Google Developer Student Clubs, and contributing to open-source projects like Hacktoberfest.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="flex-1 bottom-0 right-0 text-[100px] md:text-[200px] lg:text-[250px] absolute opacity-10 font-opensans">About</motion.div> 
        </div>
    )
}


export default About;