
import { Link } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


function App() {
 return (
  <div className=" bg-day">
  <NavBar/>
  <Home/>
  <About/>
  <Portfolio/>
  <SocialLinks/>
  <Skills/>
  <Experience/>
  </div>
  );

};


export default App;
