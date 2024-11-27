import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 px-4 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 items-center">
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          {[
            { href: "https://github.com/Shahnawazvhora", icon: "/icons/icons8-github.svg", alt: "Github" },
            { href: "https://linkedin.com/in/shahnawazvhora/", icon: "/icons/icons8-linkedin.svg", alt: "LinkedIn" },
            { href: "https://instagram.com/_nawaaaazzzz_", icon: "/icons/icons8-instagram.svg", alt: "Instagram" },
            { href: "https://twitter.com/shahnawaz_vhora", icon: "/icons/icons8-twitterx.svg", alt: "Twitter" }
          ].map((social) => (
            <motion.div
              key={social.alt}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={social.href} target="_blank" className="cursor-pointer">
                <Image 
                  src={social.icon} 
                  alt={social.alt} 
                  width={32} 
                  height={32} 
                  className="w-8 h-8" 
                  unoptimized
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo and Credits */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2"
        >
          <Logo />
          <span className="text-gray-400 text-sm">
            Designed & Built by <span className="text-purple-400">me</span>
          </span>
        </motion.div>

        {/* Email and Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-sm text-center"
        >
          <p className="break-all px-2">shahnawazvhora7333@gmail.com</p>
          <p>{new Date().getFullYear()} © All rights are reserved</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}