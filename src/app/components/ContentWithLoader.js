'use client';

import { Triangle } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { useLoader } from '../context/LoaderContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContentWithLoader({ children }) {
  const { loading, setLoading } = useLoader();
  const [fadeOut, setFadeOut] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  useEffect(() => {
    if (!loading) return;

    setFadeOut(false);
    setKey(prev => prev + 1);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setKey(prev => prev + 1);
      setTimeout(() => setLoading(false), 800);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="relative">
      {loading && (
        <div
          key={key}
          className="content-loader-overlay"
        //   data-aos={fadeOut ? 'fade-left' : 'fade-right'}
        >
          <Triangle height="150" width="150" color="#d69b54" visible />
        </div>
      )}
      <div className={`main-content ${loading ? 'content-hidden' : ''}`}>
        {children}
      </div>
      <style jsx>{`
        .content-loader-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.9);
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .main-content.content-hidden {
          visibility: hidden;
        }
      `}</style>
    </div>
  );
}
