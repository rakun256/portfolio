import "./App.css";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Navbar from "./Component/Navbar/navbar";
import MobileNavbar from "./Component/MobileNavbar/mobileNavbar"
import MainPage from "./Pages/MainPage/mainPage";
import AboutMe from "./Pages/AboutMe/aboutMe";
import Projects from "./Pages/Projects/projects";
import Skills from "./Pages/Skills/skills";
import Contact from "./Pages/Contact/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar-app">
          <Navbar />
        </div>
        <div className="mobile-navbar-app"><MobileNavbar/></div>

        <div className="app-renderer">
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/about" element={<AboutMe />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
