'use client';

import React, { useState } from 'react';
import Link from "next/link";
import SmartLink from './SmartLink';

import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Image from "next/image";
import logo from "../styles/images/Logo3 (1).svg"; // Keep this if inside /public or configured


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
  <SmartLink  href="/" prefetch={false}>Home</SmartLink>
  <SmartLink  href="/about" prefetch={false}>About</SmartLink>
  <SmartLink  href="/services" prefetch={false}>Services</SmartLink>
  <SmartLink  href="/projects" prefetch={false}>Projects</SmartLink>
  <SmartLink href="/team" prefetch={false}>Team</SmartLink>
  <SmartLink href="/blog" prefetch={false}>Blog</SmartLink>
  <SmartLink href="/career" prefetch={false}>Career</SmartLink>
  <SmartLink href="/contact" prefetch={false}>Contact</SmartLink>
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
  <Menu.Item key="home"><SmartLink href="/" prefetch={false}>Home</SmartLink></Menu.Item>
  <Menu.Item key="about"><SmartLink href="/about" prefetch={false}>About</SmartLink></Menu.Item>
  <Menu.Item key="services"><SmartLink href="/services" prefetch={false}>Services</SmartLink></Menu.Item>
  <Menu.Item key="projects"><SmartLink href="/projects" prefetch={false}>Projects</SmartLink></Menu.Item>
  <Menu.Item key="team"><SmartLink href="/team" prefetch={false}>Team</SmartLink></Menu.Item>
  <Menu.Item key="blog"><SmartLink href="/blog" prefetch={false}>Blog</SmartLink></Menu.Item>
  <Menu.Item key="career"><SmartLink href="/career" prefetch={false}>Career</SmartLink></Menu.Item>
  <Menu.Item key="contact"><SmartLink href="/contact" prefetch={false}>Contact</SmartLink></Menu.Item>
</Menu>

                </Drawer>
            </div>
        </header>
    );
};

export default Navbar;
