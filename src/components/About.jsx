import React from "react";
import { motion } from "framer-motion";

const About = () => {

  return (
    <div  className="bg-[#1F1F1F] min-h-screen flex flex-col items-center py-16 px-6">
      {/* Heading with Fade-in Effect */}
      <motion.h1
        className="text-white text-5xl font-extrabold mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ABOUT
      </motion.h1>

      <motion.div
        className="flex flex-col lg:flex-row items-center lg:space-x-20 max-w-5xl space-y-10 lg:space-y-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Image with Hover Effect */}
        <motion.img
          className="h-64 sm:h-80 border-8 rounded-md border-white shadow-lg"
          src="https://img.freepik.com/premium-vector/anime-character-black-white-vector-image_1286285-9.jpg?semt=ais_hybrid"
          alt="About"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Description with Fade-in Effect */}
        <motion.p
          className="text-white text-lg sm:text-xl leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <b>Welcome, friend</b>. I’m Krishna Khandelwal, a passionate web
          developer with experience in building user-friendly and visually
          appealing applications. With a strong background in{" "}
          <span className="text-[#66FF66]">frontend development</span>,{" "}
          <span className="text-[#66FF66]">React.js</span>, and{" "}
          <span className="text-[#66FF66]">Tailwind CSS</span>, I specialize in
          creating high-quality websites from concept to completion. My
          expertise extends to AI integration, SaaS applications, and IoT-based
          platforms, reflecting my commitment to innovation and excellence.
        </motion.p>
      </motion.div>

      {/* Clients Section */}
      <motion.div
        className="bg-[#1F1F1F] w-full sm:w-[80%] text-white p-6 sm:p-10 mt-14"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h1 className="text-2xl sm:text-[25px] font-extrabold mb-8">
          My clients include:
        </h1>
        <ul className="space-y-6 text-lg sm:text-2xl">
          <li>
            • Small design agencies that need complete development help. I'm
            happy to assist with UI/UX and frontend development.
          </li>
          <li>
            • Web agencies that require React-based solutions and scalable UI
            architecture.
          </li>
          <li>
            • Startups focusing on SaaS products, AI integration, and real-time
            data visualization tools.
          </li>
          <li>
            • Small businesses that need intuitive and performance-optimized web
            platforms.
          </li>
        </ul>

        {/* Creative Coding */}
        <motion.p
          className="mt-14 text-lg sm:text-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          As well as the fundamentals, I'm well-versed in web animation, 3D,
          mapping, data visualizations, interactivity, and games – AKA{" "}
          <span className="text-green-400 font-semibold">creative coding.</span>
        </motion.p>

        {/* Projects Section */}
        <motion.p
          className="mt-14 text-lg sm:text-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          I recently spent time developing{" "}
          <span className="text-green-400 font-semibold">StoreCraft</span>, a
          SaaS platform with AI-driven chatbot functionality and comprehensive
          sales analysis. I also worked on{" "}
          <span className="text-green-400 font-semibold">GreenHive</span>, an
          IoT-powered urban farming platform, and{" "}
          <span className="text-green-400 font-semibold">AI MedAssistant</span>,
          an AI healthcare solution for personalized medical advice.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
