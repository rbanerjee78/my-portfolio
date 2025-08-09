import React, { useRef, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import MyWork from "./sections/MyWork";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import LoadingBar from "react-top-loading-bar";


function App() {

 const loadingBarRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadingBarRef.current.continuousStart();

    window.addEventListener("load", () => {
      loadingBarRef.current.complete();
      setTimeout(() => setIsLoaded(true), 500);
    });
  }, []);

  if (!isLoaded) {
    return <LoadingBar ref={loadingBarRef} color="#ff4400ff" />;
  }


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
