import React from "react"; 
import ParallaxText from "./ParallaxText"; 
import { motion } from "framer-motion";

const ContactVerticalanimation = () => {
    return (
        <section>
        <ParallaxText baseVelocity={-4}>Contact</ParallaxText>
        </section>
    );
};

const Contact = () => {
    return (
        <div className="h-screen flex flex-col text-white relative">
            <div className="flex-1">
                <ContactVerticalanimation />
            </div>
            <motion.div className=" flex items-center flex-col justify-center absolute h-screen w-full rounded-md font-opensans"
            initial={{ opacity: 0 , scale: 0.8 }}
            whileInView={{ opacity: 0.9 , scale: 1 }}
            transition={{ duration: 0.5 }}
            animate = {{ type : "easeinout" }}>
                <div className="max-w-2xl flex flex-col items-center">
                    <div className="text-2xl py-1">What's Next?</div>
                    <div className="text-6xl font-bold py-1 text-intro">Get in Touch</div>
                    <div className="text-xl py-1 text-center">Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</div>
                    <a href="mailto:akashnaidu545@gmail.com" className="inline-flex items-center mt-2 px-5 py-3 text-lg font-medium text-gray-900 bg-skills rounded-lg ">Say Hello!</a>
                </div>
            </motion.div>
            <motion.div className="flex-1 bottom-0 right-0 text-[40px] md:text-[150px] lg:text-[200px] absolute opacity-10 font-opensans">Contact</motion.div> 
        </div>
    )
}


export default Contact;