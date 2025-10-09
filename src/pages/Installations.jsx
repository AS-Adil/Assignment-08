import React, {useContext } from 'react';
import { getStoredApp } from '../Utility/LocalStorage';
import { InstallContext } from '../Layout/MainLayout';

import InstalledCard from '../Components/InstalledCard';
const Installations = () => {

    const installedApps = getStoredApp();
    // // console.log(installedApps);
    // const [isInstalled,setIsInstalled] =useContext(InstallContext)

    // console.log(isInstalled);

    return (
        <div className='bg-[#E9E9E9] px-2 sm:px-4 lg:px-16'>



    <div className='py-8'>
        <h1 className='text-4xl font-bold text-center '>Your Installed Apps</h1>
        <p className='text-lg text-gray-600 text-center'>Explore All Trending Apps on the Market developed by us</p>
    </div>

    <div className=' flex justify-between items-center py-5'>
        <div>
            <h1 className='text-xl font-semibold '>{installedApps.length} Apps found</h1>
        </div>
        <div>
            <button className='btn btn-primary'>hey het</button>
        </div>
    </div>


    
    <div className='flex flex-col  gap-2'>

         {
             installedApps.map(app =><InstalledCard key={app.id} app={app} ></InstalledCard>)
            }

    </div>








        </div>
    );
};

export default Installations;