import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Deepesh</h3>
            <p className="text-gray-400 mb-6">
              Full-Stack Developer passionate about creating beautiful, functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hello@deepesh.dev"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>Consulting</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Deepesh. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of coffee</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer