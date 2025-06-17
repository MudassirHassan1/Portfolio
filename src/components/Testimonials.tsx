import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      content: 'Working with John was an absolute pleasure. His technical expertise and attention to detail helped us deliver our project ahead of schedule. The code quality and architecture decisions were spot on.',
      image: '/testimonials/sarah.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at StartupX',
      content: 'John is an exceptional developer who consistently delivers high-quality work. His ability to understand complex requirements and translate them into elegant solutions is remarkable.',
      image: '/testimonials/michael.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Developer at InnovateCo',
      content: 'I\'ve had the pleasure of collaborating with John on multiple projects. His problem-solving skills and technical knowledge make him an invaluable asset to any development team.',
      image: '/testimonials/emily.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover rounded-full border-4 border-white/10"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-gray-300 mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h4 className="text-xl font-semibold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-accent">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-accent w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 