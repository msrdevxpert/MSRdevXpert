// app/components/Footer.jsx
"use client";

import React, { useState, useEffect } from "react"; // make sure hooks are imported if used
import { Row, Col } from "antd";
import { Facebook, Instagram } from "react-bootstrap-icons";
import { FaXTwitter, FaLinkedinIn, FaPinterest   } from "react-icons/fa6";
import { LuArrowRightToLine } from "react-icons/lu";
import { BsYoutube } from "react-icons/bs";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "../styles/main.css";

const Footer = () => {
  const date = new Date();
    const year = date.getFullYear();

  return (
    <div className="footer-container">
      <Row gutter={[32, 16]} justify="space-between">
        <Col xs={24} md={8} className="col-logo" style={{ paddingLeft: "100px" }}>
          <div
            className="footer-logo"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <img
              src="/MSR_logo-removebg-preview1.png"
              alt="MSR DevXpert Logo"
              style={{ height: "60px", width: "auto" }}
            />
          </div>
          <p className="footer-tagline">Building smarter digital experiences.</p>

          <div className="footer-social-icons">
            <a href="http://facebook.com/msrDevXpert" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://x.com/MSR_DevXpert" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/msr_devxpert/" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="http://linkedin.com/company/msr-devxpert" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@MSR_DevXpert" target="_blank" rel="noopener noreferrer">
              <BsYoutube />
            </a>
            <a href="http://www.pinterest.com/MSR_DevXpert" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
          </div>
        </Col>

        <Col xs={24} md={8} style={{ paddingLeft: "150px" }}>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about"><LuArrowRightToLine className="footer-icon"/> About Us</a></li>
            <li><a href="/services"><LuArrowRightToLine className="footer-icon"/> Services</a></li>
            <li><a href="/careers"><LuArrowRightToLine className="footer-icon"/> Careers</a></li>
            <li><a href="/contact"><LuArrowRightToLine className="footer-icon"/> Contact</a></li>
          </ul>
        </Col>

        <Col xs={24} md={8} className="footer-contact" >
          <h3 className="footer-title">Contact</h3>
          <p><EnvironmentOutlined /> <a
  href="https://www.google.com/maps/place/Ecostation+Business+Tower..."
  target="_blank"
  rel="noopener noreferrer"
  className="custom-link"
>
  Ecostation Business Tower, Street Number 9, BP Block, Sector V,
  Bidhannagar, Kolkata, West Bengal 700091
</a></p>
          <p><PhoneOutlined /><a href="tel:+917667229002"
  className="custom-link"> +91 7667229002</a></p>
          <p><MailOutlined /> <a
  href="mailto:msrdevxpert@gmail.com"
  className="custom-link"
>
  msrdevxpert@gmail.com
</a></p>
        </Col>
      </Row>

      <div className="footer-bottom" style={{ textAlign: "center", marginTop: "2rem" }}>
        <p>&copy; {year} MSR DevXpert. All rights reserved. Crafted with precision and innovation.</p>
      </div>
    </div>
  );
};

export default Footer;
