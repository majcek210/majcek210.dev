import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, animated portfolio to showcase my work and skills. Built with React, Vite, and Tailwind CSS with smooth animations using Framer Motion.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Full-stack task management application with real-time updates. Features include task creation, editing, filtering, and local storage persistence.',
      tags: ['React', 'JavaScript', 'Local Storage', 'Responsive'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather app that fetches real-time data from an API. Display current conditions, forecasts, and location-based weather with a clean interface.',
      tags: ['React', 'API Integration', 'CSS', 'Responsive'],
      github: '#',
      demo: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className='w-full min-h-screen py-20 px-4 bg-black'>
      <div className='max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-2'>Featured Projects</h2>
          <div className='h-1 w-24 bg-gradient-to-r from-cyan-400 to-teal-500'></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='space-y-8'
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className='group bg-gradient-to-br from-cyan-400/5 to-teal-500/5 border border-cyan-400/20 rounded-lg p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-300'
            >
              <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4'>
                <div>
                  <h3 className='text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>
                    {project.title}
                  </h3>
                </div>
                <div className='flex gap-3'>
                  <a
                    href={project.github}
                    className='p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300'
                    aria-label="github"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className='p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300'
                    aria-label="demo"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className='text-gray-400 mb-6 leading-relaxed'>
                {project.description}
              </p>

              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className='px-3 py-1 text-sm bg-cyan-400/10 border border-cyan-400/30 text-gray-300 rounded-full hover:border-cyan-400/60 transition-all duration-300'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-12 text-center'
        >
          <a
            href='#'
            className='inline-block px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium'
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects