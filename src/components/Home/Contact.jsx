import React, { useState } from 'react'
import './contact.scss'
import usImage from '../image/us-bro.png';
import { BsArrowRight } from "react-icons/bs";
const Contact = () => {

    const [formField, setFormField] = useState({})
    const [processing, setProcessing] = useState(false)
    const [rec, setRec] = useState(false)

    const handleOnChnage = (e) => {
        const currentInfo = formField
        currentInfo[e.target.name] = e.target.value
        setFormField(currentInfo)
        console.log(formField)
    }



    const handleSubmit = e => {
        setRec(false)
        setProcessing(true)
        e.preventDefault()
        fetch('https://dewaymedia.herokuapp.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formField)
        })
            .then(res => res.json())
            .then(data => {
                if (data === "success") {
                    setProcessing(false)
                    setRec(true)
                    e.target.reset()
                }
            })
    }

    return (
        <div className='contact-area' id='pricing' >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center order-1 order-lg-0">
                        <div className="form-title">
                            <div className="h3 text-white">Lets Talk <br /> Coffee Is On Us</div>
                            <p className='text-white'>
                                This is a free, and non-binding strategy call with Deway Media. In this call, we will elaborate on social media marketing strategies we could tailor and implement for your particular WEB3 business, to heavily boost the growth of your NFTs and community development.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-content">
                            <div className="h2">MAKE AN ENQUIRY</div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-form d-grid gap-3">
                                    <input onChange={handleOnChnage} className="required" type="text" name='first_name' required placeholder='First Name*' />
                                    <input onChange={handleOnChnage} className="required" type="text" name='last_name' required placeholder='Last Name*' />
                                    <input onChange={handleOnChnage} className="required" type="email" name='email' required placeholder='Email*' />
                                    <input onChange={handleOnChnage} type="text" name='url' placeholder='Website url' />

                                    <label htmlFor="dropdown">What services are you interested in?</label>
                                    <select onChange={handleOnChnage} name="Services_Interest" id='dropdown'>
                                        <option selected>Please select one</option>
                                        <option>NFT Launch </option>
                                        <option>Social Media Marketing </option>
                                        <option>Influencer Marketing</option>
                                        <option>Web3 services</option>
                                        <option>PR and Branding</option>
                                    </select>
                                    <input onChange={handleOnChnage} type="text" name='budget' placeholder='Budget' />
                                    <textarea onChange={handleOnChnage} name="message" placeholder='Message'></textarea>
                                    <button className="btn-lg text-white">{processing ? "SUBMITTING..." : "SUBMIT NOW "}<BsArrowRight /></button>
                                    <label>{rec && "Your message has been submitted succesfully. We will back to you as soon as possible. Thanks for your interst."}</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
