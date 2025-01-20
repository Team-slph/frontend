import React from 'react';
import './Footer.scss';

import HomeIcon from '../assets/home.svg';
import MenuIcon from '../assets/menu.svg';
import RadioIcon from '../assets/radio.svg';
import PlayListIcon from '../assets/music-playlist.svg';
import SearchIcon from '../assets/search.svg';

const menuItems = [
  { label: '홈', icon: HomeIcon },
  { label: '새로운 항목', icon: MenuIcon },
  { label: '라디오', icon: RadioIcon },
  { label: '보관함', icon: PlayListIcon },
  { label: '검색', icon: SearchIcon }
];

const Footer: React.FC = () => {
    return (
      <footer className="footer">
        {menuItems.map((item, index) => (
          <button key={index} className="footer-button">
            <img src={item.icon} alt={item.label} className="footer-icon" />
            <p>{item.label}</p>
          </button>
        ))}
      </footer>
    );
  };

export default Footer;