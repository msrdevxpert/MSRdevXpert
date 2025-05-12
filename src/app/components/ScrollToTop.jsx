'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname, isMounted]);

  return null;
};

export default ScrollToTop;