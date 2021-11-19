import { uiSelector } from '@/reducers/UiReducer';
import React from 'react';
import { useSelector } from 'react-redux';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Profile from './Profile/Profile';
import classes from './Sidebar.module.css';

export default function Sidebar() {
  const ui = useSelector(uiSelector);
  const { isShowMenu } = ui;

  return (
    <div
      className={
        isShowMenu ? classes.sidebar : `${classes.sidebar} ${classes.close}`
      }
    >
      <Logo isShowMenu={isShowMenu} />
      <Menu />
      <Profile accountName="PhuocPG" role="BAL" isShowMenu={isShowMenu} />
    </div>
  );
}
