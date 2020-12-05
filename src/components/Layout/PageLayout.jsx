import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './PageLayout.module.css';


const BasePageLayout = ({children}) => {
    return <div className={styles.page}>
        <Header></Header>
        <div className={styles.content}>
            {children}
        </div>
        <Footer></Footer>
    </div>
}

export default BasePageLayout;