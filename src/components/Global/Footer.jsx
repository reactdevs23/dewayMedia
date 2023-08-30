import React from 'react';
import logo from '../image/logo.png';
import { FaTwitter,FaYoutube,FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa";
import './footer.scss';
const footerData = [
    {
        id: 0,
        title: 'Advertisers',
        link: [
            'Pricing',
            'Case Studies', 
        ]
    },
    {
        id: 1,
        title: 'Influencers',
        link: [
            'Community', 
            'Influencer FAQ', 
        ] 
    },
    {
        id: 2,
        title: 'Solutions',
        link: [
            'Services', 
        ] 
    },
    {
        id: 3,
        title: 'Resources',
        link: [
            'Meet The Team', 
            'Customer Support',   
        ] 
    },
    {
        id: 4,
        title: 'Contact',
        link: [
            'Email: info@dewaymedia.com', 
        ] 
    }
]
const Footer = () => {
  return (
    <div className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer-widget">
                        <div className="footer-logo text-center">
                            <a href="#"><img src={logo} alt="logo" /></a>
                        </div>
                        <div className="social-icon text-center">
                            <a target="_blank" href="https://twitter.com/MediaDeway"><FaTwitter/></a>
                            <a target="_blank" href="https://www.youtube.com/channel/UCUxy2bv6yNm29eT0fNcg-8w"><FaYoutube/></a>
                            <a href="#"><FaFacebookF/></a>
                            <a target="_blank" href="https://www.linkedin.com/in/dewaymedia/"><FaLinkedinIn/></a>
                            <a href="#"><FaInstagram/></a>
                        </div>
                        <div className="footer-list-content">
                            {footerData.map((item)=>(  
                            <div className="footer-list">
                                <div className="h4">{item.title}</div>
                                <ul>
                                    {item.link.map((list)=>( 
                                        <li><a target="_blank" href="https://twitter.com/MediaDeway">{list}</a></li>
                                    ))}
                                </ul>
                            </div> 
                            ))}
                        </div>
                    </div>
                </div>
            </div> 
            <hr />
            <div className="copyright-content">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="copyright">
                            <p>@ 2022 All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="text-lg-end">
                            <p>Made with love by Deway Media</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
