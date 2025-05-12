import React from "react";
import { Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "../styles/main.css"; // Update this path as needed
import logo from "../styles/images/MSR_logo-removebg-preview.png"; // Keep this if inside /public or configured
const Footer = () => {
  return (
    <div className="footer-container">
      <Row gutter={[32, 16]} justify="space-between">
        <Col xs={24} md={8}>
        <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="/MSR_logo-removebg-preview1.png" // 🔁 Update this path as needed
              alt="MSR DevXpert Logo"
              style={{ height: "60px", width: "auto" }}
            />
            
          </div>
          <p className="footer-tagline">Building smarter digital experiences.</p>
        </Col>

        <Col xs={12} md={8}>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </Col>

        <Col xs={12} md={8}>
          <h3 className="footer-title">Contact</h3>
          <p><EnvironmentOutlined /> Kolkata, India</p>
          <p><PhoneOutlined /> +91 9876543210</p>
          <p><MailOutlined /> info@msrdevxpert.com</p>
        </Col>
      </Row>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} msr devXpert. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
