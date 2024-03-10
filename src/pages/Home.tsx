import NavBar from "../UI/NavBar";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Hero />
      </main>
    </>
  );
}

export default Home;
