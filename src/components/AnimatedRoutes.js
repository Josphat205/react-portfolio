import React from "react";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import Work from "./Work";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";
import Cert from "./Cert";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/cert" element={<Cert />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
