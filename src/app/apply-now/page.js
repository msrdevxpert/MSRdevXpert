"use client";
import Head from "next/head";

import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const ApplyNow = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null
  });

  const handleSuccessToast = () => {
    toast.success("Message sent successfully!", {
      icon: '✅',
      style: {
        backgroundColor: '#adebb3',
        color: '#000000',
        fontSize: '16px',
        padding: '12px 20px',
        borderRadius: '8px',
      },
    });
  };

  const handleErrorToast = () => {
    toast.error("Something went wrong!", {
      icon: '❌',
      style: {
        backgroundColor: '#dc3545',
        color: '#fff',
        fontSize: '16px',
        padding: '12px 20px',
        borderRadius: '8px',
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Check if file size is greater than 50KB
    if (file && file.size > 50000) {
      toast.error("File size exceeds the 50KB limit!");
      return;
    }
    setFormData((prev) => ({ ...prev, resume: file }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, phone, position, resume } = formData;

  if (!name || !email || !phone || !position || !resume) {
    toast.error("Please fill in all fields and upload a resume!");
    return;
  }

  setLoading(true);

  const reader = new FileReader();
  reader.readAsDataURL(resume);

  reader.onloadend = async () => {
    const base64Resume = reader.result;

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          position,
          resumeBase64: base64Resume,
          resumeFilename: resume.name
        }),
      });

      if (response.ok) {
        handleSuccessToast();
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          resume: null
        });
        e.target.reset();
      } else {
        handleErrorToast();
      }
    } catch (error) {
      console.error('Error sending form:', error);
      handleErrorToast();
    }

    setLoading(false);
  };
};


  return (
    <>
    <Head>
  <title>Apply Now | MSR DevXpert – Career Opportunities</title>
  <meta
    name="description"
    content="Apply now to join MSR DevXpert. Submit your details and resume to explore exciting career opportunities in full-stack web development."
  />
  <meta
    name="keywords"
    content="Apply at MSR DevXpert, MSR DevXpert careers, software developer jobs, frontend jobs, backend jobs, full-stack jobs"
  />
  <meta name="author" content="MSR DevXpert" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph for social previews */}
  <meta property="og:title" content="Apply Now | MSR DevXpert Careers" />
  <meta
    property="og:description"
    content="Kickstart your career with MSR DevXpert. We’re hiring talented developers, designers, and tech enthusiasts."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://msrdevxpert.com/apply" />
  <meta property="og:image" content="https://msrdevxpert.com/favicon.ico" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Apply Now | MSR DevXpert Careers" />
  <meta
    name="twitter:description"
    content="Submit your resume and apply to exciting opportunities at MSR DevXpert."
  />
  <meta name="twitter:image" content="https://msrdevxpert.com/favicon.ico" />

  {/* Canonical Link */}
  <link rel="canonical" href="https://msrdevxpert.com/apply" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>

    <section className="apply-now-section">
      <div className="orange-ball"></div>
      <div className="apply-now-container">
        <h1 className="gradient-title"><span>Apply</span> Now</h1>
        <p className="section-subtitle">Submit your details and we’ll get in touch with you soon.</p>

        <Form onSubmit={handleSubmit} className="apply-form">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>Full Name</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>Email</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>Phone Number</Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="phone"
                placeholder="+91-XXXXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>Position Applied For</Form.Label>
            <Col sm={8}>
              <Form.Control
                as="select"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select a role</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>Upload Resume</Form.Label>
            <Col sm={8}>
              <Form.Control
                id="formResumeFile"
                type="file"
                name="resume" // ✅ MUST match EmailJS attachment name
                accept=".pdf,.doc,.docx,.png"
                onChange={handleFileChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 8, offset: 4 }}>
              <Button
                type="submit"
                className="custom-apply-btn"
                variant="primary"
                size="lg"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </section>
    </>
  );
};

export default ApplyNow;
