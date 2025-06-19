import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@deepesh.dev",
      link: "mailto:hello@deepesh.dev"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Let's start a conversation
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-primary-600 bg-primary-100 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Ready to work together?</h4>
              <p className="mb-6 opacity-90">
                I'm always excited to take on new challenges and collaborate on innovative projects.
              </p>
              <a
                href="mailto:hello@deepesh.dev"
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact