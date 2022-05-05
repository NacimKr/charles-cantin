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
import Mariage from './Component/Galerie/Mariage';
import Bebe from "./Component/Galerie/Bebe";
import Grossesse from "./Component/Galerie/Grossesse";
import Couple from "./Component/Galerie/Couple";
import Portrait from "./Component/Galerie/Portrait";
import Famille from "./Component/Galerie/Famille";
import Bapteme from "./Component/Galerie/Bapteme";

function App() {
  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/galerie" element={<Galerie />}/>
        <Route path="/mariage" element={<Mariage />}/>
        <Route path="/bebe" element={<Bebe />}/>
        <Route path="/couple" element={<Couple />}/>
        <Route path="/portrait" element={<Portrait />}/>
        <Route path="/grossesse" element={<Grossesse />}/>
        <Route path="/famille" element={<Famille />}/>
        <Route path="/bapteme" element={<Bapteme />}/>
        <Route path="/tarifs" element={<Tarifs />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
