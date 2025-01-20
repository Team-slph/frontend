import { useState } from 'react'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ConfirmButton from './components/ConfirmButton';
import CancelButton from './components/CancelButton';
import MainContent from './components/MainContent';
import Modal from './components/Modal';
import InputField from './components/InputField';

import './App.css';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const handleConfirm = () => {
    alert('확인 버튼이 클릭되었습니다!');
  };

  const handleCancel = () => {
    alert('취소 버튼이 클릭되었습니다!');
  };

  return (
    <div className="layout">
      <Header />
      <MainContent>
        <h1>메인 콘텐츠 영역</h1>
        <ConfirmButton onClick={handleConfirm} confirmText="멍멍" />
        <CancelButton onClick={handleCancel} cancelText='냥냥' />
        <br />
        <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
        <Modal
          isOpen={isModalOpen}
          title="확인 창"
          onClose={() => setIsModalOpen(false)}
        >
          <p>이 작업을 수행하시겠습니까?</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <ConfirmButton onClick={() => alert('확인 클릭')} confirmText="확인" />
            <CancelButton onClick={() => setIsModalOpen(false)} cancelText="취소" />
          </div>
        </Modal>

        <br />

        <InputField
          type="text"
          value={searchValue}
          onChange={setSearchValue}
          showSearchIcon={true}
        />
      </MainContent>
      <Footer />
    </div>
  );
};

export default App;
