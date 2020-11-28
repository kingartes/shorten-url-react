import React, { Children } from 'react';
import Navigation from '../Navigation';
import styles from './Header.module.css';

const Header = () => {
    return <div className={styles.header}>
        <img src="./logo.svg" width={25} height={25} />
        <Navigation />
    </div>
}

export default Header;