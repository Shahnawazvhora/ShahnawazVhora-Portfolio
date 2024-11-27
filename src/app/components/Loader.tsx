'use client'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-navy flex flex-col items-center justify-center z-50">
      <div className="relative w-32 h-32">
        {/* Top partial border */}
        <motion.div
          className="absolute inset-0 border-t-4 border-l-4 border-r-3 border-b-9 border-transparent border-t-purple rounded-full"
          style={{ borderWidth: '4px 0 0 0' }}
          initial={{ rotate: 0 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Bottom partial border */}
        <motion.div
          className="absolute inset-[4px] border-t-4 border-l-4 border-r-3 border-b-4 border-transparent border-b-purple rounded-full"
          style={{ borderWidth: '0 0 4px 0' }}
          initial={{ rotate: 0 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* SV Text and Loading container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-purple">SV</span>
        </div>
      </div>
          <span className="text-purple text-xl tracking-widest font-bold mt-1">Loading...</span>
    </div>
  )
}
