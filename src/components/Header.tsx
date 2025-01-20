import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header d-flex">
      <h1 className="header-logo-1 ruslan-display">T</h1>
      <h1 className="header-logo-2 russo-one">ON</h1>
      <h1 className="header-logo-3 ruslan-display">E</h1>
    </header>
  );
};

export default Header;
