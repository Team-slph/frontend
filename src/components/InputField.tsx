import React from 'react';
import './InputField.scss';

interface InputFieldProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  showSearchIcon?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  error,
  showSearchIcon = false
}) => {
  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`input-box ${error ? 'input-error' : ''}`}
        />
        {showSearchIcon && <button className="search-icon">🔍</button>}
      </div>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default InputField;
