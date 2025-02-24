
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Contact from './Contact';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>}/>

  
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
