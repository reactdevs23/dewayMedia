import React, { useState,useEffect } from "react";
import {Link} from 'react-scroll';
import logo from "../image/logob.png";
import "./navbar.scss";
import { BsArrowRight } from "react-icons/bs";
const Navbar = () => {
  const [click, setClick] = useState(false) 
  const closeMenu = () => setClick(false)

  const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
        });
    }, []); 
  return (
    <nav className={scroll ? "navbar navbar-expand-lg navBar-top navScroll" : "navbar navbar-expand-lg navBar-top"}>
      <div className="container">
        <Link to="home" onClick={closeMenu} className="navbar-brand"> 
          <img src={logo} alt="logo" /> 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src={logo} alt="logo" />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-lg-3">
              <li className="nav-item"> 
                <Link to="about" activeClass="active" className="nav-link" spy={true} offset={-80} onClick={closeMenu}>
                  About Us
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="solution" activeClass="active" className="nav-link" spy={true} offset={-80} onClick={closeMenu}>
                  Launch NFTs
                </Link>
                
              </li>
              <li className="nav-item"> 
                <Link to="section-area-ref" activeClass="active" className="nav-link" spy={true} offset={-80} onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item"> 
                <Link to="pricing" activeClass="active" className="nav-link" spy={true} offset={-180} onClick={closeMenu}>
                  Pricing
                </Link>
              </li>
            </ul>
            <div className="d-lg-flex d-grid  gap-2 gap-lg-4 ms-lg-4 align-self-center navBtns">
                <Link to="pricing" activeClass="active" className="nav-btn btn-bc" spy={true} offset={-180} onClick={closeMenu}>
                Get Started <BsArrowRight/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
