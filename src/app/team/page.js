import React from 'react';
import SubhoImage from '../styles/images/frontend.png'; // Import the image
import MunnaImage from '../styles/images/backend.png'; // Import the image
import RanitImage from '../../../public/cloud.png'; // Import the image
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
                    </div>
                    <div className="team-card">
                    <img src="/backend.png" alt="Munna Sharma" />
                        <h3>Munna Sharma</h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="team-card">
                        <img src="/cloud.png" alt="Ranit Mondal" />
                        <h3>Ranit Mondal</h3>
                        <p>Backend Developer & Cloud Engineer</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
