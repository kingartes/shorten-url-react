import React, { Children } from 'react';
import Footer from './Footer';
import Header from '../Header/Header';

const BasePageLayout = ({children}) => {
    return <div>
        <Header></Header>
        <div className="content">
            {children}
        </div>
        <Footer></Footer>
    </div>
}

export default BasePageLayout;