import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const About2 = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });// Triggers animation once when in view

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <motion.div 
      ref={ref}
      className="bg-[#F4F0ED] min-h-screen flex items-center justify-center px-10"
      initial={{ opacity: 0, y: 50 }} // Fade-in & Slide-up
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <motion.div 
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img className="w-110 h-auto" src="/images/cube.png" alt="Cube" />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="w-full text-gray-800"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-black mb-4">WHAT I DO</h2>
          <p className="text-lg leading-relaxed mb-6">
            I provide high quality web design and web development for websites and online experiences. What does high quality mean, you ask? It means 3 things:
          </p>

          {/* Ordered List */}
          <motion.ol 
            className="list-decimal pl-6 text-lg space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li>
              <span className="font-bold">Technical</span> - Clean markup, performant, fast to load, built with best practices and accessibility at its heart.
            </li>
            <li>
              <span className="font-bold">Beautiful</span> - With my white space no one will hear you scream. I respect the design and do it justice.
            </li>
            <li>
              <span className="font-bold">Easy to use</span> - Tools don't matter – results do. I always build with the person using it in mind.
            </li>
          </motion.ol>

          {/* Read More Button */}
          <motion.div 
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button
              onClick={handleClick}
              className="mt-6 mb-10 bg-black text-white font-bold py-3 px-6 border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
            >
              READ MORE
            </button>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About2;
