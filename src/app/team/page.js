import React from 'react';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import {FaXTwitter,FaLinkedinIn} from "react-icons/fa6";

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
                            <a href="https://www.facebook.com/profile.php?id=100008829696923" target="_blank"><Facebook /></a>
                            <a href="https://x.com/Subhojit861744" target="_blank"><FaXTwitter /></a>
                            <a href="https://www.instagram.com/Subhojit4630" target="_blank"><Instagram /></a>
                            <a href="www.linkedin.com/in/subhojitsaha808" target="_blank"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/backend.png" alt="Munna Sharma" />
                        <h3>Munna Sharma</h3>
                        <p>Backend Developer</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100010714185338&sk=about" target="_blank"><Facebook /></a>
                            <a href="https://x.com/MunnaRanaa" target="_blank"><FaXTwitter /></a>
                            <a href="https://www.instagram.com/munna.raana" target="_blank"><Instagram /></a>
                            <a href="https://www.linkedin.com/in/munna-rana/" target="_blank"><FaLinkedinIn /></a>

                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/cloud.png" alt="Ranit Mandal" />
                        <h3>Ranit Mandal</h3>
                        <p>Backend Developer & Cloud Engineer</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/ranitmandal17/about" target="_blank"><Facebook /></a>
                            <a href="https://x.com/MandalRanit" target="_blank"><FaXTwitter /></a>
                            <a href="https://www.instagram.com/ranit_org" target="_blank"><Instagram /></a>
                            <a href="https://www.linkedin.com/in/ranitmandal/" target="_blank"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
