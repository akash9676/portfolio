import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons';
import socials from "../util/social_media.json"

const  Navbar = () => {

    return (
        <nav className="w-full font-opensans">
            <motion.div className="flex justify-between py-4 mx-auto px-5 sm:px-14 md:px-20 lg:px-48">
                <div>
                    <motion.div className="flex items-center justify-between py-3 md:py-3">
                        <a href="">
                            <motion.h2 className="text-2xl md:text-4xl  font-bold cursor-pointer italic text-intro hover:line-through"
                            initial={{ opacity: 0 , scale: 0.9 , x: -10 }}
                            whileInView={{ opacity: 1 , scale: 1 , x: 0 }}
                            transition={{ duration: 0.5 }}
                            animate = {{ type : "easeinout" }}
                            >Portfolio</motion.h2>
                        </a>
                        
                    </motion.div>
                </div>
                <div>
                    <motion.div className="py-3"
                    initial={{ opacity: 0 , scale: 0.9 , x: +10 }}
                    whileInView={{ opacity: 1 , scale: 1 , x: 0 }}
                    transition={{ duration: 0.5 }}
                    animate = {{ type : "easeinout" }}>
                        {
                            socials && socials.map((social) => {
                                return (
                                    <SocialIcon url={social.social_link} target="_blank" bgColor="#d5bdaf" style={{ height: 30, width: 30 }} key={social.id} className="mx-1"/>
                                );
                            }, [])
                        }
                    </motion.div>
                    
                </div>
            </motion.div>
        </nav>
    );
}

export default Navbar;