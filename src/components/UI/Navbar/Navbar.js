import React from 'react';
import classes from './Navbar.module.css';

export default function Navbar({ toggle }) {
  const menuToggle = () => {
    toggle();
  };

  return (
    <nav className={classes.navbar}>
      <i className="fas fa-bars" onClick={menuToggle}></i>
      <span className="text">Functions</span>
    </nav>
  );
}
