import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Deepesh"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            />
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm <span className="text-primary-600">Deepesh</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Full-Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="https://github.com" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@deepesh.dev" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            className="animate-bounce-gentle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="#about" className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
              <ArrowDown size={32} className="mx-auto" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero