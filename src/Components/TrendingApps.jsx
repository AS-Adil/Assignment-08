import React from 'react';
import useAppsdata from '../hooks/useAppsdata';
import Card from './Card';

const TrendingApps = () => {

    const {apps} = useAppsdata()


    return (
        <div className='px-2 py-4 sm:px-4 lg:px-16'>
            
            <div className='text-center pt-8 pb-11 space-y-2'>
                <h1 className='text-4xl text-[#392F5A] font-bold'>Trending Apps</h1>
                <p className='text-gray-500 '>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

            {
                apps.map(app =><Card app={app} key={app.id}></Card>)
            }

            </div>

        </div>
    );
};

export default TrendingApps;