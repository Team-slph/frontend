import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  backgroundColor = '#FF4081',
  color = '#FFF',
  size = 'medium'
}) => {
  const sizeStyles = {
    small: { padding: '5px 10px', fontSize: '12px' },
    medium: { padding: '10px 20px', fontSize: '16px' },
    large: { padding: '15px 30px', fontSize: '20px' }
  };

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        color,
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        ...sizeStyles[size]
      }}
    >
      {label}
    </button>
  );
};

export default Button;
