import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces with attention to detail and user experience"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with over 5 years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Working"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              My journey in web development started with curiosity and has evolved into a passion 
              for creating meaningful digital experiences. I specialize in modern web technologies 
              and love collaborating with teams to bring innovative ideas to life.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About