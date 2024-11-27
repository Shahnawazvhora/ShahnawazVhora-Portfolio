'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

const Archive = () => {
    const [openDescriptions, setOpenDescriptions] = useState<number[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // Toggle description function
    const toggleDescription = (index: number) => {
        setOpenDescriptions(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <motion.div 
            className="min-h-screen bg-[#0a192f] text-white px-4 md:px-20 py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-center">Archive</h1>
                <p className="text-[#8892b0] mb-16 text-center">The full list of the projects I've worked on.</p>

                <div className="relative">
                    <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
                        Projects
                    </h2>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-24 bg-purple h-[3px] top-8"></div>

                    <div className="overflow-x-auto">
                        {/* For larger screens - table view */}
                        <table className="w-full hidden md:table">
                            <thead>
                                <tr className="text-left text-[#8892b0]">
                                    <th className="py-4 pr-8">Year</th>
                                    <th className="py-4 pr-8">Title</th>
                                    <th className="py-4 pr-8">Tech Stack</th>
                                    <th className="py-4 pr-8">Links</th>
                                    <th className="py-4">Desc.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project, index) => (
                                    <React.Fragment key={index}>
                                        <tr className="border-b border-[#1d2d50]">
                                            <td className="py-4 pr-8 text-purple">{project.year}</td>
                                            <td className="py-4 pr-8 text-[#ccd6f6]">{project.title}</td>
                                            <td className="py-4 pr-8 text-[#8892b0]">{project.techStack}</td>
                                            <td className="py-4 pr-8">
                                                <div className="flex gap-4">
                                                    {project.githubLink && (
                                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                            <svg className="w-6 h-6 text-[#8892b0] hover:text-purple" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                    {project.liveLink && (
                                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                            <svg className="w-6 h-6 text-[#8892b0] hover:text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="py-4">
                                                <button
                                                    onClick={() => toggleDescription(index)}
                                                    className="text-[#8892b0] hover:text-purple"
                                                >
                                                    <svg
                                                        className={`w-6 h-6 transform transition-transform ${openDescriptions.includes(index) ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                        {openDescriptions.includes(index) && (
                                            <tr>
                                                <td colSpan={5} className="py-4 px-8 text-[#8892b0]">
                                                    <p className="text-sm"><span className='Description text-purple font-bold'>Description</span>: {project.description}</p>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>

                        {/* For mobile screens - card view */}
                        <div className="md:hidden space-y-6">
                            {projects.map((project, index) => (
                                <div key={index} className="border border-[#1d2d50] rounded-lg p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-[#ccd6f6] font-semibold">{project.title}</h3>
                                        <span className="text-purple">{project.year}</span>
                                    </div>
                                    <div className="text-[#8892b0] text-sm mb-3">{project.techStack}</div>
                                    <div className="flex gap-4 mb-3">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                <svg className="w-5 h-5 text-[#8892b0] hover:text-purple" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                <svg className="w-5 h-5 text-[#8892b0] hover:text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => toggleDescription(index)}
                                        className="text-[#8892b0] hover:text-purple flex items-center gap-2"
                                    >
                                        <span>Desc.</span>
                                        <svg
                                            className={`w-4 h-4 transform transition-transform ${openDescriptions.includes(index) ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openDescriptions.includes(index) && (
                                        <div className="mt-2 text-sm text-[#8892b0]">
                                            <span className='text-purple font-bold'>Description: </span>{`${project.description}`}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Archive;