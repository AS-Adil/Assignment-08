import React from 'react';
import useAppsdata from '../hooks/useAppsdata';
import Banner from '../Components/Banner';

const Home = () => {

    const {apps} = useAppsdata()
    console.log(apps);


    

    return (
        <div className='bg-[#E9E9E9]  px-2 sm:px-4 lg:px-16'>
            <Banner></Banner>



        </div>
    );
};

export default Home;