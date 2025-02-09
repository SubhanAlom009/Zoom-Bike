import React from 'react';
import LoadingAnimation from '../Animations/DotLottie';
import './BikeSection.css';
import { available_bikes } from '../../constants/constant';

import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

function BikeSection() {
  return (
    <div className="bike-section">
      <div className="text-center">
        <div className="bike-availability">
          <p>AVAILABLE BIKE</p>
        </div>
        <h1 className='h1'>Secure Your Ride Now And Book Your Bike For An Adventure-Filled Experience!</h1>
        <LoadingAnimation />
      </div>
      {/* Available bikes */}
      <div className='d-flex justify-content-center'>
        <div className='row justify-content-center' style={{margin: '0 8em'}}>
            {
            available_bikes.map((bike) => (
                <div key={bike.id} className='col-md-3'>
                <div className="bike-card">
                    <div className="position-relative">
                        <img src={bike.img} alt={bike.name} className=" img-content" />
                        <div className="whatsapp-icon">
                            <FaWhatsapp size={35} />
                        </div>
                    </div>
                    <div className="bike-details">
                        <h5 className="mt-3 text-center">{bike.name}</h5>
                        
                        <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="price">₹ {bike.price}</span>
                        <IoCallSharp size={24} className="call-icon" />
                        </div>
                        <button className="btn book-now w-100 mt-3">BOOK NOW</button>
                    </div>
                </div>
                </div>
            ))
            }
        </div>
      </div>
   
    </div>
  );
}

export default BikeSection;
