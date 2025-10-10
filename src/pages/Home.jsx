import React from 'react';
import Banner from '../Components/Banner';
import StatesSection from '../Components/StatesSection';
import TrendingApps from '../Components/TrendingApps';
import Loader from '../Components/Loader';
import useAppsdata from '../hooks/useAppsdata';


const Home = () => {

    const {apps, loading} =useAppsdata()

    
    if(loading) return <Loader></Loader>

    

    return (
        <div className='bg-[#E9E9E9]'>
            <Banner></Banner>
            <StatesSection></StatesSection>

            <TrendingApps></TrendingApps>

            



        </div>
    );
};

export default Home;
