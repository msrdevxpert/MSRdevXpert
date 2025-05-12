import React from 'react';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import {FaXTwitter} from "react-icons/fa6";

const Team = () => {
    return (
        <section className="team-section">
            <div className="orange-ball"></div>
            <div className="team-container">
                <h1 className="gradient-title"><span>Our</span> Team</h1>
                <p className="section-subtitle">Meet the brains behind MSR DevXpert</p>

                <div className="team-grid">
                    <div className="team-card">
                        <img src="/frontend.png" alt="Subhojit Saha" />
                        <h3>Subhojit Saha</h3>
                        <p>Frontend Developer</p>
                        <div className="social-icons">
                            <a href="#"><Facebook /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><Instagram /></a>
                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/backend.png" alt="Munna Sharma" />
                        <h3>Munna Sharma</h3>
                        <p>Backend Developer</p>
                        <div className="social-icons">
                            <a href="#"><Facebook /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><Instagram /></a>
                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/cloud.png" alt="Ranit Mandal" />
                        <h3>Ranit Mandal</h3>
                        <p>Backend Developer & Cloud Engineer</p>
                        <div className="social-icons">
                            <a href="#"><Facebook /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><Instagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
