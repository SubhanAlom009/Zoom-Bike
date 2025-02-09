import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuBike } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"; // Close Icon
import "./Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className={`top-section ${isScrolled ? "hidden" : ""}`}>
        <div className="container-fluid bg-dark text-white py-2 d-none d-lg-flex justify-content-between">
          {/* Contact Info */}
          <div className="d-flex flex-wrap align-items-center gap-3">
            <p className="mb-0"><FaEnvelope className="text-warning me-2" /> zoombike.info@gmail.com</p>
            <p className="mb-0"><FaPhone className="text-warning me-2" /> +91 8812848989</p>
            <p className="mb-0"><FaClock className="text-warning me-2" /> 24x7 Available</p>
          </div>
          {/* Social Media */}
          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold">Follow Us:</span>
            <a href="#" className="text-white"><FaFacebookF /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
            <a href="#" className="text-white"><FaInstagram /></a>
            <a href="#" className="text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-light bg-white px-3 ${isScrolled ? "fixed-top shadow" : ""}`}>
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" height="50" />
          </Link>

          {/* Toggle Button */}
          <button className="navbar-toggler" type="button" onClick={() => setIsSidebarOpen(true)}>
            <RxHamburgerMenu className="fs-3" />
          </button>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark link_hover">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark link_hover">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark link_hover">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark link_hover">Rental Terms & Conditions</Link>
              </li>
            </ul>
            <button className="btn fw-bold bike-btn ms-3"><LuBike /> BOOK A BIKE</button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          <IoClose />
        </button>
        
        {/* Sidebar Content */}
        <div className="sidebar-content">
          <img src={logo} alt="Zoom Bike" width={180} className="sidebar-logo mb-3" />

          {/* About Us */}
          <h3 className="fs-5 fw-bold">ABOUT US</h3>
          <p className="text-muted fs-6">
            ZoomBike is your partner for unforgettable adventures. Rent a bike, 
            feel the thrill, and create your story on wheels!
          </p>

          {/* Contact Info */}
          <h3 className="fs-5 fw-bold">CONTACT INFO</h3>
          <p><FaEnvelope className="text-warning me-2" /> zoombike.info@gmail.com</p>
          <p><FaPhone className="text-warning me-2" /> +91 8812848989</p>
          <p><FaMapMarkerAlt className="text-warning me-2" /> Opp North East Public School, Navadaya Nagar</p>

          {/* Social Media Links */}
          <h3 className="fs-5 fw-bold">FOLLOW US</h3>
          <div className="social-icons d-flex gap-3">
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
