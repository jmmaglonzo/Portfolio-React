import NavBar from "../UI/NavBar";
import About from "../components/About";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default Home;
