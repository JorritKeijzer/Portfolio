import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.home}>Jorrit Keijzer</a>
      </Link>

      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Hire me!</a>
      </nav>
    </div>
  );
};

export default Header;
