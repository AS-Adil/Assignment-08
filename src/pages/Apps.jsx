import React, { useState } from 'react';
import useAppsdata from '../hooks/useAppsdata';
import Card from '../Components/Card';

const Apps = () => {
    const [data, setData] =useState([])

    const {apps} = useAppsdata()
    

    return (
        <div className="px-2 sm:px-4 lg:px-16 bg-[#E9E9E9]">

           <div className='text-center pt-17 pb-19 space-y-3'>
        <h1 className='text-4xl font-bold '>Our All Applications</h1>
        <p className='text-gray-600'>Explore All Apps on the Market developed by us. We code for Millions</p>

            </div>


            <div className='flex justify-between py-5 items-center'>
                <div className='text-xl font-semibold '>
                    <h1>({apps.length})<span className='ml-1.5'>Apps found</span></h1>
                </div>


                <div>
                    <button className='btn btn-primary'>button</button>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8'>
                {
                    apps.map(app =><Card key={app.id} app={app}></Card>)
                }
            </div>


        </div>
    );
};

export default Apps;