import React, { useEffect, useState } from 'react';
import Sidebar from './DashboardComponents/Sidebar/Sidebar';
import Bottombar from './DashboardComponents/Bottombar/Bottombar';
import { Navigate, Outlet, useLocation } from 'react-router';

const Dashboard = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const location=useLocation()
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])

    if(location.pathname=='/dashboard'|| location.pathname=='/dashboard/'){
        return <Navigate to={'/dashboard/overview'}></Navigate>

    }
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {
                        width < 768 ? <>
                            <main className="flex-1">
                                <Outlet></Outlet>
                            </main>
                            <Bottombar></Bottombar>

                        </> : <>

                            <Sidebar></Sidebar>
                            <main className="flex-1 min-h-screen">
                                <div className="bg-white rounded-xl shadow-sm min-h-full border border-gray-100">
                                    <Outlet></Outlet>
                                </div>
                            </main>
                        </>
                    }

                </div>
            </div>

        </div>
    );
};

export default Dashboard;