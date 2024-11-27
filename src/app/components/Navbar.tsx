'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import { useLoading } from './LoadingProvider'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setIsLoading } = useLoading()

  const handleNavigation = useCallback((path: string) => {
    setIsLoading(true)
    router.push(path)
    // Reset loading after navigation
    setTimeout(() => setIsLoading(false), 3000)
  }, [router, setIsLoading])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-navy-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with left animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 10.2,
            ease: "easeOut",
            type: "spring",
            damping: 20,
            delay: 3
           }}
        >
          <Link href="/" onClick={() => handleNavigation('/')}>
            <Logo />
          </Link>
        </motion.div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-gray-400 mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-gray-400 mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-gray-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Navigation Links - Desktop with right animation */}
        <motion.div 
          className={`hidden lg:flex items-center gap-8`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 10.2,
            ease: "easeOut",
            type: "spring",
            damping: 20,
            delay: 3
           }}
        >
          <NavLinks pathname={pathname} handleNavigation={handleNavigation} />
        </motion.div>
      </div>

      {/* Mobile Menu with fade animation */}
      <motion.div
        className={`lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } bg-navy-900/95 backdrop-blur-sm`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ 
          duration: 10.2,
          ease: "easeOut",
          type: "spring",
          damping: 20,
          delay: 3
         }}
      >
        <div className="px-4 py-4 flex flex-col items-center gap-4">
          <NavLinks pathname={pathname} handleNavigation={handleNavigation} />
        </div>
      </motion.div>
    </nav>
  )
}

// Separate component for navigation links
const NavLinks = ({ 
  pathname, 
  handleNavigation 
}: { 
  pathname: string;
  handleNavigation: (path: string) => void;
}) => {
  const [showDefaultIcon, setShowDefaultIcon] = useState(true)

  const handleCVClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    setShowDefaultIcon(false)
    
    setTimeout(() => {
      setShowDefaultIcon(true)
      // Create and trigger download after loading
      const link = document.createElement('a')
      link.href = '/cv/Shahnawaz Vhora_CV.pdf'
      link.download = 'Shahnawaz Vhora_CV.pdf'
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 2000)
  }
  
  return(
    <div className="flex lg:flex-row flex-col items-center gap-8">
      <button
        onClick={() => handleNavigation('/')}
        className={`transition-colors ${
          pathname === '/' ? 'text-purple' : 'text-gray-400 hover:text-purple'
        }`}
      >
        Home
      </button>
      <button
        onClick={() => handleNavigation('/archive')}
        className={`transition-colors ${
          pathname === '/archive' ? 'text-purple' : 'text-gray-400 hover:text-purple'
        }`}
      >
        Archive
      </button>
      <button
        onClick={() => handleNavigation('/contactus')}
        className={`transition-colors ${
          pathname === '/contactus' ? 'text-purple' : 'text-gray-400 hover:text-purple'
        }`}
      >
        Contact
      </button>
      <button
        className="unique-btn"
        onClick={handleCVClick}
      >
        <span className='text-gray-400'>CV</span>
        {showDefaultIcon ? (
          <Image src="icons/file-down.svg" alt="CV" width={20} height={20} unoptimized/>
        ) : (
          <div className="w-5 h-5 animate-spin rounded-full border-2 border-gray-400 border-t-purple" />
        )}
      </button>
    </div>
  )
}