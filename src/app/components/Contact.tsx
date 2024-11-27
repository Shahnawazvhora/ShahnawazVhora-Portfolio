'use client'

import Image from 'next/image'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLoading } from './LoadingProvider'

export default function Contact() {
  const router = useRouter()
  const { setIsLoading } = useLoading()

  const handleNavigation = useCallback((path: string) => {
    setIsLoading(true)
    router.push(path)
    setTimeout(() => setIsLoading(false), 2000)
  }, [router, setIsLoading])

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20 px-4 max-w-7xl flex flex-col items-center text-center"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl text-purple-400 font-semibold mb-4 md:mb-8"
      >
        Contact Me
      </motion.h2>

      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-3xl tracking-wider text-gray-400 mb-4 md:mb-6"
      >
        Please Don't Hesitate To Reach Out
      </motion.h3>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-4"
      >
        It is always a most delightful moment for me when meeting new people. Every great network starts with a simple Hello
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleNavigation('/contactus')}
        className="inline-block px-6 md:px-8 py-2 md:py-3 border-2 unique-btn max-w-32 text-sm md:text-base"
      >
        Say Hello
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 md:mt-20"
      >
        <Image
          src="/gifs/wired-outline-726-wireless-connection-hover-pinch.gif"
          alt="Satellite Icon"
          width={80}
          height={80}
          className="mx-auto md:w-[100px] md:h-[100px] w-[80px] h-[80px]"
        />
      </motion.div>
    </motion.section>
  )
}