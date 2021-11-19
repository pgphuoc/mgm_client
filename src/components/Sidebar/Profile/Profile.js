import React from 'react';
import classes from './Profile.module.css';

export default function Profile({ accountName, role, isShowMenu, onLogout }) {
  return (
    <div
      className={
        isShowMenu ? classes.profile : `${classes.profile} ${classes.close}`
      }
    >
      <div className={classes['profile-contents']}>
        <img src="/images/profile.jpg" alt="profileImg" />
        <div>
          <div className={classes['profile_name']}>{accountName}</div>
          <div className={classes.role}>{role}</div>
        </div>
      </div>
      <i className="fas fa-sign-out-alt" onClick={onLogout}></i>
    </div>
  );
}
