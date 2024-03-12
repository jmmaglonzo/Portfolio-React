import NavBar from "../UI/NavBar";
import About from "../components/About";
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
      </main>

      <PortfolioFooter />
    </>
  );
}

export default Home;
