import React from 'react';
import classes from './Wrapper.module.css';

export default function Wrapper({ children }) {
  return <section className={classes['wrapper-section']}>{children}</section>;
}
