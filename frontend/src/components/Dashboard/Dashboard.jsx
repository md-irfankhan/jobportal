import React, { useEffect, useState } from 'react';
import Sidebar from './DashboardComponents/Sidebar/Sidebar';
import Bottombar from './DashboardComponents/Bottombar/Bottombar';

const Dashboard = () => {
    const [width, setWidth] = useState(window.innerWidth);
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
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {
                        width < 768 ? <>
                            <main className="flex-1">
                                Hello Mobile
                            </main>
                            <Bottombar></Bottombar>

                        </> : <>

                            <Sidebar></Sidebar>
                            <main className="flex-1 min-h-screen">
                                <div className="bg-white rounded-xl shadow-sm min-h-full border border-gray-100">
                                    Hello
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