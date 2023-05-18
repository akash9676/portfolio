import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Home() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 20, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    useEffect(() => {
        const moveCursor = (e) => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => {
        window.removeEventListener("mousemove", moveCursor);
        };
    }, []);
    return (
        <div>
        <motion.div
            className="w-10 h-10 rounded-full bg-cursor fixed top-0 left-0 pointer-events-none opacity-40 max-md:bg-transparent"
            style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            }}
        />
        </div>
    );
}