'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Image from "next/image";
import logo from "../styles/images/MSR_logo-removebg-preview.png"; // Keep this if inside /public or configured


const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);

    return (
        <header className="navbar-container" data-aos="fade-down" data-aos-once="true">
            <div className="navbar-logo">
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Image
  src={logo}
  alt="MSR DevXpert Logo"
  height={200}
  width={200}
  style={{ objectFit: 'contain' }}
/>

                </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="navbar-menu-desktop">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/team">Team</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/career">Career</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="navbar-menu-mobile">
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={showDrawer}
                    style={{ color: '#fff' }}
                />
                <Drawer
                    title={<span style={{ color: '#40a9ff' }}>MSR devXpert</span>}
                    placement="right"
                    onClose={onClose}
                    open={visible}
                >
                    <Menu mode="vertical" onClick={onClose}>
                        <Menu.Item key="home"><Link href="/">Home</Link></Menu.Item>
                        <Menu.Item key="about"><Link href="/about">About</Link></Menu.Item>
                        <Menu.Item key="services"><Link href="/services">Services</Link></Menu.Item>
                        <Menu.Item key="projects"><Link href="/projects">Projects</Link></Menu.Item>
                        <Menu.Item key="team"><Link href="/team">Team</Link></Menu.Item>
                        <Menu.Item key="blog"><Link href="/blog">Blog</Link></Menu.Item>
                        <Menu.Item key="career"><Link href="/career">Career</Link></Menu.Item>
                        <Menu.Item key="contact"><Link href="/contact">Contact</Link></Menu.Item>
                    </Menu>
                </Drawer>
            </div>
        </header>
    );
};

export default Navbar;
