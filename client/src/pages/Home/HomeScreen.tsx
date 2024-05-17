import "./style.css";
import Services from "../Sections/Services/Services";
import Hero from "../Sections/Hero/Hero";
import { motion, useScroll } from "framer-motion";
import Faq from "../Sections/Faq/Faq";
import Footer from "../Sections/Footer/Footer";
import Contact from "../Sections/Contact/Contact";
import Team from "../Sections/Team/Team";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

  const HomeScreen = () => {
    const isMobile = useMediaQuery('(max-width:768px)')
  const [scrollOffset, setScrollOffset] = useState(0);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(window.screen.width)
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrollOffset(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className="homescreen">

      <motion.div>
        <Navbar scrollOffset={scrollOffset} />
      </motion.div>

      <motion.div
        className=" hidden lg:flex"
        style={ isMobile?{}:{
          position: "fixed",
          zIndex: 10000,
          left: 0,
          top: 0,
          height: 4,
          right: 0,
          transformOrigin: "left",
          scaleX: scrollYProgress,
          backgroundColor: "#39F",
        }}
      ></motion.div>

      <Hero />

      {isMobile?<motion.div
        initial={!isMobile?{ opacity: 0 }:{}}
        transition={{ duration: 1.5, type: "spring" }}
        whileInView={{ opacity: 1 }}
      >
        <Services />
      </motion.div>
      :<Services />
}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Team isMobile={isMobile} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Faq isMobile={isMobile} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Contact  />
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default HomeScreen;
