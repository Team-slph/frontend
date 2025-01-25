import React from 'react';
import './InputField.scss';
import searchIcon from '../assets/search.svg';

interface InputFieldProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  showSearchIcon?: boolean;
  width?: string;  // 너비 조절 prop 추가
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  error,
  showSearchIcon = false,
  width = '100%',  // 기본 너비 설정
}) => {
  return (
    <div className="input-field" style={{ width }}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`input-box ${error ? 'input-error' : ''}`}
        />
        {showSearchIcon && (
          <button className="search-icon">
            <img src={searchIcon} alt="Search" />
          </button>
        )}
      </div>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default InputField;
