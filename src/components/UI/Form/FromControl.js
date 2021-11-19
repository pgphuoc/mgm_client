import React from 'react';
import classes from './Form.module.css';

export default function FormControl({ label, value, cols }) {
  return (
    <React.Fragment>
      <label className={classes['control__label']}>{label}</label>
      <div className={classes['control__input']}>
        <input
          className={classes['form-input']}
          type="text"
          defaultValue={value}
        />
      </div>
    </React.Fragment>
  );
}
