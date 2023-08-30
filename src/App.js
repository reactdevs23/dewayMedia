import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Global/Navbar";

import './style.scss';
import Home from "./pages/Home";
import Footer from "./components/Global/Footer";
function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
