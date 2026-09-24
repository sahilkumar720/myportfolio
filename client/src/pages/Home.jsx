// The public-facing single-page site. Combines every section in order.
// Add/remove/reorder sections here.

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Services from "../components/Services.jsx";
import Work from "../components/Work.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
