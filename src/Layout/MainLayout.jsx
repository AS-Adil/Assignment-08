import React, { createContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

export const InstallContext = createContext(false)

const MainLayout = () => {

const [isInstalled, setIsInstalled] = useState(false)


    return (

        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>

            <div className='flex-1 '>
            <InstallContext.Provider value={[isInstalled, setIsInstalled]}>

                <Outlet></Outlet>

                </InstallContext.Provider>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;