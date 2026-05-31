import React from 'react'
import { motion } from 'framer-motion'

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className='w-full min-h-screen py-20 px-4 bg-black'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-2'>About Me</h2>
          <div className='h-1 w-24 bg-gradient-to-r from-cyan-400 to-teal-500'></div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='space-y-4'
          >
            <motion.p 
              variants={itemVariants}
              className='text-gray-300 leading-relaxed text-lg'
            >
              I'm a self-taught developer with a passion for building web experiences. Started learning to code because I wanted to bring my ideas to life online, and I haven't stopped since.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className='text-gray-300 leading-relaxed text-lg'
            >
              When I'm not coding, you'll find me exploring new tech, contributing to open source, or experimenting with creative side projects. I believe good code is readable code, and great design is intuitive.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className='text-gray-300 leading-relaxed text-lg'
            >
              Currently, I'm focused on building full-stack applications and improving my skills in modern JavaScript frameworks and backend technologies.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-gradient-to-br from-cyan-400/10 to-teal-500/10 p-8 rounded-lg border border-cyan-400/20'
          >
            <div className='space-y-6'>
              <div>
                <h3 className='text-cyan-400 font-semibold mb-2'>Experience</h3>
                <p className='text-gray-400 text-sm'>Building projects and learning through hands-on experience</p>
              </div>
              <div>
                <h3 className='text-cyan-400 font-semibold mb-2'>Focus Areas</h3>
                <p className='text-gray-400 text-sm'>React, JavaScript, Full-stack development, UI/UX</p>
              </div>
              <div>
                <h3 className='text-cyan-400 font-semibold mb-2'>Goal</h3>
                <p className='text-gray-400 text-sm'>Create meaningful digital experiences that solve real problems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About