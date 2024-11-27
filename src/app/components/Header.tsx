'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(200);

    const phrases = [
        'Front End Developer.',
        'UI/UX Designer.',
        'Software Engineer.'
    ];

    useEffect(() => {
        const tick = () => {
            const currentIndex = loopNum % phrases.length;
            const fullText = phrases[currentIndex];

            if (isDeleting) {
                setText(prev => prev.slice(0, -1));
                setDelta(100);
            } else {
                setText(fullText.slice(0, text.length + 1));
                setDelta(200);
            }

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(prev => prev + 1);
                setDelta(500); // Pause before starting next word
            }
        };

        let ticker = setTimeout(tick, delta);
        return () => clearTimeout(ticker);
    }, [text, delta, loopNum, isDeleting, phrases]);

    return (
        <header className="min-h-screen relative flex items-center overflow-hidden">
            {/* Background Logo */}
            <motion.div 
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 0.1 }}
                transition={{ 
                    duration: 10.2,
                    ease: "easeOut",
                    type: "spring",
                    damping: 20,
                    delay: 3
                }}
                className="absolute inset-0 flex items-center justify-end pointer-events-none"
            >
                <span className="text-[15rem] sm:text-[25rem] md:text-[30rem] lg:text-[40rem] font-bold text-white/20">SV</span>
            </motion.div>

            {/* Content Container */}
            <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ 
                    duration: 10.2,
                    ease: "easeOut",
                    type: "spring",
                    damping: 20,
                    delay: 3
                }}
                className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative"
            >
                <div className="space-y-4 sm:space-y-6">
                    <p className="text-purple text-lg sm:text-xl">
                        Hello, my name is
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white/90 break-words">
                        Shahnawaz Vhora.
                    </h1>

                    <div className="flex items-center">
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 font-mono">
                            I'm a{" "}
                            <span className="inline-flex">
                                <span>{text}</span>
                                <span className="border-r-2 border-gray-400 ml-1 animate-pulse h-6 sm:h-7 md:h-8"></span>
                            </span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </header>
    );
}