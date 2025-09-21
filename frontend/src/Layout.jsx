import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;