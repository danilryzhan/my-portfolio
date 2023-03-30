import { Link } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ScrollSpy from "react-ui-scrollspy";

function App() {
  return (
    <div className=" bg-day">
      <Home />
      <About />
      <Portfolio />
      <NavBar />
      <SocialLinks />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
