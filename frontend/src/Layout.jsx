import React from 'react';
import { Outlet } from 'react-router';
import Nav from './components/Nav/Nav';

const Layout = () => {
    return (
        <div>
            <nav>
                <Nav></Nav>
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;