
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './assets/routes/Homepage/Home';
import Cards from "./assets/Cards/Cards";
import Blog from './assets/routes/Homepage/Blog'; 
import AboutUs from "./assets/routes/Homepage/Aboutus";
import Navbar from "./assets/routes/Homepage/Navbar";


function App() {
  
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

       
