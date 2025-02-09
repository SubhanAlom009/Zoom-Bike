import React from 'react'
import './Countup.css'

import CountUp from "react-countup";
import { FaMotorcycle, FaUsers, FaCarSide, FaMapMarkedAlt } from "react-icons/fa";

const stats = [
    { icon: <FaMotorcycle />, value: 50, label: "Available Bike" },
    { icon: <FaUsers />, value: 1000, label: "Happy Clients" },
    { icon: <FaCarSide />, value: 2000, label: "Rentals" },
    { icon: <FaMapMarkedAlt />, value: 100000, label: "Miles Covered" },
  ];


function Countup() {
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-12 col-lg-12">
        <div className="card bg-dark text-white p-4 rounded-4 shadow-lg">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="icon-container">
                  <div className="stat-icon">{stat.icon}</div>
                </div>
                <h2 className="stat-number">
                  <CountUp end={stat.value} duration={3} />
                </h2>
                <p className="stat-label">+ {stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Countup
