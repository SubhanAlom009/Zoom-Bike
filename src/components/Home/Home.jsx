import React from 'react'

import CarouselFunction from '../Carousal/Carousal';
import BookTicket from '../BookTicketSection/BookTicket';
import BikeSection from '../BikeSection/BikeSection';
import AboutUs from '../About us/AboutUs';
import WhyUs from '../Why us/WhyUs';
import Countup from '../CountupSection/Countup';
import HowToUse from '../HowToUse/HowToUse';
import BookBike from '../BookBike/BookBike';

function Home() {
  return (
    <div>
      {/* Carousel */}
      <div>
        <CarouselFunction />
      </div>
      {/* Book ticket */}
      <div>
        <BookTicket />
      </div>
      {/* Bike section */}
      <div style={{marginTop: '18em',backgroundColor:"#E0CECE"}}>
        <BikeSection />
      </div>
      {/* About us */}
      <div>
        <AboutUs />
      </div>
      {/* Why choose us */}
      <div>
        <WhyUs />
      </div>
      {/* Countup & stats */}
      <div>
        <Countup />
      </div>
      {/* How to use */}
      <div>
        <HowToUse />
      </div>
      {/* Book Bike */}
      <div>
        <BookBike />
      </div>
    </div>
  )
}

export default Home
