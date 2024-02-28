import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  const headerStyle = {
    maxWidth: '30%',
    maxHeight: '30px',
    margin: '40px auto 0', 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
  };

  return (
    <div style={headerStyle}>
      <img src={Logo} alt="main logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
};

export default Header;
