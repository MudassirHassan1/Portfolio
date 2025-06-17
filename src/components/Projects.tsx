import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/username/ecommerce',
      live: 'https://ecommerce-demo.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
      image: '/projects/taskmanager.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com/username/taskmanager',
      live: 'https://taskmanager-demo.com',
    },
    {
      title: 'AI-Powered Analytics',
      description: 'A data analytics platform with machine learning capabilities for business intelligence and predictive analytics.',
      image: '/projects/analytics.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      github: 'https://github.com/username/analytics',
      live: 'https://analytics-demo.com',
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in building modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative h-[400px] perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden">
                  <div className="card h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="card h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary/30 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 text-center"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 text-center"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 