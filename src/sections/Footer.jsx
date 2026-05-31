import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full bg-black border-t border-cyan-400/20 py-12 px-4'>
      <div className='max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <div className='mb-6'>
            <h2 className='text-2xl font-bold text-white mb-2'>majcek210</h2>
            <p className='text-gray-400 text-sm'>Full Stack Developer & Creative Coder</p>
          </div>

          <div className='mb-8 flex justify-center gap-6 text-sm text-gray-400'>
            <a href='#home' className='hover:text-cyan-400 transition-colors duration-300'>Home</a>
            <a href='#about' className='hover:text-cyan-400 transition-colors duration-300'>About</a>
            <a href='#skills' className='hover:text-cyan-400 transition-colors duration-300'>Skills</a>
            <a href='#projects' className='hover:text-cyan-400 transition-colors duration-300'>Projects</a>
            <a href='#contact' className='hover:text-cyan-400 transition-colors duration-300'>Contact</a>
          </div>

          <div className='h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-8'></div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-gray-500 text-sm'
          >
            © {currentYear} majcek210. Built with React, Vite & Tailwind CSS.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer