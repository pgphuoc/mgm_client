import classes from './FunctionsList.module.css';
import React from 'react';
import Tags from '@/components/UI/Tags/Tags';

export default function FunctionsList() {
  return (
    <div className={classes.function}>
      <div className={classes.function__header}>
        <div className={classes.function__name}>
          <i className="fas fa-file-code" />
          [FunctionId] Function name
        </div>
        <div className={classes.function__status}>
          <span className={classes.status}>Modify</span>
          <span className={classes.type}>Screen</span>
          <span className={classes.system}>Subsystem</span>
        </div>
        <div className={classes.function__more}>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className={classes.function__contents}>
        <div className={classes.assigner}>
          <Tags />
        </div>
        <div className={classes.function__path}>
          <i className="fas fa-file-excel" />
          Function path
          <br />
          <span>Function path</span>
        </div>
        <div className={classes.function__history}>
          <i className="fas fa-history" />
          Function history
          <br />
          <span>Function history</span>
        </div>
      </div>
    </div>
  );
}
