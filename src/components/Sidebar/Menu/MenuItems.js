import React, { useState } from 'react';
import classes from './Menu.module.css';

export default function MenuItems({ name, icon, sMenuItems, isShowMenu }) {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const onShowSubMenu = () => {
    setIsShowSubMenu((prev) => !prev);
  };

  const showSubMenu = () => {
    return sMenuItems.map((sMenuItem) => {
      return (
        <li key={sMenuItem.name}>
          <a href={sMenuItem.path}>{sMenuItem.name}</a>
        </li>
      );
    });
  };

  return (
    <li
      className={isShowSubMenu ? classes.showMenu : ''}
      onClick={onShowSubMenu}
    >
      <div
        className={
          isShowMenu
            ? classes['icon-link']
            : `${classes['icon-link']} ${classes.close}`
        }
      >
        <a href="#">
          <i className={icon} />
          <span className={classes['link_name']}>{name}</span>
        </a>
        <i className={`fas fa-chevron-down ${classes['arrow']}`}></i>
      </div>
      <ul
        className={
          isShowMenu
            ? classes['sub-menu']
            : `${classes['sub-menu']} ${classes.close}`
        }
      >
        {showSubMenu()}
      </ul>
    </li>
  );
}
