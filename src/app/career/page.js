
import React from 'react';
import { Button } from 'react-bootstrap';
import "../styles/main.css"; // Import your global CSS
// import './Career.css';

const Career = () => {
    return (
        <section className="career-section">
        {/* Background Blob */}
      <div className="orange-ball"></div>
            <div className="career-container">
                <h1 className="gradient-title"><span>Join</span> Our Team</h1>
                <p className="section-subtitle">Be part of MSR DevXpert and build the future of web development.</p>

                <div className="career-intro">
                    <p>
                        At MSR DevXpert, we value creativity, collaboration, and continuous learning. If you're passionate
                        about creating impactful digital solutions and want to grow your career with a team that supports
                        innovation—you're in the right place.
                    </p>
                </div>

                <div className="career-grid">
                    <div className="career-card">
                        <h3>Frontend Developer</h3>
                        <p><b>Experience:</b> 1-3 years</p>
                        <p><b>Skills:</b> React.js, HTML, CSS, JavaScript</p>
                        <Button type='primary' className="custom-apply-btn"  size="large" href='/apply-now'>Apply Now</Button>
                    </div>

                    <div className="career-card">
                        <h3>Backend Developer</h3>
                        <p><b>Experience:</b> 2+ years</p>
                        <p><b>Skills:</b> Java, Spring Boot, REST APIs</p>
                        <Button type='primary' className='custom-apply-btn'  size="large" href='/apply-now'>Apply Now</Button>
                    </div>

                    <div className="career-card">
                        <h3>UI/UX Designer</h3>
                        <p><b>Experience:</b> 1+ year</p>
                        <p><b>Skills:</b> Figma, Adobe XD, Wireframing</p>
                        <Button type='primary' className='custom-apply-btn'  size="large" href='/apply-now'>Apply Now</Button>
                    </div>
                </div>

                <p className="apply-text">
                    Don’t see your role? We’re always on the lookout for talented individuals. Send your resume to <a href="mailto:msrdevxpert@gmail.com">msrdevxpert@gmail.com</a>.
                </p>
            </div>
        </section>
    );
};

export default Career;
