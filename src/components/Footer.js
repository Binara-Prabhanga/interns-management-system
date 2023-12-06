// Footer.js
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#344e41',
    color: '#dad7cd',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    padding: '20px',
  };

  const copyrightStyle = {
    margin: '0',
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <p style={copyrightStyle}>&copy; 2023 Binara Prabhanga. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
