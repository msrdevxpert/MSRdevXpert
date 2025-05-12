import React from 'react';

const Blog = () => {
    return (
        <section className="blog-section">
        {/* Background Blob */}
      <div className="orange-ball"></div>
            <div className="blog-container">
                <h1 className="gradient-title"><span>Latest</span> Blog</h1>
                <p className="section-subtitle">Insights, updates & development tips from our team</p>

                <div className="blog-grid">
                    <div className="blog-card">
                        <img src="/blog1.jpg" alt="React Development" />
                        <div className="blog-content">
                            <h3>Why React is Our Go-To for Frontend Development</h3>
                            <p>From modular components to lightning-fast performance, explore why React helps us deliver dynamic user experiences.</p>
                            <a href="/blog/react-frontend">Read More →</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="/blog2.jpg" alt="Spring Boot" />
                        <div className="blog-content">
                            <h3>Backend Brilliance with Spring Boot</h3>
                            <p>We break down how Spring Boot helps us build reliable, scalable, and secure APIs for our clients.</p>
                            <a href="/blog/spring-boot">Read More →</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="/blog3.jpg" alt="Cloud Hosting" />
                        <div className="blog-content">
                            <h3>Choosing the Right Cloud & Hosting Strategy</h3>
                            <p>Understand the pros and cons of AWS, DigitalOcean, and shared hosting—and how we choose what's best for your app.</p>
                            <a href="/blog/cloud-hosting">Read More →</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="/blog4.jpg" alt="DevOps" />
                        <div className="blog-content">
                            <h3>DevOps in Action: CI/CD & Server Monitoring</h3>
                            <p>See how we implement continuous deployment pipelines and proactive monitoring to keep applications healthy and fast.</p>
                            <a href="/blog/devops-strategy">Read More →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
