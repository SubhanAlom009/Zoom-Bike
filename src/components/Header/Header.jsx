import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { LuBike } from "react-icons/lu";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import './Header.css';

import { FaEnvelope, FaPhone, FaClock,FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"; // Close Icon

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className={`top-section ${isScrolled ? "hidden" : ""}`}>
        <div className="d-flex justify-content-between align-items-center bg-dark text-white" style={{ padding: '17px 150px' }}>
          {/* Left Side: Contact Information */}
          <div className="d-flex align-items-center gap-4">
            <p className="mb-0"><FaEnvelope className="text-warning me-2" /> zoombike.info@gmail.com</p>
            <p className="mb-0"><FaPhone className="text-warning me-2" /> +91 8812848989</p>
            <p className="mb-0"><FaClock className="text-warning me-2" /> Monday - Sunday (Available 24x7)</p>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold">Follow Us:</span>
            <a href="#" className="text-white"><FaFacebookF /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
            <a href="#" className="text-white"><FaInstagram /></a>
            <a href="#" className="text-white"><FaLinkedinIn /></a>
          </div>
        </div>
        {/* Red Line Separator */}
        <div className="separator"></div>
      </div>

      {/* Header */}
      <div className={`header ${isScrolled ? "fixed" : ""}`}>
        <div className="d-flex align-items-center justify-content-between bg-white text-dark" style={{ padding: '10px 150px' }}>
          <div>
            <Link to={"/"}><img src={logo} alt="logo" /></Link>
          </div>
          <div className="d-flex gap-5 align-items-center">
            <div className="gap-3 d-flex">
              <Link className="text-decoration-none text-dark fw-bold"><div className="link_hover">Home</div></Link>
              <Link className="text-decoration-none text-dark fw-bold"><div className="link_hover">About Us</div></Link>
              <Link className="text-decoration-none text-dark fw-bold"><div className="link_hover">Contact</div></Link>
              <Link className="text-decoration-none text-dark fw-bold"><div className="link_hover">Rental Terms & Condition</div></Link>
            </div>
            <div className="d-flex align-items-center gap-3">
              <button className="btn fw-bold bike-btn"><LuBike /> BOOK A BIKE</button>
              {/* Hamburger Menu */}
              <RxHamburgerMenu 
                style={{ fontSize: "28px", cursor: "pointer" }} 
                className="link_hover"
                onClick={() => setIsSidebarOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          <IoClose />
        </button>
        
        {/* Sidebar Content */}
        <div className="sidebar-content">
          <img src={logo} alt="Zoom Bike" width={220} className="sidebar-logo" />
          
          {/* About Us */}
          <h3 className='fs-5 fw-bold' >ABOUT US</h3>
          <p className='text-muted fs-6'>
            ZoomBike is your partner for unforgettable adventures. Rent a bike, 
            feel the thrill, and create your story on wheels!
          </p>

          {/* Contact Info */}
          <h3 className='fs-5 fw-bold'>CONTACT INFO</h3>
          <p><FaEnvelope className="text-warning me-2" /> zoombike.info@gmail.com</p>
          <p><FaPhone className="text-warning me-2" /> +91 8812848989</p>
          <p><FaMapMarkerAlt className="text-warning me-2" /> 
            Opp North East Public School, Navadaya Nagar, 
            Bye Lane 7, Patharkuchi Road, Basistha Charali
          </p>

          {/* Social Media Links */}
          <h3 className='fs-4 fw-bold'>FOLLOW US</h3>
          <div className="social-icons">
            <Link href="#" className="social-icon"><FaFacebookF /></Link>
            <Link href="#" className="social-icon"><FaTwitter /></Link>
            <Link href="#" className="social-icon"><FaInstagram /></Link>
            <Link href="#" className="social-icon"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;