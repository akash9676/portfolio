import React from 'react'
import Typewriter from 'typewriter-effect';
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";
import Navbar from './Navbar';


const Intro = () => {
    return (
        <>
        <div className='text-white flex flex-col justify-center items-start h-screen '>
            <div className=" h-screen flex flex-col  w-screen  absolute top-0 right-0 font-bold font-serif  ">
                <div className=''>   
                <Navbar />
                </div>
                <div className='pl-40 flex flex-col justify-center h-full gap-1 text-7xl'>
                    <div className="">Hi,</div>
                    <div className="">I'm <motion.span className='text-intro ' whileHover={{ scale : 1.2} }> Erripuk </motion.span></div>
                    <Typewriter 
                    options={{
                        strings: ["Web Developer." , "UI-UX Designer."],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
            <div className=' flex flex-col justify-center items-center absolute w-full bottom-0 animate-bounce'>
                <motion.div 
                className='text-4xl'
                whileHover={{ scale: 1.2 }}
                whileInView={{ opacity: 0.8 }}>
                Scroll
                </motion.div>
                <motion.div
                className=''
                whileHover={{ scale: 1.6 }}
                whileInView={{ opacity: 0.8 }}>
                    <BiChevronDown color='white' fontSize='70px'/>
                </motion.div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Intro
