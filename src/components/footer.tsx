import { useState, useEffect } from 'react';

const Footer = () => {
  const [location, setLocation] = useState('Detecting...');
  
  useEffect(() => {
    // Basic IP-based location API example
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setLocation(`${data.city}, ${data.country_name}`))
      .catch(() => setLocation('Global Presence'));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-info">
        <p>© 2024 Modern Brand. All rights reserved.</p>
        <p>Visitor Location: <strong>{location}</strong></p>
        <p>Live Count: <strong>1,402</strong></p>
      </div>
    </footer>
  );
};
export default Footer;