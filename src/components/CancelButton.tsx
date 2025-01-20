import React from 'react';
import Button from './Button';

interface CancelButtonProps {
  onClick: () => void;
  cancelText?: string;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick, cancelText = '취소' }) => {
  return (
    <Button
      label={cancelText}
      onClick={onClick}
      backgroundColor="#CCC"
      color="#000"
      size="medium"
    />
  );
};

export default CancelButton;
