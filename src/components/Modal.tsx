import React from 'react';
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='d-flex'>
          {title && <h2 className="modal-title">{title}</h2>}
          <button className='bg-white w-25' onClick={onClose}>x</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;