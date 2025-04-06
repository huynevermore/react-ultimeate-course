import React from 'react';

export const useResizeWindow = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(true);
  
  React.useEffect(() => {
    function checkScreenSide() {
      setIsSmallScreen(window.innerWidth < 768)
    }
    window.addEventListener('resize', checkScreenSide);

    return () => {
      window.removeEventListener('resize', checkScreenSide)
    }
  }, [])


  return {
    isSmallScreen
  }
}