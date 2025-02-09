import React from 'react'
import LoadingAnimation from '../Animations/DotLottie'
import bacbike from '../../assets/images/bikes/bac-bike.jpg'
import './WhyUs.css'

import { FaMotorcycle, FaMapMarkedAlt, FaThumbsUp, FaUsers } from "react-icons/fa";

function WhyUs() {

    const features = [
        {
          icon: <FaMotorcycle />,
          title: "Quality Bikes",
          description:
            "We offer a fleet of well-maintained, reliable bikes, ensuring a smooth and safe ride for every adventure.",
        },
        {
          icon: <FaMapMarkedAlt />,
          title: "Freedom to Explore",
          description:
            "With our self-drive option, you have the flexibility to explore at your own pace, discovering hidden gems and scenic routes.",
        },
        {
          icon: <FaThumbsUp />,
          title: "Easy Rental Process",
          description:
            "Our hassle-free rental process ensures that you can get on the road quickly, focusing on the journey ahead.",
        },
        {
          icon: <FaUsers />,
          title: "Customer Satisfaction",
          description:
            "We prioritize your satisfaction, providing excellent service and support throughout your rental experience.",
        },
      ];


  return (
    <div style={{position: 'relative',background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bacbike})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat', backgroundPosition: 'center', height: '100vh',paddingTop: '8em'}}>
      <div className="text-center">
        <div>
          <p className='top-text'>ZOOMBIKE</p>
        </div>
        <h1>Why Choose Us</h1>
        <LoadingAnimation />
      </div>
      <div className='d-flex justify-content-center gap-4' >
        {features.map((feature, index) => (
            <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default WhyUs
