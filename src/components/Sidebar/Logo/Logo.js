import React from 'react';
import classes from './Logo.module.css';

export default function Logo({ isShowMenu }) {
  return (
    <div
      className={
        isShowMenu
          ? classes['logo-details']
          : `${classes['logo-details']} ${classes.close}`
      }
    >
      <i className="fab fa-hotjar"></i>
      <span className={classes['logo_name']}>Mgm</span>
    </div>
  );
}
