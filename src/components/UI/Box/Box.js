import React from 'react';
import classes from './Box.module.css';

export default function Box({ children, styleClass }) {
  return <div className={`${classes.wrapper} ${styleClass}`}>{children}</div>;
}
