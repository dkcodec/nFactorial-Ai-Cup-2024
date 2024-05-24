import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        Isimo
      </Link>
    </div>
  );
};

export default NavBar;
