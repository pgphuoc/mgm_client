import React from 'react';
import classes from './Form.module.css';

export default function FormControl({ label, children }) {
  return (
    <React.Fragment>
      <label className={classes['control__label']}>{label}</label>
      <div className={classes['control__input']}>{children}</div>
    </React.Fragment>
  );
}
