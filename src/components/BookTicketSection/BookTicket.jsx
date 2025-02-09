import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FaUser, FaPhone, FaCalendar, FaClock, FaMotorcycle, FaArrowRight } from "react-icons/fa";

import './BookTicket.css';

function BookTicket() {
  return (
    <div className="position-relative z-3">
    <div className="book-ride-container">
      <h3 className="text-center fw-bold">
        Book Your Ride <span className="text-success">(Mandatory Documents: Original Driving Licence and Aadhar card)</span>
      </h3>
      
      <Form className="mt-3 form-container">
        <Row className="mb-3">
          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label>Travel Destination</Form.Label>
              <div className="input-group">
                <span className="input-group-text"><FaUser /></span>
                <Form.Control type="text" placeholder="Travel Destination" />
              </div>
            </Form.Group>
          </Col>

          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label>Enter your Name</Form.Label>
              <div className="input-group">
                <span className="input-group-text"><FaUser /></span>
                <Form.Control type="text" placeholder="Name" />
              </div>
            </Form.Group>
          </Col>

          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label>Enter Your Phone Number</Form.Label>
              <div className="input-group">
                <span className="input-group-text"><FaPhone /></span>
                <Form.Control type="text" placeholder="Phone Number" />
              </div>
            </Form.Group>
          </Col>

          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label>Bike Model</Form.Label>
              <div className="input-group">
                <span className="input-group-text"><FaMotorcycle /></span>
                <Form.Select>
                  <option>Choose Model</option>
                  <option>Yamaha R15</option>
                  <option>Royal Enfield</option>
                  <option>Honda Activa</option>
                </Form.Select>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label>Pick Up Date</Form.Label>
              <div className="input-group">
                <span className="input-group-text"><FaCalendar /></span>
                <Form.Control type="date" />
              </div>
            </Form.Group>
          </Col>

          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label>Drop Date</Form.Label>
              <div className="input-group">
                <span className="input-group-text"><FaCalendar /></span>
                <Form.Control type="date" />
              </div>
            </Form.Group>
          </Col>

          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label>Pick Up Time</Form.Label>
              <div className="input-group">
                <span className="input-group-text"><FaClock /></span>
                <Form.Control type="time" />
              </div>
            </Form.Group>
          </Col>

          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label>Drop Time</Form.Label>
              <div className="input-group">
                <span className="input-group-text"><FaClock /></span>
                <Form.Control type="time" />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} lg={3}>
            <Form.Group>
              <Form.Label>Are you 18 +</Form.Label>
              <Form.Select>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} lg={3} className="d-flex align-items-end">
            <Button className="w-100 book-bike-btn d-flex mt-2 align-items-center border-0 justify-content-center gap-2">
              BOOK BIKE <FaArrowRight className="arrow-icon" />
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
    </div>
  )
}

export default BookTicket
