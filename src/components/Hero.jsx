import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

export const Hero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        
        <SmoothScrollHero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};



const SECTION_HEIGHT = 1500;

const SmoothScrollHero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};


const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [0, 1500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ clipPath, opacity }}
    >
      <video
        className="w-full h-full object-cover"
        src="./src/assets/bg2.mp4" 
        autoPlay
        loop
        muted
      />
    </motion.div>
  );
};


const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFPW1_xdKfPGJAZivYfhDzd3rm5_qcMfdug&s"
        alt="An example of a space launch"
        start={-200}
        end={200}
        className="w-3/4 sm:w-1/2 md:w-1/3"
      />
      <ParallaxImg
        src="https://images8.alphacoders.com/136/thumb-1920-1360958.jpeg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="w-full sm:w-2/3 md:w-1/2 mx-auto"
      />
      <ParallaxImg
        src="https://wallpaper.dog/large/20342733.jpg"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="w-3/4 sm:w-1/2 md:w-1/3 ml-auto"
      />
      <ParallaxImg
        src="https://img.freepik.com/premium-photo/horror-illustration-boy-shadow-monster-hiding-darkness_910054-78665.jpg?semt=ais_hybrid"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="w-3/4 sm:w-5/12 md:w-5/12 ml-12"
      />
    </div>
  );
};


const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Krishna Khandelwal
      </motion.h1>
      <ScheduleItem title="Web Developer" date="I am a passionate Web Developer with expertise in frontend and full-stack development, specializing in modern web technologies. With hands-on experience in React.js, Tailwind CSS, and MERN stack, I build visually appealing, responsive, and efficient web applications." location="Florida" />
      <ScheduleItem title="Competitive Programming" date="I actively participate in Competitive Programming (CP) to enhance my problem-solving skills and algorithmic thinking. With a strong foundation in C++ and data structures & algorithms (DSA), I tackle complex challenges on platforms like Codeforces, CodeChef, and LeetCode." location="Texas" />
      <ScheduleItem title="Networking & IoT" date="I have a strong foundation in Networking and IoT (Internet of Things), combining my knowledge of CCNA-certified networking principles with hands-on experience in IoT-based applications." location="Florida" />
      <ScheduleItem title=" Real-time Communication:" date="I have experience implementing real-time communication in web applications using Socket.io and WebSockets, enabling seamless live interactions for users." location="Florida" />
      <ScheduleItem title="Database Management" date="I have hands-on experience in database design, management, and optimization, ensuring efficient storage, retrieval, and manipulation of data for scalable applications." location="California" />
      <ScheduleItem title=" Version Control & Deployment" date="I have experience in version control and deployment strategies, ensuring smooth development workflows and scalable application hosting." location="California" />
      <ScheduleItem title="Leadership & Communication" date="I have developed strong leadership and communication skills through various technical and organizational roles, allowing me to collaborate effectively, mentor peers, and drive projects to success." location="Texas" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      
    </motion.div>
  );
};

export default Hero;