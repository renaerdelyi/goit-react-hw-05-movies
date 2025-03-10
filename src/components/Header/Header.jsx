import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => isActive ? styles.active : styles.link}>Movies</NavLink>
      </nav>
    </header>
  );
};

export default Header;