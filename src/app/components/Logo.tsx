'use client'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="relative w-12 h-12 cursor-pointer"
      whileHover="hover"
      initial="initial"
    >
      {/* Outer rotating circle */}
      <motion.div
        className="absolute inset-0 border-t-4 border-l-4 border-r-3 border-b-9 border-transparent border-t-purple rounded-full"
        variants={{
          initial: { rotate: 0 },
          hover: { rotate: 360 }
        }}
        transition={{
          duration: 2,
          ease: "linear"
        }}
      />

      {/* Inner rotating circle */}
      <motion.div
        className="absolute inset-[4px] border-t-4 border-l-4 border-r-3 border-b-4 border-transparent border-b-purple rounded-full"
        variants={{
          initial: { rotate: 0 },
          hover: { rotate: -360 }
        }}
        transition={{
          duration: 2,
          ease: "linear"
        }}
      />

      {/* SV Text */}
      <div className="absolute inset-1 flex items-center justify-center">
        <span className="text-lg font-bold text-purple tracking-wide">SV</span>
      </div>
    </motion.div>
  )
}