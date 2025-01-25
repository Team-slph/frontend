import React from 'react';
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  width?: string;
  height?: string;
  showCloseButton?: boolean;  // X 버튼 표시 여부
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  title, 
  children, 
  onClose,
  width = '400px',
  height = 'auto',
  showCloseButton = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ width, height }}>
        <div className='modal-header'>
          {title && <h2 className="modal-title">{title}</h2>}
          {showCloseButton && (
            <button className="modal-close-btn" onClick={onClose}>
              ×
            </button>
          )}
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;