import React from 'react';
import Button from './Button';

interface ConfirmButtonProps {
  onClick: () => void;
  confirmText?: string;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onClick, confirmText = '확인' }) => {
  return (
    <Button
      label={confirmText}
      onClick={onClick}
      backgroundColor="#FF4081"
      color="#FFF"
      size="medium"
    />
  );
};

export default ConfirmButton;
