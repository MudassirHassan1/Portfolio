import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const codeBlock = `const developer = {
  name: "John Doe",
  role: "Full Stack Developer",
  skills: ["React", "Node.js", "TypeScript"],
  passion: "Building amazing web experiences"
};`;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/20 to-primary" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="gradient-text">John Doe</span>
              <br />
              <span className="text-3xl md:text-5xl">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-300 mb-8"
            >
              I build exceptional digital experiences that make an impact.
              Specializing in modern web technologies and scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary"
              >
                View My Work
              </Link>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Animated code block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-secondary/20 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <pre className="text-sm md:text-base font-mono text-accent">
                <code>{codeBlock}</code>
              </pre>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sea-blue/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 