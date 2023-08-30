import React, { Component } from "react";
import Slider from "react-slick";
import './choose.scss'
import choose1 from '../image/c1.png'
import choose2 from '../image/c2.png'
import choose3 from '../image/c3.png'
import choose4 from '../image/c4.png'

const chooseData=[
    {
        id: 0,
        image: choose1,
        title: 'Our  Partners',
        desc: "We are Degods UK DAO members and members of the Degods NFT. Our team includes individuals who have held project management positions at premier NFT projects in the past.",
    },
    {
        id: 1,
        image: choose2,
        title: 'Solana NFT OGs',
        desc: "We have been here since the beginning. Started our NFT journey in the early days of Solana NFTs. Got burned and learned the hard way.",
    },
    {
        id: 2,
        image: choose3,
        title: "Influencers' Proximity",
        desc: "We have daily interactions with influencers because we are among the top holders of ETH and Solana NFTs.",
    },
    {
        id: 3,
        image: choose4,
        title: 'Successful Track Record',
        desc: "We have collaborated with leading NFT projects on the Solana blockchain and assisted them at every stage of the project with community building, social media marketing, and consulting.",
    }, 
]
const Choose = () => {
    const settings = {
        dots: true,
        infinite: true,
        className: "center", 
        centerMode: true, 
        centerPadding: "0px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 765,
              settings: {
                slidesToShow: 1, 
              }
            },
        ]
    };
  return (
    <div className='choose-area' id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-xs-center">
                        <div className="h2">Let’s Work Together</div>
                        <div className="h5">Get the best outcomes possible.</div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <Slider {...settings} className="choose-slid">
                        {chooseData.map((item)=>(
                            <>
                                <div className="chose-ss text-xs-center">
                                    <div className="chose-item">
                                        <img src={item.image} alt="logo" />
                                        <div className="h3">{item.title}</div>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </Slider> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose
