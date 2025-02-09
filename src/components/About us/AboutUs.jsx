import React from 'react'
import "./AboutUs.css"
import biker from '../../assets/images/bikes/aboutbike.webp'
import { FaArrowRight } from 'react-icons/fa'

function AboutUs() {
  return (
<section className="about-us-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-md-6">
            <img
              src={biker} // Replace with actual image path
              alt="Biker on an adventure"
              className="img-fluid rounded-image"
            />
          </div>
          {/* Right Text Section */}
          <div className="col-md-6">
            <p className="section-title-about">ABOUT US</p>
            <h2 className="about-heading">
              Discover Adventure With Our <span className="highlight">Self-Drive</span> Bike Rentals!
            </h2>
            <p className="about-description">
              At ZoomBike, we're more than just a self-drive bike service. We're your ticket
              to freedom and adventure on two wheels. Our top-quality rentals cater to
              solo riders, groups, and families, ensuring everyone can explore at their own
              pace. Discover new destinations, create lasting memories, and embrace the
              thrill of the open road with ZoomBike as your trusted companion.
            </p>
            <button className="btn call-now-btn">CALL NOW <FaArrowRight/></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
