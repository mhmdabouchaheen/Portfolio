import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";  
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import HireMe from "./pages/HireMe";   

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hireme" element={<HireMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
