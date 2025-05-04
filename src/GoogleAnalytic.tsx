import { useLocation } from 'react-router-dom';

function GoogleAnalytic() {
  const location = useLocation();

  console.log("GoogleAnalytic", location)
  
  return null;
}

export default GoogleAnalytic