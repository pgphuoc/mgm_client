import React from 'react';
import classes from './CardUser.module.css';

export default function CardUserAdd() {
  return (
    <div className={classes['user']}>
      <i
        className={`fas fa-user-plus ${classes['user--avatar']}  ${classes['circle-icon']}`}
      ></i>
      <div className={classes['user-info']}>
        <div className={classes['user-info--top']}>
          <h4 className={classes['user-info--username']}>Add member..</h4>
        </div>
      </div>
    </div>
  );
}
