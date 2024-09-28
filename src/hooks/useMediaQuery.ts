import { useEffect, useState } from 'react';

export default function useMediaQuery() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQueryLists = {
      mobile: window.matchMedia('(max-width: 479px)'),
      tablet: window.matchMedia('(min-width: 480px) and (max-width: 767px)'),
      desktop: window.matchMedia('(min-width: 768px)'),
    };

    const handleMediaQueryChange = () => {
      setIsMobile(mediaQueryLists.mobile.matches);
      setIsTablet(mediaQueryLists.tablet.matches);
      setIsDesktop(mediaQueryLists.desktop.matches);
    };

    handleMediaQueryChange();

    Object.values(mediaQueryLists).forEach((mql) => {
      mql.addEventListener('change', handleMediaQueryChange);
    });

    return () => {
      Object.values(mediaQueryLists).forEach((mql) => {
        mql.removeEventListener('change', handleMediaQueryChange);
      });
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
}
