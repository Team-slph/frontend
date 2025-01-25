import React from 'react';
import { useLocation } from 'react-router-dom';
import './MainContent.scss';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const location = useLocation();

  // intro 페이지 여부에 따라 높이 설정
  const isIntroPage = location.pathname === '/intro';
  const mainContentClass = isIntroPage ? 'full-height' : 'adjusted-height';

  return <main className={`main-content ${mainContentClass}`}>{children}</main>;
};

export default MainContent;
