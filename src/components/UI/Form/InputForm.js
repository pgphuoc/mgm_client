import React from 'react';
import classes from './Form.module.css';

export default function InputForm({
  value,
  placeholder,
  styleClass,
  wrapStyleClass,
}) {
  return (
    <div className={`${classes['control__input']} ${wrapStyleClass}`}>
      <input
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        className={`${classes['form-input']} ${styleClass}`}
      />
    </div>
  );
}
