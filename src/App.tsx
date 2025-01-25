import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import AppRoutes from './routes/AppRoutes';

import './App.css';

const App: React.FC = () => {
  const location = useLocation();

  // 처음 로그인 할 때는 헤더와 푸터를 숨김
  const hideHeaderFooter = location.pathname === '/intro';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <MainContent>
        <AppRoutes />
      </MainContent>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
