import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Text to Image",
    img: "/images/Texttoimage.png",
    tech: ["Frontend: React, Tailwind", "Backend: Node.js, Express.js, MongoDB"],
    link: "https://github.com/Krishnakhandelwal123/text-to-image",
  },
  {
    name: "Meme Generator",
    img: "/images/meme.png",
    tech: ["Frontend: React, Tailwind", "Backend: Node.js, Express.js, MongoDB"],
    link: "https://github.com/Krishnakhandelwal123/meme-coin",
  },
  {
    name: "Spotify Clone",
    img: "/images/spotify.png",
    tech: ["Frontend: HTML, CSS, JavaScript"],
    link: "https://github.com/Krishnakhandelwal123/spotify-clone",
  },
  {
    name: "Nike Store",
    img: "/images/nike.png",
    tech: ["Frontend: HTML, CSS, JavaScript"],
    link: "https://github.com/Krishnakhandelwal123/nike-website-frontend",
  },
  {
    name: "StoreCraft",
    img: "https://acropolium.com/img/articles/chatbots-in-logistics/img01.jpg",
    tech: ["Frontend: React, Tailwind"],
    link: "https://github.com/Krishnakhandelwal123/law-spector-ai",
  },
  {
    name: "GreenHive",
    img: "/images/greenhive.png",
    tech: ["Frontend: React, Tailwind"],
    link: "https://github.com/Krishnakhandelwal123/GreenHive",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#1f1f1f] py-20 flex flex-col items-center text-white"
    >
      <h2 className="text-center text-5xl font-extrabold tracking-wide mb-8 uppercase">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 w-[90%] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 1000); // Reset effect after animation
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group overflow-hidden rounded-xl shadow-lg border transition-all duration-500 hover:scale-105 ${
        index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
      }`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={handleClick}
    >
      {/* Project Image */}
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-72 object-cover transition-transform duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-110"
      />

      {/* Blurred Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 backdrop-blur-lg bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 p-6"
      >
        {/* Project Name */}
        <div className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-md transform transition-all duration-500">
          <span className="text-pink-500 font-bold">{project.name}</span>
        </div>

        {/* Tech Stack */}
        <div className="bg-white text-black px-6 py-3 rounded-lg shadow-md transform transition-all duration-500">
          <ul className="list-none text-center space-y-1">
            {project.tech.map((tech, i) => (
              <li
                key={i}
                className="text-gray-800 font-medium text-sm px-3 py-1 bg-gray-200 rounded-md"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2 rounded-lg font-semibold shadow-md transform transition-all duration-500 hover:scale-105"
            >
              Get Code →
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-500 text-gray-200 px-5 py-2 rounded-lg font-semibold shadow-md cursor-not-allowed"
            >
              Code Unavailable
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
