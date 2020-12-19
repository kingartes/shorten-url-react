import React from 'react';
import { Link } from 'react-router-dom';
import { APPLICATION_ROUTES } from '../../constants/routes';
import styles from './Navigation.module.css';

const Navigation = ({className}) => {
    return (
        <nav className={`${styles.container} ${className}`}>
            <Link to={APPLICATION_ROUTES.HOME}>Home</Link>
            <Link to={APPLICATION_ROUTES.PRIVACY}>Privacy</Link>
            <Link to={APPLICATION_ROUTES.REGISTER}>Register</Link>
        </nav>
    )
}

export default Navigation;