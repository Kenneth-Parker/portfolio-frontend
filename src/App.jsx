import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import ContactPage from "./Pages/ContactPage";

import NavBar from "./Components/NavBar";
import LocIndex from "./Pages/LocationsIndex";
import Loc1Show from "./Pages/Loc1Show";
import Loc2Show from "./Pages/Loc2Show";
import Loc3Show from "./Pages/Loc3Show";
import Footer from "./Components/Footer";



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
            <Route path="/locations/1" element={<Loc1Show />} />
            <Route path="/locations/2" element={<Loc2Show />} />
            <Route path="/locations/3" element={<Loc3Show />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <div><Footer /></div> 
      </Router>
    </div>
  );
}


export default App
