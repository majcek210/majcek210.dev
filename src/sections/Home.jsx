import React from 'react'
import { motion } from 'framer-motion'

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="home" className='w-full h-screen relative bg-black overflow-hidden flex items-center justify-center px-4'>
      <motion.div
        className='text-center z-10 max-w-3xl'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          variants={itemVariants}
          className='text-lg text-gray-400 mb-4 font-light tracking-wider'
        >
          Hi, I'm
        </motion.p>
        
        <motion.h1 
          variants={itemVariants}
          className='text-6xl sm:text-7xl font-bold text-white mb-6 leading-tight'
        >
          Majcek210
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className='h-1 w-24 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto mb-6'
        ></motion.div>

        <motion.p 
          variants={itemVariants}
          className='text-xl sm:text-2xl text-gray-300 mb-8 font-light leading-relaxed'
        >
          Full Stack Developer & Creative Coder
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className='text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed'
        >
          I build responsive web experiences with React, JavaScript, and modern web technologies. Passionate about clean code and beautiful UI.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='flex gap-4 justify-center flex-wrap'
        >
          <a 
            href="#projects"
            className='px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium'
          >
            See My Work
          </a>
          <a 
            href="#contact"
            className='px-8 py-3 bg-cyan-400 text-black rounded-lg hover:bg-teal-400 transition-all duration-300 font-medium'
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className='w-6 h-6 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
        </svg>
      </motion.div>
    </section>
  )
}

export default Home