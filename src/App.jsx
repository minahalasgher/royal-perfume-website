import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import AboutSection from "./components/AboutSection";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection/>
      <AboutSection/>
       <Reviews />
       <Contact/>
    </>
  );
}

export default App;