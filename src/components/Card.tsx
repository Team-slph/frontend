import React from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Card;