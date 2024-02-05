import "./App.css";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contact/Contacts";
import Footer from "./Pages/Footer";

import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <>
      <div id="/">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      {/* <div id="skill">
        <Skills />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="contact">
        <Contacts />
      </div>
      <div id="skill">
        <Skills />
      </div> */}
      <Footer/>
    </>
  );
}

export default App;
