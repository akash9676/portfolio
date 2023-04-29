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
        <div className="h-screen flex flex-col text-white relative">
            <div className="flex-1">
                <AboutVerticalanimation />
            </div>
            <div className=" flex items-center justify-center absolute h-screen w-full opacity-85 rounded-md">
                <motion.div className="flex flex-col max-w-sm md:flex-row md:max-w-3xl lg:max-w-5xl rounded-lg"
                initial={{ opacity: 0 , scale: 0.9 }}
                whileInView={{ opacity: 0.9 , scale: 1 }}
                transition={{ duration: 0.5 }}
                animate = {{ type : "easeinout" }}
                    >
                    <motion.img class=" w-48 h-48 self-center rounded-full max-sm:p-3 md:h-[500px] object-cover md:w-[500px] lg:rounded-tl-md lg:rounded-bl-md md:rounded-none md:rounded-l-lg mb-3" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" 
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
                        <motion.div class="text-gray-900 text-2xl md:text-3xl font-medium mb-3"
                        initial={{ opacity: 0 , y: 20 }}
                        whileInView={{ opacity: 1 , y: 0 }}
                        transition={{duration:0.5}}
                        animate = {{ type : "easeinout" }}
                        >About me</motion.div>
                        <p class="text-gray-700 text-base md:text-lg">
                        Hello, I'm Akash, I'm a self-taught web developer and UI/UX designer with a strong foundation in HTML, CSS, JavaScript, React and Designing.
                        I also have some basic knowledge on general-purpose programming languages like C++ and Python, which I continue to develop through self-study.
                        In addition to my development skills, I have experience in content and design, Mentorship through my involvement in Google Developer Student Clubs. 
                        As a content and design lead, I collaborated with team members to create engaging and informative content that helped students learn and grow. 
                        As a web developer co-lead, I become mentor to help students learn and grow their knowledge of web development .
                        I'm also a contributor to open source projects, having participated in events like Hacktoberfest. Through my open source contributions, 
                        I've gained valuable experience working with a diverse community of developers and contributing to projects that benefit the broader tech community.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="flex-1 bottom-0 right-0 text-[100px] md:text-[200px] lg:text-[250px] absolute opacity-10 font-opensans">About</motion.div> 
        </div>
    )
}


export default About;