import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

const Header = () => {
    return <header className={styles.header}>
            <img src="./logo.svg" width={30} height={30} />
            <Navigation style={{width: 10}} className={styles.navigation}/>
    </header>
}

export default Header;