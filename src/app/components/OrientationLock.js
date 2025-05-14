"use client";

import { useEffect, useState } from "react";

const OrientationLock = () => {
  const [isTooSmall, setIsTooSmall] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth < 768 && !dismissed) {
      setIsTooSmall(true);
    } else {
      setIsTooSmall(false);
    }
  };

  useEffect(() => {
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [dismissed]);

  const handleOk = () => {
    setDismissed(true);
    setIsTooSmall(false);
  };

  return isTooSmall ? (
    <div style={overlayStyle}>
      <div style={messageStyle}>
        <h2 style={{ marginBottom: "1rem" }}>Desktop Mode Recommended</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          For best experience, use a larger screen or rotate your device to landscape.
        </p>
        <button style={buttonStyle} onClick={handleOk}>
          OK
        </button>
      </div>
    </div>
  ) : null;
};

export default OrientationLock;

// Inline Styles
const overlayStyle = {
  position: "fixed",
  zIndex: 9999,
  background: "#000000e0",
  color: "#fff",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "2rem",
};

const messageStyle = {
  maxWidth: "400px",
};

const buttonStyle = {
  background: "transparent",
  border: "2px solid #fff",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "4px",
  fontSize: "1rem",
  cursor: "pointer",
};
