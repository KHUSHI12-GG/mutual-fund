
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './assets/routes/Homepage/Home';
import Cards from "./assets/Cards/cards";

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;

       
