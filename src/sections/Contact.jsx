import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

function Contact() {
  const formRef = useRef(null)
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Initialize EmailJS with your service ID
      emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')

      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current
      )

      setMessage('Message sent successfully! I\'ll get back to you soon.')
      formRef.current.reset()
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
      console.error(error)
    } finally {
      setLoading(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className='w-full min-h-screen py-20 px-4 bg-black'>
      <div className='max-w-3xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-16 text-center'
        >
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-2'>Get In Touch</h2>
          <div className='h-1 w-24 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto mb-6'></div>
          <p className='text-gray-400 text-lg'>Have a project in mind or just want to chat? Feel free to reach out!</p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <div>
              <label className='block text-gray-300 mb-2 text-sm font-medium'>Name</label>
              <input
                type='text'
                name='user_name'
                placeholder='Your name'
                required
                className='w-full px-4 py-2 bg-black border border-cyan-400/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-colors duration-300'
              />
            </div>

            <div>
              <label className='block text-gray-300 mb-2 text-sm font-medium'>Email</label>
              <input
                type='email'
                name='user_email'
                placeholder='your@email.com'
                required
                className='w-full px-4 py-2 bg-black border border-cyan-400/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-colors duration-300'
              />
            </div>

            <div>
              <label className='block text-gray-300 mb-2 text-sm font-medium'>Message</label>
              <textarea
                name='message'
                placeholder='Your message here...'
                rows='5'
                required
                className='w-full px-4 py-2 bg-black border border-cyan-400/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/60 transition-colors duration-300 resize-none'
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='submit'
              disabled={loading}
              className='w-full px-6 py-3 bg-cyan-400 text-black rounded-lg font-medium hover:bg-teal-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-center text-cyan-400 text-sm'
              >
                {message}
              </motion.p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='space-y-8'
          >
            <motion.div
              variants={itemVariants}
              className='flex gap-4 items-start p-4 rounded-lg bg-gradient-to-br from-cyan-400/5 to-teal-500/5 border border-cyan-400/20'
            >
              <FiMail size={24} className='text-cyan-400 flex-shrink-0 mt-1' />
              <div>
                <h3 className='text-white font-semibold mb-1'>Email</h3>
                <a href='mailto:hello@majcek210.dev' className='text-gray-400 hover:text-cyan-400 transition-colors duration-300'>
                  hello@majcek210.dev
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='space-y-4'
            >
              <h3 className='text-white font-semibold'>Connect With Me</h3>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='p-3 rounded-lg bg-gradient-to-br from-cyan-400/5 to-teal-500/5 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300'
                  aria-label="github"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href='#'
                  className='p-3 rounded-lg bg-gradient-to-br from-cyan-400/5 to-teal-500/5 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300'
                  aria-label="linkedin"
                >
                  <FiLinkedin size={24} />
                </a>
                <a
                  href='#'
                  className='p-3 rounded-lg bg-gradient-to-br from-cyan-400/5 to-teal-500/5 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300'
                  aria-label="twitter"
                >
                  <FiTwitter size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='p-4 rounded-lg bg-gradient-to-br from-cyan-400/5 to-teal-500/5 border border-cyan-400/20'
            >
              <p className='text-gray-400 text-sm'>
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact