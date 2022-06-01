import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import styles from './layout.module.scss';

const Layout: React.FC<React.ReactPortal> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
