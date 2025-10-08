import React from 'react';
import useAppsdata from '../hooks/useAppsdata';
import Card from './Card';
import { Link } from 'react-router';

const TrendingApps = () => {

    const {apps} = useAppsdata()
    const tredingApps = apps.slice(0,8)
    


    return (
        <div className='px-2 py-4 sm:px-4 lg:px-16'>
            
            <div className='text-center pt-8 pb-11 space-y-2'>
                <h1 className='text-4xl text-[#392F5A] font-bold'>Trending Apps</h1>
                <p className='text-gray-500 '>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

            {
                tredingApps.map(app =><Card app={app} key={app.id}></Card>)
            }

            </div>

            <div className='py-6 flex items-center'>
                <Link className='bg-[#7340E7] text-white mx-auto px-23 mt-1.5 font-semibold shadow-md hover:shadow-xl py-2 rounded-md' to={"/apps"}>Show All</Link>
            </div>

        </div>
    );
};

export default TrendingApps;