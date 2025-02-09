import React from "react";
import { FaMotorcycle, FaBookmark, FaMap } from "react-icons/fa";
import "./HowToUse.css";

import bike from "../../assets/images/bike.png";

const steps = [
  {
    icon: <FaMotorcycle />,
    title: "Select Rental Bike",
    description: "Explore our wide range of Bike and choose the one that best suits your needs!",
    number: "01",
  },
  {
    icon: <FaBookmark />,
    title: "Book your bike and pick it up!",
    description: 'To reserve your bike, just click "Book Now." Then, find the pickup location and choose your bike.',
    number: "02",
  },
  {
    icon: <FaMap />,
    title: "Ride Anywhere",
    description: "We do not have kms limit.",
    number: "03",
  },
];

const HowToUse = () => {
  return (
    <div className="how-to-use">
      <div className="row">
        {/* Left Content */}
        <div className="col-md-6 left-content d-flex flex-column align-items-start">
            <h5 className="section-title">HOW TO USE?</h5>
            <h2 className="main-title">
                Unlock Adventure With <span className="highlight">ZoomBike</span> Your Limitless Journey Awaits!
            </h2>
            <img src={bike} alt="bike" className="bike-image" />
        </div>

        {/* Right Steps */}
        <div className="col-md-6">
          {steps.map((step, index) => (
            <div key={index} className="step-card d-flex align-items-center">
              <div className="step-icon">{step.icon}</div>
              <div className="step-text">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="step-title">{step.title}</h5>
                  <div className="step-number">{step.number}</div>
                </div>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
