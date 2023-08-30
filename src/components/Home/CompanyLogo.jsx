import React from 'react'
import logo1 from '../image/airbnb.png'
import logo2 from '../image/amazon.png'
import logo3 from '../image/the-new.png'
import logo4 from '../image/honda.png'
import logo5 from '../image/walmart.png'
import logo6 from '../image/bet.png'

import './CompanyLogo.scss'

const CompanyLogo = () => {
  return (
    <ul className='CompanyLogo'>
        <li><img src={logo1} alt="logo" /></li>
        <li><img src={logo2} alt="logo" /></li>
        <li><img src={logo3} alt="logo" /></li>
        <li><img src={logo4} alt="logo" /></li>
        <li><img src={logo5} alt="logo" /></li>
        <li><img src={logo6} alt="logo" /></li>
    </ul>
  )
}

export default CompanyLogo