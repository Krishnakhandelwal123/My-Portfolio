import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="bg-[#1F1F1F] min-h-screen flex items-center justify-center px-6 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // Animation triggers each time it comes into view
    >
      <motion.div
        className="max-w-6xl flex flex-col md:flex-row items-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* Left Side: Image with Hover Effect */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/contact.png"
            alt="Contact illustration"
            className="w-full max-w-sm md:max-w-md rounded-lg"
          />
        </motion.div>

        {/* Right Side: Contact Text with Staggered Animation */}
        <motion.div
          className="md:w-1/2 text-center md:text-left text-white mt-6 md:mt-0"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } },
          }}
          viewport={{ once: false, amount: 0.2 }}
          whileInView="visible"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            whileHover={{ scale: 1.05, color: "#f4f4f4" }}
          >
            MAKE CONTACT
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
            viewport={{ once: false, amount: 0.2 }}
            whileInView="visible"
          >
            Get in touch to discuss a project and for a free quote:
          </motion.p>

          <a href="mailto:krishnakhandelwal1231999@gmail.com">
            <motion.button
              className="px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#d1d1d1" }}
              whileTap={{ scale: 0.95 }}
            >
              WORK WITH ME
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
