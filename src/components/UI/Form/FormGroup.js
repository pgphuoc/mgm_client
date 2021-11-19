import React from 'react';
import classes from './Form.module.css';

export default function FormGroup({ doubleCol, children }) {
  return (
    <div
      className={`${classes['form__group']} ${
        doubleCol
          ? classes['form__group--double']
          : classes['form__group--single']
      }`}
    >
      {children}
    </div>
  );
}
