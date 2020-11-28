import React from 'react';
import { Link } from 'react-router-dom';
import { APPLICATION_ROUTES } from '../constants/routes';

const Navigation = () => {
    return (
        <div>
            <Link to={APPLICATION_ROUTES.HOME}>Home</Link>
            <Link to={APPLICATION_ROUTES.PRIVACY}>Privacy</Link>
        </div>
    )
}

export default Navigation;