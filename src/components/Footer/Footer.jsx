import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Footer.css";

import { TiArrowForward } from "react-icons/ti";
import logo from '../../assets/images/logof.webp';
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-light" style={{ padding: "70px 70px 30px 70px" }}>
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4">
            <h5 className="text-success">
              <img src={logo} alt="ZoomBike Logo" width="200" className="me-2" />
            </h5>
            <p style={{ fontSize: "1.1rem" }}>
              ZoomBike offers top-quality rentals for solo riders, groups, and families, providing freedom and
              adventure to explore new destinations at leisure.
            </p>
            <p style={{ fontSize: "1.05rem" }}>
              <span className="text-warning"><FaLocationDot /></span> Opp North East public school, navadaya nagar, bye lane 7,
              patharkuchi road, basistha charali
            </p>
          </div>

          {/* Middle Section */}
          <div className="col-md-4">
            <h5 className="border-bottom border-warning pb-2">Quick Links</h5>
            <ul className="list-unstyled">
              <Link style={{textDecoration:"none", color:"inherit"}}><li><TiArrowForward style={{color:"#ffc107"}} /> Home</li></Link>
              <Link style={{textDecoration:"none", color:"inherit"}}><li><TiArrowForward style={{color:"#ffc107"}} /> About Us</li></Link>
              <Link style={{textDecoration:"none", color:"inherit"}}><li><TiArrowForward style={{color:"#ffc107"}} /> Terms & Condition</li></Link>
              <Link style={{textDecoration:"none", color:"inherit"}}><li><TiArrowForward style={{color:"#ffc107"}} /> Contact Us</li></Link>
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-md-4">
            <h5 className="border-bottom border-warning pb-2">Contact Us On</h5>
            <p><FaWhatsapp className="text-p me-2" /> +91 8812848989</p>
            <p><FaPhone className="text-p me-2" /> +91 8812848989</p>
            <p><FaEnvelope className="text-p me-2" /> zoombike.info@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center d-flex justify-content-between mt-4 pt-3">
          <p>© Copyright 2025 <span className="text-warning">Zoombike</span> All Rights Reserved. Designed by <span className="text-warning">SOFTNUE</span></p>
          <div>
            <FaFacebook className="me-3 text-warning fs-4" />
            <FaTwitter className="me-3 text-warning fs-4" />
            <FaLinkedin className="me-3 text-warning fs-4" />
            <FaYoutube className="text-warning fs-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
