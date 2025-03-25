import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish && onFinish();
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
    >
      {/* Animated Divs */}
      <div className="relative flex w-full h-full">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1/6 h-full bg-zinc-800"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1.2, delay: i * 0.2, ease: "easeInOut" }}
            style={{ left: `${i * 16.666}%` }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
