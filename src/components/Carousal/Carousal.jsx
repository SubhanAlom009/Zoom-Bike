import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

import './Carousal.css';

import bike1 from '../../assets/images/bikes/bike1.jpg';
import bike2 from '../../assets/images/bikes/bike2.jpg';
import bike3 from '../../assets/images/bikes/bike3.jpeg';

function CarouselFunction() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Animations with delays to make each element appear sequentially
  const fadeInTop = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.3, duration: 0.8, ease: 'easeOut' } 
    },
  };

  const fadeInBottom = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.6, duration: 0.8, ease: 'easeOut' } // Slight delay after title
    },
  };

  const fadeInButtons = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.9, duration: 0.8, ease: 'easeOut' } // Buttons appear last
    },
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex); // Resets animations on slide change
  };

  const slides = [
    {
      image: bike1,
      text: "Explore Your City: ZoomBike's Self-Ride Rentals Make It Easy and Fun",
    },
    {
      image: bike2,
      text: "Ready for an adventure? Rent a bike and explore Guwahati and Assam with ZoomBike!",
    },
    {
      image: bike3,
      text: "Experience the Open Road: ZoomBike Offers Easy, Affordable Bike Rentals!",
    },
  ];

  return (
    <Carousel 
      indicators={false}
      interval={5000} 
      prevIcon={<div className="carousel-button"><FaArrowLeft /></div>}
      nextIcon={<div className="carousel-button"><FaArrowRight /></div>}
      activeIndex={activeIndex}
      onSelect={handleSelect}
      style={{ marginTop: '8em' }}
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image-container">
            <img src={slide.image} className="d-block w-100 carousel-image" alt={`bike${index + 1}`} />
            <div className="overlay"></div>
            <Carousel.Caption>
              <motion.h3 
                className="caption-title" 
                initial="hidden" 
                animate={activeIndex === index ? "visible" : "hidden"} 
                variants={fadeInTop}
              >
                WELCOME TO ZOOMBIKE
              </motion.h3>
              <motion.p 
                className="caption-text" 
                initial="hidden" 
                animate={activeIndex === index ? "visible" : "hidden"} 
                variants={fadeInBottom}
              >
                {slide.text}
              </motion.p>
              <motion.div 
                className="d-flex justify-content-center gap-3 mt-3" 
                initial="hidden" 
                animate={activeIndex === index ? "visible" : "hidden"} 
                variants={fadeInButtons}
              >
                <button className="custom-btn rent-now">
                  RENT NOW <FaArrowRight className="arrow-icon" />
                </button>
                <button className="custom-btn call-now">
                  CALL NOW <FaArrowRight className="arrow-icon" />
                </button>
              </motion.div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFunction;
