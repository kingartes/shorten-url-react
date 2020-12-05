import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { APPLICATION_ROUTES } from '../../constants/routes';

const Footer = () => {
    return <footer className={styles.footer}>
        © 2020 - ASTIN ShortLink - <Link to={APPLICATION_ROUTES.PRIVACY}>Privacy</Link>
    </footer>
}

export default Footer;