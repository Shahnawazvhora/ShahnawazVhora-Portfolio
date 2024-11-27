'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { techStack } from '../../data/techStack'

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="py-10 md:py-20 px-4 md:px-5 w-full md:w-3/4 mx-auto flex flex-col items-center"
    >
      <div className="flex items-center gap-4 mb-8 w-full">
        <h2 className="text-3xl text-purple font-semibold whitespace-nowrap">About Me</h2>
        <div className="flex-grow bg-gray-100 h-[0.1px] opacity-[0.3]"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-2 space-y-4 md:space-y-6"
        >
          <div className="text-white text-base md:text-lg">
            Hi there! Nice to meet you, I&apos;m a Front-End Developer based in 8th of Sep, 
            <span className="inline-flex items-center">
              Ahmedabad, India
              <Image 
                src="/gifs/wired-outline-18-location-pin-hover-jump.gif" 
                alt="Location" 
                className='w-5 h-5 md:w-6 md:h-6 ml-1'
                width={20} 
                height={20} 
              />
            </span>
          </div>
          
          <p className="text-gray-400">
            I&apos;m a self-learned, self-motivated, diligent and persevering with over 2+ years of experience in Front-End Development. I&apos;m perpetually working on improving and educating myself to achieve efficiency and effectiveness in whatever craft. I possess the ability to analyze, gather information and identify key resources to execute an effective plan to produce outstanding web applications.
          </p>

          {/* Tech Stack Section */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8 mt-12 bg-navy-900/30 p-8 rounded-xl shadow-[0_0_15px_rgba(10,10,10,0.8)]"
          >
            <h3 className="text-xl text-center text-white font-mono">&lt;TechStack/&gt;</h3>
            
            {/* Languages */}
            <div className="space-y-4">
              <div className="relative flex justify-center">
                <h4 className="text-center text-sm uppercase tracking-wider text-white">Languages</h4>
                <div className="absolute inset-0 w-24 bg-purple mx-auto h-[3px] top-5"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {techStack.languages.map((tech, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-navy-800/50 px-4 py-2 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                  >
                    <Image src={tech.icon} alt={tech.name} width={24} height={24} style={{ width: '24px', height: '24px' }}/>
                    <span className="text-gray-300 text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dev Tools */}
            <div className="space-y-4">
              <div className="relative flex justify-center">
                <h4 className="text-center text-sm uppercase tracking-wider text-white">Dev Tools</h4>
                <div className="absolute inset-0 w-24 bg-purple mx-auto h-[3px] top-5"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {techStack.devTools.map((tech, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-navy-800/50 px-4 py-2 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                  >
                    <Image src={tech.icon} alt={tech.name} width={24} height={24} style={{ width: '24px', height: '24px' }} />
                    <span className="text-gray-300 text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-1 flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/image.png"
              alt="Profile"
              width={300}
              height={300}
              className="object-cover"
              style={{ width: '400px', height: '350px' }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}