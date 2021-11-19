import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/UI/Navbar/Navbar';
import Wrapper from '@/components/UI/Wrapper/Wrapper';
import AnkenCreate from '@/pages/Dashboard/Anken/Create/AnkenCreate';
import Dashboard from '@/pages/Dashboard/Dashboard';
import { uiAction, uiSelector } from '@/reducers/UiReducer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './AdminLayout.module.css';

export default function AdminLayout() {
  const dispatch = useDispatch();
  const ui = useSelector(uiSelector);
  const { isShowMenu } = ui;

  const menuToggle = () => {
    dispatch(uiAction.menuToggle());
  };

  return (
    <React.Fragment>
      <div className={classes['container']}>
        <Sidebar />

        <section
          className={
            isShowMenu
              ? classes['content-wrapper']
              : `${classes['content-wrapper']} ${classes.close}`
          }
        >
          <Navbar toggle={menuToggle} />
          <Wrapper>
            <AnkenCreate />
          </Wrapper>
        </section>
      </div>
    </React.Fragment>
  );
}
