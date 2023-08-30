import React from 'react';

import Banners from '../components/Home/Banner';
import Choose from '../components/Home/Choose';
import Contact from '../components/Home/Contact';
import Service from '../components/Home/Service';

const Home = () => {
  return (
    <> 
        <Banners/>
        <Service/>
        <Choose/>
        <Contact/>
    </>
  )
}

export default Home