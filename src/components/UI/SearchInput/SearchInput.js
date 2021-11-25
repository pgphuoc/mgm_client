import React, { useRef, useState } from 'react';
import classes from './SearchInput.module.css';

export default function SearchInput({ value, placeholder }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(value);

  const onSearchInputChange = () => {
    const searchValue = searchRef.current.value;
    setShowSuggestions(searchValue.length > 0);
  };

  const onChooseOption = (value) => {
    searchRef.current.value = value;
    setShowSuggestions(false);
  };

  return (
    <div className={classes.search}>
      <div className={classes['search__control']}>
        <div className={classes['control__btn']}>
          <i className="fas fa-search"></i>
        </div>

        <input
          type="text"
          defaultValue={value}
          ref={searchRef}
          onChange={onSearchInputChange}
          placeholder={placeholder}
          className={`${classes['search__input']}`}
        />
      </div>
      {showSuggestions && (
        <div
          className={`${classes['search__suggestion']} ${
            showSuggestions ? classes.show : ''
          }`}
        >
          <div
            className={classes['suggest__item']}
            onClick={() => onChooseOption('Function 1')}
          >
            Function 1
          </div>
          <div
            className={classes['suggest__item']}
            onClick={() => onChooseOption('Function 2')}
          >
            Function 2
          </div>
          <div
            className={classes['suggest__item']}
            onClick={() => onChooseOption('Function 3')}
          >
            Function 3
          </div>
        </div>
      )}
    </div>
  );
}
