import NavBar from "../UI/NavBar";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import PortfolioFooter from "../components/PortfolioFooter";
import ProjectSection from "../components/ProjectSection";
import Skills from "../components/Skills";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Fade triggerOnce={true}>
          <About />
          <Skills />
        </Fade>
        <ProjectSection />
        <Contact />
      </main>
      <PortfolioFooter />
    </>
  );
}

export default Home;
