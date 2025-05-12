// app/layout.js or app/layout.jsx

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../app/styles/main.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import ScrollToTop from "../app/components/ScrollToTop"; // Import the ScrollToTop component
import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout } from "antd"; // ✅ make sure this comes from 'antd'

const { Content } = Layout;

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });



export const metadata = {
  title: "MSR DevXpert",
  description: "Top IT Solutions in Kolkata: Web & App Development by Experts",
  keywords: ["web development", "app development", "Kolkata", "MSR DevXpert", "IT solutions"],
  openGraph: {
    title: "MSR DevXpert - Best Web & App Development",
    description: "Leading IT service provider for businesses in Kolkata and beyond.",
    url: "https://yourdomain.com",
    siteName: "MSR DevXpert",
    images: [
      {
        url: "https://yourdomain.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSR DevXpert",
    description: "We build websites and apps that grow your business.",
    site: "@yourtwitter",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout>
        <ScrollToTop /> {/* Add ScrollToTop component here */}
          <Navbar />
          <div className="layout-container" style={{ padding: "2rem", background: "#f0f2f5", minHeight: "80vh" }}>
            {children}
            </div>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
