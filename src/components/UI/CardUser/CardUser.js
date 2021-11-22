import React from 'react';
import classes from './CardUser.module.css';

export default function CardUser({ user, role, onRemove }) {
  const onRemoveHandle = () => {
    onRemove();
  };

  return (
    <div className={classes['user']}>
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        alt=""
        className={classes['user--avatar']}
      />
      <div className={classes['user-info']}>
        <div className={classes['user-info--top']}>
          <h4 className={classes['user-info--username']}>{user}</h4>
          <i className="fas fa-times" onClick={onRemoveHandle} />
        </div>
        <div className={classes['user-info--role']}>{role}</div>
      </div>
    </div>
  );
}
