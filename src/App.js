import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Menu from "./Component/Menu/Menu"
import Home from './Component/Home/Home';
import Galerie from './Component/Galerie/Galerie';
import Tarifs from './Component/Tarifs/Tarifs';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/galerie" element={<Galerie />}/>
        <Route path="/tarifs" element={<Tarifs />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
