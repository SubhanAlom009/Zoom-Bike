import React from "react";
import { FaArrowRight, FaHeadset } from "react-icons/fa";
import "./BookBike.css";

const BookBike = () => {
  return (
    <div className="book-bike">
      {/* Checkered Top Border */}
      <div className="checkered-top-border"></div>

      {/* Main Content */}
      <div className="container book-bike-content">
        <div className="row align-items-center">
          {/* Left Side Text */}
          <div className="col-md-6">
            <h2 className="book-title">Book Your Bike It's Simple And Affordable</h2>
            <p className="book-description">
              Experience the simplicity and affordability of booking your bike with us! Explore new adventures with ease. Call now to book!
            </p>
          </div>
          {/* Right Side Contact & Button */}
          <div className="col-md-6 d-flex flex-column align-items-end">
            <div className="contact-info">
              <FaHeadset className="contact-icon" />
              <span className="contact-number">+91 8812848989</span>
            </div>
            <button className="book-button">BOOK YOUR BIKE <FaArrowRight/> </button>
          </div>
        </div>
      </div>

      {/* Checkered Bottom Border */}
      <div className="checkered-bottom-border"></div>
    </div>
  );
};

export default BookBike;
