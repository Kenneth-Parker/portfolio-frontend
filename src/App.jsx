import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

import NavBar from "./Components/NavBar";
import LocIndex from "./Pages/locationsIndex";

function App() {


  return (
    <div>
      <Router>
       <div><NavBar /></div> 
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/coats" element={<Index />} />
            <Route path="/coats/new" element={<New />} />
            <Route path="/coats/:id" element={<Show />} />
            <Route path="/coats/:id/edit" element={<Edit />} />
            <Route path="/locations" element={<LocIndex />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}


export default App
