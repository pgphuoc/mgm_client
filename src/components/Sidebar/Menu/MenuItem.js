import React from 'react';
import classes from './Menu.module.css';

export default function MenuItem({ name, icon, isShowMenu }) {
  return (
    <li>
      <a href="/">
        <i className={icon} />
        <span className={classes['link_name']}>{name}</span>
      </a>
      <ul
        className={`${
          isShowMenu
            ? classes['sub-menu']
            : `${classes['sub-menu']} ${classes.alt}`
        } ${classes.blank}`}
      >
        <li>
          <a className={classes['link_name']} href="/">
            {name}
          </a>
        </li>
      </ul>
    </li>
  );
}
