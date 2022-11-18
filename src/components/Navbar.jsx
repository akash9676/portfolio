import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <navbar className="text-white font-serif  ">
            <motion.div className="flex p-2 items-center pr-16 pl-16">
                <motion.div 
                className="text-4xl p-6 px-14 font-bold cursor-pointer italic hover:line-through"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}>
                Portfolio
                </motion.div>
                <div className="flex-1"></div>
                <div className="hidden lg:flex pr-8 cursor-pointer text-2xl font-bold">
                    <motion.div className="p-2 px-14"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                    Home
                    </motion.div>
                    <motion.div className="p-2 px-14"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                    About
                    </motion.div>
                    <motion.div className="p-2 px-14"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                    Projects
                    </motion.div>
                    <motion.div className="p-2 px-14"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                    Contact
                    </motion.div>
                </div>
            </motion.div> 
  
        </navbar>
    );
};

export default Navbar;