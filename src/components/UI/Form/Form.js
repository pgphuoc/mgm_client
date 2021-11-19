import React from 'react';
import classes from './Form.module.css';

export default function Form({ title, children }) {
  return (
    <div className={classes.form}>
      <h1 className={classes['form__title']}>{title}</h1>
      <form className={classes['form__content']}>{children}</form>
    </div>
  );
}
