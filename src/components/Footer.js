import React from 'react';
import '../styles/Footer.css'; // Import footer styles

const Footer = () => {
    return (
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Real-Time Car Parking System. All
          rights reserved.
        </p>
        <div>
          <p>
            Contact:{" "}
            <a href="mailto:srm27mohit@gmail.com">shreya.shristi27@gmail.com</a>
          </p>
        </div>
      </footer>
    );
};

export default Footer;
