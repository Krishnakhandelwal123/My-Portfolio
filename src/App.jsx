import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Preloader from "./components/Preloader";


const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading duration
  }, [location.pathname]); // Run every time route changes

  return (
    <>
      {loading && <Preloader />}
      {!loading && children}
    </>
  );
};

const App = () => {
  
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransitionWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </PageTransitionWrapper>
      </AnimatePresence>
      <Footer1 />
      <Footer />
    </Router>
  );
};

export default App;
