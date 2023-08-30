import React from 'react';
import './service.scss';
import services1 from '../image/s1.png';
import services2 from '../image/s2.png';
import services3 from '../image/s3.png';
import services4 from '../image/s4.png';
import services5 from '../image/s5.png'; 
import { BsArrowRight } from "react-icons/bs";


const serviceData=[
  {
    id: 0,
    image: services1,
    title: 'NFT Launch and Consulting services',
    desc: 'We help you create an NFT collection from inception to launch. We take care of everything! Our entire team are NFT investors. We know what investors want. Call today to discuss your needs and goals.',
  },
  {
    id: 1,
    image: services2,
    title: 'Social Media and Marketing',
    desc: 'Marketing is the lifeblood of any project. We ensure your business goes viral! ',
  },
  {
    id: 2,
    image: services3,
    title: 'Influencer Marketing',
    desc: 'Influencer marketing propels your business into the limelight. We have direct access to a large pool of Solana influencers and top NFT collections.',
  },
  {
    id: 3,
    image: services4,
    title: 'Web3 services',
    desc: 'Web3 is the future. We have developers, designers, artists, and more. Turn your vision into reality! Well-executed SEO drives your business and website up the search engine rankings. Get ahead of your competition with us!',
  },
  {
    id: 4,
    image: services5,
    title: 'PR and Branding Strategy',
    desc: 'We promote and advertise your business worldwide to the entire NFT and crypto-focused community. Build your brand with us!',
  }, 
]
const Service = () => {
  return (
    <div className='service-area' id="section-area-ref">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-content text-xs-center">
              <p className="h4">Our Services</p>
              <div className="h3">
                We are a group of leading experts and NFT investors from Solana. We have run successful, sold-out NFT projects in the past. We can assist you in making your NFT project a success. Save time and steer clear of mistakes that could cause your ideal project to fail. Let's make a call now!
                </div>
            </div>
          </div>
        </div> 
      </div>
      <div className="service-content" id='solution'>
      {serviceData.map((item)=>(
          <>
        <div className="service-item">
        <div className="container">
          <div className="row text-xs-center">
            <div className="col-lg-6 align-self-center col-img">
              <div className="service-img">
                <img src={item.image} alt="image" width="100%" />
              </div>
            </div>
            <div className="col-lg-5 align-self-center col-text">
              <div className="service-text">
                <div className="h2">{item.title}</div>
                <p>{item.desc}</p>
                       <br/>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <div className="banner-shape2"></div>
                            <a href="#" className="btn-lg">GET IN TOUCH <BsArrowRight/></a>
                        </div>
              </div>
            </div>
          </div>
          </div>
        </div> 
          </>
          ))}
      </div>
        
    </div>
  )
}

export default Service
