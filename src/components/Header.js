// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#344e41',
    padding: '10px',
    color: '#dad7cd',
    textAlign: 'center',
  };

  const navStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
  };

  const linkStyle = {
    margin: '0 10px',
    color: '#dad7cd',
    textDecoration: 'none',
  };

  const h1Style = {
    margin: '0',
  };

  return (
    <header style={headerStyle}>
      <nav>
        <h1 style={h1Style}>Interns Management System - 99x</h1>
        <ul style={navStyle}>
          <li style={linkStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li style={linkStyle}>
            <Link to="/registration" style={linkStyle}>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
