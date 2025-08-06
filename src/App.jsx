import Navigation from "./components/navigation";
import Home from "./sections/Home";
import MyWork from "./sections/Mywork";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <MyWork />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
