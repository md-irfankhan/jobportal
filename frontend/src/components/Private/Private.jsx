import React from 'react';
import { useAuth } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const Private = ({children}) => {
    const location=useLocation()
    const {user,loading}=useAuth();
    if(loading){
        return <h1>Loading...</h1>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to={'/login'}></Navigate>
            
        </div>
    );
};

export default Private;