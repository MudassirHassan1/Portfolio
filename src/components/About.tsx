import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-sea-blue rounded-full blur-xl opacity-20" />
              <img
                src="/avatar.jpg"
                alt="Developer Avatar"
                className="w-full h-full object-cover rounded-full border-4 border-white/10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with 5+ years of experience
              in building modern web applications. My journey in tech started
              with a curiosity about how things work on the internet, which led
              me to dive deep into web development.
            </p>
            <p className="text-gray-300 mb-8">
              I specialize in creating scalable, performant applications using
              cutting-edge technologies. When I'm not coding, you can find me
              contributing to open-source projects or exploring new tech trends.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-accent to-sea-blue"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 