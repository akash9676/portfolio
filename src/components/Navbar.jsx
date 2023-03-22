import { motion } from "framer-motion"

// const Navbar = () => {
//     return (
//         <navbar className="text-white font-opensans">
//             <motion.div className="flex p-2 items-center pr-16 pl-16">
//                 <motion.div 
//                     className="text-4xl p-6 px-14 font-bold cursor-pointer italic text-intro hover:line-through"
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}>
//                     Portfolio
//                 </motion.div>
//                 <div className="flex-1"></div>
//                 <div className="hidden lg:flex pr-8 cursor-pointer text-2xl font-bold">
//                     <motion.div className="p-2 px-14"
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}>
//                         About
//                     </motion.div>
//                     <motion.div className="p-2 px-14"
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}>
//                         Skills
//                     </motion.div>
//                     <motion.div className="p-2 px-14"
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}>
//                         Projects
//                     </motion.div>
//                 </div>
//                 <div className="flex flex-1"></div>
//                 <motion.div className="p-2 pr-16 underline cursor-pointer text-2xl font-bold"
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}>
//                     Let's Work together
//                 </motion.div>
//             </motion.div> 
//         </navbar>
//     );
// };

import { useState } from "react";

const  Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full font-opensans">
            <motion.div className="justify-around p-4 mx-auto md:items-center md:flex md:px-8">
                <div>
                    <motion.div className="flex items-center justify-between py-3 md:py-3 md:block">
                        <a href="">
                            <motion.h2 className="text-2xl md:text-3xl max-lg:pl-6 font-bold cursor-pointer italic text-intro hover:line-through"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            >Portfolio</motion.h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 pr-5 text-gray-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </motion.svg>
                                ) : (
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6  text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </motion.svg>
                                )}
                            </button>
                        </div>
                    </motion.div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center mt-8 max-md:bg-gray-500  max-sm:absolute md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center h-full space-y-8 cursor-pointer text-lg max-sm:w-screen  md:text-lg lg:text-2xl md:flex md:space-x-6 md:space-y-0 ">
                            <li className="text-white text-center md:p-4">
                                <motion.div 
                                href=""
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                    About</motion.div>
                            </li>
                            <li className="text-white text-center md:p-4">
                                <motion.div href=""
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                    Skills</motion.div>
                            </li>
                            <li className="text-white text-center md:p-4">
                                <motion.div 
                                href=""
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                    Exprerience</motion.div>
                            </li>
                            <li className="text-white text-center md:p-4">
                                <motion.div 
                                href=""
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                    Projects</motion.div>
                            </li>
                        </ul>

                        <div className="space-y-2 py-4 flex md:hidden place-content-center ">
                            <div className="flex">
                                    <motion.div
                                    className="inline-block w-full text-center text-lg text-white"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}>
                                        Let's work together</motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div className="hidden text-xl md:text-xl lg:text-2xl md:inline-block">
                    <motion.div
                        className="text-white underline"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        Let's work together
                    </motion.div>
                    
                </motion.div>
            </motion.div>
        </nav>
    );
}

export default Navbar;