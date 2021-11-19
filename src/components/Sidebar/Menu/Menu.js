import { uiSelector } from '@/reducers/UiReducer';
import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Menu.module.css';
import MenuItem from './MenuItem';
import MenuItems from './MenuItems';

export default function Menu() {
  const ui = useSelector(uiSelector);
  const { isShowMenu } = ui;

  const sMenu = [
    { path: '/', name: 'UI Face' },
    { path: '/', name: 'Pigments' },
    { path: '/', name: 'Box Icons' },
  ];

  const sMenu2 = [
    { path: '/', name: 'UI Face' },
    { path: '/', name: 'Pigments' },
  ];

  return (
    <ul className={classes['nav-links']}>
      <MenuItem
        icon="fas fa-th-large"
        name="Dashboard"
        isShowMenu={isShowMenu}
      />
      <MenuItem
        icon="fab fa-artstation"
        name="Function"
        isShowMenu={isShowMenu}
      />
      <MenuItems
        icon="fab fa-artstation"
        name="Dashboard"
        sMenuItems={sMenu}
        isShowMenu={isShowMenu}
      />
      <MenuItems
        icon="fab fa-artstation"
        name="Function"
        sMenuItems={sMenu2}
        isShowMenu={isShowMenu}
      />
    </ul>
  );
}
