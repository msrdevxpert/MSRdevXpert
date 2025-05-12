'use client';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import { Upload as UploadIcon } from 'react-icons/fa'; // Or any icon library




const ApplyNow = () => {
    // const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Submitted:', values);
        message.success('Application submitted successfully!');
        form.resetFields();
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: null
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, resume: file });
    };

    return (
        <section className="apply-now-section">
        {/* Background Blob */}
      <div className="orange-ball"></div>
            <div className="apply-now-container">
                <h1 className="gradient-title"><span>Apply</span> Now</h1>
                <p className="section-subtitle">Submit your details and we’ll get in touch with you soon.</p>

                <Form onSubmit={handleSubmit} className="apply-form">
            {/* Full Name */}
            <Form.Group as={Row} className="mb-3" controlId="formName">
                <Form.Label column sm={4}>Full Name</Form.Label>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </Col>
            </Form.Group>

            {/* Email */}
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
                <Form.Label column sm={4}>Email</Form.Label>
                <Col sm={8}>
                    <Form.Control
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </Col>
            </Form.Group>

            {/* Phone Number */}
            <Form.Group as={Row} className="mb-3" controlId="formPhone">
                <Form.Label column sm={4}>Phone Number</Form.Label>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        placeholder="+91-XXXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />
                </Col>
            </Form.Group>

            {/* Position Applied For */}
            <Form.Group as={Row} className="mb-3" controlId="formPosition">
                <Form.Label column sm={4}>Position Applied For</Form.Label>
                <Col sm={8}>
                    <Form.Control
                        as="select"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
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

            {/* Upload Resume */}
            <Form.Group as={Row} className="mb-3" controlId="formResume">
                <Form.Label column sm={4}>Upload Resume</Form.Label>
                <Col sm={8}>
                    <Form.Control
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                </Col>
            </Form.Group>

            {/* Submit Button */}
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 8, offset: 4 }}>
                    <Button type="submit" className='custom-apply-btn'  variant="primary" size="lg">
                        Submit Application
                    </Button>
                </Col>
            </Form.Group>
        </Form>
            </div>
        </section>
    );
};

export default ApplyNow;
