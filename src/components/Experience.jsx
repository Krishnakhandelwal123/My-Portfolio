import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "LNMIIT Hackathon",
    organization: "LNMIIT, Jaipur",
    date: "2024",
    description: [
      "Developed an AI-driven chatbot solution for real-world problem-solving.",
      "Worked in a team to prototype a functional product within 24 hours.",
      "Presented the final solution to industry experts and faculty members.",
    ],
    image: "./src/images/lnmiit.png",
  },
  {
    title: "MUJ IIC Hackathon",
    organization: "Manipal University Jaipur",
    date: "2024",
    description: [
      "Created an IoT-based smart monitoring system for urban spaces.",
      "Utilized machine learning algorithms for predictive analytics.",
      "Achieved recognition for innovative tech implementation.",
    ],
    image: "./src/images/manipal.jpg",
  },
  {
    title: "Mini Shark Tank - StoreCraft Pitch",
    organization: "Startup Competition",
    date: "2024",
    description: [
      "Pitched StoreCraft, an AI-driven SaaS platform for business growth.",
      "Demonstrated live AI-powered sales analytics and chatbot integration.",
      "Received positive feedback from investors and startup mentors.",
    ],
    image: "./src/images/shark.jpg",
  },
  {
    title: "Frontend Developer Intern",
    organization: "Bharat Intern",
    date: "2024",
    description: [
      "Developed interactive web components using React and Tailwind CSS.",
      "Worked on optimizing user experience for SaaS applications.",
      "Collaborated with backend teams to integrate API functionalities.",
    ],
    image: "./src/images/bharat.png",
  },
  {
    title: "Intern - Prodigy Infotech",
    organization: "Prodigy Infotech",
    date: "2024",
    description: [
      "Gained hands-on experience in full-stack web development.",
      "Implemented frontend designs and backend APIs for client projects.",
      "Enhanced performance and responsiveness of web applications.",
    ],
    image: "./src/images/prodigy.jpg",
  },
];

const Experience = () => {
  return (
    <motion.div 
      className="min-h-screen bg-[#F4F0ED] text-black py-20 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Header Animation */}
      <motion.h2 
        className="text-5xl font-extrabold tracking-wide mb-5 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        EXPERIENCES
      </motion.h2>
      
      <motion.p 
        className="text-lg text-gray-600 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        My Academic & Professional Journey
      </motion.p>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-[90%] mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-900">{exp.title}</h3>
            <p className="text-blue-600 font-semibold">{exp.organization}</p>
            <p className="text-gray-500 text-sm mt-1">{exp.date}</p>
            <ul className="mt-3 text-gray-700 list-disc list-inside">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
