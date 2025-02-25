
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Contact from './Contact';



function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>}/>

  
    </Routes>
    </HashRouter>
   
  );
}

export default App;
