import React from 'react';
import { motion } from "framer-motion";

const Coding = () => {
  const handleClick1 = () => {
    window.open("https://github.com/Krishnakhandelwal123", "_blank");
  };
  const handleClick2 = () => {
    window.open("https://leetcode.com/Krishnakhandelwal018", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F4F0ED] flex flex-col items-center">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold h-40 flex justify-center items-center text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Coding Activity
      </motion.h1>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-6">

        {/* GitHub Stats */}
        <motion.img
          src="https://github-readme-stats.vercel.app/api?username=Krishnakhandelwal123&show_icons=true&theme=radical"
          alt="GitHub Stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        />

        {/* GitHub Trophy */}
        <motion.img
          src="https://github-profile-trophy.vercel.app/?username=Krishnakhandelwal123&theme=dracula"
          alt="GitHub Trophy"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
        />

        {/* LeetCode Stats */}
        <motion.img
          src="https://leetcard.jacoblin.cool/KrishnaKhandelwal018?theme=dark&font=Montserrat"
          alt="LeetCode Stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
        />

        {/* Buttons */}
        <motion.div
          className="h-30 mt-4 space-x-5 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.button
            onClick={handleClick1}
            className="relative px-6 py-2 rounded-lg font-semibold text-white bg-gray-900 border border-gray-700 
               transition-all duration-300 shadow-md overflow-hidden"
            whileHover={{
              scale: 1.08,
              
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
            GitHub
          </motion.button>

          <motion.button
            onClick={handleClick2}
            className="relative px-6 py-2 rounded-lg font-semibold text-white bg-gray-900 border border-gray-700 
               transition-all duration-300 shadow-md overflow-hidden"
            whileHover={{
              scale: 1.08,
            
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0  opacity-0 transition-opacity duration-300 hover:opacity-20"></span>
            LeetCode
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default Coding;
