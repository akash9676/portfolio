import React from "react"; 
import ParallaxText from "./ParallaxText"; 
import { motion } from "framer-motion";

const AboutVerticalanimation = () => {
    return (
        <section>
        <ParallaxText baseVelocity={-4}>About</ParallaxText>
        </section>
    );
};

const About = () => {
    return (
        <div className="h-screen flex flex-col text-white relative ">
            <div className="flex-1">
                <AboutVerticalanimation />
            </div>
            <div className=" flex items-center justify-center absolute h-screen w-full opacity-85 rounded-md">
                <motion.div className="flex flex-col max-w-sm md:flex-row md:max-w-2xl lg:max-w-5xl rounded-lg  shadow-lg"
                    initial={{ opacity: 0 , scale: 0.9 }}
                    whileInView={{ opacity: 0.9 , scale: 1 }}
                    transition={{ duration: 0.5 }}
                    animate = {{ type : "easeinout" }}
                    >
                    <motion.img class=" w-52 h-52 self-center rounded-full max-sm:p-3 md:h-[400px] object-cover md:w-[500px] lg:rounded-tl-md lg:rounded-bl-md md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" 
                    initial={{ opacity: 0 , x: -25,scale: 0.8 }}
                    whileInView={{ opacity: 0.9 , x: 0,scale: 1 }}
                    transition={{duration:0.5}}
                    animate = {{ type : "easeinout" }}
                    />
                    <motion.div class="p-6 flex flex-col justify-start bg-about rounded-tr-md rounded-br-md"
                    initial={{ opacity: 0 , x: 25,scale: 0.8 }}
                    whileInView={{ opacity: 0.9 , x: 0,scale: 1 }}
                    transition={{duration:0.5}}
                    animate = {{ type : "easeinout" }}
                    >
                        <motion.h5 class="text-gray-900 text-xl font-medium mb-2"
                        initial={{ opacity: 0 , y: 20 }}
                        whileInView={{ opacity: 1 , y: 0 }}
                        transition={{duration:0.5}}
                        animate = {{ type : "easeinout" }}
                        >About me</motion.h5>
                        <p class="text-gray-700 text-base mb-4">
                            I am Akash, a 19 year old Web developer from India. I am a self taught developer and I love to code. I am currently learning React. I am also learnt Python and C++.
                        </p>
                        <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="flex-1 bottom-0 right-0 text-[100px] md:text-[200px] lg:text-[250px] absolute opacity-10 font-opensans">About</motion.div> 
        </div>
    )
}


export default About;