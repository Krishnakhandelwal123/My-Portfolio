import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const About3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" }); // Triggers every time

  const logos = [
    { src: "./src/images/html.jpg", alt: "html" },
    { src: "./src/images/css.png", alt: "css" },
    { src: "./src/images/js.png", alt: "js" },
    { src: "./src/images/react.png", alt: "react" },
    { src: "./src/images/github.png", alt: "github" },
    { src: "./src/images/node.png", alt: "node" },
    { src: "./src/images/mongo.png", alt: "mongo" },
    { src: "./src/images/python.png", alt: "python" },
    { src: "./src/images/cpp.webp", alt: "cpp" },
    { src: "./src/images/tailwind.png", alt: "tailwind" },
    { src: "./src/images/git.png", alt: "git" },
  ];

  return (
    <div className='bg-[#1F1F1F]'>
      {/* Main Section */}
      <motion.div 
        ref={ref}
        className="min-h-[80vh] flex items-center justify-center px-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">

          {/* Left Side - Text Content */}
          <motion.div 
            className="w-full md:w-1/2 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl font-extrabold mb-4">WHO I DO IT FOR</h2>
            <p className="text-lg text-gray-200 font-semibold leading-relaxed">
              I am willing to work for design, advertising, and web agencies, charities, startups, and individuals all over the world.
              I live, laugh, and love in the fair city of <span className="text-gray-300 font-semibold">Jaipur, INDIA</span>.
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img className="w-96 h-auto" src="./src/images/globe.png" alt="Globe" />
          </motion.div>

        </div>
      </motion.div>

      {/* Skills & Technologies Section */}
      <div className="flex flex-col items-center text-white">
        {/* Title */}
        <motion.div 
          className="text-4xl font-bold font-sans mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Skills & Technologies
        </motion.div>

        {/* Scrolling Logos Section */}
        <div className="relative overflow-hidden w-full bg-[#1F1F1F] py-8 mb-20">
          <motion.div
            className="flex space-x-16 px-8" 
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {logos.concat(logos).map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto rounded-lg shadow-md hover:scale-110 transition duration-300 ease-in-out"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About3;
