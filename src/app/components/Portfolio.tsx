'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion'
import { projects, demoProjects } from '../../data/projectsData'

export default function Portfolio() {
    const [showAllDemos, setShowAllDemos] = useState(false);
    const [isExpanded, setIsExpanded] = useState<Record<string, boolean>>({});
    const displayedDemos = showAllDemos ? demoProjects : demoProjects.slice(0, 3);

    const toggleExpand = (title: string) => {
        setIsExpanded(prev => ({ ...prev, [title]: !prev[title] }));
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                type: "spring",
                duration: 0.5,
                bounce: 0.3
            }
        }
    };

    return (
        <motion.section 
            className="py-10 md:py-20 px-4 w-full md:w-3/4 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ 
                once: true, 
                amount: "some", 
                margin: "-50px 0px"
            }}
            variants={containerVariants}
        >
            <motion.div 
                variants={itemVariants}
                className="flex items-center gap-4 mb-4 md:mb-8 w-full text-center"
            >
                <h2 className="text-2xl md:text-3xl text-purple font-semibold mx-auto">Portfolio</h2>
                <div className="flex-grow bg-gray-100 h-[0.1px] opacity-[0.3]"></div>
            </motion.div>

            <motion.div 
                variants={itemVariants}
                className="flex items-center justify-center mb-8 md:mb-16"
            >
                <h3 className="text-white text-2xl md:text-3xl mr-2 md:mr-4 tracking-wide">Some Things I've Built.</h3>
                <Image
                    src="/gifs/wired-outline-1331-repository-hover-pinch.gif"
                    alt="Portfolio Icon"
                    width={80}
                    height={80}
                    className="w-[80px] md:w-[120px]"
                    unoptimized
                />
            </motion.div>

            <motion.div 
                className="space-y-12 md:space-y-24"
                variants={containerVariants}
                viewport={{ 
                    once: true, 
                    amount: "some",
                    margin: "-50px 0px"
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        variants={itemVariants}
                        viewport={{ 
                            once: true, 
                            amount: 0.3,
                            margin: "-50px 0px"
                        }}
                        className={`flex flex-col p-3 rounded-xl bg-[#14233d] shadow-[0_0_15px_rgba(10,10,10,0.8)] 
                            ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 md:gap-8 items-center`}
                    >
                        <div className="w-full lg:w-3/5 relative group">
                            <div className="overflow-hidden rounded-lg h-[200px] sm:h-[300px] md:h-[300px] w-full">
                                <Link href={project.demoLink || project.sourceLink || '#'} target="_blank">
                                    <div
                                        className="relative w-full transition-transform duration-[7000ms] hover:translate-y-[-83%]"
                                        style={{
                                            height: `${(project.imageHeight || 1800) / 500 * 100}%`,
                                            transform: `translateY(0)`,
                                            width: '100%',
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget;
                                            const containerHeight = el.parentElement?.offsetHeight || 500;
                                            const totalHeight = project.imageHeight || 1800;
                                            const translatePercentage = ((totalHeight - containerHeight) / totalHeight) * 100;
                                            el.style.transform = `translateY(-${translatePercentage}%)`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={100}
                                            height={100}
                                            className="object-contain rounded-lg cursor-pointer"
                                            priority
                                            quality={100}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                objectPosition: 'top',
                                            }}
                                            unoptimized
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 space-y-2 md:space-y-4 p-2 md:p-0 text-center lg:text-left">
                            <h4 className="text-lg md:text-xl text-white font-bold">{project.title}</h4>
                            <p className="text-gray-400 text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs text-blue-400 bg-navy-800 rounded-full"
                                    >
                                        ' {tech} '
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center lg:justify-evenly gap-4 pt-4">
                                {project.demoLink && (
                                    <Link
                                        href={project.demoLink}
                                        target="_blank"
                                        className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                                    >
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </Link>
                                )}
                                {project.sourceLink && (
                                    <Link
                                        href={project.sourceLink}
                                        target="_blank"
                                        className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                                    >
                                        <Github className="w-7 h-7" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ 
                    once: true, 
                    amount: "some",
                    margin: "-50px 0px"
                }}
            >
                {displayedDemos.map((demo) => (
                    <motion.div
                        key={demo.title}
                        variants={itemVariants}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ 
                            type: "spring",
                            duration: 0.4,
                            bounce: 0.2
                        }}
                        className="bg-navy-800/50 rounded-lg p-4 md:p-6 text-center bg-[#14233d] shadow-[0_0_15px_rgba(10,10,10,0.8)] h-fit"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-purple-400">
                                {/* Closed folder icon */}
                                <svg 
                                        className="w-10 h-10 text-purple" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                    />
                                </svg>
                            </div>
                            <div className="flex gap-4">
                                {demo.sourceLink && (
                                    <Link
                                        href={demo.sourceLink}
                                        target="_blank"
                                        className="text-gray-400 hover:text-purple transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </Link>
                                )}
                                {demo.demoLink && (
                                    <Link
                                        href={demo.demoLink}
                                        target="_blank"
                                        className="text-gray-400 hover:text-purple transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <h5 className="text-white font-semibold mb-2">{demo.title}</h5>
                        <div className="mb-4 relative">
                            <p 
                                className={`text-gray-400 text-sm ${!isExpanded[demo.title] ? 'line-clamp-3' : ''}`}
                            >
                                {demo.description}
                            </p>
                            {!isExpanded[demo.title] && demo.description.length > 150 && (
                                <div 
                                    className="absolute bottom-0 inset-x-0 flex justify-center bg-gradient-to-t from-[#14233d] pt-4"
                                >
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleExpand(demo.title);
                                        }}
                                        className="text-purple hover:text-purple-400 px-2 cursor-pointer flex items-center gap-1 text-sm"
                                    >
                                        Read more
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                            {demo.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs text-purple-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {demoProjects.length > 3 && (
                <motion.div 
                    className="flex justify-center mx-auto"
                    variants={itemVariants}
                >
                    <motion.button
                        onClick={() => setShowAllDemos(!showAllDemos)}
                        className="max-w-32 mt-12 px-6 py-3 unique-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        {showAllDemos ? 'Show Less' : 'Show More'}
                    </motion.button>
                </motion.div>
            )}
        </motion.section>
    )
}