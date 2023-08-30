import React, { useState, useEffect, useRef } from "react";
import bannerImage from "../image/marketing-bro.png";
import "./banner.scss";
import { BsArrowRight } from "react-icons/bs";
import CompanyLogo from "./CompanyLogo";
import { Link } from "react-scroll";
import { loadFull } from "tsparticles";
import Animate from "../Animate";

const Banner = () => {
  const [click, setClick] = useState(false);
  const particlesContainer = useRef(null);

  useEffect(() => {
    if (particlesContainer.current) {
      loadFull("particles", {
        particles: {
          number: {
            value: 50,
          },
        },
      });
    }
  }, []);

  const closeMenu = () => setClick(false);

  return (
    <div className="banner-area" id="home">
      <div ref={particlesContainer} id="particles" className="particles"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="banner-text text-xs-center">
              <div className="banner-shape"></div>
              <h1>Make Your NFT Project Go Viral</h1>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <div className="banner-shape2"></div>
                <Link
                  to="pricing"
                  className="btn-lg"
                  spy={true}
                  offset={-180}
                  onClick={closeMenu}
                >
                  GET IN TOUCH <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-7 ms-auto align-self-center">
            <div className="banner-img">
              <img src={bannerImage} alt="image" width="100%" />
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
      </div>
      <Animate />
    </div>
  );
};

export default Banner;
