import NavBar from "../UI/NavBar";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import PortfolioFooter from "../components/PortfolioFooter";
import ProjectSection from "../components/ProjectSection";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectSection />
        <Contact />
      </main>
      <PortfolioFooter />
    </>
  );
}

export default Home;
