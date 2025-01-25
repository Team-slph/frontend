import React from 'react';
import './Header.scss';
import SearchIcon from '../assets/search.svg';
import BellIcon from '../assets/bell.svg';

interface HeaderProps {
  cdImage?: string | null;
}

const Header: React.FC<HeaderProps> = ({ cdImage }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1 className="header-logo-1 ruslan-display">T</h1>
        <h1 className="header-logo-2 russo-one">ON</h1>
        <h1 className="header-logo-3 ruslan-display">E</h1>
      </div>

      {location.pathname === '/' && (
        <div className="header-icons">
          <img src={SearchIcon} alt="Search" />
          <img src={BellIcon} alt="Notifications" />
          <div className="cd-icon">
            {cdImage ? (
              <img src={cdImage} className="cd-image" />
            ) : (
              <div className="cd-placeholder"></div>
            )}
            <div className="cd-center-dot"></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
